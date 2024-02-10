import React from "react";
export default function About() {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
                About Me 
              </h2>
              <div className="text-base md:text-lg break-normal">
                <p>
                  I'm Mayur Jadhav, a final-year Computer Science student at
                  Mumbai University. I've got a solid two years of hands-on
                  experience in software development, playing around with cool
                  stuff like Javascript, Python, MERN stack, C, and PHP. I've
                  built desktop apps, mobile apps, websites, and even pitched in
                  on some open source projects.
                </p>
                <br></br>
                <p>
                  But it's not just about coding for me. I'm also in the know
                  about operations and cloud technologies like AWS, Google
                  Cloud, Docker, and Kubernetes. So, whether it's writing code
                  or managing projects, I've got it covered.
                </p>
                <br></br>
                <p>
                  I've dipped my toes into the AI pool because, honestly, who
                  isn't fascinated by it? I've dabbled in machine learning
                  models, taken on data science projects, and tried my hand at
                  Natural Language Processing. I'm all about making things
                  easier with tech.
                </p>

                <br></br>
                <p>
                  Internships at Zevo and Cozy Notion taught me how to crank out
                  production-level code. Plus, I've taken on leadership roles,
                  like heading up the coding club and jumping into hackathons.
                  It's been a ride, and it's sharpened my skills and my knack
                  for problem-solving.
                </p>

                <br></br>
                <p>
                  Beyond the tech stuff, I'm always looking to up my game.
                  You'll find me in hackathons and coding competitions during my
                  downtime. And just for kicks, I like to explore No-code
                  Ethical Hacking. Learning is my jam, and I'm all about finding ways.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden  md:flex md:flex-col gap-12 ">
            <iframe
              title="3D UI By Me using Spine"
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://my.spline.design/glasstypecopy-3da608e672b74fc779ccc6bf1c024679/"
              width="100%"
              height="100%"
            ></iframe>
            <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
              <div className="bg-white dark:bg-dark rounded-lg border-l-4 shadow-sm border-deep-purple-accent-400 dark:border-blue-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-primary">
                    I'll be sure to note that in my log
                  </h6>
                  <p className="text-sm ">
                    I have spend more time doing software development 👨‍💻 things
                    than working with data. But I am Still very Good playing
                    with Data than the SWE.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-dark rounded-lg border-l-4 shadow-sm border-deep-purple-accent-400 dark:border-blue-400">
                <div className="h-full p-5 border border-l-0 rounded-r">
                  <h6 className="mb-2 font-semibold leading-5 text-primary">
                    A one who love to write but don't have grammatical Sense
                  </h6>
                  <p className="text-sm">
                    I enjoy writing but IDK how to write(Techy-Writer 😎)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
