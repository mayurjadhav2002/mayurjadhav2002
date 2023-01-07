import React from 'react'
import Typewriter from "typewriter-effect";
import './Style.css'
import MyGif from './MOSHED-2022-12-28-14-10-34.gif';
function Hero() {

  return (
 <div>
 <div className='glass absolute h-52 -z-10 rotate-12 shadow-lg w-96'></div>
 
 <div className='glass2 absolute h-52 float-right rounded-full bottom-0 lg:right-40 -z-10 rotate-12 shadow-lg lg:w-96 w-full '></div>

 <div className='w-full h-1 z-10  bg-slate-200 overflow-hiddent'></div>
       <div className="px-4 z-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20">
            <div className="flex flex-col items-center justify-between w-full lg:flex-row">
              <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
                <div className="max-w-xl ">
                  <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase bg-teal-accent-400 text-teal-900 rounded-full">Intelligent</p>
                  </div>
                  <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none max-w-lg mb-6 lg:text-left text-center">
                  
                  👋 Hello, I'm
                   
                    <br className="md:block mt-2" />
                    <span className='inline-block text-purple-600 text-deep-purple-accent-400'>
                    <Typewriter
  
                    onInit={(typewriter)=> {
               
                    typewriter
                     
                    .typeString("  An Engineer")
                      
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("  A Student")
                      
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Software Developer")
                      
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("ML Engineer")
                    .start();
                    }}
                    />
                    </span>
                  </h2>
                  <p className="text-gray-700 text-lg lg:text-left text-center md:text-lg">
                  Hey I am Mayur, Third Year Bachelor's Student at University of Mumbai, majoring in Computer Science and Engineering.
                  I am an ambitious engineer with a desire to use data-driven approaches to create positive change in the world.                  </p>
                
                  <div className="flex sm:gap-4 md:order-2 gap-3 text-center lg:justify-start justify-center mt-5">
                  {
                    //Facebook
                  }
                <a href="https://www.facebook.com/mayurshrikantjadhav" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook text-blue-500 hover:text-blue-600 cursor-pointer" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
          
                </a>
          
                {
                  //Instagram
                }
                <a href="https://www.instagram.com/mayurjadhav2002_/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram text-pink-400 hover:text-pink-600" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
              </svg>
                </a>
          
                {
                  //Github
                }
                <a href="https://github.com/mayurjadhav2002" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github text-gray-800 hover:text-gray-900" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
                </a>
          
                <a href="https://twitter.com/MayurJa16744138" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter text-blue-400 hover:text-blue-500" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>      </a>
          {
            //Medium
          }
                <a href="https://hackwell-school.medium.com/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-medium text-gray-700 hover:text-gray-800" viewBox="0 0 16 16">
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
              </svg>
                </a>
       
                  </div>
                  
                  </div>
           
              </div>
              <div className="flex items-center relative  overflow-hidden justify-center lg:w-1/2 z-10">
              
              <img className="w-2/3	myImage " 
              src={MyGif} alt="" />
       
           


              </div>
            </div>
          
          </div>
      
          </div>
         
        );
  
}
export default Hero;