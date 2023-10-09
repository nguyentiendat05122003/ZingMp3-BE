const Artist = require("../models/Artist");
class ArtistController {
  index(req, res) {
    res.json("ok");
  }
}
module.exports = new ArtistController();
