import { Metadata } from "next";
import  Data  from "@/app/component/data/data.json"; // Import data.json
import Image from "next/image";


;

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  return Data.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the dynamic pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = Data.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "404 - Not Found",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: post.Title,
    description: post.content,
  };
}

// Dynamic page component
export default function Page({ params }: { params: { slug: string } }) {
  const post = Data.find((post) => post.slug === params.slug);

  if (!post) {
    return <h1>404 - Post Not Found</h1>;
  }

  return (
    
   <main className="px-4 md:px-10 space-y-10 my-3"> 
    <div  className="flex flex-col lg:flex-row gap-[60px] space-y-6 lg:space-y-0 order-1">
        
      
      {post.image && (
        <div className=" lg:w-6/1 flex justify-center lg:justify-end"><Image
          src={post.image}
          alt={post.Title}
          className="rounded-md w-full  "
          width={500}
          height={500}
        /></div>
      )}

<div className="space-y-3 pt-none lg:w-1/2 justify-center items-center">
        <h1 className="font-bold text-4xl font-serif text-blue-700">{post.Title2}</h1>
        <p  className="text-lg lg:w-full text-gray-800">{post.content2}</p>
        </div>
    </div>
   <section className="space-y-8">
       
       
      </section> 
   
    </main>
        
  );
}

