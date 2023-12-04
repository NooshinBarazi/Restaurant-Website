-- name: CreatePost :one
INSERT INTO posts (
    post_image,
    title,
    post_category,
    content,
    time_for_read
) VALUES (
    $1, $2, $3, $4, $5
) RETURNING *;


-- name: ListPosts :many
SELECT * FROM posts
ORDER BY id
LIMIT $1
OFFSET $2;
