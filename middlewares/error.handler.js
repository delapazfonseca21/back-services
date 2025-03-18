function logErrors(err, req, res, next){
    console.log('registro Errors')
    console.error(err);
    next(err);
}

function errorHandler(err, req, res, next){
    console.log("manejador de errores")
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

module.exports = {logErrors, errorHandler}