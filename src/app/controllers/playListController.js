const PlayList = require("../models/PlayLists");
class PlayListControllers {
  index(req, res) {
    res.json("ok");
  }
}
module.exports = new PlayListControllers();
