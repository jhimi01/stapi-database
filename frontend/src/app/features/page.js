import Image from "next/image";

export default function Features() {
  const categories = [
    { name: "electronics", imgSrc: "/imgCategory/electronics.png" },
    { name: "dress", imgSrc: "/imgCategory/dress.jpg" },
    { name: "footware", imgSrc: "/imgCategory/footware.jpg" },
    { name: "health", imgSrc: "/imgCategory/health.avif" },
    { name: "beauty", imgSrc: "/imgCategory/makeup2.jpg" },
    { name: "grocery", imgSrc: "/imgCategory/grocery.avif" },
  ];

  return (
    <div>
      <h2 className="text-4xl my-5 text-gray-600 font-semibold">
        Featured Categories
      </h2>
      <div className="flex gap-8">
        {categories.map((category) => (
          <div key={category.name}>
            <Image
              src={category.imgSrc}
              alt={`${category.name} image`}
              height={100}
              width={100}
              className="rounded-full feature-img h-[130px] w-[130px] cursor-pointer border-2 border-gray-300"
            />
            <h3 className="mt-2 font-semibold text-center text-xl text-gray-600 capitalize">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
