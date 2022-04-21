const Category = require("../models/category.model");
const sanitize = require("../validations/validation");
const validationTypes = require("../validations/validation.types");

exports.add_category = async(req, res) => {
    try {
        let fields = sanitize(validationTypes.CREATE_CATEGORY, req.body)
        const result = await Category.addCategory(fields)
        if (result.affectedRows > 0) {
            res.status(200)
            let msg = "Category  CREATED SUCCESSFULLY"
            res.send({msg,result :await Category.getAll()})
        }
    } catch (error) {
        res.status(422).send(error.message)
    }
}


exports.delete_category = async(req, res) => {
    try {
        const result = await Category.deleteCategory(req.body.id)
        if (result.affectedRows > 0) {
            res.status(200)
            res.send( {msg : "category has been delete" ,result :await Category.getAll()})
        }
    } catch (error) {
        res.status(422).send(error.message)
    }

}
exports.get = async(req, res) => {
    try {
        const result = await Category.getAll()
        if (result.length > 0) {
            res.status(200)
            res.send({result})
        } else {
            res.send([])
        }
    } catch (error) {
        res.status(422).send(error.message)
    }

}