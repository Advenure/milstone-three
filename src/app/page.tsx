import Data  from "@/app/component/data/data.json";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  interface Idata {
    Title: string;
    content: string;
    slug: string;
    image: string;
    tag: string;
    content2:string;
  }

  return (
    <main>
      <section>
        <h1 className="text-4xl md:text-6xl font-bold text-center font-serif mt-5 ">
          Favorite cricketer
          
        </h1>
      </section>

      <div className="mt-5 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.map((item: Idata) => (
            <div
              className="bg-white shadow-lg hover:scale-105 duration-200  rounded-lg p-4 flex flex-col items-center"
              key={item.slug}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.Title}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              ) : (
                <div className="h-[300px] w-[500px] bg-gray-300 flex items-center justify-center rounded-lg">
                  <p>No Image</p>
                </div>
              )}
              <h3 className="text-xl font-bold mt-4">{item.Title}</h3>
              <p className="w-full font-medium text-sm text-center line-clamp-3">
                {item.content}
              </p>
              <Link
                href={`Blog/${item.slug}`}
                className="mt-4 text-white bg-blue-800 hover:bg-blue-900 font-bold rounded-lg py-2 px-6"
              >
                {item.tag}
              </Link>
            </div>
          ))}
        </div>
      </div>
     
    </main>
  );
}

