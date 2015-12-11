export const notFound = (req, res, next)  => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
};

export const error = (err, req, res, next) => {
  const developmentMode = process.env.NODE_ENV ?
      process.env.NODE_ENV === 'development'
      : true;
  const {message, name, type, status} = err;
  if (developmentMode) {
    const {stack} = error;
    res.status(status || 500);
    return res.jsonp({
      message,
      error: {type, name, message, stack}
    });
  }
  res.status(status || 500);
  res.jsonp({
    message
  });
};
