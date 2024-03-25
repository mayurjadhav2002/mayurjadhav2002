import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppBlog from "./Components/AppBlog";
import WriteBlog from "./Components/WriteBlog";
import Form from "./Components/Form";
import { useEffect, useState } from "react";

function App() {
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    const isadmin = localStorage.getItem("admin");
    if (isadmin) {
      setAdmin(true);
    }
  }, [admin]);
  const handleAdmin = () => {
    const set = localStorage.setItem("admin", { admin: true });
    setAdmin(true);
    if (set) {
      alert("Admin Logged In");
    }
  };
  return (
    <>
      <Routes>
        {admin ? (
          <>
            <Route path="/" element={<AppBlog />} />
            <Route path="/write" element={<WriteBlog />} />
            <Route path="/write/edit/:id" element={<WriteBlog />} />
          </>
        ) : (
          <Route path="/" element={<Form setAdmin={handleAdmin} />} />
        )}
      </Routes>
    </>
  );
}

export default App;
