const newRouter = require("./auth");
const songRouter = require("./song");
const playListRouter = require("./playList");
function router(app) {
  app.use("/auth", newRouter);
  app.use("/song", songRouter);
  app.use("/playList", playListRouter);
}
module.exports = router;
