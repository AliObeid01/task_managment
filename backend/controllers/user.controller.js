
const User = require("../models/user.model");

const getUser = async (req, res) => {
  const user = req.user;
  res.json(user);
}

module.exports = {
  getUser,
}
