"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";
import Head from "next/head";
import SharePost from "@/components/main/Blog/SharePost";
import ProfileCard from "@/components/main/Blog/ProfileCard";
import BlogLoading from "@/components/main/Blog/BlogLoading";

async function getBlog(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/${id}`,
      {
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data: ${res.status} - ${res.statusText}`
      );
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const BlogPage = ({ params }: { params: { slug: string[] } }) => {
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await getBlog(params.slug[1]);
        setBlog(data);
      } catch (error) {
        setError("Error fetching blog data.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [params.slug]);

  if (loading) return <BlogLoading />;
  if (error)
    return <div className="w-full px-4 lg:w-8/12 overflow-hidden">{error}</div>;
  if (!blog)
    return (
      <div className="w-full px-4 lg:w-8/12 overflow-hidden">
        No blog data found.
      </div>
    );

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        {/* Add other meta tags if needed */}
      </Head>
      <div className="w-full px-4 lg:w-8/12 overflow-hidden">
        <div>
          <h2 className="mb-5 text-2xl lg:text-3xl font-bold leading-tight text-black dark:text-primary sm:text-4xl sm:leading-tight break-words">
            {blog.title}
          </h2>
          <div className="overflow-hidden pb-7 flex flex-wrap gap-2 items-center justify-between border-b border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
            <ProfileCard />
            <div className="flex items-center gap-8 justify-between">
              <div className="flex lg:flex xl:flex items-center">
                <p className="flex items-center text-sm font-medium text-body-color dark:text-gray-200">
                  <span className="mr-3">
                    <BsClockHistory />
                  </span>
                  Posted {moment(blog.createdOn).fromNow()}
                </p>
              </div>
              <div className="">
                <Link
                  href="/"
                  className="flex items-center justify-center rounded-full bg-primary py-2 px-4 text-xs lg:text-sm font-semibold text-white"
                >
                  {blog.views} Views
                </Link>
              </div>
            </div>
          </div>
          <div className="content pt-0 lg:pt-4">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          <div className="items-center justify-between sm:flex">
            <div className="mb-5">
              {/* Additional content or styling here */}
            </div>
            <div className="mb-5">
              <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right dark:text-white">
                Share this post:
              </h5>
              <div className="flex items-center sm:justify-end">
                <SharePost
                  currentUrl={`https://mayurjadhav.me/blog/${params.slug[0]}/${params.slug[1]}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
