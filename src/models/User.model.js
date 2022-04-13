
const DB = require("./DB.model")
const { configDev } = require("../config/dbConfig");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")

class User {
    constructor(user) {
        this.user = user

        this.db = new DB(configDev);
    }
    async createUser() {

        let sqlQuery = "INSERT INTO users set ? ";
        const salt = await bcrypt.genSalt();
        this.user.password = await bcrypt.hash(this.user.password, salt);
        let result = await this.db.query(sqlQuery, this.user);
        if (!result.affectedRows) throw new Error("something  faild please try again later")
        this.user.id = result.insertId
        await this.db.close()
        return this

    }
    getToken() {
        this.token = jwt.sign(
            { _id: this.user.id },
            process.env.TOKEN_KEY,
            { expiresIn: "7d", }
        )
        return this
    };
    async login() {

        let sqlQuery = "SELECT * FROM users WHERE email = ?";
        let [result] = await this.db.query(sqlQuery, this.user.email);

        if (result && bcrypt.compareSync(this.user.password, result['password'])) {
            this.user = result
            await this.db.close()
            return this
        } else {
            throw Error("the email and password combination was faild")
        }
    }
    async getUser() {

        let sqlQuery = "SELECT email,full_name FROM users WHERE id = ?";
        let [result] = await this.db.query(sqlQuery, this.user);
        return result 
    }
    async getUserAdmin() {
        let sqlQuery = "SELECT email,full_name FROM users WHERE permissions = 1";
        let [result] = await this.db.query(sqlQuery);
        return result 
    }

}

module.exports = User;