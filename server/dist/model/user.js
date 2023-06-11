"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cities = exports.countries = exports.popularityEnum = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
// declaring enum in database
exports.popularityEnum = (0, pg_core_1.pgEnum)('role', ['user', 'seller', 'admin']);
exports.countries = (0, pg_core_1.pgTable)('users', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }),
}, function (countries) {
    return {
        nameIndex: (0, pg_core_1.uniqueIndex)('name_idx').on(countries.name),
    };
});
exports.cities = (0, pg_core_1.pgTable)('cities', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    name: (0, pg_core_1.varchar)('name', { length: 256 }),
    countryId: (0, pg_core_1.integer)('country_id').references(function () { return exports.countries.id; }),
    popularity: (0, exports.popularityEnum)('popularity'),
});
