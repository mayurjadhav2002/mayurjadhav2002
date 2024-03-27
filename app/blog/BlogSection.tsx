"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { CiClock1 } from "react-icons/ci";
import { debounce } from "lodash";

async function fetchData() {
  try {
    const res = await fetch(
      `https://65f1c31b034bdbecc7639fc6.mockapi.io/api/blogs/Blogs?sortBy=createdAt`
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const BlogSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchAndSetData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Debounce the API call to avoid making too many requests in a short period
    const debouncedFetchData = debounce(fetchAndSetData, 1000);

    // Fetch data initially
    debouncedFetchData();

    return () => {
      // Clear the debounce timeout when component unmounts
      debouncedFetchData.cancel();
    };
  }, []);

  if (!data) {
    return "Loading";
  }

  return (
    <section className="py-20">
      
      <div className="mx-auto grid md:gap-8  justify-center px-4 sm:grid-cols-1 sm:gap-4 sm:px-8 md:grid-cols-4">
 
        {data.map((post: { id: React.Key | null | undefined; }) => (
          <Article key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

const Article = ({ post }) => {
  const { thumbnail, blog_title, blog_description, id, createdAt, category } =
    post;

  return (
    <article className="">
      <Link
        href={`blog/${blog_title.toLowerCase().replace(/\s+/g, "-")}/${id}`}
      >
        <>
          <div className="relative  rounded-lg  border-black/50 border-2 flex justify-center items-center">
            <div className="w-full shadow-lg transition duration-500 hover:shadow-3xl hover:shadow-blue-700">
              <div className="flex gap-16  px-4 py-3 justify-between">
                <div className="flex  items-center space-x-2">
                  <img
                    className="w-8 rounded-full "
                    src="https://avatars.githubusercontent.com/u/63432459?v=4"
                    alt="sara"
                  />
                  <h2 className="text-gray-800 font-semibold cursor-pointer">
                    Mayur Jadhav
                  </h2>
                </div>
                <div className="flex space-x-2">
                  <div className="flex space-x-1 items-center">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-gray-600 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </span>
                    <span>22</span>
                  </div>
                </div>
              </div>

              <img
                src={thumbnail}
                className="w-full cursor-pointer border-y-[1px] border-x-0 border-dark"
                alt=""
              />
              <div>
                <div className="absolute p-2 bg-primary/90 rounded-r-md -mt-10 flex justify-center items-center gap-2">
                  <CiClock1 className="w-3 h-3  text-white dark:text-black " />
                  <span className="text-xs text-white dark:text-black font-semibold">
                    {moment(createdAt).fromNow()}
                  </span>
                </div>
                <div className="absolute right-0 p-2 bg-green-700/90 rounded-l-md -mt-10 flex justify-center items-center gap-2">
                  <CiClock1 className="w-3 h-3  text-white dark:text-black " />
                  <span className="text-xs text-white dark:text-black font-semibold">
                    {category}
                  </span>
                </div>
              </div>

              <div className="my-5">
                <h1 className="text-xl  px-4 font-semibold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">
                  {blog_title}
                </h1>
              </div>
            </div>
          </div>
        </>
      </Link>
    </article>
  );
};

export default BlogSection;
