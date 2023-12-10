-- name: CreateProduct :one
INSERT INTO products (
    product_image,
    product_name,
    product_category,
    sold_number,
    brand,
    color,
    screen_size,
    hard_disk_size,
    display,
    graphic,
    processor,
    in_the_box,
    height,
    width,
    cost,
    star
) VALUES (
    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16
) RETURNING *;


-- name: GetProduct :one
SELECT * FROM products
WHERE id = $1 LIMIT 1;

-- name: ListProducts :many
SELECT * FROM products
ORDER BY id
LIMIT $1
OFFSET $2;

-- name: UpdateProduct :one
UPDATE products
  set star = $2
WHERE id = $1
RETURNING *;