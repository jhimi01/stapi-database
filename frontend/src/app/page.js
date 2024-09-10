import Image from "next/image";
import PopularProducts from "@/components/Popularproducts";
import Features from "@/components/Features";

export default function Home() {
  return (
 <div className="container mx-auto">
  <Features />
  <PopularProducts />
 </div>
  );
}
