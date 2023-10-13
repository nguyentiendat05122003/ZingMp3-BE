const newRouter = require("./auth");
const songRouter = require("./song");

function router(app) {
  app.use("/auth", newRouter);
  app.use("/song", songRouter);
}
module.exports = router;
