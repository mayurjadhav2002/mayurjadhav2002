"use client"
import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const MyEditor = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    // Add custom styles to the editor
    const customStyles = document.createElement("style");
    customStyles.innerHTML = `
      .ql-table {
        width: 100%;
        border-collapse: collapse;
      }
      .ql-table td {
        border: 1px solid #ddd;
        padding: 8px;
      }
    `;
    document.head.appendChild(customStyles);
  }, []);
  const quillRef = useRef(null);

  const imageHandler = () => {
    const editor = quillRef.current.getEditor();
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (/^image\//.test(file.type)) {
        const formData = new FormData();
        formData.append("image", file);
        const res = await axios.post(
            "https://api.imgbb.com/1/upload?key=d879b756a8dab5809d755c80bb52a8e9",
            formData
          ); // upload data into server or aws or cloudinary
        const url = res?.data?.data?.display_url;
        console.log(res)
        editor.insertEmbed(editor.getSelection(), "image", url);
      } else {
        alert('You could only upload images.');
      }
    };
  }

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', "link","strike"],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['image', "video",],
        [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466'] }]
      ],
      handlers: {
        image: imageHandler
      }
    },
  }), [])

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    
    "strike",
    "link",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "code-block",
    "table",
  ];

  return (
    <>
    <div className='relative py-10'>
        

    <ReactQuill
      theme="snow"
      className="mt-36 p-10"
      value={value}
      onChange={setValue}
      modules={modules}
      formats={formats}
      ref={quillRef} // Assign ref to Quill instance
    />

    </div>

      </>
  );
};

export default MyEditor;
