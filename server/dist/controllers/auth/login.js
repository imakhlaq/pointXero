"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = __importDefault(require("../../db/database"));
var logIn = function (req, res) {
    database_1.default.select();
    res.json({ hello: 'popo' });
};
exports.default = logIn;
