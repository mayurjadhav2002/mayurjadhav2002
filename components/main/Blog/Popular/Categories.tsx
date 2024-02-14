import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

function Categories() {
    const Categories: any = [
        {
            category: 'Programming',
            url: ' '
        },
        {
            category: 'Code Visualizer',
            url: ' '
        },
        {
            category: 'Python',
            url: ' '
        },
        {
            category: 'Productivity',
            url: ' '
        },
        {
            category: 'Code Analyzer',
            url: ' '
        },

    ]
    return (
        <div className="mb-10 rounded-md bg-primary bg-opacity-5 dark:bg-opacity-10">
            <h3 className="border-b border-body-color border-opacity-10 py-4 px-8 text-lg  font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                Popular Category
            </h3>
            <ul className="py-6 px-8">
                {Categories.map((i: { url: string | UrlObject; category: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined }, j: React.Key | null | undefined)=>
                <li key={j}>
                    <Link href={i.url} className="mb-3 inline-block text-base font-medium text-body-color  hover:text-primary  dark:text-gray-300 dark:hover:text-primary"
                    >
                        {i.category}
                    </Link>
                </li>
                )}

            </ul>
        </div>

    )
}

export default Categories