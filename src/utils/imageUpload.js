var fs = require('fs');
const imageUpload = (req, res, next) => {
    try {
        const DIR = `./public/`;
        if (!fs.existsSync(DIR)) {
            fs.mkdirSync(DIR, { recursive: true });
        }
        process.env['dir'] = DIR
        req.dir = DIR
    } catch (err) {
        res.status(400).send(err.message)
    }
    next()
}

module.exports = imageUpload;