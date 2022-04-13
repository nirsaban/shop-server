const DB = require("./DB.model")
const { configDev } = require("../config/dbConfig");
const Package = {};
Package.create = async (fields) => {
    let db = new DB(configDev);
    let sqlQuery = "INSERT INTO packages set ?";
    let products = fields.products;
    delete fields['products'];
    let result = await db.query(sqlQuery, fields);
    let productsOfPackage = products.map(product => {
        return [
            product,
            result.insertId
        ]
    })
    await Package.insertProductToPackage(productsOfPackage, db);
    return result;
}

Package.getAll = async () => {
    let db = new DB(configDev);
    let sqlQuery = "SELECT pac.*,p.product_name,p.id as product_id from packages pac INNER JOIN packages_product pp ON pp.package_id = pac.id INNER JOIN products p on pp.product_id = p.id";
    let result = await db.query(sqlQuery)
    var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
    let orderPackages = Package.orderPackages(resultArray)
    await db.close();
    return orderPackages;
}
Package.getOne = async(id) => {
    let db = new DB(configDev);
    let sqlQuery = "SELECT pac.*,p.product_name,p.images,p.id as product_id from packages pac  INNER JOIN packages_product pp ON pp.package_id = pac.id INNER JOIN products p on pp.product_id = p.id WHERE pac.id = ?";
    let result = await db.query(sqlQuery,[id])
    var resultArray = Object.values(JSON.parse(JSON.stringify(result)))
    let orderPackages = Package.orderPackages(resultArray)
    await db.close();
    return orderPackages;
}
Package.orderPackages = (arr) => {
    
    let newObj =  arr.reduce((acc,{id,package_name,price,rate,description,...products}) => {  
        acc[id] ? acc[id].products.push(products) : acc[id] = {id,package_name,price,rate,description,products:[products]}
        return acc
    },{})
    let newArr = [];
    for(const[key,value] of Object.entries(newObj)){
        newArr.push(value)
    }
    return newArr
}

Package.insertProductToPackage = async (arrProducts, db) => {
    let sqlQuery = "INSERT INTO packages_product (product_id,package_id) VALUES ? "
    await db.query(sqlQuery, [arrProducts])
    await db.close();
}
module.exports = Package