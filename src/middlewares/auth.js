const jwt = require('jsonwebtoken');


const requireAuth = (req, res, next) => {
    const token = req.header('Authorization').replace("Nirsa11", '');
   
    if (token) {
        jwt.verify(token, process.env.TOKEN_KEY, (err, decodedToken) => {
            if (err) {
                res.status(401).send("you dont have an access Token ,please login again")
            } else {
                req.userId = decodedToken._id
                next();
            }
        });
    } else {
        res.status(401).send("you dont have an access Token ,please login again")
    }
};

module.exports = requireAuth