"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rootRouter_1 = __importDefault(require("./routes/rootRouter"));
var envConfig_1 = __importDefault(require("./config/envConfig"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var port = envConfig_1.default.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(rootRouter_1.default);
app.listen(port, function () {
    console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:".concat(port));
});
