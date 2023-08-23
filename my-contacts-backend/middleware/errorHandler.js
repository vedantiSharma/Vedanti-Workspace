const errorHandler = require("errorhandler");

const err = (err, req, res, next) => {
    const status = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400: res.json({
            title: "VALIDATION ERROR",
            message: err.message,
            errTrace: err.stack
        });

            break;
        case 400: res.json({
            title: "NOT FOUND",
            message: err.message,
            errTrace: err.stack
        });

        default:
            break;
    }

}
module.export = errorHandler;    