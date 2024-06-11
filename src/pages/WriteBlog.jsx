import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function WriteBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [postedOn, setPostedOn] = useState("");
  const handleThumbnailUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=8404724f5173e9645e5c50c3001c455b",
        formData
      );
      setThumbnailUrl(response.data.data.url);
    } catch (error) {
      console.error("Error uploading thumbnail:", error);
    }
  };

  const handleSubmit = async () => {
    const formattedPostedOn = new Date(postedOn);

    const postData = {
      title: title,
      description: description,
      content: content,
      thumbnail: thumbnailUrl,
      createdOn: formattedPostedOn,
    };

    try {
      const response = await axios.post(
        "https://flask-hello-world-lemon-seven.vercel.app/blogs/new",
        postData
      );
      console.log("Blog posted:", response.data);
      if (response.data.success) {
        alert("blog posted");
      }
      window.location.href = "/";
    } catch (error) {
      console.error("Error posting blog:", error);
    }
  };

  return (
    <div className="flex flex-col gap-10 text-left">
            <div className="flex items-center justify-between">
          
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">New Blog</h5>
          <Link to="/" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            View All blogs
          </Link>
  
          </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="description"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Description
        </label>
      </div>

      <Editor
        apiKey="gjisk9kp3ac7f4wn2jexuubnnbwhhrwfsk43zd6umeyt11tz"
        init={{
          tinydrive_dropbox_app_key: "rv6nw5e1cs5xj8e",
          plugins:
            "preview powerpaste casechange importcss searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed codesample table charmap pagebreak nonbreaking anchor tableofcontents insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker help formatpainter pageembed charmap mentions quickbars linkchecker emoticons advtable footnotes mergetags autocorrect typography advtemplate",
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        }}
        initialValue="Welcome to TinyMCE!"
        onEditorChange={(newContent) => setContent(newContent)}
      />

      <div className="flex items-center justify-start">
        <form className="max-w-lg mx-auto">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="thumbnail"
          >
            Thumbnail
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="thumbnail_help"
            id="thumbnail"
            type="file"
            onChange={handleThumbnailUpload}
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="thumbnail_help"
          >
            A profile picture is useful to confirm your are logged into your
            account
          </div>
        </form>
        <form className="max-w-lg mx-auto">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="postedOn"
          >
            Posted on
          </label>
          <input
            type="datetime-local"
            name="postedOn"
            id="postedOn"
            value={postedOn}
            onChange={(e) => setPostedOn(e.target.value)}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="postedOn_help"
          >
            A profile picture is useful to confirm your are logged into your
            account
          </div>
        </form>
      </div>

      <div className="flex items-center justify-between gap-10">
        <button
          type="button"
          className="w-full py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Save Draft
        </button>

        <button
          type="button"
          onClick={handleSubmit}
          className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Post
        </button>
      </div>
    </div>
  );
}
