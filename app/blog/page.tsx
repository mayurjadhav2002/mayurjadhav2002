"use client"
import Lottie from "lottie-react";
import development from "@/public/assets/Lottie/development.json";

function Page() {
  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center p-10 mt-20">
      <h1 className="text-3xl font-bold text-center mb-8">🚧 This Page is Under Development 🚧</h1>
        <Lottie
          animationData={development}
          className="flex justify-center items-center"
          loop={true}
        />
      </div>
    </div>
  );
}

export default Page;
