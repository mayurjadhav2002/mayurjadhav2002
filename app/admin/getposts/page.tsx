
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: blogs } = await supabase.from('blogs').select("*")
 
.select()
        
  return (
    <>
     <div className="container mx-auto py-20 mt-10">
  <h1 className="text-3xl font-bold mb-4">All Blogs</h1>
  <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Likes</th>

        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>

        {/* Add more fields as needed */}
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {blogs && blogs.map((blog) => (
        <tr key={blog.id}>
          <td className="px-6 py-4 whitespace-nowrap">{blog.id}</td>
          <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
          <td className="px-6 py-4 whitespace-nowrap">{blog.created_at}</td>
          <td className="px-6 py-4 whitespace-nowrap">{blog.likes}</td>

          <td className="px-6 py-4 whitespace-nowrap">{blog.views}</td>

          {/* Add more cells for additional fields */}
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </>
  )
}
