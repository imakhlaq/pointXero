"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productToCategoriesRelations = exports.productToCategories = exports.categoriesRelation = exports.categories = exports.sizeRelations = exports.size = exports.imageRelations = exports.image = exports.productRelations = exports.product = exports.sizeEnum = void 0;
var drizzle_orm_1 = require("drizzle-orm");
var pg_core_1 = require("drizzle-orm/pg-core");
var users_1 = require("./users");
// declaring enum in database
exports.sizeEnum = (0, pg_core_1.pgEnum)('size', ['XS', 'S', 'M', 'L', 'XL']);
exports.product = (0, pg_core_1.pgTable)('products', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey().notNull(),
    name: (0, pg_core_1.varchar)('name', { length: 150 }).notNull(),
    description: (0, pg_core_1.varchar)('description', { length: 400 }).notNull(),
    rating: (0, pg_core_1.doublePrecision)('rating'),
    brand: (0, pg_core_1.varchar)('brand_name').notNull(),
    userId: (0, pg_core_1.varchar)('user_id').notNull(),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').defaultNow().notNull(),
});
exports.productRelations = (0, drizzle_orm_1.relations)(exports.product, function (_a) {
    var many = _a.many, one = _a.one;
    return ({
        image: many(exports.image),
        size: many(exports.size),
        categories: many(exports.productToCategories),
        user: one(users_1.user, {
            fields: [exports.product.userId],
            references: [users_1.user.id],
        }),
    });
});
exports.image = (0, pg_core_1.pgTable)('images', {
    id: (0, pg_core_1.uuid)('id').defaultRandom().primaryKey().notNull(),
    url: (0, pg_core_1.varchar)('name').notNull(),
    productId: (0, pg_core_1.varchar)('product_id'),
    createdAt: (0, pg_core_1.timestamp)('created_at').defaultNow().notNull(),
    updatedAt: (0, pg_core_1.timestamp)('updated_at').defaultNow().notNull(),
});
exports.imageRelations = (0, drizzle_orm_1.relations)(exports.image, function (_a) {
    var one = _a.one;
    return ({
        productImage: one(exports.product, {
            fields: [exports.image.productId],
            references: [exports.product.id],
        }),
    });
});
exports.size = (0, pg_core_1.pgTable)('sizes', {
    id: (0, pg_core_1.serial)('id').primaryKey().notNull(),
    size: (0, exports.sizeEnum)('size').notNull(),
    quantity: (0, pg_core_1.integer)('quantity').notNull(),
    productId: (0, pg_core_1.varchar)('product_id').notNull(),
});
exports.sizeRelations = (0, drizzle_orm_1.relations)(exports.size, function (_a) {
    var one = _a.one;
    return ({
        productSize: one(exports.product, {
            fields: [exports.size.productId],
            references: [exports.product.id],
        }),
    });
});
exports.categories = (0, pg_core_1.pgTable)('categories', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    categories: (0, pg_core_1.varchar)('categories').notNull(),
});
exports.categoriesRelation = (0, drizzle_orm_1.relations)(exports.categories, function (_a) {
    var many = _a.many;
    return ({
        product: many(exports.productToCategories),
    });
});
exports.productToCategories = (0, pg_core_1.pgTable)('product_to_categories', {
    productId: (0, pg_core_1.varchar)('user_id').notNull(),
    categoriesId: (0, pg_core_1.integer)('categories_id').notNull(),
}, function (t) { return ({
    pk: (0, pg_core_1.primaryKey)(t.productId, t.categoriesId),
}); });
exports.productToCategoriesRelations = (0, drizzle_orm_1.relations)(exports.productToCategories, function (_a) {
    var one = _a.one;
    return ({
        product: one(exports.product, {
            fields: [exports.productToCategories.productId],
            references: [exports.product.id],
        }),
        user: one(exports.categories, {
            fields: [exports.productToCategories.categoriesId],
            references: [exports.categories.id],
        }),
    });
});
