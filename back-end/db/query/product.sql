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