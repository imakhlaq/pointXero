"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var userAutth_1 = __importDefault(require("../middlewares/userAutth"));
var addProduct_1 = __importDefault(require("../controllers/user/addProduct"));
var getCartData_1 = __importDefault(require("../controllers/user/getCartData"));
var updateCart_1 = __importDefault(require("../controllers/user/updateCart"));
var deleteCartItem_1 = __importDefault(require("../controllers/user/deleteCartItem"));
var app = (0, express_1.Router)();
app.post("/addproduct", userAutth_1.default, addProduct_1.default);
app.get("/getcart", userAutth_1.default, getCartData_1.default);
app.post("/updatecart", userAutth_1.default, updateCart_1.default);
app.get("/deletecartitem/:prodId", userAutth_1.default, deleteCartItem_1.default);
exports.default = app;
