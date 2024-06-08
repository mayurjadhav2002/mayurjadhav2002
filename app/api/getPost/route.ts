// app/api/todo/route.ts

import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    //fetch todos from the db
    const Blogs = await db.blog.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(Blogs, { status: 200 });
  } catch (error) {
    console.log("[GET Blogs]", error);

    // Handle errors
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
