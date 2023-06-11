"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authRouter_1 = __importDefault(require("./authRouter"));
var app = (0, express_1.Router)();
app.use(authRouter_1.default);
exports.default = app;
