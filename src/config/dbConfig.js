const configDev = {
  host: process.env["dbHost"],
  user: "root",
  password: process.env["dbPass"],
  database: process.env["dbName"],
  multipleStatements: true,
};

module.exports = {
    configDev,
}