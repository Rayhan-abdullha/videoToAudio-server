const ytdl = require("ytdl-core");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
const { throwError } = require("../utils/error");
ffmpeg.setFfmpegPath(ffmpegPath);
const _default = require("../config");
const fs = require("fs");

const fetchVieo = async ({ url = "" }) => {
  if (url === "") {
    throw throwError("Empty URl", 400);
  }
  return new Promise((resolve, rejects) => {
    const videoStream = ytdl(url, { quality: "highestaudio" });
    const ffmpegCommand = ffmpeg(videoStream)
      .audioBitrate(128)
      .toFormat("mp3")
      .save(_default.audioFileName)
      .on("end", () => {
        resolve();
      })
      .on("error", (err) => {
        err.status = 400;
        err.message = "Invalid URL";
        rejects(err);
      });
    ffmpegCommand.run();
  });
};

// TODO
// const removeFile = (fileName) => {
//   return fs.unlinkSync(fileName);
// };

module.exports = { fetchVieo };
