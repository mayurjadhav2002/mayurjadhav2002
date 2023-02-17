import React from 'react'
import './Style.css';

export default function Certification() {
 
  return (
    <div className='bg-cyan-50 pt-8 mb-4 rounded-2xl shadow-md shadow-blue-200' >
    <br></br>
    <h2 className="animate__fadeInUp animate__animated font-sans text-3xl font-bold text-center text-gray-900 sm:text-4xl sm:leading-none">
    Certificates
     </h2>
     <br/>
     <div className='grid certficate-courosol md:grid-cols-2 w-5/6 flex-wrap  
      lg:grid-cols-5 sm:grid-cols-1 justify-center content-center gap-4 mx-auto' >
     <div className="card bg-base-100 shadow-xl image-full mx-auto">
  <figure><img src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TBGSJYJZDN5A/CERTIFICATE_LANDING_PAGE~TBGSJYJZDN5A.jpeg" loading='lazy' alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Coursera | JHU</h2>
    <p>The Data Science ToolBox</p>
    <div className="card-actions justify-end">
      <a target="_blank" rel='noreferrer'  href="https://www.coursera.org/account/accomplishments/verify/TBGSJYJZDN5A" className="btn btn-primary">Verify?</a>
    </div>
  </div>
</div>
<div className="card image-full  bg-base-100 shadow-xl mx-auto">
  <figure><img src="assets/cognitive.png" alt="Cognitive class" loading='lazy' /></figure>
  <div className="card-body">
    <h2 className="card-title">Cognitive.ai | Python101</h2>
    <p>Python 101 for Data Science</p>
    <div className="card-actions justify-end">
      <a target="_blank" rel='noreferrer'  href='https://courses.cognitiveclass.ai/certificates/544423c5daad47848b58a7215501ba50' className="btn btn-primary">Verify Now</a>
    </div>
  </div>
</div>

<div className="card  bg-base-100 shadow-xl image-full mx-auto">
  <figure><img src="/assets/kaggle certificate.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Kaggle </h2>
    <p>Data Cleaning</p>
    <div className="card-actions justify-end">
      <a target="_blank" rel='noreferrer'
      href='https://www.kaggle.com/learn/certification/mayuronkaggle/data-cleaning' className="btn btn-primary">
      verify Now</a>
    </div>
  </div>
</div>

<div className="card  bg-base-100 shadow-xl image-full mx-auto">
  <figure><img src="assets/responsive web design.png" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">FreeCodeCamp | Web Design</h2>
    <p>Responsive web design</p>
    <div className="card-actions justify-end">
      <a href='https://www.freecodecamp.org/certification/mayurjadhav/responsive-web-design' rel='noreferrer' target="_blank" className="btn btn-primary">Verify Now
      </a>
    </div>
  </div>
</div>
<div className="card bg-base-100 shadow-xl image-full mx-auto">
<figure><img src="assets/cognitiveclassmysql.png" alt="cognitiveclassmysql.png" /></figure>
<div className="card-body">
  <h2 className="card-title">CognitiveClass | MySQL</h2>
  <p>MySQL command Line</p>
  <div className="card-actions justify-end">
    <a href='https://courses.cognitiveclass.ai/certificates/0d539d2600714e39a991df0c4e6948a1' className="btn btn-primary">Verify Now</a>
  </div>
</div>
</div>
<div className="card bg-base-100 shadow-xl image-full mx-auto">
<figure><img src="https://udemy-certificate.s3.amazonaws.com/image/UC-e16825b2-af4d-48ab-9ca7-a458c579b858.jpg" alt="Udemy" /></figure>
<div className="card-body">
  <h2 className="card-title">Udemy | JS</h2>
  <p>CSS and Javascript Crash Course</p>
  <div className="card-actions justify-end">
    <a href='https://www.udemy.com/certificate/UC-e16825b2-af4d-48ab-9ca7-a458c579b858/' target="_blank" rel='noreferrer' className="btn btn-primary">Verify Now</a>
  </div>
</div>
</div>
<div className="card bg-base-100 shadow-xl image-full mx-auto">
<figure><img src="assets/cognitiveclasssql.png" loading='lazy' alt="Udemy SQL" /></figure>
<div className="card-body">
  <h2 className="card-title">CognitiveClass | SQL</h2>
  <p>SQL and Relational Databases</p>
  <div className="card-actions justify-end">
    <a href='https://courses.cognitiveclass.ai/certificates/70598f3b55584acca713fa0010df45ab' target="_blank" rel='noreferrer' className="btn btn-primary">Verify Now</a>
  </div>
</div>
</div>
<div className="card bg-base-100 shadow-xl image-full mx-auto">
<figure><img src="assets/hackerrankpython.png" alt="HackerRank" /></figure>
<div className="card-body">
  <h2 className="card-title">HackerRank | Python</h2>
  <p>Python Bootcamp</p>
  <div className="card-actions justify-end">
    <a href='https://www.hackerrank.com/certificates/0694edae1426' target="_blank" rel='noreferrer' className="btn btn-primary">Verify Now</a>
  </div>
</div>
</div>
     
     </div>


     <div className='w-full bg-transparent p-5'></div>
     
     </div>
  )
}
