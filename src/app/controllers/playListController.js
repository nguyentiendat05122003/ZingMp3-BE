const PlayList = require("../models/PlayList");
class PlayListControllers {
  index(req, res) {
    res.json("ok");
  }
}
module.exports = new PlayListControllers();
