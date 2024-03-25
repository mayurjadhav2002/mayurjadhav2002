import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";

import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function WriteBlog() {
  const { id } = useParams(); // Extract id parameter from the URL

  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [update, setUpdate] = useState(false); // State to indicate update mode
  const [thumbUrl, setThumburl] = useState("");
  useEffect(() => {
    if (id && window.location.pathname === `/write/edit/${id}`) {
      // Fetch data for editing based on id
      fetchData(id);
      setUpdate(true);
    }
  }, [id]);
  const fetchData = async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/${id}`
      );
      const {
        blog_title,
        blog_content,
        blog_description,
        category,
        thumbnail,
      } = response.data;
      setTitle(blog_title);
      setValue(blog_content);
      setDesc(blog_description);
      setCategory(category);
      setFileName(thumbnail);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleImage = async () => {
    try {
      setLoading(true);

      const thumbnailImage = document.getElementById("file_input").files[0];
      const formData = new FormData();
      formData.append("image", thumbnailImage);

      const imgBbResponse = await axios.post(
        `${import.meta.env.VITE_IMGBB_API}`,
        formData
      );

      const thumbnailUrl = imgBbResponse.data.data.thumb.url;
      setThumburl(thumbnailUrl);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      alert("Error Uploading Image: " + error.message);
    }
  };

  const handleSubmit = async () => {
    try {
      if (update) {
        // Update existing post
        const updatedFields = {};
        if (title !== "") updatedFields.blog_title = title;
        if (value !== "") updatedFields.blog_content = value;
        if (desc !== "") updatedFields.blog_description = desc;
        if (category !== "") updatedFields.category = category;
        if (thumbUrl != "" && thumbUrl != fileName)
          updatedFields.thumbnail = thumbUrl;

        await axios.put(
          `${import.meta.env.VITE_BACKEND_URL}/${id}`,
          updatedFields
        );
      } else {
        // Create new post
        await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}`,
          {
            blog_title: title,
            blog_content: value,
            blog_description: desc,
            category,
            thumbnail: thumbUrl,
          }
        );
      }

      setLoading(false);
      alert(`Blog ${update ? "Updated" : "Published"} successfully!`);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
      alert("Error publishing blog: " + error.message);
    }
  };
  return (
    <div className="px-10 py-10 flex flex-col gap-5">
      <div className="flex justify-start items-center">
        <Link
          to="/write"
          className="flex gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm 
        px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-short"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
            />
          </svg>
          <span>Go back</span>
        </Link>
      </div>
      <h1 className="text-xl font-bold">Title: {title}</h1>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="default-input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          placeholder="Enter the Title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>

      <div className="">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload Thumbnail
        </label>
        <input
          onChange={handleImage}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Blog
        </label>
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
        />{" "}
      </div>

      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Category
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          id="default-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Description
        </label>
        <textarea
          rows="4"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
        ></textarea>
      </div>

      <div>
        <button
          type="button"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          {update
            ? loading
              ? "Updating"
              : "Update"
            : loading
            ? "Publishing..."
            : "Publish"}
        </button>
        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Save Draft
        </button>
      </div>
    </div>
  );
}

export default WriteBlog;
