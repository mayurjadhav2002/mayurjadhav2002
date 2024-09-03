import Image from "next/image";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";
import SharePost from "@/components/main/Blog/SharePost";
import ProfileCard from "@/components/main/Blog/ProfileCard";

// Function to fetch blog data
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

// Function to generate metadata dynamically based on the blog data
export async function generateMetadata({ params }: { params: { slug: string[] } }) {
  const blog = await getBlog(params.slug[1]);
  const canonicalUrl = `https://mayurjadhav.tech/blog/${blog.title.toLowerCase().replace(/\s+/g, "-")}/${params.slug[1]}`;

  return {
    title: blog.title || "Blog Title",
    description: blog.description || "Blog Description",
    keywords: blog.description || "Blog Keywords",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: canonicalUrl,
      images: [blog.thumbnail],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.thumbnail,
    },
    
  };
  
}

// Server component for the blog page
const BlogPage = async ({ params }: { params: { slug: string[] } }) => {
  const blog = await getBlog(params.slug[1]);

  if (!blog) {
    return (
      <div className="w-full px-4 lg:w-8/12 overflow-hidden">
        No blog data found.
      </div>
    );
  }

  return (
    <>
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
