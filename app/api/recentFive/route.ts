import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Fetch the most recent five blogs
    const recentBlogs = await db.blog.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
    });

    // Respond with the fetched blogs
    return NextResponse.json(recentBlogs, { status: 200 });
  } catch (error) {
    console.log("[Fetched Recent Blogs]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
