package db

import (
	"Tech_Website/util"
	"context"
	"testing"

	"github.com/stretchr/testify/require"
)

func createRandomImageForProduct(t *testing.T) Image {

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

func createRandomCategoryForProduct(t *testing.T) Category{
	name_of_category := util.RandomName()
	category, err := testQueries.CreateCategory(context.Background(), name_of_category)

	require.NoError(t, err)
	require.NotEmpty(t, category)
	require.Equal(t, name_of_category, category.CategoryName)
	require.NotZero(t, category.ID)

	return category
}

func createRandomProduct(t *testing.T, image Image, category Category) Product {
	arg := CreateProductParams{
		ProductImage: image.ID,
		ProductName: util.RandomName(),
		ProductCategory: category.ID,
		SoldNumber: util.RandomInt32(1, 6),
		Brand: util.RandomName(),
		Color: util.RandomName(),
		ScreenSize: util.RandomName(),
		HardDiskSize: util.RandomName(),
		Display: util.RandomName(),
		Graphic: util.RandomName(),
		Processor: util.RandomName(),
		InTheBox: util.RandomName(),
		Height: util.RandomName(),          
		Width: util.RandomName(), 
		Star: util.RandomFloat(),
	}

	product, err := testQueries.CreateProduct(context.Background(), arg)

	require.NoError(t, err)
	require.NotEmpty(t, product)
	require.Equal(t, arg.ProductImage, product.ProductImage)
	require.Equal(t, arg.ProductName, product.ProductName)
	require.Equal(t, arg.ProductCategory, product.ProductCategory)
	require.Equal(t, arg.SoldNumber, product.SoldNumber)
	require.Equal(t, arg.Brand, product.Brand)
	require.Equal(t, arg.Color, product.Color)
	require.Equal(t, arg.ScreenSize, product.ScreenSize)
	require.Equal(t, arg.HardDiskSize, product.HardDiskSize)
	require.Equal(t, arg.Display, product.Display)
	require.Equal(t, arg.Graphic, product.Graphic)
	require.Equal(t, arg.Processor, product.Processor)
	require.Equal(t, arg.InTheBox, product.InTheBox)
	require.Equal(t, arg.Height, product.Height)
	require.Equal(t, arg.Width, product.Width)
	require.Equal(t, arg.Star, product.Star)

	return product
}

func TestGetProduct(t *testing.T) {
	image := createRandomImageForProduct(t)
	category := createRandomCategoryForProduct(t)
	product1 := createRandomProduct(t, image, category)
	product2, err := testQueries.GetProduct(context.Background(), product1.ID)

	require.NoError(t, err)
	require.NotEmpty(t, product2)

	require.Equal(t, product1.ProductImage, product2.ProductImage)
	require.Equal(t, product1.ProductName, product2.ProductName)
	require.Equal(t, product1.ProductCategory, product2.ProductCategory)
	require.Equal(t, product1.SoldNumber, product2.SoldNumber)
	require.Equal(t, product1.Brand, product2.Brand)
	require.Equal(t, product1.Color, product2.Color)
	require.Equal(t, product1.ScreenSize, product2.ScreenSize)
	require.Equal(t, product1.HardDiskSize, product2.HardDiskSize)
	require.Equal(t, product1.Display, product2.Display)
	require.Equal(t, product1.Graphic, product2.Graphic)
	require.Equal(t, product1.Processor, product2.Processor)
	require.Equal(t, product1.InTheBox, product2.InTheBox)
	require.Equal(t, product1.Height, product2.Height)
	require.Equal(t, product1.Width, product2.Width)
	require.Equal(t, product1.Star, product2.Star)

}

func TestListProducts(t *testing.T) {

	category := createRandomCategoryForProduct(t)

	for i := 0; i < 10; i++ {
		image := createRandomImageForProduct(t)
		createRandomProduct(t, image, category)
	}

	arg := ListProductsParams {
		Limit: 5,
		Offset: 5,
	}

	products, err := testQueries.ListProducts(context.Background(), arg)
	require.NoError(t, err)
	require.Len(t, products, 5)

	for _,product := range products {
		require.NotEmpty(t, product)
	} 
}

func TestUpdateProduct(t *testing.T) {
	image := createRandomImageForProduct(t)
	category := createRandomCategoryForProduct(t)
	product1 := createRandomProduct(t, image, category)

	arg := UpdateProductParams{
		ID: product1.ID,
		Star: util.RandomFloat(),
	}

	product2, err := testQueries.UpdateProduct(context.Background(), arg)

	require.NoError(t, err)
	require.NotEmpty(t, product2)
	require.Equal(t, product1.ID, product2.ID)
	require.NotEqual(t, product1.Star, product2.Star)
}