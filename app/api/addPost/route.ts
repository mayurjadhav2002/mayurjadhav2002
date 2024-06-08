import { db } from "@/lib/db";
import { randomInt } from "crypto";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { title, content, thumbnail, description } = await req.json(); 

    if (!title || !content) {
      return new NextResponse("Missing Information", { status: 400 });
    }

    const Blog = await db.blog.create({
      data: {
        title: title,
        content: content,
        thumbnail: thumbnail,
        description:description,
        views: randomInt(300, 500) // Add the 'views' property with a default value
      },
    });
    console.log("Blog Created:", Blog);
    return NextResponse.json(Blog, { status: 200 });
  } catch (error) {
    console.error("[POST TODO]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
