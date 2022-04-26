const DB = require("./DB.model")
const { configDev } = require("../config/dbConfig");
const Contact = {};
Contact.create = async (fields) => {
    let db = new DB(configDev);
    fields["status"] = false;
    console.log(fields)
    let sqlQuery = "INSERT INTO contact set ?";
    let result = await db.query(sqlQuery, fields);
    return result
}



module.exports = Contact;