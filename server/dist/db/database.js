"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var postgres_js_1 = require("drizzle-orm/postgres-js");
var migrator_1 = require("drizzle-orm/postgres-js/migrator");
var postgres_1 = __importDefault(require("postgres"));
var envConfig_1 = __importDefault(require("../config/envConfig"));
// for migrations
var migrationClient = (0, postgres_1.default)(envConfig_1.default.DB_URL, { max: 1 });
(0, migrator_1.migrate)((0, postgres_js_1.drizzle)(migrationClient), { migrationsFolder: './db/migrations' });
// for query purposes
var queryClient = (0, postgres_1.default)(envConfig_1.default.DB_URL);
var db = (0, postgres_js_1.drizzle)(queryClient);
exports.default = db;
