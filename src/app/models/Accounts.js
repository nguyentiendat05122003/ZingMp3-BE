const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const TypeAccount = require("./TypeAccounts");
const Account = sequelize.define(
  "Accounts",
  {
    accountId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    typeAccountId: {
      type: DataTypes.INTEGER,
      field: "typeAccountId",
    },
  },
  { timestamps: true }
);
Account.belongsTo(TypeAccount, {
  foreignKey: "typeAccountId",
});
sequelize
  .sync()
  .then(() => {
    console.log("Mô hình đã được đồng bộ hóa với cơ sở dữ liệu.");
  })
  .catch((error) => {
    console.error("Lỗi khi đồng bộ hóa mô hình:", error);
  });

module.exports = Account;
