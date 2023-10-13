const Song = require("../models/Song");
class SongControllers {
  index(req, res) {
    res.json("ok");
  }
}
module.exports = new SongControllers();
