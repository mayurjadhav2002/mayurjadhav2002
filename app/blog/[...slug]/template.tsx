import RelatedPost from "@/components/main/Blog/RelatedPost";
import moment from "moment";
import { Key } from "react";
async function getData() {
  try {
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?populate=*&sort=createdAt:desc&pagination[pageSize]=5`,
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
          <div className="hidden lg:block w-full px-4 lg:w-4/12 h-screen overflow-y-scroll scrollbar-hidden sticky top-0 ">
            <div className=" mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
              <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                Related Posts
              </h3>
              <ul className="p-8">
                {filteredBlogs.data.map(
                  (
                    i: {
                      id: any;
                      attributes: {
                        title: string;
                        thumbnail: {
                          data: {
                            attributes: {
                              formats: { thumbnail: { url: any } };
                            };
                          };
                        };
                        createdAt: moment.MomentInput;
                      };
                    },
                    j: Key | null | undefined
                  ) => (
                    <li
                      key={j}
                      className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
                    >
                      <RelatedPost
                        id={i.id}
                        title={i.attributes.title}
                        image={`${process.env.NEXT_PUBLIC_BACKEND_URL}${i.attributes.thumbnail.data.attributes.formats.thumbnail.url}`}
                        slug={i.attributes.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}
                        date={moment(i.attributes.createdAt).fromNow()}
                      />
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          {children}

          {/* <NewsLatterBox /> */}
        </div>
      </div>
    </section>
  );
}
