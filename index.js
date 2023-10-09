const express = require("express");
const db = require("./src/config/db");
const app = express();
const port = 3002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
