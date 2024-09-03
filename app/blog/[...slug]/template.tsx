"use client";
import BlogSkelton from "@/components/main/Blog/BlogSkelton";
import RelatedPost from "@/components/main/Blog/RelatedPost";
import moment from "moment";
import { Key, useEffect, useState } from "react";
async function getData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/most_viewed_latest`,
      {
        next: { revalidate: 3600 },
      }
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
export default function Template({ children }: { children: React.ReactNode }) {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    if (!isMobile) {
      const fetchData = async () => {
        try {
          const data = await getData();
          setFilteredBlogs(data);
        } catch (error) {

        } finally {
          setLoading(false); // Set loading to false after data is fetched
        }
      };

      fetchData();
    }
  }, [isMobile]);

  return (
    <section className=" pt-[100px] pb-[120px] blog">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {children}
          <div className="hidden lg:block w-full px-4 lg:w-4/12 h-screen overflow-y-scroll scrollbar-hidden sticky top-0 ">
            <div className=" mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
              <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                Related Posts
              </h3>
              <ul className="p-8">
                {loading ? (
                <BlogSkelton/>
                ) : (
                  filteredBlogs.map(
                    (
                      i: {
                        _id: any;
                        title: string;
                        thumbnail: string;
                        createdOn: moment.MomentInput;
                      },
                      j: Key | null | undefined
                    ) => (
                      <li
                        key={j}
                        className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                      >
                        <RelatedPost
                          id={i._id}
                          title={i.title}
                          image={i.thumbnail}
                          slug={i.title.toLowerCase().replace(/\s+/g, "-")}
                          date={moment(i.createdOn).fromNow()}
                        />
                      </li>
                    )
                  )
                )}
              </ul>
            </div>
          </div>
          {/* <NewsLatterBox /> */}
        </div>
      </div>
    </section>
  );
}
