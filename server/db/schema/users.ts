import { pgTable, serial, text, varchar, uuid } from 'drizzle-orm/pg-core';

export const users2 = pgTable('users', {
  id: serial('id').primaryKey(),
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  firstName: varchar('name', { length: 256 }).notNull(),
});
