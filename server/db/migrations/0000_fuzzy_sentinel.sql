DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('user', 'seller', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_name" varchar(25) NOT NULL,
	"first_name" varchar(150) NOT NULL,
	"last_name" varchar(150) NOT NULL,
	"password" varchar NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(30) NOT NULL,
	"role" role DEFAULT 'user',
	"forget_pass_token" varchar,
	"forgetPassTokenValidTill" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
