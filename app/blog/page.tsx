import { title } from "process";
import BlogSection from "./BlogSection";
import Head from "next/head";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blogs | Mayur Jadhav",
  description: "Read the latest blogs I wrote on Software Development, Machine Learning, AI, Philosophy, and more.",
  openGraph: {
    title: "Existential Lie - Understanding the Truth | Mayur Jadhav", 
    description:
      "Understanding how we came to exist—how we are here—has been buried under lies from religious leaders, atheists, and diplomats. We never questioned it from the beginning.",
    url: "https://mayurjadhav.tech",
    images: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJiqHE4uO3eyqpT8VrvR4lIHcdXa7L60MdUueSej9WdO3mWH5g0qG86vrksIdX5LucVpJ9DtAVWpfbVOkBOVFRJKQxrMwBm7dMq9AJa3MlfBG4-x9Gdntcvq3jXMa9q5tdv0QO8LBhJq8xQdwI0SWMzIx5l7DaoHsx59l3KIIptuPMlA2yf6I5ORrTQJQ/w475-h343/touching-the-sun-1315379.jpg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Existential Lie - Understanding the Truth | Mayur Jadhav", 
    description:
    "Understanding how we came to exist—how we are here—has been buried under lies from religious leaders, atheists, and diplomats. We never questioned it from the beginning.",
    images: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJiqHE4uO3eyqpT8VrvR4lIHcdXa7L60MdUueSej9WdO3mWH5g0qG86vrksIdX5LucVpJ9DtAVWpfbVOkBOVFRJKQxrMwBm7dMq9AJa3MlfBG4-x9Gdntcvq3jXMa9q5tdv0QO8LBhJq8xQdwI0SWMzIx5l7DaoHsx59l3KIIptuPMlA2yf6I5ORrTQJQ/w475-h343/touching-the-sun-1315379.jpg",
  },
}
  function Page() {
  return (
    <>
   
    <Head>
      <title>Blog</title>
    </Head>
    <div>
      <div className="flex flex-col w-full justify-center items-center lg:p-10 md:p-10 p-5 mt-20">
       <BlogSection/>
      </div>
    </div>
    </>
  );
}

export default Page;
