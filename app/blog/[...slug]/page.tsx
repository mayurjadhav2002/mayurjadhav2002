import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";
import Head from "next/head";
import SharePost from "@/components/main/Blog/SharePost";
import TagButton from "@/components/main/Blog/TagButton";

async function getBlog(id: any) {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${id}?populate=*`,
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
    throw error;
  }
}

const page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlog(params.slug[1]);
  return (
    <>
      <Head>
        <title>{blog.data.attributes.title}</title>
        <meta name="description" content={blog.data.attributes.description} />
        {/* Add other meta tags if needed */}
      </Head>
      <div className="w-full px-4 lg:w-8/12">
        <div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-primary sm:text-4xl sm:leading-tight break-words">
            {blog.data.attributes.title}
          </h2>
          <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
            <div className="flex flex-wrap items-center">
              <div className="mr-10 mb-5 flex items-center">
                <div className="mr-1">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      width={100}
                      height={100}
                      src="https://miro.medium.com/v2/resize:fit:180/1*ArIyUwI0LQy3qjVjDHTKSw.png"
                      alt="Mayur Jadhav"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="text-md font-medium text-body-color dark:text-gray-200">
                    By <span>Mayur Jadhav</span>
                  </h4>
                </div>
              </div>
              <div className="mb-5 flex items-center">
                <p className="mr-5 flex items-center text-base font-medium text-body-color dark:text-gray-200">
                  <span className="mr-3">
                    <BsClockHistory />
                  </span>
                  {moment(blog.data.attributes.createdAt).fromNow()}
                </p>
              </div>
            </div>
            <div className="mb-5">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold text-white"
              >
                Programming
              </Link>
            </div>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: blog.data.attributes.blog }}
          />
          <div className="items-center justify-between sm:flex">
            <div className="mb-5">
             
              <div className="flex items-center">
                {blog.data.attributes.Tags &&
                  blog.data.attributes.Tags.split(",").map(
                    (Tag: string, index: React.Key | null | undefined) => (
                      <TagButton text={Tag.trim()} key={index} />
                    )
                  )}
              </div>
            </div>
            <div className="mb-5">
              <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right dark:text-white">
                Share this post :
              </h5>
              <div className="flex items-center sm:justify-end">
                <SharePost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
