"use client";

import React from "react";
import animation from "@/public/assets/Lottie/error.json";
import Lottie from "lottie-react";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col w-full justify-center items-center p-10 mt-10">
      
      <Lottie
        animationData={animation}
        className="flex justify-center items-center"
        loop={true}
      />
    </div>
  );
}
