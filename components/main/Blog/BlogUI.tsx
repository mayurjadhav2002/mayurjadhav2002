import React from 'react'

function BlogUI() {
    return (
        <>
            <div className="flex flex-col items-top bg-gray-50 dark:bg-dark border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl p-3 hover:bg-gray-100 dark:border-gray-700
 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-32 md:w-44 lg:h-32 rounded-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />

                <div className="px-0 py-2 md:px-4 leading-normal ">
                    <span className="absolute ml-2 md:ml-0 md:relative -mt-10  bg-blue-100 w-auto text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Default</span>

                    <h5 className="lg:text-xl md:text-lg font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>

                </div>
            </div>
        </>
    )
}

export default BlogUI