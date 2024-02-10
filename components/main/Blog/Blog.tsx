import React from 'react'
import NewsLatterBox from '../Contact/NewsLatterBox'
import blogData from './blogData';
import Link from 'next/link';

function Card({ i }) {
  return (
    <>
      <img className='h-32 w-full rounded-lg object-cover md:h-28 md:w-28' src={i.image} alt='' />

      <div className='px-0 py-2 leading-4 md:px-4 '>
        <div className='flex flex-col justify-between'>
          <div>
            <span className='absolute -mt-8  ml-2 mr-2 w-auto  rounded-full bg-blue-100 px-2.5 py-0.5  text-xs text-blue-800 dark:bg-blue-900 dark:text-blue-300 md:relative md:ml-0'>
              {" "}
              {i.tags[0]}
            </span>

            <h5 className='line-clamp-2 text-ellipsis py-1 text-xl font-bold text-gray-900 dark:text-white'>
              {i.title}
            </h5>
          </div>
          <div>
            <button className='text-xs text-blue-500 underline '>Read More...</button>
          </div>
        </div>
      </div>
    </>
  );
}
function Blog() {
  const filteredBlogs = blogData.slice(0, 4);

  return (
    <section id='blog' className='bg-primary/5 py-16 md:py-20 lg:py-28'>
      <div className='container'>
        <div className='grid grid-cols-1 items-center justify-between gap-6 md:grid-cols-2'>
          <div className='col-span-1'>
            <h1 className='py-2 text-lg font-semibold'>Latest from blogs</h1>
            <div className='py-2'>
              <div>
                <div className='flex flex-col gap-5'>
                  {filteredBlogs.map((i, j) => (
                    <Link
                      href={i.link}
                      key={j}
                      passHref={true}
                      className='items-top flex flex-col
                             rounded-lg border border-gray-200 bg-gray-50 p-3
                              shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-dark dark:hover:bg-gray-700
 md:flex-row'
                    >
                      <Card i={i} />
                    </Link>
                  ))}
                </div>
              </div>
              {/* <div>
                                    <div className='flex flex-col gap-5'>
                                        {filteredBlogs2.map((i, j) =>
                                            <Link href={i.link} key={j} className="flex flex-col items-top
                             bg-gray-50 dark:bg-dark border border-gray-200 rounded-lg
                              shadow md:flex-row p-3 hover:bg-gray-100 dark:border-gray-700
 dark:hover:bg-gray-700">
                                                <img className="object-cover w-full h-32 md:w-28 md:h-28 rounded-lg" src={i.image} alt="" />

                                                <div className="px-0 py-2 md:px-4 leading-4 ">
                                                    <div className='flex flex-col justify-between'>
                                                        <div>
                                                            <span className="absolute ml-2  md:ml-0 md:relative -mt-10  bg-blue-100 w-auto text-blue-800 text-xs  mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                                                {i.tags[0]}
                                                            </span>

                                                            <h5 className="text-lg font-bold text-gray-900 dark:text-white">{i.title}</h5>

                                                        </div>
                                                        <div>
                                                            <Link href={i.link} className='text-xs text-blue-500 underline '>Read More...</Link>
                                                        </div>

                                                    </div>

                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div> */}
            </div>
          </div>
          <div>
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog