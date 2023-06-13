"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var envConfig_1 = __importDefault(require("../config/envConfig"));
var createJwtTokens = function (userId, userName, email) {
    //create a jwt token
    var token = jsonwebtoken_1.default.sign({
        userId: userId,
        userName: userName,
        email: email,
    }, envConfig_1.default.SECRET_KEY, { expiresIn: envConfig_1.default.JWT_EXPIRES });
    return token;
};
exports.default = createJwtTokens;
