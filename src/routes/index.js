const { controllers: convertControllers } = require("../app/v1/convert");

const router = require("express").Router();

router.route("/api/v1/converters").post(convertControllers.convertToMp3);

router.route("/api/v1/download").get(convertControllers.downloadMp3);
module.exports = router;
