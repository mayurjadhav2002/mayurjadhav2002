import Image from "next/image";
import Link from "next/link";

const RelatedPost = ({
  id,
  image,
  slug,
  title,
  date,
}: {
  id: any;
  image: string;
  slug: string;
  title: string;
  date: string;
}) => {
  return (
    <Link href={`/blog/${slug}/${id}`}>
      <div className="flex items-center lg:block xl:flex">
        <div className="mr-5 lg:mb-3 xl:mb-0">
          <div className="relative h-[60px] w-[70px] overflow-hidden rounded-md sm:h-[75px] sm:w-[85px]">
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="w-full">
            <h3
              className="mb-[6px] block text-base font-medium leading-snug text-black hover:text-primary dark:text-white dark:hover:text-primary"
            >
              {title}
            </h3>
          <p className="text-xs font-medium text-body-color dark:text-gray-200">
            {date}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RelatedPost;
