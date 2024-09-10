import Image from "next/image";
import Link from "next/link";
import Productitem from "./Productitem";

export default function PopularProducts() {
  const popularProducts = [
    {
      "categories": [
        {
          "name": "electronics",
          "products": [
            {
              "title": "Smartphone",
              "imageUrl": "/electronics/smartphone.jpg",
              "productLink": "/product/smartphone",
              "discount": 10,
              "oldPrice": 15000,
              "newPrice": 13500,
              "stockStatus": "In Stock"
            },
            {
              "title": "Laptop",
              "imageUrl": "/electronics/laptop.jpg",
              "productLink": "/product/laptop",
              "discount": 15,
              "oldPrice": 60000,
              "newPrice": 51000,
              "stockStatus": "In Stock"
            }
          ]
        },
        {
          "name": "dress",
          "products": [
            {
              "title": "Summer Dress",
              "imageUrl": "/fashion/dress.jpg",
              "productLink": "/product/summer-dress",
              "discount": 20,
              "oldPrice": 1200,
              "newPrice": 960,
              "stockStatus": "In Stock"
            },
            {
              "title": "Evening Gown",
              "imageUrl": "/fashion/Gown.jpg",
              "productLink": "/product/evening-gown",
              "discount": 25,
              "oldPrice": 5000,
              "newPrice": 3750,
              "stockStatus": "Out of Stock"
            }
          ]
        },
        {
          "name": "footwear",
          "products": [
            {
              "title": "Running Shoes",
              "imageUrl": "/footwear/Shoes.jpg",
              "productLink": "/product/running-shoes",
              "discount": 12,
              "oldPrice": 2500,
              "newPrice": 2200,
              "stockStatus": "In Stock"
            },
            {
              "title": "Sandals",
              "imageUrl": "/footwear/Sandals.jpg",
              "productLink": "/product/sandals",
              "discount": 18,
              "oldPrice": 800,
              "newPrice": 656,
              "stockStatus": "In Stock"
            }
          ]
        },
        {
          "name": "health",
          "products": [
            {
              "title": "Vitamin C Supplements",
              "imageUrl": "/health/VitaminC.jpg",
              "productLink": "/product/vitamin-c",
              "discount": 5,
              "oldPrice": 500,
              "newPrice": 475,
              "stockStatus": "In Stock"
            },
            {
              "title": "Protein Powder",
              "imageUrl": "/health/Supplements.jpg",
              "productLink": "/product/protein-powder",
              "discount": 10,
              "oldPrice": 3000,
              "newPrice": 2700,
              "stockStatus": "Out of Stock"
            }
          ]
        },
        {
          "name": "beauty",
          "products": [
            {
              "title": "Face Cream",
              "imageUrl": "/images/beauty/face-cream.jpg",
              "productLink": "/product/face-cream",
              "discount": 8,
              "oldPrice": 1200,
              "newPrice": 1100,
              "stockStatus": "In Stock"
            },
            {
              "title": "Lipstick",
              "imageUrl": "/images/beauty/lipstick.jpg",
              "productLink": "/product/lipstick",
              "discount": 20,
              "oldPrice": 500,
              "newPrice": 400,
              "stockStatus": "In Stock"
            }
          ]
        },
        {
          "name": "grocery",
          "products": [
            {
              "title": "Organic Rice",
              "imageUrl": "/images/grocery/organic-rice.jpg",
              "productLink": "/product/organic-rice",
              "discount": 5,
              "oldPrice": 2000,
              "newPrice": 1900,
              "stockStatus": "In Stock"
            },
            {
              "title": "Olive Oil",
              "imageUrl": "/images/grocery/olive-oil.jpg",
              "productLink": "/product/olive-oil",
              "discount": 15,
              "oldPrice": 800,
              "newPrice": 680,
              "stockStatus": "In Stock"
            }
          ]
        }
      ]
    }
    
  ];

  // Extract categories from the first item in popularProducts array
  const { categories } = popularProducts[0];

  return (
    <div className="my-10">
      <div className="flex gap-10 ">
        <div className="w-[25%] space-y-2">
          <Image
            src="/imgCategory/sale.jpg"
            alt="sale pic"
            height="500"
            width="500"
            className="w-full"
          />
          <Image
            src="/imgCategory/sale2.jpg"
            alt="sale pic"
            height="500"
            width="500"
            className="w-full"
          />
        </div>
        <div className="w-[75%] ">
          <div className="mb-9 text-gray-700">
            <h2 className="text-[40px]">Popular Products</h2>
            <p className="text-lg">
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <div className="grid grid-cols-4 space-y-3 gap-3">
            {categories.map((category) => (
              <div key={category.name}>
                <h2>{category.name}</h2>
                <div className="products-grid">
                  {category.products.map((product) => (
                    <Productitem key={product.title} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
