-- name: CreateImage :one
INSERT INTO images (
  image_name,
  image_data
) VALUES (
  $1, $2
) RETURNING *;
