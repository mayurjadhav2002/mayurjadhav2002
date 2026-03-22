import BoxReveal from "@/components/ui/box-reveal";
import SparklesText from "@/components/ui/sparkles-text";
import React from "react";
const paragraphs = [
	`I grew up experiencing both rural and urban life, and that contrast shaped how I see technology. I became interested in how software can quietly solve real problems, not through perfection, but through resilience when things go wrong.`,

	`As I worked on production through internships and professional roles, my focus shifted. I stopped thinking only about features and started caring about reliability. I became curious about why systems fail, how they recover, and what it takes to make software trustworthy in the real world.`,

	`Outside of engineering, I paint, write poems, and work on screenplays. Writing helps me slow down and notice details. Art teaches me patience and honesty. I am still learning. I am still building. And I am still becoming.`
];
const aboutCards = [
	{
		title: "Engineer at heart",
		description:
			"I spend most of my time building software, but I enjoy working with data and systems just as much. Understanding how things behave beneath the surface matters to me."
	},
	{
		title: "Someone who writes anyway",
		description:
			"I write even when the words are imperfect. Writing helps me think clearly, especially when ideas are still forming."
	},
	{
		title: "A quiet artist",
		description:
			"Painting is something I keep close to myself. It slows me down and helps me notice details I would otherwise miss."
	},
	{
		title: "Drawn to AI and ethics",
		description:
			"I am deeply interested in artificial intelligence, especially in building systems that are responsible, reliable, and genuinely useful to people."
	}
];

export default function About() {
	return (
		<div>
			<div className='px-4 pt-0 pb-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
				<SparklesText text='About Me' />

				<div className='grid gap-5 mt-10 row-gap-8 lg:grid-cols-2'>
					<div className='flex flex-col justify-center'>
						<div className='max-w-xl mb-6'>
							<div className='text-base md:text-lg break-normal'>
								{paragraphs.map((p, i) => (
									<BoxReveal boxColor={"#312a978f"} key={i} duration={0.3}>
										<p className="mb-10" key={i}>{p}</p>

									</BoxReveal>
								))}

							</div>
						</div>
					</div>
					<div className="hidden md:flex md:flex-col gap-6">

						<div className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md">
							<p className="font-medium text-neutral-900 dark:text-neutral-200">
								Interactive Playground (This is Random)
							</p>
							<p>

								Feel free to play.
							</p>
						</div>

						<div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
							<div className="rounded-2xl bg-white dark:bg-neutral-900 overflow-hidden shadow-xl">
								<iframe
									title="Interactive Experience"
									className="w-full aspect-video"
									src="https://my.spline.design/platformerrabbitcopy-54caef73510aa8815b4c72586234c1fa/"
									allow="fullscreen; autoplay"
								/>
							</div>
						</div>

					</div>

				</div>
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{aboutCards.map((card, index) => (
						<AboutCard
							key={index}
							title={card.title}
							description={card.description}
						/>
					))}
				</div>
			</div>
		</div>
	);
}


interface AboutCardProps {
	title: string;
	description: string;
}

function AboutCard({ title, description }: AboutCardProps) {
	return (
		<div className="relative rounded-xl p-[1px] bg-gradient-to-b from-indigo-500/60 via-purple-500/60 to-pink-500/60 dark:from-blue-400/40 dark:via-indigo-400/40 dark:to-purple-400/40">
			<div className="h-full rounded-xl bg-white dark:bg-neutral-900 p-5 shadow-sm">
				<h6 className="mb-2 font-semibold text-neutral-900 dark:text-neutral-100">
					{title}
				</h6>
				<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
					{description}
				</p>
			</div>
		</div>
	);
}
