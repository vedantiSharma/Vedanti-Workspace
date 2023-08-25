const {constants} = require("../constants")
const errorHandler = require("errorhandler");


const err = (err, req, res, next) => {
    const status = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR: res.json({
            title: "VALIDATION ERROR",
            message: err.message,
            errTrace: err.stack
        });

            break;
        case constants.NOT_FOUND: res.json({
            title: "NOT FOUND",
            message: err.message,
            errTrace: err.stack
        });

        case constants.UNAUTHORIZED: res.json({
            title: " UNAUTHORIZED:",
            message: err.message,
            errTrace: err.stack
        });

        case constants.FORBIDDEN: res.json({
            title: "FORBIDDEN",
            message: err.message,
            errTrace: err.stack
        });
        case constants.SERVER_ERROR: res.json({
            title: "server error",
            message: err.message,
            errTrace: err.stack
        });
        default:
            console.log("No Error Found");
            break;
    }

}
module.export = errorHandler;    