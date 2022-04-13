const DB = require("./DB.model")
const {configDev} = require("../config/dbConfig");

var Category = {};

Category.addCategory = async(data) => {
   
    let db = new DB(configDev);
    let sqlQuery = "INSERT INTO categories set category_name = ?  ";
    let params = [data['category_name']];
    
    let result = await db.query(sqlQuery,params);
    await db.close()     
    return result;
   
}

Category.deleteCategory = async (id) => {

    let db = new DB(configDev);
    let sqlQuery = "DELETE FROM categories WHERE id = ?";
    let result = await db.query(sqlQuery,[id]);
    await db.close()     
    return result;
}
Category.getAll = async (id) => {

    let db = new DB(configDev);
    let sqlQuery = "select * FROM categories ";
    let result = await db.query(sqlQuery,[id]);
    await db.close()     
    return result;
}


module.exports = Category