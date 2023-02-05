import React from 'react'

export default function Work() {
  return (
    <div className='pt-8 p-5' id="work"
    
    style={{
      backgroundImage: `url('assets/SVG/back.svg')`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',

  }}>
  <div className='mt-36 mb-36'>
  <h2 className="animate__fadeInUp animate__animated font-sans text-5xl lg:text-6xl font-bold text-center text-gray-300 sm:text-3xl sm:leading-none">
    Volunteer
     </h2>
    <h2 className="animate__fadeInUp animate__animated font-sans text-3xl lg:text-6xl font-bold text-center text-gray-900 sm:text-3xl sm:leading-none">
    Work
     </h2>

     
     <div className="flex justify-center mt-5 mb-5">
     <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
       <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
        src="https://play-lh.googleusercontent.com/UqiaMYhCLH0q9KTWkSCKJYYLIL6c0lmon37X9p83htfTkko4aLkXgX51y8pBoDSCNUs" loading='lazy' alt="" />
       <div className="p-6 flex flex-col justify-start">
         <h5 className="text-gray-900 text-xl font-medium">Chegg Expert</h5>
         <h6 classNameName='text-gray-500'>Computer Science Expert</h6>
         <p className="text-gray-700 text-base mb-4">
         </p>
         <p className="text-gray-600 text-xs flex"><svg xmlns="http://www.w3.org/2000/svg" className='inline-block m-1' width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
         <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
         <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
       </svg> Present</p>
       </div>
     </div>
   </div>

   </div>
    </div>
  )
}
