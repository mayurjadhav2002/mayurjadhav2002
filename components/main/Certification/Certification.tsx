import React from "react";
import Link from "next/link";
import Image from "next/image";
const ImageClasses = "h-40 min-w-full object-cover rounded-t-lg";
const Certificates = [
  {
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TBGSJYJZDN5A/CERTIFICATE_LANDING_PAGE~TBGSJYJZDN5A.jpeg",
    name: "Coursera | JHU",
    desc: "The Data Science ToolBox",
    link: "https://www.coursera.org/account/accomplishments/verify/TBGSJYJZDN5A",
  },
  {
    image: "/assets/cognitive.png",
    name: "Cognitive.ai | Python101",
    desc: "Python 101 for Data Science",
    link: "https://courses.cognitiveclass.ai/certificates/544423c5daad47848b58a7215501ba50",
  },
  {
    image: "/assets/kaggle certificate.png",
    name: "Kaggle",
    desc: "Data Cleaning",
    link: "https://www.kaggle.com/learn/certification/mayuronkaggle/data-cleaning",
  },
  {
    image: "/assets/responsive web design.png",
    name: "Cognitive.ai | Python101",
    desc: "Python 101 for Data Science",
    link: "https://courses.cognitiveclass.ai/certificates/544423c5daad47848b58a7215501ba50",
  },
  {
    image: "/assets/cognitiveclassmysql.png",
    name: "CognitiveClass | MySQL",
    desc: "MySQL command Line",
    link: "https://courses.cognitiveclass.ai/certificates/0d539d2600714e39a991df0c4e6948a1",
  },
  {
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-e16825b2-af4d-48ab-9ca7-a458c579b858.jpg",
    name: "Udemy | JS",
    desc: "CSS and Javascript Crash Course",
    link: "https://www.udemy.com/certificate/UC-e16825b2-af4d-48ab-9ca7-a458c579b858/",
  },
  {
    image: "/assets/cognitiveclasssql.png",
    name: "CognitiveClass | SQL",
    desc: "SQL and Relational Databases",
    link: "https://courses.cognitiveclass.ai/certificates/70598f3b55584acca713fa0010df45ab",
  },
  {
    image: "/assets/hackerrankpython.png",
    name: "HackerRank | Python",
    desc: "Python Bootcamp",
    link: "https://www.hackerrank.com/certificates/0694edae1426",
  },
];
export default function Certification() {
 

  return (
    <div className="bg-cyan-50 dark:bg-black pt-8 mb-4 rounded-2xl shadow-md shadow-blue-200" id="certifications">
      <br></br>
      <h2 className="animate__fadeInUp text-5xl animate__animated font-sans font-bold text-center sm:text-4xl sm:leading-none">
        Certificates
      </h2>
      <br />
      <div className="grid p-10 lg:px-20 lg:mx-20 md:grid-cols-2 flex-wrap lg:grid-cols-4 sm:grid-cols-1 gap-4 mx-auto">
        {Certificates.map((certificate, key) => (
          <div
            key={key}
            className="max-w-sm  border border-gray-200 rounded-lg shadow bg-slate-50 dark:bg-black dark:border-gray-700"
          >
            <Link href={certificate.link}>
              <Image 
                 width={200}
                 height={200}
                className={ImageClasses}
                src={certificate.image}
                alt={certificate.name}
                loading="lazy"
              />
            </Link>
            <div className="p-5 ">
              <Link href={certificate.link}>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {certificate.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {certificate.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full bg-transparent p-5"></div>
    </div>
  );
}
