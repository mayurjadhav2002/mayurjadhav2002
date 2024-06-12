import RelatedPost from "@/components/main/Blog/RelatedPost";
import moment from "moment";
import { Key } from "react";
async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blogs/most_viewed_latest`, {
      next: { revalidate: 3600 },
    });
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
export default async function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const filteredBlogs = await getData();

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
                {filteredBlogs.map(
                  (
                    i: { id: any; title: string; thumbnail: string; createdOn: moment.MomentInput; },
                    j: Key | null | undefined
                  ) => (
                    <li
                      key={j}
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                    >
                      <RelatedPost
                        id={i.id}
                        title={i.title}
                        image={i.thumbnail}
                        slug={i.title.toLowerCase().replace(/\s+/g, "-")}
                        date={moment(i.createdOn).fromNow()}
                      />
                    </li>
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
