"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adminAuth = function (req, res, next) {
    var authHeader = req.header("Authentication");
    var token = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    console.log(token);
    res.json(token);
};
exports.default = adminAuth;
