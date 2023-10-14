const User = require("../models/Users");
const {
  ref,
  getDownloadURL,
  uploadBytesResumable,
} = require("firebase/storage");
const giveCurrentDateTime = require("../../utils/giveCurrentDateTime");
const storage = require("../../config/fireBase");
class UserController {
  //[GET] user/
  async index(req, res) {
    const listUser = await User.findAll();
    res.json(listUser);
  }

  //[POST] user/add
  async add(req, res, next) {
    try {
      const dateTime = giveCurrentDateTime();
      const storageRef = ref(
        storage,
        `avatar/${req.file.originalname + dateTime}`
      );
      const metadata = {
        contentType: req.file.mimetype,
      };
      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );
      const downloadURLAvatar = await getDownloadURL(snapshot.ref);
      const newUser = User.create({
        ...req.body,
        image: downloadURLAvatar,
      });
      res.status(200).json("add user successful");
    } catch (error) {
      next(error);
    }
  }

  //[PUT] user/:id/edit
  async edit(req, res) {
    try {
      const updatedData = req.body;
      if (req.file) {
        const imageStoragePath = `avatar/${req.file.originalname}`;
        const imageStorageRef = ref(storage, imageStoragePath);
        const imageMetadata = { contentType: req.file.mimetype };
        const imageSnapshot = await uploadBytesResumable(
          imageStorageRef,
          req.file.buffer,
          imageMetadata
        );
        updatedData.image = await getDownloadURL(imageSnapshot.ref);
      }
      await User.update(
        { ...updatedData },
        {
          where: {
            userId: req.params.id,
          },
        }
      );
      res.json("edit success");
    } catch (error) {
      res.json(error);
    }
  }

  //[DELETE] user/:id/delete
  async delete(req, res) {
    await User.destroy({
      where: {
        userId: req.params.id,
      },
    });
    res.status(200).json("Delete successful");
  }
}
module.exports = new UserController();
