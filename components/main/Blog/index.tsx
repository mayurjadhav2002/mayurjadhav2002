import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Blog = () => {
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Come here to see How, What and Why of Zevo.AI."
          center
        />
        <div className="lg:w-3/6 md:w-full aspect-[4/3] relative mx-auto">
          <Image
                  src="/images/under-construction.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full lg:mr-0 relative aspect-[77/40] items-center justify-center"
          />
        </div>
        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
