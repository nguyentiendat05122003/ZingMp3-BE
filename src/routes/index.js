const newRouter = require("./auth");

function router(app) {
  app.use("/auth", newRouter);
}
module.exports = router;
