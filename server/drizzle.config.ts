import type { Config } from 'drizzle-kit';

export default {
  schema: './db/schema/*',
  out: './db/migrations',
  connectionString: process.env.DB_URL,
} satisfies Config;
