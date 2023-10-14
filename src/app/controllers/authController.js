const Account = require("../models/Accounts");
const TypeAccount = require("../models/TypeAccounts");
const bcrypt = require("bcrypt");
class AuthController {
  async register(req, res) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const account = await Account.create({
        ...req.body,
        password: hashedPassword,
      });
      res.send("register successful");
    } catch (error) {
      res.status(500).json(err);
    }
  }
  async login(req, res) {
    try {
      const account = await Account.findOne({
        where: {
          username: req.body.username,
          typeAccountId: req.body.typeAccountId,
        },
      });
      if (!account) {
        return res.status(404).json("wrong username or wrong role");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        account.password
      );
      if (!validPassword) {
        return res.status(404).json("wrong password");
      }
      if (account && validPassword) {
        res.status(200).json("login successful");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
module.exports = new AuthController();
