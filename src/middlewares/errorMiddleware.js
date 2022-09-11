import ApiError from "../errors/ApiError.js";

const notFound = (req, res, next) => {
  throw ApiError.notFound(`Not Found - ${req.originalUrl}`);
};

const errorHandler = (error, req, res, next) => {
  if (error instanceof ApiError) {
    res.status(error.code);
    res.json({
      name: error.name,
      message: error.message,
      statusCode: error.code,
      stack: process.env.NODE_ENV == "production" ? null : error.stack,
    });
  } else {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      name: error.name,
      message: error.message,
      statusCode: statusCode,
      stack: process.env.NODE_ENV == "production" ? null : error.stack,
    });
  }
};

export { notFound, errorHandler };
