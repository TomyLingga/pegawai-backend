const db = require("../models");
const Admin = db.admin;
const Op = db.Sequelize.Op;

// Create and Save a new user
exports.login = (req, res) => {
    // Validate request
  if (!req.body.nama) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
}