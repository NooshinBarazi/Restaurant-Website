package db

import (
	"Tech_Website/util"
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func createRandomImage(t *testing.T) Image {

	arg := CreateImageParams{
		ImageName: util.RandomName(),
		ImageData: util.RandomBytes(10),
	}

	image, err := testQueries.CreateImage(context.Background(), arg)

	require.NoError(t, err)
	require.NotEmpty(t, image)
	require.Equal(t, arg.ImageName, image.ImageName)
	require.Equal(t, arg.ImageData, image.ImageData)

	return image
}

func createRandomCategoryForPost(t *testing.T) Category{
	name_of_category := util.RandomName()
	category, err := testQueries.CreateCategory(context.Background(), name_of_category)

	require.NoError(t, err)
	require.NotEmpty(t, category)
	require.Equal(t, name_of_category, category.CategoryName)
	require.NotZero(t, category.ID)

	return category
}

func createRandomPost(t *testing.T, image Image, category Category) Post {
	
	arg := CreatePostParams{
		PostImage: image.ID,
		Title: util.RandomName(),
		PostCategory: category.ID,
		Content: util.RandomName(),
		TimeForRead: util.RandomInt32(1, 6),
	}
	
	post, err := testQueries.CreatePost(context.Background(), arg)

	require.NoError(t, err)
	require.NotEmpty(t, post)
	require.Equal(t, arg.PostImage, post.PostImage)
	require.Equal(t, arg.Title, post.Title)
	require.Equal(t, arg.PostCategory, post.PostCategory)
	require.Equal(t, arg.Content, post.Content)
	require.Equal(t, arg.TimeForRead, post.TimeForRead)

	return post
}

func TestListPosts(t *testing.T) {

	image := createRandomImage(t)
	category := createRandomCategoryForPost(t)

	for i := 0; i < 10; i++ {
		createRandomPost(t, image, category)
	}

	arg := ListPostsParams {
		Limit: 5,
		Offset: 5,
	}

	posts, err := testQueries.ListPosts(context.Background(), arg)
	require.NoError(t, err)
	require.Len(t, posts, 5)

	for _,post := range posts {
		require.NotEmpty(t, post)
	} 
}

