const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if ((err.name = 'CastError' && err.kind === 'ObjectId')) {
    message = 'Resource not found!';
    statusCode = 404;
  }

  console.log(err)
  res
    .status(statusCode)
    .json({
      message,
      stack: process.env.NODE_ENV !== 'production' ? '🎂' : err.stack,
    });  
};

export {notFound, errorHandler}
