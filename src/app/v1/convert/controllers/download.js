const { audioFileName } = require("../../../../config");
const downloadMp3 = (req, res, next) => {
  try {
    res.download(audioFileName);
  } catch (err) {
    next(err);
  }
};

module.exports = downloadMp3;
