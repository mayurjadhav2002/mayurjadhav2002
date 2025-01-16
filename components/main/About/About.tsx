import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import React from "react";
export default function About() {
	return (
		<div>
			<div className='px-4 pt-0 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<SparklesText text='About Me' />

				<div className='grid gap-5 mt-10 row-gap-8 lg:grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<div className='max-w-xl mb-6'>
							<div className='text-base md:text-lg break-normal'>
								<div className="lg:hidden md:hidden">
								<p>
										I was born in Devrukh, Maharashtra, and
										raised in Mumbai, which gave me the
										unique opportunity to experience both
										rural and urban life from a young age.
										This dual perspective sparked my
										curiosity about development and how
										technology can bridge gaps between
										different worlds, solving real-life
										challenges and making things better. My
										fascination with innovation and
										problem-solving ultimately led me to
										pursue engineering. I completed my
										Bachelor of Engineering degree at the
										University of Mumbai, where I laid the
										foundation for my journey into the world
										of software development.
									</p>
								</div>
								<div className="hidden lg:block">
								<BoxReveal boxColor={"#5046e6"} duration={0.3}>
									<p>
										I was born in Devrukh, Maharashtra, and
										raised in Mumbai, which gave me the
										unique opportunity to experience both
										rural and urban life from a young age.
										This dual perspective sparked my
										curiosity about development and how
										technology can bridge gaps between
										different worlds, solving real-life
										challenges and making things better. My
										fascination with innovation and
										problem-solving ultimately led me to
										pursue engineering. I completed my
										Bachelor of Engineering degree at the
										University of Mumbai, where I laid the
										foundation for my journey into the world
										of software development.
									</p>
								</BoxReveal>
								</div>
								
								<br></br>
								<BoxReveal boxColor={"#5046e6"} duration={0.3}>
									<p>
										During my college years, I was
										determined to make the most of every
										opportunity to grow as a developer. I
										interned at Cozy Notion and Zevo AI,
										where I worked on real-world projects
										that helped sharpen my technical skills
										and taught me how to collaborate
										effectively in professional
										environments. Beyond academics, I took
										part in hackathons, freelanced on
										diverse projects, and worked on personal
										ventures, all of which reinforced my
										love for building solutions and creating
										impactful products. This relentless
										drive to excel and push my limits paved
										the way for my first professional role
										as a Junior Software Engineer at
										Mapsted, where I continue to grow and
										make meaningful contributions.
									</p>
								</BoxReveal>
								<br></br>
								<BoxReveal boxColor={"#5046e6"} duration={0.4}>
									<p>
										Today, I am proficient in an extensive
										range of technologies, including
										TypeScript, React, Node.js, Express.js,
										Next.js, Prisma, Python, Flask, Redux,
										REST APIs, GraphQL, and MongoDB. My
										expertise spans both frontend and
										backend development, complemented by
										hands-on experience with infrastructure
										tools like Git, Docker, AWS, Vercel, and
										Jira. Whether it’s crafting scalable
										applications, contributing to innovative
										products, or solving complex challenges,
										I remain committed to leveraging
										technology to make a difference.
									</p>
								</BoxReveal>
							</div>
						</div>
					</div>
					<div className='hidden  md:flex md:flex-col gap-12 '>
						<iframe
							title='3D Interactives Spine'
							className='object-cover w-full h-56 rounded shadow-lg sm:h-96'
							src='https://my.spline.design/platformerrabbitcopy-54caef73510aa8815b4c72586234c1fa/'
							width='100%'
							height='100%'
						></iframe>
						<div className='grid gap-5 row-gap-8 sm:grid-cols-2'>
							<div className='bg-white dark:bg-dark rounded-lg border-l-4 shadow-sm border-deep-purple-accent-400 dark:border-blue-400'>
								<div className='h-full p-5 border border-l-0 rounded-r'>
									<h6 className='mb-2 font-semibold leading-5 text-primary'>
										I&apos;ll be sure to note that in my log
									</h6>
									<p className='text-sm '>
										Do Development most of the time But
										still very Good playing with Data than
										the SWE.
									</p>
								</div>
							</div>

							<div className='bg-white dark:bg-dark rounded-lg border-l-4 shadow-sm border-deep-purple-accent-400 dark:border-blue-400'>
								<div className='h-full p-5 border border-l-0 rounded-r'>
									<h6 className='mb-2 font-semibold leading-5 text-primary'>
										A one who love to write but don&apos;t
										have grammatical Sense
									</h6>
									<p className='text-sm'>
										I enjoy writing but IDK how to
										write(Techy-Writer 😎)
									</p>
								</div>
							</div>

							<div className='bg-white dark:bg-dark rounded-lg border-l-4 shadow-sm border-deep-purple-accent-400 dark:border-blue-400'>
								<div className='h-full p-5 border border-l-0 rounded-r'>
									<h6 className='mb-2 font-semibold leading-5 text-primary'>
										A hidden Artist 🎨
									</h6>
									<p className='text-sm'>
										Most peoples don{`'`}t know that I am a
										good with paint Brush
									</p>
								</div>
							</div>

							<div className='bg-white dark:bg-dark rounded-lg border-l-4 shadow-sm border-deep-purple-accent-400 dark:border-blue-400'>
								<div className='h-full p-5 border border-l-0 rounded-r'>
									<h6 className='mb-2 font-semibold leading-5 text-primary'>
										Love for Robots and AI
									</h6>
									<p className='text-sm'>
										I dreamed of Creating Ethical AGI to
										help humanity
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
