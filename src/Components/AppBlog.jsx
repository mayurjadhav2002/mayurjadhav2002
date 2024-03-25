import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const retrievePosts = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_URL}?sortBy=createdAt`
  );
  return response.data;
};

const AppBlog = () => {
  const {
    data: Blogs,
    error,
    isLoading,
  } = useQuery("postsData", retrievePosts);

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmed) {
      try {
        await axios.delete(
          `${import.meta.env.VITE_BACKEND_URL}/${id}`
        );
        alert("Post Deleted");
      } catch (error) {
        alert("Error: " + error);
      }
    } else {
      alert("Deletion cancelled.");
    }
  };

  return (
    <div className="p-10">
        <div className="flex justify-end">
        <Link to="/write" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 
        px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Write New</Link>

        </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-ellipsis w-full">
                Title
              </th>
              <th scope="col" className="px-6 py-3 w-48">
                Created on
              </th>
              <th scope="col" className="px-6 py-3 w-40">
                Category
              </th>
              <th scope="col" className="px-6 py-3 w-20">
                Views
              </th>
              <th scope="col" className="px-6 py-3 w-40">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {Blogs.map((blog, index) => (
              <tr
                key={index}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {blog.blog_title}
                </th>
                <td className="px-6 py-4">
                  {new Date(blog.createdAt)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "2-digit",
                    })
                    .replace(/\//g, "/")}
                </td>
                <td className="px-6 py-4">{blog.category}</td>
                <td className="px-6 py-4">{blog.views}</td>
                <td className="flex justify-center  gap-2 px-6 py-4">
                  <Link
                  to={`/write/edit/${blog.id}`}
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
                dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(blog.id)}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 
dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppBlog;
