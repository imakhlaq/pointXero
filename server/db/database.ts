import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import config from '../config/envConfig';

// for migrations
const migrationClient = postgres(config.DB_URL!, { max: 1 });

migrate(drizzle(migrationClient), { migrationsFolder: './db/migrations' });

// for query purposes
const queryClient = postgres(config.DB_URL!);
const db: PostgresJsDatabase = drizzle(queryClient);

export default db;
