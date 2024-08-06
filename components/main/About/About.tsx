import React from "react";
export default function About() {
  return (
    <div>
      <div className="px-4 pt-0 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-primary sm:text-4xl sm:leading-none">
                About Me 
              </h2>
              <div className="text-base md:text-lg break-normal">
                <p>
                  I&apos;m Mayur Jadhav, a learner of new tech Era. I&apos;ve got a solid two years of hands-on
                  experience in software development, playing around with cool
                  stuff like Javascript, Python, C, and PHP. I&apos;ve
                  built desktop apps, mobile apps, websites, and even pitched in
                  on some open source projects.
                </p>
                <br></br>
                <p>
                  But it&apos;s not just about coding for me. I&apos;m also in the know
                  about operations and cloud technologies like AWS, Google
                  Cloud, Docker, and Kubernetes. So, whether it&apos;s writing code
                  or managing projects, I&apos;ve got it covered.
                </p>
                <br></br>
                <p>
                  I&apos;ve dipped my toes into the AI pool because, honestly, who
                  isn&apos;t fascinated by it? I&apos;ve dabbled in machine learning
                  models, taken on data science projects, and tried my hand at
                  Natural Language Processing. I&apos;m all about making things
                  easier with tech.
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
                    I&apos;ll be sure to note that in my log
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
                    A one who love to write but don&apos;t have grammatical Sense
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
