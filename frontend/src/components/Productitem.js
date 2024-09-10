import Image from "next/image";
import Link from "next/link";

export default function Productitem({ product }) {
  return (
    <div className="productItem bg-white shadow-md rounded-lg overflow-hidden">
      <div className="img-wrapper relative">
        <Link href={product.productLink}>
          <div className="relative h-56">
            <Image
              src={product.imageUrl}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="w-full"
            />
          </div>
        </Link>
        <span className="badge absolute top-2 left-2 bg-primary text-white text-sm px-2 py-1 rounded-md">
          {product.discount}%
        </span>
        <div className="actions absolute bottom-2 right-2 flex space-x-2">
          <button className="text-primary bg-white border border-primary p-2 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              version="1.1"
              viewBox="0 0 17 17"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.996 11.352l0.004 4.648-4.649-0.004 0.001-1 2.94 0.003-5.792-5.791-5.792 5.792 2.94-0.003 0.001 1-4.649 0.003 0.004-4.649 1 0.001-0.003 2.939 5.792-5.791-5.792-5.792 0.003 2.939-1 0.001-0.004-4.648 4.649 0.004-0.001 1-2.94-0.003 5.792 5.792 5.792-5.792-2.94 0.003-0.001-1 4.649-0.004-0.004 4.649-1-0.001 0.003-2.939-5.792 5.791 5.792 5.792-0.003-2.939 1-0.001z"></path>
            </svg>
          </button>
          <button className="text-primary bg-white border border-primary p-2 rounded-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fontSize: "20px" }}
            >
              <path d="M349.6 64c-36.4 0-70.7 16.7-93.6 43.9C233.1 80.7 198.8 64 162.4 64 97.9 64 48 114.2 48 179.1c0 79.5 70.7 143.3 177.8 241.7L256 448l30.2-27.2C393.3 322.4 464 258.6 464 179.1 464 114.2 414.1 64 349.6 64zm-80.8 329.3l-4.2 3.9-8.6 7.8-8.6-7.8-4.2-3.9c-50.4-46.3-94-86.3-122.7-122-28-34.7-40.4-63.1-40.4-92.2 0-22.9 8.4-43.9 23.7-59.3 15.2-15.4 36-23.8 58.6-23.8 26.1 0 52 12.2 69.1 32.5l24.5 29.1 24.5-29.1c17.1-20.4 43-32.5 69.1-32.5 22.6 0 43.4 8.4 58.7 23.8 15.3 15.4 23.7 36.5 23.7 59.3 0 29-12.5 57.5-40.4 92.2-28.8 35.7-72.3 75.7-122.8 122z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="info p-4">
        <Link href={product.productLink}>
          <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
        </Link>
        <span className="text-green-600 block mb-2">{product.stockStatus}</span>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 line-through">
            Rs {product.oldPrice}
          </span>
          <span className="text-red-500">Rs {product.newPrice}</span>
        </div>
      </div>
    </div>
  );
}
