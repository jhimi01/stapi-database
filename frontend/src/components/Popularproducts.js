import Image from "next/image";
import Link from "next/link";
import Productitem from "./productitem";

export default function PopularProducts() {
  const popularProducts = [
    {
      id: "66df0156d9c220020e25a2a6",
      imageUrl: "/imgCategory/dress.jpg",
      productLink: "/product/66df0156d9c220020e25a2a6",
      title: "Siril Georgette Pink Color Saree with Blouse Piece",
      stockStatus: "In Stock",
      discount: 12, // Discount in percentage
      rating: 5, // Assuming it's a 5-star rating
      oldPrice: 650, // Old price in Rs
      newPrice: 550, // New price in Rs
      actions: [
        {
          type: "addToCart",
          icon: "cartIcon", // You can replace this with the actual icon if needed
        },
        {
          type: "addToWishlist",
          icon: "wishlistIcon", // You can replace this with the actual icon if needed
        },
      ],
    },
    {
      id: "66df0156d9c220020e25a2a6",
      imageUrl: "/imgCategory/dress.jpg",
      productLink: "/product/66df0156d9c220020e25a2a6",
      title: "Siril Georgette Pink Color Saree with Blouse Piece",
      stockStatus: "In Stock",
      discount: 12, // Discount in percentage
      rating: 5, // Assuming it's a 5-star rating
      oldPrice: 650, // Old price in Rs
      newPrice: 550, // New price in Rs
      actions: [
        {
          type: "addToCart",
          icon: "cartIcon", // You can replace this with the actual icon if needed
        },
        {
          type: "addToWishlist",
          icon: "wishlistIcon", // You can replace this with the actual icon if needed
        },
      ],
    },
    {
      id: "66df0156d9c220020e25a2a6",
      imageUrl: "/imgCategory/dress.jpg",
      productLink: "/product/66df0156d9c220020e25a2a6",
      title: "Siril Georgette Pink Color Saree with Blouse Piece",
      stockStatus: "In Stock",
      discount: 12, // Discount in percentage
      rating: 5, // Assuming it's a 5-star rating
      oldPrice: 650, // Old price in Rs
      newPrice: 550, // New price in Rs
      actions: [
        {
          type: "addToCart",
          icon: "cartIcon", // You can replace this with the actual icon if needed
        },
        {
          type: "addToWishlist",
          icon: "wishlistIcon", // You can replace this with the actual icon if needed
        },
      ],
    },
    {
      id: "66df0156d9c220020e25a2a6",
      imageUrl: "/imgCategory/dress.jpg",
      productLink: "/product/66df0156d9c220020e25a2a6",
      title: "Siril Georgette Pink Color Saree with Blouse Piece",
      stockStatus: "In Stock",
      discount: 12, // Discount in percentage
      rating: 5, // Assuming it's a 5-star rating
      oldPrice: 650, // Old price in Rs
      newPrice: 550, // New price in Rs
      actions: [
        {
          type: "addToCart",
          icon: "cartIcon", // You can replace this with the actual icon if needed
        },
        {
          type: "addToWishlist",
          icon: "wishlistIcon", // You can replace this with the actual icon if needed
        },
      ],
    },
  ];

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
          <div className="grid grid-cols-4 space-y-3 gap-3">
            {popularProducts.map((product, index) => (
              <Productitem key={index} product={product} />
            ))}
            {popularProducts.map((product, index) => (
              <Productitem key={index} product={product} />
            ))}
            {popularProducts.map((product, index) => (
              <Productitem key={index} product={product} />
            ))}
            {popularProducts.map((product, index) => (
              <Productitem key={index} product={product} />
            ))}
            {popularProducts.map((product, index) => (
              <Productitem key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
