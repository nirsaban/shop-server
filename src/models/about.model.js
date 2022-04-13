const DB = require("./DB.model")
const { configDev } = require("../config/dbConfig");
const About = {};
About.createAbout = async(fields) => {

    let jsonImages = JSON.stringify(fields['images']);
    fields['images'] = jsonImages
    let db = new DB(configDev);
    let sqlQuery = "INSERT INTO about set ?";
    let result = await db.query(sqlQuery, fields);
    await db.close()
    return result
}

About.get =  async() => {
    
    let db = new DB(configDev);
    let sqlQuery = "SELECT * FROM about order by id desc limit 1"
    let result = await db.query(sqlQuery);
    await db.close()
    return result[0]
}

module.exports = About