"use client"
import { AuroraText } from "@/components/ui/aurora-text";
import { CalendarIcon } from "@radix-ui/react-icons";
import React from "react";
interface WorkExperience {
  role: string;
  company: string;
  date: string;
  imageSrc: string;
  fillType?: "cover" | "contain" | "fill";
}

const workData: WorkExperience[] = [
  {
    role: "Junior Software Developer",
    company: "Mapsted",
    date: "April 2024 - Present",
    imageSrc: "https://mapsted.com/img/logo.svg",
    fillType: "contain",
  },
  {
    role: "Software Engineer Intern",
    company: "Zevo.ai",
    date: "August 2023 - January 2024",
    imageSrc:
      "https://www.zevo.ai/_next/image?url=%2Fimages%2Flogo%2Flogo-2.png&w=256&q=75",
    fillType: "contain",
  },
  {
    role: "Web Developer Intern",
    company: "Cozy Notion",
    date: "April 2023 - July 2023",
    imageSrc:
      "https://i.postimg.cc/SNGNH1Dc/343942151-1380089226158823-6485076690993314285-n.jpg",
    fillType: "cover",
  },
  {
    role: "Chegg Expert",
    company: "Computer Science Expert",
    date: "May 2022 - Present",
    imageSrc:
      "https://play-lh.googleusercontent.com/UqiaMYhCLH0q9KTWkSCKJYYLIL6c0lmon37X9p83htfTkko4aLkXgX51y8pBoDSCNUs",
    fillType: "cover",
  },
];

export default function Work() {
  return (
    <div className="pt-8 p-5 z-10 " id="experience">
      <div className="">
      <h1 className="text-5xl my-10 text-center font-bold tracking-tighter  lg:text-7xl">
      Work <AuroraText>Experience</AuroraText>
    </h1>

        <div className="grid justify-center mt-5 mb-5">
          {workData.map((work, index) => (
            <div
              key={index}
              className="flex flex-col my-3 h-auto lg:h-40 md:flex-row md:max-w-xl rounded-lg bg-white 
              dark:bg-dark shadow-lg hover:scale-105 hover:duration-200 cursor-pointer"
            >
              <img
                className={`w-full 
                  dark:bg-white
                  md:h-auto h-40   object-${work.fillType} bg-blue-200 lg:object-fit md:w-48 
                   rounded-t-lg md:rounded-none md:rounded-l-lg`}
                src={work.imageSrc}
                loading="lazy"
                alt={work.company + "Working as a " + work.role}
              />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium dark:text-primary">
                  {work.role}
                </h5>
                <h6 className="text-gray-500 dark:text-gray-200">
                  {work.company}
                </h6>
                <p className="text-gray-700  text-base mb-4"></p>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
                  <CalendarIcon className="mr-1" /> {work.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
