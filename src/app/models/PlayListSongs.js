const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const PlayList = require("../models/PlayLists");
const Song = require("../models/Songs");
const PlayListSong = sequelize.define("PlayListSongs", {
  playListSongId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  playListId: {
    type: DataTypes.INTEGER,
    field: "playListId",
  },
  songId: {
    type: DataTypes.INTEGER,
    field: "songId",
  },
});

PlayListSong.belongsTo(PlayList, {
  foreignKey: "playListId",
});

PlayListSong.belongsTo(Song, {
  foreignKey: "songId",
});

sequelize
  .sync()
  .then(() => {
    console.log("Mô hình đã được đồng bộ hóa với cơ sở dữ liệu.");
  })
  .catch((error) => {
    console.error("Lỗi khi đồng bộ hóa mô hình:", error);
  });
module.exports = PlayListSong;
