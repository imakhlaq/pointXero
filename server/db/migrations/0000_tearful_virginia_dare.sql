DO $$ BEGIN
 CREATE TYPE "size" AS ENUM('XS', 'S', 'M', 'L', 'XL');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 CREATE TYPE "role" AS ENUM('user', 'seller', 'admin');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"categories" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "images" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"product_id" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar(150) NOT NULL,
	"description" varchar(400) NOT NULL,
	"rating" double precision,
	"brand_name" varchar NOT NULL,
	"user_id" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);

CREATE TABLE IF NOT EXISTS "product_to_categories" (
	"user_id" varchar NOT NULL,
	"categories_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "product_to_categories" ADD CONSTRAINT "product_to_categories_user_id_categories_id" PRIMARY KEY("user_id","categories_id");

CREATE TABLE IF NOT EXISTS "sizes" (
	"id" serial PRIMARY KEY NOT NULL,
	"size" size NOT NULL,
	"quantity" integer NOT NULL,
	"product_id" varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS "carts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
);

CREATE TABLE IF NOT EXISTS "orders" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_name" varchar(25) NOT NULL,
	"first_name" varchar(150) NOT NULL,
	"last_name" varchar(150) NOT NULL,
	"password" varchar NOT NULL,
	"phone" varchar(20) NOT NULL,
	"email" varchar(30) NOT NULL,
	"role" role DEFAULT 'user' NOT NULL,
	"forget_pass_token" varchar,
	"forgetPassTokenValidTill" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
