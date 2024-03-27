"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, SetStateAction, useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";
import Sidebar from "./Sidebar";
import "@/styles/header.min.css";

const Header = () => {
  const [visible, setVisible] = useState(false);

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setVisible(!visible);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: SetStateAction<number>) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          {visible && (
            <div
              data-aos="fade-left"
              className="lg:hidden transition-all duration-150  z-8 w-3/4 fixed right-0 h-screen bg-white dark:bg-black rounded-lg transform "
            >
              <div className="px-2 pt-2 pb-4 space-y-1 mt-24 h-full">
                <Sidebar />
              </div>
            </div>
          )}

          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo self-center navbar-names whitespace-nowrap text-2xl dark:text-white block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                Mayur Jadhav
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      visible ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      visible ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      visible ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full  opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12 pt-2">
                    <li className="group relative ">
                      <Link
                        href="https://l.linklyhq.com/l/1xHte"
                        target="_blank"
                        className={`flex  text-base  text-dark group-hover:opacity-70 dark:text-white`}
                      >
                        <span className="px-3 py-2 rounded-lg font-semibold bg-blue-400/30 active:animate-ping">
                          Resume / CV
                        </span>
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/#experience"
                        className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white `}
                      >
                        Work
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link
                        href="/#project"
                        className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white `}
                      >
                        Project
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        href="/#certifications"
                        className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white `}
                      >
                        Certifications
                      </Link>
                    </li>

                    <li className="group relative">
                      <Link
                        href="/blog"
                        className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white `}
                      >
                        Blogs
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden lg:flex xl:flex  justify-end pr-16 lg:pr-0 sm:gap-4 md:order-2 gap-3 items-center">
                <Link
                  href="/contact"
                  // className="ease-in-up hidden rounded-md bg-primary py-3 px-8 text-base font-bold text-white transition duration-300
                  // hover:bg-opacity-90 hover:shadow-signUp md:block md:px-9 lg:px-6 xl:px-9"
                  className="ease-in-up hidden rounded-md text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold
                    text-sm py-3 px-8 hover:shadow-signUp md:block  duration-300  md:px-9 lg:px-6 xl:px-9  text-center 
                 items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Contact{" "}
                </Link>

                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
