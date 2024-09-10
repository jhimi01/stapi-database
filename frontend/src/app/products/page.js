
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoGrid } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

// This is a server component that fetches the data from the Strapi API
export default async function Products() {
  let headers = {
    Authorization:
      "Bearer e1ba405f90fe3097db8d29d7d3a0dc61798183cb76b469f33ce8b90f22e342d5a3a17135db2c0fe7299d0573eb315069e71675ca26c4dff3e9fe64e136c079632d3a7ce5da527baaad9e25562e7b831e24199728292171c639c7a224b86d6ee6e818d95ff3abda64f1b222a40a8a3b53c25e7a6f8f1917c8fce302be2b42c1ae",
  };
  let data = await fetch("http://localhost:1337/api/products?populate=*", {
    headers: headers,
    cache: "no-store",
  });
  let products = await data.json();
  // Check if product data exists
  if (!products.data || products.data.length === 0) {
    return (
      <h2 className="text-3xl mt-14 font-bold text-center text-gray-700">
        Product not found.
      </h2>
    );
  }
  // console.log("products", products.data.length, products);

  return (
    <section className="text-gray-600 body-font">
      <div className="showBy mt-0 mb-3 d-flex align-items-center">
        <div className="bg-gray-200 px-10 py-7 mb-6 space-x-6 text-black">
          <button
            className="text-xl text-gray-500"
            tabindex="0"
            type="button"
          >
           <IoMdMenu />
          </button>
          <button className="text-xl text-gray-500">
          {/* <BsGrid3X3GapFill /> */}
          <IoGrid />
          </button>
          <button className="text-xl">
            {/* <IoGrid /> */}
            <TfiLayoutGrid3Alt />
          </button>
         
        </div>
      </div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {products.data.map((item, index) => (
            <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <Image
                  className="h-64 rounded w-full object-cover object-center mb-6"
                  src={
                    item.attributes.image.data?.attributes?.url
                      ? `http://localhost:1337${item.attributes.image.data.attributes.url}`
                      : "/default-image.jpg"
                  }
                  // src={item.attributes.image.data && item.attributes.image.data.attributes.name}
                  alt={item.attributes.name || "Product Image"}
                  width={720}
                  height={400}
                />
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  {item.attributes.title}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  {item.attributes.name}
                </h2>
                <div className="hidden bg-[red] bg-[white] bg-[gray] bg-[blue] bg-[black] bg-[purple] bg-[green]"></div>
                <button
                  className={
                    "border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " +
                    `bg-[${item.attributes.color}]`
                  }
                ></button>
                <p className="leading-relaxed text-base">
                  {item.attributes.discription || "No description available."}
                </p>
                <Link href={`products/${item.attributes.slug}`}>
                  <button
                    className={`ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded mt-2`}
                  >
                    Buy now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
