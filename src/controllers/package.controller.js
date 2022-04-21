
const Package = require("../models/package.model");
const sanitize = require("../validations/validation");
const validationTypes = require("../validations/validation.types");



exports.create = async (req,res) => {
    try {
        const fields = sanitize(validationTypes.CREATE_PACKAGE, req.body)
        let result = await Package.create(fields)
        let msg = "THE PACKAGE CREATED SUCCESSFULLY"
        res.send({msg,result})
    } catch (error) {
        res.status(422).send(error.message)
    }
}
exports.get = async (req,res) => {

    try {
        let result = await Package.getAll()
        res.status(200).send(result)
    } catch (error) {
        res.status(422).send(error.message)
    }
}
exports.delete = async (req,res) => {
    try {
        let result = await Package.delete(req.body.id)
        res.status(200).send( {msg : "Package has been delete",result})
    } catch (error) {
        res.status(422).send(error.message)
    }
}
