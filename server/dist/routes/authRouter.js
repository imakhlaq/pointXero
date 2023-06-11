"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logIn_1 = __importDefault(require("../controllers/auth/logIn"));
var signup_1 = __importDefault(require("../controllers/auth/signup"));
var app = (0, express_1.Router)();
app.post('/signup', signup_1.default);
app.post('/login', logIn_1.default);
exports.default = app;
