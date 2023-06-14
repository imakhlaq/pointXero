import { InferModel, relations } from 'drizzle-orm';
import {
  doublePrecision,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from 'drizzle-orm/pg-core';
import { user } from './users';

// declaring enum in database
export const sizeEnum = pgEnum('size', ['XS', 'S', 'M', 'L', 'XL']);

export const product = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  name: varchar('name', { length: 150 }).notNull(),
  description: varchar('description', { length: 400 }).notNull(),
  rating: doublePrecision('rating'),
  brand: varchar('brand_name').notNull(),
  userId: varchar('user_id').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const productRelations = relations(product, ({ many, one }) => ({
  image: many(image),
  size: many(size),
  categories: many(productToCategories),
  user: one(user, {
    fields: [product.userId],
    references: [user.id],
  }),
}));

export const image = pgTable('images', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  url: varchar('name').notNull(),
  productId: varchar('product_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const imageRelations = relations(image, ({ one }) => ({
  productImage: one(product, {
    fields: [image.productId],
    references: [product.id],
  }),
}));

export const size = pgTable('sizes', {
  id: serial('id').primaryKey().notNull(),
  size: sizeEnum('size').notNull(),
  quantity: integer('quantity').notNull(),
  productId: varchar('product_id').notNull(),
});
export const sizeRelations = relations(size, ({ one }) => ({
  productSize: one(product, {
    fields: [size.productId],
    references: [product.id],
  }),
}));

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  categories: varchar('categories').notNull(),
});

export const categoriesRelation = relations(categories, ({ many }) => ({
  product: many(productToCategories),
}));

export const productToCategories = pgTable(
  'product_to_categories',
  {
    productId: varchar('user_id').notNull(),

    categoriesId: integer('categories_id').notNull(),
  },
  (t) => ({
    pk: primaryKey(t.productId, t.categoriesId),
  }),
);

export const productToCategoriesRelations = relations(
  productToCategories,
  ({ one }) => ({
    product: one(product, {
      fields: [productToCategories.productId],
      references: [product.id],
    }),
    user: one(categories, {
      fields: [productToCategories.categoriesId],
      references: [categories.id],
    }),
  }),
);

export type NewProduct = InferModel<typeof product, 'insert'>; // insert type
export type Product = InferModel<typeof product, 'select'>; // insert type
