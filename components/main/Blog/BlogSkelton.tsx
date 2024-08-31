import React from 'react'

function BlogSkelton() {
  return [1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="w-full mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10"
        >
          <div className="flex justify-start items-center gap-4">
            <div className="w-[60px] h-[60px] rounded-lg bg-gray-200"></div>
            <div>
              <div className="w-[200px] h-6 bg-gray-200 rounded-lg dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            </div>
          </div>
        </div>
      ))} 


export default BlogSkelton