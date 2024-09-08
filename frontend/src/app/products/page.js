import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

// This is a server component that fetches the data from the Strapi API
export default async function Products() {
 let headers = {
    Authorization:
      "Bearer e1ba405f90fe3097db8d29d7d3a0dc61798183cb76b469f33ce8b90f22e342d5a3a17135db2c0fe7299d0573eb315069e71675ca26c4dff3e9fe64e136c079632d3a7ce5da527baaad9e25562e7b831e24199728292171c639c7a224b86d6ee6e818d95ff3abda64f1b222a40a8a3b53c25e7a6f8f1917c8fce302be2b42c1ae",
  };
  let data = await fetch("http://localhost:1337/api/products?populate=*", {headers:headers})
  let products = await data.json();
  console.log("products" ,products.data.length);

  
  return (
    <div className="container mx-auto">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Product List - MyShop
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Buy from the list of these products.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
          {products.data.map((item, index) => (
  <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
    <div className="bg-gray-100 p-6 rounded-lg">
      <Image
        className="h-40 rounded w-full object-cover object-center mb-6"
        src={
          item.attributes.image.data?.attributes?.url
            ? `http://localhost:1337${item.attributes.image.data.attributes.url}`
            : "/default-image.jpg"
        }
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
      <p className="leading-relaxed text-base">
        {item.attributes.discription || "No description available."}
      </p>
    </div>
  </div>
))}
          </div>
        </div>
      </section>
    </div>
  );
}
