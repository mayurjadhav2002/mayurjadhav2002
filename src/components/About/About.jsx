import React from 'react';
import './Styles.css';
export default function About() {
  return (
    <div>

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              About Me
              <br className="md:block" />
              Myself{' '}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative inline-block text-deep-purple-accent-400 text-cyan-500 tracking-in-contract-bck-bottom" >
            Mayur Jadhav
                </span>
              </span>
            </h2>
            <div className="text-base text-gray-700 md:text-lg break-normal">
            <p>
            Hi, my name is Mayur Jadhav and I am a Final year Computer Science student at Mumbai University. 
            My primary focus of interest is in the field of Software Development, Machine learning and DL, and I am deeply passionate about using technology to solve real-world problems.
</p>
<br></br>
<p>
            During my time at university, I have developed a strong foundation in computer science principles and have acquired expertise in a variety of programming languages, algorithms, and data structures. I am eager to continue learning and expanding my knowledge in the field of Software Engineering & AI, and am excited to explore challenges to apply my skills practical settings.
            </p>
            <br></br><p>    
            In addition to my technical skills, I am a proactive and result-oriented individual who enjoys collaborating with others to tackle complex challenges.
             I always seeking out ways to improve my skills and knowledge, and in my free time, I enjoy participating in hackathons and coding competitions. 
            beside programming, I do like spend some time on No-code Ethical Hacking and Watching Tutorials.
            </p>
            </div>
          </div>
          <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  I'll be sure to note that in my log
                </h6>
                <p className="text-sm text-gray-900">
                I have spend more time doing software development 👨‍💻 things than working with data. But I am Still very Good playing with Data than the SWE.

                </p>
              </div>
            </div>
            
            <div className="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
              <div className="h-full p-5 border border-l-0 rounded-r">
                <h6 className="mb-2 font-semibold leading-5">
                  A one who love to write but don't have grammatical Sense
                </h6>
                <p className="text-sm text-gray-900">
                Consistently write on Medium. (Techy-Writer 😎)

                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
       
          <iframe title="3D UI By Me using Spine" className="object-cover w-full h-56 rounded shadow-lg sm:h-96" src='https://my.spline.design/glasstypecopy-3da608e672b74fc779ccc6bf1c024679/' frameborder='0' width='100%' height='100%'></iframe>
        </div>
      </div>
    </div>
  </div>
  );
}
