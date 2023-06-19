"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userAutth_1 = __importDefault(require("../middlewares/userAutth"));
var addProduct_1 = __importDefault(require("../controllers/user/addProduct"));
var app = (0, express_1.Router)();
app.post("/addproduct", userAutth_1.default, addProduct_1.default);
exports.default = app;
