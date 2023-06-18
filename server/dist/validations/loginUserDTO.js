"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var userLoginInfo = zod_1.z.object({
    username: zod_1.z
        .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    })
        .min(4, { message: "Username must be 4 character long" }),
    password: zod_1.z
        .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    })
        .min(4, { message: "Password must be 5 character long" }),
});
exports.default = userLoginInfo;
