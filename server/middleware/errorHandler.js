//Handling 404 responses
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next(error);
};

//Custom Error-Handler Middleware
const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    err.message = res.statusCode === 500 ? 'Something went wrong' : err.message
    res.send({ error: err.message});
    console.log(err);
};

module.exports = { notFound, errorHandler };