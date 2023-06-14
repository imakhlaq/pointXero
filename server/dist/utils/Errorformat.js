"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var CustomError_1 = __importDefault(require("./CustomError"));
var errorFormat = function (err) {
    var errResponse = {
        timestamp: new Date(),
    };
    // zod Error
    if (err instanceof zod_1.ZodError) {
        errResponse.statusCode = 400;
    }
    //normal error
    if (err instanceof CustomError_1.default) {
        errResponse.statusCode = err.statusCode;
    }
    return errResponse;
};
