const DB = require("./DB.model")
const {configDev} = require("../config/dbConfig");

var Order = {};

Order.createOrder = async(data) => {
    let db = new DB(configDev);
    try {
        data["cartItems"] = JSON.stringify(data['cartItems'])
        let sqlQuery = "INSERT INTO orders set  ?  ";
        let params = [data];
        let result = await db.query(sqlQuery,params);
        return result;
    } catch (error) {
        throw new Error(error.message)
    }finally{
        await db.close()     
    }
   
    
}

module.exports = Order