"use client"
import Lottie from "lottie-react";
import development from "@/public/assets/Lottie/development.json";
import BlogSection from "./BlogSection";

function Page() {
  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center p-10 mt-20">
       <BlogSection/>
      </div>
    </div>
  );
}

export default Page;
