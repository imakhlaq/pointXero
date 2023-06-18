"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = require("zod");
var CreateUserDTO = zod_1.z.object({
    username: zod_1.z.string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
    }),
    firstName: zod_1.z.string({
        required_error: "Firstname is required",
        invalid_type_error: "Firstname must be a string",
    }),
    lastName: zod_1.z.string({
        required_error: "Lastname is required",
        invalid_type_error: "Lastname must be a string",
    }),
    password: zod_1.z.string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
    }),
    phone: zod_1.z.string({
        required_error: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email("Email is not valid"),
});
exports.default = CreateUserDTO;
