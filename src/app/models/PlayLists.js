const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const User = require("./Users");
const PlayList = sequelize.define("PlayLists", {
  playListId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: "userId",
  },
});

PlayList.belongsTo(User, {
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
module.exports = PlayList;
