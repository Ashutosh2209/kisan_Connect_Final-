const ErrorHandler = require("../utils/errorhandler")

module.Exports = (err, req, res, next)=>{
    err.statuscode || 500;
    err.message = err.message || "Internal Server Error";

    res.status(err.statuscode).json({
        success:false,
        message:err.message,
    });
};

module.exports = ErrorHandler;