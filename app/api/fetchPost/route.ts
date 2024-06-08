import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id") || '';

    // Fetch the blog by ID along with views field
    const blog = await db.blog.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        updatedAt: true,
        description: true,
        thumbnail: true,
        views: true, // Include views field
      },
    });

    if (!blog) {
      return new NextResponse("Not found", { status: 404 });
    }
    // Increment views count by one
    const updatedBlog = await db.blog.update({
      where: { id: id },
      data: {
        views: blog.views + 1, // Increment views by one
      },
    });

    // Respond with the updated blog
    return NextResponse.json(updatedBlog, { status: 200 });
  } catch (error) {
    console.error("[Error]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
