const authRouter = require("./auth");
const songRouter = require("./song");
const playListRouter = require("./playList");
const playListSongRouter = require("./playListSong");
const accountRouter = require("./account");
const userRouter = require("./user");
function router(app) {
  app.use("/auth", authRouter);
  app.use("/song", songRouter);
  app.use("/playListSong", playListSongRouter);
  app.use("/playList", playListRouter);
  app.use("/account", accountRouter);
  app.use("/user", userRouter);
}
module.exports = router;
