import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

// for migrations
const migrationClient = postgres(process.env.DB_URL!, { max: 1 });


migrate(drizzle(migrationClient), { migrationsFolder: './db/migrations' });

// for query purposes
const queryClient = postgres(process.env.DB_URL!);
const db: PostgresJsDatabase = drizzle(queryClient);

export default db;
