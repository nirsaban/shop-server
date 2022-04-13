const express = require("express");
const app = express();
const routes = require("./src/routes/index.js");
require("custom-env").env("development");
const cookieParser = require('cookie-parser');
const cors = require("cors")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const path = require('path')
app.use(cors({
    credentials: true

}))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.use('/public', express.static(path.join(__dirname,'public')));
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.get("/tt",(req,res) => {
    var templateDir = path.join(__dirname, "../../", 'templates', 'testMailTemplate/html')
    res.render({user:"test"},"test")
})
app.use(morgan("dev"))
app.use(routes);
app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});
app.use(function(err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
let port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("app listen to ", port)
})