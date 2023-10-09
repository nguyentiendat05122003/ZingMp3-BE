const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const PlayListSong = sequelize.define("PlayListSongs", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
