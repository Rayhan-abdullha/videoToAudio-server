const { audioFileName } = require("../../../../config");
const downloadMp3 = (req, res, next) => {
  try {
    res.download(audioFileName, (err) => {
      if (!err) {
        return res
          .status(200)
          .json({ code: 200, message: "Download Successfull" });
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = downloadMp3;
