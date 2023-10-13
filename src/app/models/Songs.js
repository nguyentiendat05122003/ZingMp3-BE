const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const TypeSong = require("./TypeSongs");
const User = require("./Users");
const Song = sequelize.define(
  "Songs",
  {
    songId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    source: {
      type: DataTypes.STRING,
    },
    desc: {
      type: DataTypes.STRING,
    },
    typeSongId: {
      type: DataTypes.INTEGER,
      field: "typeSongId",
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "userId",
    },
  },
  {
    timestamps: true,
  }
);
Song.belongsTo(TypeSong, {
  foreignKey: "typeSongId",
});

Song.belongsTo(User, {
  foreignKey: "userId",
});
sequelize
  .sync()
  .then(() => {
    console.log("Mô hình đã được đồng bộ hóa với cơ sở dữ liệu.");
  })
  .catch((error) => {
    console.error("Lỗi khi đồng bộ hóa mô hình:", error);
  });
module.exports = Song;