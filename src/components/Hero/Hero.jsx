import React from 'react'
import Typewriter from "typewriter-effect";
import './Style.css'
import MyGif from './MOSHED-2022-12-28-14-10-34.gif';
function Hero() {

  return (
 <div>
 <div className='glass absolute h-52 -z-10 rotate-12 shadow-lg w-11/12 lg:w-2/6 overflow-hidden'></div>
 
 <div className='glass2 absolute w-5/6 h-52 float-right rounded-full bottom-0 lg:right-40 -z-10 rotate-12 shadow-lg lg:w-96  overflow-hidden'></div>

 <div className='w-full h-1 z-10  bg-slate-200 overflow-hidden'></div>
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
                  I am an ambitious engineer with a desire to use data-driven approaches to create positive change in the world.    
                  <p className='lg:hidden md:hidden text-sm text-blue-500 text-center'><a href='https://drive.google.com/file/d/1BCxGIKJ0QJXSp3_JsvV75DZ0PDpmdMoJ/view?usp=sharing' target='_blank'>You Can Download My CV/Resume by Opening this link 🔗</a></p>
                  </p>
                
                  <div className="flex sm:gap-4 md:order-2 gap-3 text-center lg:justify-start justify-center mt-5 animate__animated animate__zoomInUp">
                  {
                    //Facebook
                  }
                <a href="https://www.facebook.com/mayurshrikantjadhav" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook text-blue-500 hover:text-blue-600 cursor-pointer" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
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
          
                {
                  // Linked In
                }
                <a href="https://www.linkedin.com/in/mayur-jadhav-1824251aa/" target='blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin text-blue-600 hover:text-blue-500" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>      </a>
          
                     {      //Medium
          }
                <a href="https://hackwell-school.medium.com/" target="blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-medium text-gray-700 hover:text-gray-800" viewBox="0 0 16 16">
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
              </svg>
                </a>
       
                  </div>
                  
                  </div>
           
              </div>
              <div className="flex items-center relative  overflow-hidden justify-center lg:w-1/2 z-10 ">
              
              <img className="w-2/3	myImage " 
              src={MyGif} alt=""  loading='lazy'/>
       
           


              </div>
            </div>
          
          </div>
      
          </div>
         
        );
  
}
export default Hero;