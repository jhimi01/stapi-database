"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Range } from "react-range";

export default function ProductsLayout({ children }) {
  const [priceRange, setPriceRange] = useState([10, 90]); // Min and Max Price
  const categories = [
    { name: "electronics", amount: "3" },
    { name: "dress", amount: "12" },
    { name: "footware", amount: "2" },
    { name: "health", amount: "4" },
    { name: "beauty", amount: "10" },
    { name: "grocery", amount: "7" },
  ];

  const handlePriceChange = (values) => {
    setPriceRange(values);
  };

  return (
    <div className="container mx-auto my-20">
      <div className="flex gap-5">
        <div className="w-[25%] bg-gray-200 p-6">
          <div className="space-y-10">
            <div>
              <h2 className="uppercase text-2xl font-semibold">CATEGORIES</h2>
              {categories.map((category) => (
                <div key={category.name}>
                  <h3 className="mt-2 hover:underline cursor-pointer font-semibold text-xl text-gray-600 capitalize">
                    {category.name} + ({category.amount})
                  </h3>
                </div>
              ))}
            </div>
            {/* Price Range Slider */}
            <div>
              <h2 className="uppercase text-2xl font-semibold">Price</h2>
              <div className="my-5">
                <Range
                  step={5}
                  min={0}
                  max={100}
                  values={priceRange}
                  onChange={(values) => handlePriceChange(values)}
                  renderTrack={({ props, children }) => (
                    <div
                      {...props}
                      className="h-1 w-full bg-gray-300 rounded-full"
                    >
                      {children}
                    </div>
                  )}
                  renderThumb={({ props }) => (
                    <div
                      {...props}
                      className="h-4 w-4 bg-blue-500 rounded-full shadow-md"
                    />
                  )}
                />
                <div className="flex text-2xl text-gray-800 font-semibold justify-between mt-2">
                  <span>From: ${priceRange[0]}</span>
                  <span>To: ${priceRange[1]}</span>
                </div>
              </div>
            </div>
            {/* color filter */}
            <div>
              <h2 className="uppercase text-2xl font-semibold mb-4">color</h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-black h-8 w-8 border-2 border-gray-400 rounded-full"></button>
                <button className="bg-[blue] h-8 w-8 border-2 border-gray-400 rounded-full"></button>
                <button className="bg-[purple] h-8 w-8 border-2 border-gray-400 rounded-full"></button>
                <button className="bg-[green] h-8 w-8 border-2 border-gray-400 rounded-full"></button>
                <button className="bg-[yellow] h-8 w-8 border-2 border-gray-400 rounded-full"></button>
                <button className="bg-[gray] h-8 w-8 border-2 border-gray-400 rounded-full"></button>
                <button className="bg-[white] h-8 w-8 border-2 border-gray-400 rounded-full"></button>
              </div>
            </div>

            {/* sale image */}
            <Image src='/imgCategory/sale.jpg' width='300' height='300' className='w-full h-full' />
          </div>
        </div>
        <section className="w-[75%]">{children}</section>{" "}
        {/* Content of the Products Page */}
      </div>
    </div>
  );
}
