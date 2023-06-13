import { integer, pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const product = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  description: varchar('description', { length: 400 }).notNull(),
  quantity: integer('quantity').notNull(),
});
