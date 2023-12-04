package db

import (
	"Tech_Website/util"
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func createRandomCategory(t *testing.T) Category{
	name_of_category := util.RandomName()
	category, err := testQueries.CreateCategory(context.Background(), name_of_category)

	require.NoError(t, err)
	require.NotEmpty(t, category)
	require.Equal(t, name_of_category, category.CategoryName)
	require.NotZero(t, category.ID)

	return category
}

func TestListCategories(t *testing.T) {
	for i := 0; i < 10; i++ {
		createRandomCategory(t)
	}
	arg := ListCategoriesParams{
		Limit:  5,
		Offset: 5,
	}
	categories, err := testQueries.ListCategories(context.Background(), arg)

	require.NoError(t, err)
	require.Len(t, categories, 5)

	for _, category := range categories {
		require.NotEmpty(t, category)
	}
}