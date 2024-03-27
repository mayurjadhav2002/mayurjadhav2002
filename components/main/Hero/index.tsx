import React from "react";
// import Typewriter from "typewriter-effect";
import Link from "next/link";
import Marque from "./Marque";
import Typing from "./TypingEffect";
function Hero() {
  return (
    <section
      id="home"
      className="relative z-10  overflow-hidden pb-[50px] pt-[120px] md:pb-[100px] md:pt-[50px] xl:pb-[100px] xl:pt-[50px] 2xl:pb-[120px] 2xl:pt-[100px]"
    >
      <div className="w-5/6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <div className="w-full lg:w-3/4 text-center">
            <div>
              <p
                className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  text-center
                uppercase bg-teal-accent-400 text-teal-900 md:text-center rounded-full dark:text-primary"
              >
                Loves Adventures?
              </p>
              <h1
                className="font-sans text-center -ml-5
                   text-4xl leading-10 font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none mb-6 dark:text-white "
              >
                👋 Hello, I&apos;m
                <br className="md:block mt-2 lg:hidden" />
                <span className="md:inline-block lg:ml-2 m-0 text-blue-600 text-deep-purple-accent-400 ">
                  <Typing />
                </span>
              </h1>
              <p className="text-gray-700 text-lg text-center md:text-lg dark:text-white">
                Hey hii there, I am software developer with expertise in Python,
                Javascript, PHP, and APIs.You know, I possess knowledge of
                well-known frameworks like React, Flask, and NodeJS.
                <br/>
                <Link
                  href="https://l.linklyhq.com/l/1xHte"
                  target="_blank"
                  className="my-2 text-sm text-blue-500 text-center"
                >
                  You Can View My CV/Resume through this link 🔗
                </Link>
              </p>

              <div className="flex w-3/5 lg:w-1/5 items-center text-center mx-auto sm:gap-4 md:order-2 gap-3 justify-evenly mt-5 animate__animated animate__zoomInUp">
                {
                  //Facebook
                }
                <Link
                  href="https://www.facebook.com/mayurshrikantjadhav"
                  target="blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-facebook text-blue-500 hover:text-blue-600 cursor-pointer"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </Link>

                {
                  //Github
                }
                <Link href="https://github.com/mayurjadhav2002" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-github text-gray-800 hover:text-gray-900"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </Link>

                {
                  // Linked In
                }
                <Link
                  href="https://www.linkedin.com/in/mayur-jadhav-1824251aa/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-linkedin text-blue-600 hover:text-blue-500"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>{" "}
                </Link>

                {
                  //Medium
                }
                <Link
                  href="https://hackwell-school.medium.com/"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-medium text-gray-700 hover:text-gray-800"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <img
            src={"./assets/img.png"}
            alt="Hii Image is Here but you can&apos;t see!"
            loading="lazy"
            className=" right-0 bottom-0"
          />
        </div>
      </div>

      <Marque />
    </section>
  );
}
export default Hero;
