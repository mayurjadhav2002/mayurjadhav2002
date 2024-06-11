import { Route, Routes } from 'react-router-dom'
import './App.css'
import ViewBlogs from './pages/ViewBlogs'
import WriteBlog from './pages/WriteBlog'
import EditBlog from './pages/EditBlog'
import Error from './pages/Error'

function App() {

  return (
    <>
 <Routes>
          <Route path="/" element={<ViewBlogs />} />
          <Route path="/write" element={<WriteBlog />} />
          <Route path="/edit/:id" element={<EditBlog />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
