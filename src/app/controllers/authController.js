const User = require("../models/Users");
class AuthController {
  index(req, res) {
    res.json("ok");
  }
}
module.exports = new AuthController();
