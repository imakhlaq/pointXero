"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.product = (0, pg_core_1.pgTable)('products', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 150 }).notNull(),
    description: (0, pg_core_1.varchar)('description', { length: 400 }).notNull(),
    quantity: (0, pg_core_1.integer)('quantity').notNull(),
});
