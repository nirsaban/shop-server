const DB = require("./DB.model")
const { configDev } = require("../config/dbConfig");
const Product = {};
Product.create = async(fields) => {

    let jsonImages = JSON.stringify(fields['images']);
    fields['images'] = jsonImages
    let db = new DB(configDev);
    let sqlQuery = "INSERT INTO products set ?";
    let result = await db.query(sqlQuery, fields);
    await db.close()
    return result
}

Product.getAll =  async() => {
    
    let db = new DB(configDev);
    let sqlQuery = "SELECT p.* , c.category_name as cat_name FROM products p  inner JOIN categories c   on p.category_id = c.id  order by p.category_id"
    let result = await db.query(sqlQuery);
    await db.close()
    return result
}

module.exports = Product