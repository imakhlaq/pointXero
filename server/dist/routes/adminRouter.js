"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getunApprovedProducts_1 = __importDefault(require("../controllers/admin/getunApprovedProducts"));
var adminAuth_1 = __importDefault(require("../middlewares/adminAuth"));
var approveProduct_1 = __importDefault(require("../controllers/admin/approveProduct"));
var deleteItem_1 = __importDefault(require("../controllers/admin/deleteItem"));
var deleteUser_1 = __importDefault(require("../controllers/admin/deleteUser"));
var app = (0, express_1.Router)();
app.get("/unapprovedproducts", adminAuth_1.default, getunApprovedProducts_1.default);
app.delete("/deleteitem/:prodId", adminAuth_1.default, deleteItem_1.default);
app.delete("/deleteuser/:userId", adminAuth_1.default, deleteUser_1.default);
app.post("/approveproduct", adminAuth_1.default, approveProduct_1.default);
exports.default = app;
