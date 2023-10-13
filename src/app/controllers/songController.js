const Song = require("../models/Songs");
class SongControllers {
  //[GET] song/
  async index(req, res) {
    const listSong = Song.findAll();
    res.status(200).json(listSong);
  }

  //[POST] song/add
  add(req, res) {
    //const newSong = Song.create({id:req.body.id})
    res.status(200).json("ok");
  }

  //[PUT] song/:id/edit
  edit(req, res) {}

  //[DELETE] song/:id/delete
  delete(req, res) {}
}
module.exports = new SongControllers();
