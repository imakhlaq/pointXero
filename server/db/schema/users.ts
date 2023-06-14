import { InferModel } from 'drizzle-orm';
import { pgTable, varchar, uuid, timestamp, pgEnum } from 'drizzle-orm/pg-core';

// declaring enum in database
export const roleEnum = pgEnum('role', ['user', 'seller', 'admin']);

export const user = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  userName: varchar('user_name', { length: 25 }).notNull(),
  firstName: varchar('first_name', { length: 150 }).notNull(),
  lastName: varchar('last_name', { length: 150 }).notNull(),
  password: varchar('password').notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  email: varchar('email', { length: 30 }).notNull(),
  role: roleEnum('role').default('user').notNull(),
  forgetPassToken: varchar('forget_pass_token'),
  forgetPassTokenValidTill: timestamp('forgetPassTokenValidTill'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const cart = pgTable('carts', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
});

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
});

export type NewUser = InferModel<typeof user, 'insert'>; // insert type
export type User = InferModel<typeof user, 'select'>; // insert type
