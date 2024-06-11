import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewBlogs() {
    const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Function to fetch all blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://flask-hello-world-lemon-seven.vercel.app/blogs');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <div>
        <div className="flex items-center justify-between mb-10">
          
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blogs</h5>
        <Link to="/write" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
          Write new blog
        </Link>

        </div>
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Title
                </th>
                <th scope="col" className="px-6 py-3">
                    Created on
                </th>
                <th scope="col" className="px-6 py-3">
                    Views
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {blogs.map(blog => (
              <tr key={blog._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {blog.title}
                </td>
                <td className="px-6 py-4">
                  {new Date(blog.createdOn).toLocaleDateString()} {/* Convert createdOn to readable date */}
                </td>
                <td className="px-6 py-4">
                  {blog.views}
                </td>
                <td className="px-6 py-4">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    <Link to={`/edit/${blog._id}`} type="button" className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white">
                      Edit
                    </Link>
                    <button type="button" className="px-4 py-2 text-sm font-medium text-red-600 bg-red-200 border-t border-b border-red-200 hover:bg-red-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-red-800 dark:border-red-700 dark:text-white dark:hover:text-white dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:text-white">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ViewBlogs