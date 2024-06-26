"use client";
import React, { useEffect, useState } from "react";
import moment from "moment";
import Link from "next/link";
import { CiClock1 } from "react-icons/ci";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Skeleton from "@/components/main/Blog/Skeleton";

export async function getServerSideProps() {
  try {
    const response = await fetch(`/api/getPost`, {
      next: { revalidate: 3600 },
    });
    const data = response;
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: [],
        error: error.message,
      },
    };
  }
}

const BlogSection = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/getPost`, {
          next: { revalidate: 3600 },
        });
        
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };
    fetchData();
  }, []);

  return (
    <section className="w-5/6">
      <h1 className="text-2xl text-center">Recent Blogs</h1>
      <div className="flex flex-wrap justify-between">
        {/* Show skeleton while loading */}
        {loading && (
          <>
            <Skeleton />
            <Skeleton />

            <Skeleton />
          </>
        )}

        {/* Show actual blog cards when data is loaded */}
        {!loading &&
          data.map((post) => <ThreeDCardDemo key={post.id} post={post} />)}

        {/* Show error message if there's an error */}
        {error && <p className="text-red-500">Error: {error}</p>}
      </div>
    </section>
  );
};
export function ThreeDCardDemo({ key, post }) {
  const { id, title, views, createdAt, thumbnail, description } = post;
  return (
    <Link
      href={`blog/${title.toLowerCase().replace(/\s+/g, "-")}/${id}`}
      key={key}
    >
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50/50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {description}
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={thumbnail}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-5">
            <div className="flex  gap-5 items-center">
              <CardItem
                translateZ={20}
                className="flex items-center gap-2  pl-4 py-2 rounded-xl text-md font-normal dark:text-white"
              >
                <FaEye className="w-3 h-3   dark:text-white " />
                <span className="text-xs  dark:text-white font-semibold">
                  {views}
                </span>
              </CardItem>
              <CardItem
                translateZ={20}
                className="flex items-center gap-2  py-2 rounded-xl text-md font-normal dark:text-white"
              >
                <CiClock1 className="w-3 h-3   dark:text-white " />
                <span className="text-xs  dark:text-white font-semibold">
                  {moment(createdAt).fromNow()}
                </span>
              </CardItem>
            </div>
            <CardItem
              translateZ={20}
              as="button"
              className="flex  gap-2 px-4 py-2 rounded-xl  text-dark dark:text-gray-400 text-xs font-bold"
            >
              Read Now <ArrowRightIcon />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Link>
  );
}

export default BlogSection;
