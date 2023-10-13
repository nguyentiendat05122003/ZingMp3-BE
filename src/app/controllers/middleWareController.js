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

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });
class MiddleWearController {
  uploadFile(req, res, next) {
    upload.single("image");
    next();
  }
  async pushImageToStore(req, res) {
    try {
      const dateTime = giveCurrentDateTime();
      //create reference to files image
      const storageRef = ref(
        storage,
        `images/${req.files["image"][0] + "       " + dateTime}`
      );
      //This metadata contains typical file metadata properties such as name, size, and contentType
      const metadata = {
        contentType: req.file.mimetype,
      };
      //return UploadTaskSnapshot,UploadTaskSnapshot(info about metadata,ref,...)
      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );
      const downloadURLImage = await getDownloadURL(snapshot.ref);
      return downloadURLImage;
    } catch (error) {
      return error;
    }
  }
  async pushAudioToStore(req, res) {
    try {
      const dateTime = giveCurrentDateTime();
      //create reference to files audio
      const storageRef = ref(
        storage,
        `audio/${req.files["audio"][0] + "       " + dateTime}`
      );
      //This metadata contains typical file metadata properties such as name, size, and contentType
      const metadata = {
        contentType: "audio/mp3",
      };
      //return UploadTaskSnapshot,UploadTaskSnapshot(info about metadata,ref,...)
      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );
      const downloadURLAudio = await getDownloadURL(snapshot.ref);
      return downloadURLAudio;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new MiddleWearController();
