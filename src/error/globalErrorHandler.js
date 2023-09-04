const globalErrorHandler = (err, req, res, next) => {
  res.status(err.status).json({
    code: err.status,
    message: err.message,
  });
};
module.exports = globalErrorHandler;
