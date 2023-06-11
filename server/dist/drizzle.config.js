"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    schema: './db/schema/*',
    out: './db/migrations',
    connectionString: process.env.DB_URL,
};
