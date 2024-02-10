import { CalendarIcon } from "@radix-ui/react-icons";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { CiClock1 } from "react-icons/ci";
async function getData() {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?populate=thumbnail`,
      options
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // rethrow the error to be handled by the caller
  }
}

const BlogSection: React.FC = async () => {
  const data = await getData();
  if (!data.data) {
    return "Loading";
  }
  return (
    <section className="py-20">
      <h1 className="mb-12 text-center font-sans text-5xl font-bold">
        Our Blog
      </h1>
      <div className="mx-auto grid max-w-screen-lg justify-center px-4 sm:grid-cols-2 sm:gap-4 sm:px-8 md:grid-cols-3">
        {data.data?.map(
          (
            post: {
              id: Number;
              attributes: any;
            },
            id: React.Key | null | undefined
          ) => (
            <Article
              key={id}
              imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${post.attributes.thumbnail.data.attributes.formats.thumbnail.url}`}
              title={post.attributes.title}
              description={post.attributes.description}
              id={post.id}
              createdAt={moment(post.attributes.createdAt).fromNow()}
            />
          )
        )}
      </div>
    </section>
  );
};

interface ArticleProps {
  imageUrl: string;
  title: string;
  description: string;
  id: Number;
  createdAt: String;
}

const Article: React.FC<ArticleProps> = ({
  imageUrl,
  title,
  id,
  createdAt,
}) => {
  return (
    <article
      className="mx-auto my-4 flex w-full flex-col overflow-hidden rounded-2xl border border-gray-300 bg-white 
    dark:bg-black dark:border-dark/70 shadow-lg dark:shadow-xl dark:hover:shadow-green-500/50 dark:shadow-current
    text-gray-900 transition hover:scale-105 hover:shadow-lg"
    >
      <Link href={`blog/${title.toLowerCase().replace(/\s+/g, "-")}/${id}`}>
       
        <img src={imageUrl} className="h-56 w-full object-cover" alt="" />
        <div className="absolute p-2 bg-primary/90 rounded-r-md -mt-5 flex justify-center items-center gap-2">
          <CiClock1 className="w-3 h-3  text-white dark:text-black " />{" "}
          <span className="text-xs text-white dark:text-black font-semibold">
            {createdAt}
          </span>
        </div>
        <div className="flex-auto px-6 pb-4">
          <h3 className="mt-4 mb-3 text-lg font-semibold xl:text-xl dark:text-white">
            {title}
          </h3>
          <span className="inline-block cursor-pointer select-none rounded-full border border-gray-800 bg-gray-800 px-2 py-1 text-center align-middle text-sm font-semibold leading-normal text-white no-underline shadow-sm">
            Learn More
          </span>
        </div>
      </Link>
    </article>
  );
};

export default BlogSection;
