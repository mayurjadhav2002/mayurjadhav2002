
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: any }) => {
  const { title, image, paragraph, author, tags, publishDate, link, meta } = blog;
  return (
    <>

      <Link href={link}
        className="wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one m-2 dark:bg-dark"
        data-wow-delay=".1s"
      >
        <div className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill />
        </div>
        <div className="pt-6 px-6  sm:p-8 md:py-8 md:px-6 lg:px-8 lg:pt-6 xl:py-8 xl:px-5 2xl:p-8">
          <h3 className=" text-xl line-clamp-2 
          font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary 
          sm:text-2xl"
          >
            {title}
          </h3>
          <p className="mt-4 mb-6 line-clamp-3
          font-medium dark:text-gray-200">
            {paragraph}
          </p>
          <div className="flex items-center mt-auto border-t-2 
           dark:border-white dark:border-opacity-10 py-1"> {/* mt-auto to push it to the bottom */}
            <div className="mr-5 flex pt-3 items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
  </svg>
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By {author.name}
                </h4>
                <p className="text-xs text-body-color dark:text-gray-200">{author.designation}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color dark:text-gray-200">{publishDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleBlog;
