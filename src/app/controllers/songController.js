const Song = require("../models/Songs");
const middleWareController = require("./middleWareController");
const { initializeApp } = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const multer = require("multer");
const config = require("../../config/fireBase/firebase.config");
const giveCurrentDateTime = require("../../utils/giveCurrentDateTime");
//Initialize a firebase application
initializeApp(config.firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();
class SongControllers {
  //[GET] song/
  async index(req, res) {
    const listSong = await Song.findAll();
    res.json(listSong);
  }

  //[POST] song/add
  async add(req, res, next) {
    try {
      const dateTime = giveCurrentDateTime();
      const storageRef = ref(
        storage,
        `images/${req.files["image"][0].originalname + "       " + dateTime}`
      );
      const metadata = {
        contentType: req.files["image"][0].mimetype,
      };
      const snapshot = await uploadBytesResumable(
        storageRef,
        req.files["image"][0].buffer,
        metadata
      );
      const downloadURLImage = await getDownloadURL(snapshot.ref);
      const storageRefAudio = ref(
        storage,
        `source/${req.files["source"][0].originalname + "       " + dateTime}`
      );
      const metadataAudio = {
        contentType: "audio/mp3",
      };
      const snapshotAudio = await uploadBytesResumable(
        storageRefAudio,
        req.files["source"][0].buffer,
        metadataAudio
      );
      const downloadURLAudio = await getDownloadURL(snapshotAudio.ref);
      const newSong = Song.create({
        name: req.body.name,
        image: downloadURLImage,
        // image: middleWareController.pushImageToStore(req, res),
        //source: middleWareController.pushAudioToStore(req, res),
        source: downloadURLAudio,
        desc: req.body.desc,
        typeSongId: req.body.typeSongId,
        userId: req.body.userId,
      });
      res.status(200).json("ok");
    } catch (error) {
      next(error);
    }
  }

  //[PUT] song/:id/edit
  edit(req, res) {}

  //[DELETE] song/:id/delete
  async delete(req, res) {
    await Song.destroy({
      where: {
        songId: req.params.id,
      },
    });
    res.status(200).json("Delete successful");
  }
}
module.exports = new SongControllers();
