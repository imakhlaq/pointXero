"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var getProductByCategory_1 = __importDefault(require("../controllers/shop/getProductByCategory"));
var getProductById_1 = __importDefault(require("../controllers/shop/getProductById"));
var searchProduct_1 = __importDefault(require("../controllers/shop/searchProduct"));
var app = (0, express_1.Router)();
app.get("/bycategory/:category", getProductByCategory_1.default);
app.get("/byproductid/:productId", getProductById_1.default);
app.get("/productbysearch/:searchTerm", searchProduct_1.default);
exports.default = app;
