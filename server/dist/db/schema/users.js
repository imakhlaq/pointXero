"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = exports.roleEnum = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
// declaring enum in database
exports.roleEnum = (0, pg_core_1.pgEnum)('role', ['user', 'seller', 'admin']);
exports.user = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey().notNull(),
    userName: (0, pg_core_1.varchar)('user_name', { length: 25 }).notNull(),
    firstName: (0, pg_core_1.varchar)('first_name', { length: 150 }).notNull(),
    lastName: (0, pg_core_1.varchar)('last_name', { length: 150 }).notNull(),
    password: (0, pg_core_1.varchar)('password').notNull(),
    phone: (0, pg_core_1.varchar)('phone', { length: 20 }).notNull(),
    email: (0, pg_core_1.varchar)('email', { length: 30 }).notNull(),
    role: (0, exports.roleEnum)('role').default('user'),
    forgetPassToken: (0, pg_core_1.varchar)('forget_pass_token'),
    forgetPassTokenValidTill: (0, pg_core_1.timestamp)('forgetPassTokenValidTill'),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').defaultNow().notNull(),
});
