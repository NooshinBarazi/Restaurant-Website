-- name: CreateCategory :one
INSERT INTO categories (
  category_name
) VALUES (
  $1
) RETURNING *;


-- name: ListCategories :many
SELECT * FROM categories
ORDER BY id
LIMIT $1
OFFSET $2;
