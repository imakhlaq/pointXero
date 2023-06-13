"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var config = {
    PORT: process.env.PORT || 5000,
    DB_URL: process.env.DB_URL,
    SECRET_KEY: process.env.SECRET_KEY,
};
exports.default = config;
