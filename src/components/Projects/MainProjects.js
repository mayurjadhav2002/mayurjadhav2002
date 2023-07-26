import React from 'react'
import { Link } from 'react-router-dom'

function MainProjects() {
  return (
    <div className="py-1 grid gap-2 lg:grid-cols-5 md:grid-cols-2 lg:max-w-full">
    <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
            <Link
            to="https://github.com/mayurjadhav2002/Emotion-detection-NLP"
            target='blank'
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
              <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">— Nov 2022</span>
                <Link className='flex' to="https://github.com/mayurjadhav2002/Emotion-detection-NLP"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
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
              </Link>
            </div>
   
            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
            <Link
            to="https://github.com/mayurjadhav2002/flask_url_shortner"
            target='blank'
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
              <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">— Nov 2022</span>
                <Link className='flex' 
                to="https://github.com/mayurjadhav2002/flask_url_shortner"
> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
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
              </Link>
            </div>


            <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
            <Link
            to="https://github.com/mayurjadhav2002/Potato-Disease-Classification-app"
            target='blank'
            className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            aria-label="Category"
          >
              <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                <span className="text-gray-600">— Oct 2022</span>
                <Link className='flex'
                to="https://github.com/mayurjadhav2002/Potato-Disease-Classification-app"
> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
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
              </Link>
            </div>


              <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
              <Link
              to="https://github.com/mayurjadhav2002/flask_url_shortner"
              target='blank'
              className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              aria-label="Category"
            >
                <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
                  <span className="text-gray-600">— 1 Feb 2020</span>
                  <Link className='flex'               to="https://github.com/mayurjadhav2002/flask_url_shortner"
> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
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
                A Lightweight URL shortner Application built with Flask, SqlAlechemy, Bootstrap. This Application will allow you to short your own URL or host this app as a URL Shorter Under your maintenance.


                </p>
                </Link>
              </div>
    <div className="p-8 mx-auto max-w-fit  bg-white border hover:shadow-lg rounded shadow-sm">
    <Link
    to="https://github.com/mayurjadhav2002/React-CCourse-Udemy"
    target='blank'
    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
    aria-label="Category"
  >
      <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
        <span className="text-gray-600">— Sep 2022</span>
        <Link className='flex'     to="https://github.com/mayurjadhav2002/React-CCourse-Udemy"
> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
      </p>
      <p
        
        aria-label="Article"
        title="Projects
        "
        className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
      >
      React Udemy Coupon Code
      </p>
      <p className="mb-5 text-gray-700">
      An interactive web application built with React, using the Udemy Coupon Code API 
      , allows users to easily search for and obtain free MOOC course coupon codes.
      </p>
      </Link>
    </div>


      <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
      <Link
      to="https://github.com/mayurjadhav2002/Udemy-Coupons-API"
      target='blank'
      className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      aria-label="Category"
    >
        <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
          <span className="text-gray-600">— Aug 2020</span>
          <Link className='flex'        to="https://github.com/mayurjadhav2002/Udemy-Coupons-API"
> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
        </p>
        <p
          
          aria-label="Article"
          title="Projects
          "
          className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
        Flask Udemy API

        </p>
        <p className="mb-5 text-gray-700">
        Udemy Coupon code API v.1.0.0 is built using flask and Beautifulsoup, can be used to provide more resources to the student by integrating it in your application.

        </p>
        </Link>
      </div>






      <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
      <Link
      to="/"
      target='blank'
      className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      aria-label="Category"
    >
        <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
          <span className="text-gray-600">— April 2021</span>
          <Link className='flex' to="/"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
        </p>
        <p
          
          aria-label="Article"
          title="Projects
          "
          className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
        Home Remedies Provide
        </p>
        <p className="mb-5 text-gray-700">
        A website providing home remedies for over 220 diseases was developed to provide information during the quarantine period when medical resources were scarce. 
        </p>
        </Link>
      </div>







 
      

      <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
      <Link
      to="https://github.com/mayurjadhav2002/covid-19"
      target='blank'
      className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      aria-label="Category"
    >
        <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
          <span className="text-gray-600">— April 2021</span>
          <Link className='flex'       to="https://github.com/mayurjadhav2002/covid-19"
> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
        </p>
        <p
          
          aria-label="Article"
          title="Projects
          "
          className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
        Cov-19 Helping System         </p>
        <p className="mb-5 text-gray-700">
        developed a website using PHP that connects COVID-19 patients and organizations through a platform. On the website, organizations can share information about resources they have available, such as oxygen, blood, and hospital availability.         </p>
        </Link>
      </div>

      <div className="p-8 mx-auto  bg-white border hover:shadow-lg rounded shadow-sm">
      <Link
      to="https://github.com/mayurjadhav2002/Udemy-Coupons-API"
      target='blank'
      className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
      aria-label="Category"
    >
        <p className="mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase">
          <span className="text-gray-600">— May 2022</span>
          <Link className='flex'       to="https://github.com/mayurjadhav2002/Udemy-Coupons-API"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1 bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
              </svg> code</Link>
        </p>
        <p
          
          aria-label="Article"
          title="Projects
          "
          className="inline-block mb-3 text-2xl font-bold leading-7 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
        JetRail Forecasting         </p>
        <p className="mb-5 text-gray-700">
        Developed Forecasting model of JetRail Company that can predict traffic on
        JetRail for the next 7 months        </p>
        </Link>
      </div>
    </div>
  )
}

export default MainProjects
