const cors = require("cors");
const applyMiddleware = (app, express) => {
  app.use(cors());
  app.use(express.json());
};

module.exports = applyMiddleware;
