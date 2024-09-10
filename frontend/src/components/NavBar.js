"use client";
import Link from "next/link";
import { FcShop } from "react-icons/fc";

export default function NavBar() {
  
  return (
    <header className="text-gray-600 bg-red-50 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <FcShop className="text-5xl" />
          <span className="ml-3 text-xl">MyShop</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center justify-center uppercase font-semibold text-xl">
          <Link href="/" className="mr-5 hover:text-gray-900 hover:bg-gray-200 px-3 rounded-3xl py-2">Home</Link>
          <Link href="/about" className="mr-5 hover:text-gray-900 hover:bg-gray-200 px-3 rounded-3xl py-2">Jewellary</Link>
          <Link href="/products" className="mr-5 hover:text-gray-900 hover:bg-gray-200 px-3 rounded-3xl py-2">electronics</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hover:bg-gray-200 px-3 rounded-3xl py-2">beauty</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hover:bg-gray-200 px-3 rounded-3xl py-2">footware</Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900 hover:bg-gray-200 px-3 rounded-3xl py-2">Fashion</Link>
          <Link href="/products" className="mr-5 hover:text-gray-900 hover:bg-gray-200 px-3 rounded-3xl py-2">Products</Link>
        </nav>
        <button className="bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-400 rounded text-base mt-4 md:mt-0">
          Login
        </button>
      </div>
    </header>
  );
}
