const User = require("../models/Users");
class AuthController {
  async index(req, res) {
    const users = await User.findAll();
    res.send(users);
  }
  async addUser(req, res) {
    const user = await User.create({
      username: req.body.username,
      email: req.body.username,
      password: req.body.password,
    });
    user.save();
    res.send("ok");
  }
}
module.exports = new AuthController();
