CREATE TABLE "images" (
  "id" bigserial PRIMARY KEY,
  "image_name" varchar NOT NULL,
  "image_data" bytea NOT NULL
);

CREATE TABLE "categories" (
  "id" bigserial PRIMARY KEY,
  "category_name" varchar NOT NULL
);

CREATE TABLE "products" (
  "id" bigserial PRIMARY KEY,
  "product_image" bigint UNIQUE NOT NULL,
  "product_name" varchar NOT NULL,
  "product_category" bigint NOT NULL,
  "sold_number" int NOT NULL,
  "brand" varchar NOT NULL,
  "color" varchar NOT NULL,
  "screen_size" varchar NOT NULL,
  "hard_disk_size" varchar NOT NULL,
  "display" varchar NOT NULL,
  "graphic" varchar NOT NULL,
  "processor" varchar NOT NULL,
  "in_the_box" varchar NOT NULL,
  "height" varchar NOT NULL,
  "width" varchar NOT NULL,
  "cost" bigint NOT NULL,
  "star" float NOT NULL DEFAULT 5
);

CREATE TABLE "posts" (
  "id" bigserial PRIMARY KEY,
  "post_image" bigint NOT NULL,
  "title" varchar NOT NULL,
  "post_category" bigint NOT NULL,
  "content" text NOT NULL,
  "time_for_read" int NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT (now())
);

CREATE INDEX ON "categories" ("category_name");

CREATE INDEX ON "products" ("product_name");

ALTER TABLE "products" ADD FOREIGN KEY ("product_image") REFERENCES "images" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("product_category") REFERENCES "categories" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("post_image") REFERENCES "images" ("id");

ALTER TABLE "posts" ADD FOREIGN KEY ("post_category") REFERENCES "categories" ("id");
