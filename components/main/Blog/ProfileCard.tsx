"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ProfileCard() {
  const [header, setheader] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 250) {
      setheader(true);
    } else {
      setheader(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  return (
    <div
      className={` flex flex-wrap items-center    ${
        header
          ? `!fixed rounded-3xl !z-[999] !bg-primary !bg-opacity-30 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-50
           top-0 mt-20
          
          `
          : ""
      }`}
    >
      <div className="mr-10  flex items-center">
        <div className="mr-1">
          <div
            className={`relative h-10 w-10 overflow-hidden rounded-full
        
          `}
          >
            <Image
              width={100}
              height={100}
              src="https://avatars.githubusercontent.com/u/63432459?v=4"
              alt="Mayur Jadhav"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full">
          <h4 className="text-md font-medium text-body-color dark:text-gray-200">
            By <span>Mayur Jadhav</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
