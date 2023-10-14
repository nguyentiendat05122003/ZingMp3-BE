const PlayListSong = require("../models/PlayListSongs");
class PlayListSongControllers {
  //[GET] /playListSong
  async index(req, res) {
    const listPLayListSong = await PlayListSong.findAll();
    res.json(listPLayListSong);
  }

  //[POST] /playListSong/add
  async add(req, res) {
    const newPLayList = PlayListSong.create({
      ...req.body,
    });
    res.status(200).json("add Song into PlayList successful");
  }

  //[DELETE] /playListSong/:id/delete
  async delete(req, res) {
    await PlayListSong.destroy({
      where: {
        playListSongId: req.params.id,
      },
    });
    res.status(200).json("Delete successful");
  }
}
module.exports = new PlayListSongControllers();
