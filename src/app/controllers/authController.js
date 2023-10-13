const Account = require("../models/Accounts");
const PlayListSong = require("../models/PlayListSongs");
const PlayList = require("../models/PlayLists");
const Song = require("../models/Songs");
const User = require("../models/Users");
const TypeAccount = require("../models/TypeAccounts");
const TypeSongs = require("../models/TypeSongs");
class AuthController {
  async index(req, res) {
    Account.findAll();
    TypeAccount.findAll();
    User.findAll();
    res.send("ok");
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
