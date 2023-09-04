const express = require("express");
const app = express();
const applyMiddleware = require("./middleware");
const { notFoundRoutesErrorCatch, globalErrorHandler } = require("./error");
const router = require("./routes");

// midleware
applyMiddleware(app, express);

// check Api health
app.get("/health", (req, res) => {
  res.status(200).json({
    code: 200,
    message: "API Health is Good.",
  });
});

// routes
app.use(router);

// error handler
app.all("*", notFoundRoutesErrorCatch);
app.use(globalErrorHandler);

module.exports = app;
