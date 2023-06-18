"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var authRouter_1 = __importDefault(require("./authRouter"));
var shopRouter_1 = __importDefault(require("./shopRouter"));
var userRouter_1 = __importDefault(require("./userRouter"));
var adminRouter_1 = __importDefault(require("./adminRouter"));
var app = (0, express_1.Router)();
app.use("/product", shopRouter_1.default);
app.use("/user", userRouter_1.default);
app.use("/admin", adminRouter_1.default);
app.use(authRouter_1.default);
exports.default = app;
