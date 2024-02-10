import Link from "next/link";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

import ThemeToggler from "./ThemeToggler";
import { SlDocs } from "react-icons/sl";
import { FaCertificate } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { GiGraduateCap } from "react-icons/gi";

function Sidebar() {
  return (
    <div>
      <ul>
        <li>
          <Link
            href={"/"}
            className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 dark:text-white hover:bg-gray-100
                         dark:hover:bg-black hover:text-gray-700"
          >
            <AiOutlineHome className="mr-3" /> Home
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="/#experience"
            className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 dark:text-white hover:bg-gray-100
                        dark:hover:bg-black hover:text-gray-700"
          >
            <MdWorkHistory className="mr-3" />
            Work
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="/#project"
            className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 dark:text-white hover:bg-gray-100
                        dark:hover:bg-black hover:text-gray-700"
          >
            <GrProjects className="mr-3" />
            Project
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/#certification"
            className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 dark:text-white hover:bg-gray-100
                        dark:hover:bg-black hover:text-gray-700"
          >
            <FaCertificate className="mr-3" />
            Certifications
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="https://l.linklyhq.com/l/1vyh0"
            className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 dark:text-white hover:bg-gray-100
                        dark:hover:bg-black hover:text-gray-700"
          >
            <GiGraduateCap className="mr-3" />
            Resume/CV
          </Link>
        </li>

        <li className="group relative">
          <Link
            href="/blog"
            className="transition-all duration-500 flex cursor-pointer items-center rounded-lg px-4 py-2 dark:text-white hover:bg-gray-100
                        dark:hover:bg-black hover:text-gray-700"
          >
            <SlDocs className="mr-3" />
            Blogs
          </Link>
        </li>

        <li className="flex bg-gray-50 dark:bg-dark items-center px-2">
          <ThemeToggler />
          Theme Change
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
