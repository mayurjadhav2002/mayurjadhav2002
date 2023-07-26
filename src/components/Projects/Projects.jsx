import React from 'react'
import MainProjects from './MainProjects';
import { Link } from 'react-router-dom';
export default function Projects() {
  const [show, toggleShow] = React.useState(false);

  return (
    <>
      <div
        className='mt-2 main-div backdrop:shadow-1 shadow-sm-light '
      >


        <h2 className="animate__fadeInUp animate__animated font-sans text-3xl font-bold text-center text-gray-900 sm:text-4xl sm:leading-none z-10">
          📔 Projects
        </h2>
        <div className="p-5 mx-auto  md:max-w-full lg:py-20">

          <div className="grid gap-2 lg:grid-cols-5 md:grid-cols-2 lg:max-w-full">


            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
              <Link
                to="https://github.com/mayurjadhav2002/Emotion-detection-NLP"
                target='blank'
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— June 2023</span>
                  <Link className='flex' to="https://github.com/mayurjadhav2002/qbytespace">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg> code</Link>

                </p>
                <p

                  aria-label="Article"
                  title="TTE (Text To Emotion) Emotion Detection
                "
                  className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  StudResource
                </p>
                <p className="mb-5 text-gray-700">
                  Web application that provides learners a platform for accessing information about free resources, internships, and
                  companies’ paid software giveaways on the internet.
                </p>
              </Link>
            </div>




            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
              <Link
                to="https://github.com/mayurjadhav2002/qbytespace"

                target='blank'
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— June 2023</span>
                  <Link className='flex' to="https://github.com/mayurjadhav2002/qbytespace">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg> code</Link>

                </p>
                <p

                  aria-label="Article"
                  title="TTE (Text To Emotion) Emotion Detection
                "
                  className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Eflux
                </p>
                <p className="mb-5 text-gray-700">
                  Mobile Application that helps EV owners by simplifying the process of charging electric vehicles by
                  establishing a direct connection between station owners and users.
                </p>
              </Link>
            </div>


            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
              <Link
                to="https://github.com/mayurjadhav2002/ZENITH"

                target='blank'
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— Dec 2022</span>
                  <Link className='flex' to="https://github.com/mayurjadhav2002/ZENITH"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg> code</Link>
                </p>
                <p

                  aria-label="Article"
                  title="Projects
                "
                  className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Zenith - an advanced Chatbot
                </p>
                <p className="mb-5 text-gray-700">
                  The code runs a loop that prompts the user for input and generates a response using the defined functions.
                  The chatbot is able to effectively answer a wide range of questions and provide information to the user.
                </p>
              </Link>
            </div>

            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
              <Link
                to="/"


                href="https://github.com/mayurjadhav2002/Potato-Disease-Classification-app"
                target='blank'
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— Oct 2022</span>
                  <Link className='flex'
                    to="/"          >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                    </svg> code</Link>
                </p>
                <p

                  aria-label="Article"
                  title="Projects
                "
                  className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Educational Event Management
                </p>
                <p className="mb-5 text-gray-700">
                  an education event management
                  application , which will help organizations to promote their events and students can
                  directly enroll to the program through this event management platform.
                </p>
              </Link>
            </div>

         
                <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
                  <Link
                  to="https://github.com/mayurjadhav2002/Udemy-Coupons-API"                    target='blank'
                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                  >
                    <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                      <span className="text-gray-600">— 1 Feb 2020</span>
                      <Link className='flex' to="https://github.com/mayurjadhav2002/Udemy-Coupons-API"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                        </svg> code</Link>
                    </p>
                    <p

                      aria-label="Article"
                      title="Projects
                      "
                      className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      URL Shortner

                    </p>
                    <p className="mb-5 text-gray-700">
                      Udemy Coupon code API v.1.0.0 is built using flask and Beautifulsoup, can be used to provide more resources to the student by integrating it in your application.
                    </p>
                  </Link>
                </div>





            </div>




            {show &&

              <MainProjects />

            }



            <div className='text-center justify-end w-full p-3'>
              <button onClick={() => toggleShow(!show)} className="animate__fadeInUp animate__animated font-sans btn btn-outline btn-primary  font-bold text-center text-gray-900 ">
                View {show ? 'Less' : 'More'}
              </button>


            </div>


          </div>

        </div >
      </>
      )
}



