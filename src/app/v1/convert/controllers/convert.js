const { fetchVieo } = require("../../../../lib");

const convertToMp3 = async (req, res, next) => {
  const url = req.body.url || "";
  try {
    await fetchVieo({ url });
    return res.status(200).json({
      code: 200,
      message: "Converted Successfull",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = convertToMp3;
