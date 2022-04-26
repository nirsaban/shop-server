
const Contact = require("../models/contact.model");
const sanitize = require("../validations/validation");
const validationTypes = require("../validations/validation.types");

exports.create = async (req,res) => {
    try {
        const fields = sanitize(validationTypes.CREATE_CONTACT, req.body)
        let result = await Contact.create(fields)
        let msg = "פנייתך נרשמה בהצלחה 😉"
        res.send({msg})
    } catch (error) {
        res.status(422).send(error.message)
    }
}
