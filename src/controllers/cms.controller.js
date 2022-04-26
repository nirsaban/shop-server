
const CMS = require("../models/CMS.model.js")



exports.create = async (req, res) => {
  try {
    let result = await CMS.create(req.body);
    let msg = "אומר לך הכל טוב יאפס 😉";
    res.send({ msg });
  } catch (error) {
    res.status(422).send(error.message);
  }
};

exports.get = async (req, res) => {
  try {
    let result = await CMS.get(req.body);
    let msg = "אומר לך הכל טוב יאפס 😉";
    res.send({ msg });
  } catch (error) {
    res.status(422).send(error.message);
  }
};

exports.update = async (req, res) => {
  try {
    let result = await CMS.update(req.body);
    let msg = "אומר לך הכל טוב יאפס 😉";
    res.send({ msg });
  } catch (error) {
    res.status(422).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    let result = await CMS.delete(req.body);
    let msg = "אומר לך הכל טוב יאפס 😉";
    res.send({ msg });
  } catch (error) {
    res.status(422).send(error.message);
  }
};

