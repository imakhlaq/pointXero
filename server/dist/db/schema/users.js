"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = exports.users2 = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.users2 = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    fullName: (0, pg_core_1.text)('full_name'),
    phone: (0, pg_core_1.varchar)('phone', { length: 256 }),
});
exports.users = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey().notNull(),
    firstName: (0, pg_core_1.varchar)('name', { length: 256 }).notNull(),
});
