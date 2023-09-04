const throwError = (msg = "Somthing went to wrong.", code = 500) => {
  const error = new Error(msg);
  error.status = code;
  return error;
};

module.exports = {
  throwError,
};
