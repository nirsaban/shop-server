const User = require("../models/User.model");
const validationTypes = require("../validations/validation.types");
const sanitaize = require("../validations/validation");
const maxAge = 3 * 24 * 60 * 60;

exports.login =  async (req,res) => {
  
  try {
    const fields = sanitaize(validationTypes.LOGIN,req.body)
    let {user,token}  =  ( await (new User(fields).login())).getToken();
    delete user.password
   let msg = `WELCOME BACK ${user.full_name}` 
   res.status(201).send({user,token,msg})
  } catch (error) {
    res.status(400).send(error.message)
  }
}

exports.register =  async (req, res) => {
  try {
    const fields = sanitaize(validationTypes.REGISTER,req.body) 
    let {token,user}  = (await ( new User(fields).createUser())).getToken();
    delete user.password
    let msg = `WELCOME AND ENJOY ${user.full_name} ` 
    res.status(201).send({user,token})
  } catch (error) {
    res.status(400).send(error.message)
  }
}