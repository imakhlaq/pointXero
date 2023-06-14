"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var formatError = function (err) {
    var _a, _b;
    var errResponse = {
        timestamp: new Date(),
    };
    // zod Error
    if (err instanceof zod_1.ZodError) {
        errResponse.statusCode = 400;
    }
    else {
        //normal error
        errResponse.statusCode = (_a = err.statusCode) !== null && _a !== void 0 ? _a : 500;
        errResponse.errors = [{ message: (_b = err.message) !== null && _b !== void 0 ? _b : 'Internal Server Error' }];
    }
    return errResponse;
};
exports.default = formatError;
