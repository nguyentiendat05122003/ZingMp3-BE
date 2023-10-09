const PlayListSong = require("../models/PlayListSong");
class PlayListSongControllers {
  index(req, res) {
    res.json("ok");
  }
}
module.exports = new PlayListSongControllers();
