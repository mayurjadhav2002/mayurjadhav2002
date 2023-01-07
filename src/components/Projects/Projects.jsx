import React from 'react'
import MainProjects from './MainProjects';
export default function Projects() {
  const [show, toggleShow] = React.useState(false);

  return (
    <div
    className='mt-2 main-div backdrop:shadow-1 shadow-sm-light '
    >

  
    <h2 className="animate__fadeInUp animate__animated font-sans text-3xl font-bold text-center text-gray-900 sm:text-4xl sm:leading-none z-10">
    📔 Projects
     </h2>    
          <div className="p-5 mx-auto  md:max-w-full lg:py-20">
         
            <div className="grid gap-2 lg:grid-cols-5 md:grid-cols-2 lg:max-w-full">
         
            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
            <a
            href="https://github.com/mayurjadhav2002/Emotion-detection-NLP"
            target='blank'
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">— Nov 2022</span>
              </p>
              <p
                
                aria-label="Article"
                title="TTE (Text To Emotion) Emotion Detection
                "
                className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
              TTE (Text To Emotion) Emotion Detection
              </p>
              <p className="mb-5 text-gray-700">
              Emotion Detection Machine Learning Project to identify the emotions of individuals based on their tweets, text messages, or other written communications

              </p>
              </a>
            </div>


            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
            <a
            href="https://github.com/mayurjadhav2002/ZENITH"
            target='blank'
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">— Dec 2022</span>
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
              the code runs a loop that prompts the user for input and generates a response using the defined functions.
              The chatbot is able to effectively answer a wide range of questions and provide information to the user.
              </p>
              </a>
            </div>


            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
            <a
            href="https://github.com/mayurjadhav2002/flask_url_shortner"
            target='blank'
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">— Nov 2022</span>
              </p>
              <p
                
                aria-label="Article"
                title="Projects
                "
                className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
              Brain Tumor Detection
              </p>
              <p className="mb-5 text-gray-700">
              Build a machine-learning model for detecting and classifying brain tumors in medical images. My goal was to
              accurately identify the presence of a brain tumor in an image using the most effective approach.

              </p>
              </a>
            </div>


            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
            <a
            href="https://github.com/mayurjadhav2002/Potato-Disease-Classification-app"
            target='blank'
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">— Oct 2022</span>
              </p>
              <p
                
                aria-label="Article"
                title="Projects
                "
                className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
              Early Potato Disease Recognizer
              </p>
              <p className="mb-5 text-gray-700">
              Build an image classification model to detect and classify distinct visual symptoms or diseases in potato plants
using a convolutional neural network (CNN).
              </p>
              </a>
            </div>


              <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
              <a
              href="https://github.com/mayurjadhav2002/flask_url_shortner"
              target='blank'
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— 1 Feb 2020</span>
                </p>
                <p
                  
                  aria-label="Article"
                  title="Projects
                  "
                  className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                Projects

                </p>
                <p className="mb-5 text-gray-700">
                A Lightweight URL shortner Application built with Flask, SqlAlechemy, Bootstrap. This Application will allow you to short your own URL or host this app as a URL Shorter Under your maintenance.


                </p>
                </a>
              </div>
            
             
            </div>
              {show && 
                
            <MainProjects/>
              
              }
          
           
              
            <div className='text-center justify-end w-full p-3'>
<button  onClick={() => toggleShow(!show)} className="animate__fadeInUp animate__animated font-sans btn btn-outline btn-primary  font-bold text-center text-gray-900 ">
View {show ? 'Less' : 'More'}
            </button>    

         
            </div>


          </div>

    </div>
  )
}



