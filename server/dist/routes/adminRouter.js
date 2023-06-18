"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getunApprovedProducts_1 = __importDefault(require("../controllers/admin/getunApprovedProducts"));
var app = (0, express_1.Router)();
app.get("/unapproved", getunApprovedProducts_1.default);
exports.default = app;
