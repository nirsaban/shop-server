const { json } = require("express");
const About = require("../models/about.model");
const sanitize = require("../validations/validation");
const validationTypes = require("../validations/validation.types");

exports.create_about = async (req, res) => {

    try {
        const reqFiles = [];
        const url = req.protocol + '://' + req.get('host')
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + '/public/' + req.files[i].filename)
        }
        req.body.images = reqFiles
        const fields = sanitize(validationTypes.CREATE_ABOUT, req.body)
        let result = await About.createAbout(fields)
        let msg = "ABOUT SECTION CREATED SUCCESSFULLY"
        res.send({fields,msg})
    } catch (error) {

        res.status(422).send(error.message)
    }
}

exports.get = async(req, res) => {
    
    try {
        let about = await About.get()
       
        if (Object.keys(about).length > 0) {
            about.images = JSON.parse(about.images);
            res.status(200).send(about)
        } else {
            res.status(422).send("no about exist")

        }
    } catch (error) {
        res.status(422).send("no products exist")
    }
}