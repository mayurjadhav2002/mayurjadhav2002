import { CalendarIcon } from "@radix-ui/react-icons";
import React from "react";
interface WorkExperience {
  role: string;
  company: string;
  date: string;
  imageSrc: string;
}

const workData: WorkExperience[] = [
  {
    role: "Software Engineer Intern",
    company: "Zevo.ai",
    date: "August 2023 - Present",
    imageSrc:
      "https://www.zevo.ai/_next/image?url=%2Fimages%2Flogo%2Flogo-2.png&w=256&q=75",
  },
  {
    role: "Web Developer Intern",
    company: "Cozy Notion",
    date: "April 2023 - July 2023",
    imageSrc:
      "https://i.postimg.cc/SNGNH1Dc/343942151-1380089226158823-6485076690993314285-n.jpg",
  },
  {
    role: "Chegg Expert",
    company: "Computer Science Expert",
    date: "May 2022 - Present",
    imageSrc:
      "https://play-lh.googleusercontent.com/UqiaMYhCLH0q9KTWkSCKJYYLIL6c0lmon37X9p83htfTkko4aLkXgX51y8pBoDSCNUs",
  },
];

export default function Work() {
  return (
    <div className="pt-8 p-5 z-10 " id="experience">
      <div className="">
        <h2 className="animate__fadeInUp animate__animated font-sans text-5xl lg:text-6xl font-bold text-center text-gray-300 sm:text-3xl sm:leading-none">
          Work
        </h2>
        <h2 className="animate__fadeInUp animate__animated font-sans text-3xl lg:text-6xl font-bold text-center text-primary sm:text-3xl sm:leading-none">
          Experience
        </h2>

        <div className="grid justify-center mt-5 mb-5">
          {workData.map((work, index) => (
            <div
              key={index}
              className="flex flex-col my-3 h-auto lg:h-40 md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg hover:scale-105 hover:duration-500 cursor-pointer"
            >
              <img
                className="w-full  md:h-auto h-40   object-cover bg-blue-900 lg:object-fit md:w-48 dark:bg-dark rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={work.imageSrc}
                loading="lazy"
                alt=""
              />
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-gray-900 text-xl font-medium">
                  {work.role}
                </h5>
                <h6 className="text-gray-500">{work.company}</h6>
                <p className="text-gray-700 text-base mb-4"></p>
                <p className="text-gray-600 text-sm flex items-center">
              <CalendarIcon className="mr-1"/> {" "}
                  {work.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
