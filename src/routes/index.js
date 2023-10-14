const authRouter = require("./auth");
const songRouter = require("./song");
const playListRouter = require("./playList");
const playListSongRouter = require("./playListSong");
function router(app) {
  app.use("/auth", authRouter);
  app.use("/song", songRouter);
  app.use("/playListSong", playListSongRouter);
  app.use("/playList", playListRouter);
}
module.exports = router;
