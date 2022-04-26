
const DB = require("./DB.model");
const { configDev } = require("../config/dbConfig");
const CMS = {};



CMS.create = async (fields) => {
  let db = new DB(configDev);
  let sqlQuery = "INSERT INTO cms set ?";
  let result = await db.query(sqlQuery, JSON.stringify(fields));
  return result;
};


CMS.get = async () => {
  let db = new DB(configDev);
  let sqlQuery = "select * from cms";
  let result = await db.query(sqlQuery);
  return result;
};

CMS.update = async (fields) => {
  let db = new DB(configDev);
  let sqlQuery = "UPDATE  cms set ?";
  let result = await db.query(sqlQuery, fields);
  return result;
};

CMS.delete = async (id) => {
  let db = new DB(configDev);
  let sqlQuery = "delete from cms set where id = ? ";
  let result = await db.query(sqlQuery, id);
  return result;
};

module.exports = CMS