"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import SparklesText from "@/components/ui/sparkles-text";
import {MagicCard} from "@/components/ui/magic-card";
import {useTheme} from "next-themes";
const Certificates = [
	{
		image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TBGSJYJZDN5A/CERTIFICATE_LANDING_PAGE~TBGSJYJZDN5A.jpeg",
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
		image: "https://udemy-certificate.s3.amazonaws.com/image/UC-e16825b2-af4d-48ab-9ca7-a458c579b858.jpg",
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
	const {theme} = useTheme();

	return (
		<div
			className='bg-[#fcfafa] dark:bg-black pt-8 mb-4 rounded-2xl shadow-md shadow-gray-200 dark:shadow-gray-700' 
			id='certifications'
		>
			<br></br>
			<SparklesText
				className='text-4xl font-bold tracking-tight text-center text-black dark:text-white md:text-7xl md:leading-[5rem]'
				text='Certifications'
			/>

			<br />
			<div className='grid p-10 lg:px-20 lg:mx-20 md:grid-cols-2 flex-wrap lg:grid-cols-4 sm:grid-cols-1 gap-4 mx-auto'>
				{Certificates.map((certificate, key) => (
					<MagicCard
						className='cursor-pointer p-1 flex-col items-center justify-center whitespace-nowrap  shadow-2xl'
						key={key}
						gradientColor={
							theme === "dark" ? "#262626" : "#D9D9D955"
						}
					>
						<div
							key={key}
							className='w-full relative p-1 overflow-hidden dark:bg-black dark:border-gray-500'
						>
							<Link href={certificate.link} className="relative ">
								<img
									className={
										"rounded-lg w-full h-36 overflow-hidden object-contain"
									}
									src={certificate.image}
									alt={certificate.name}
									loading='lazy'
								/>
							</Link>
							<div className='px-2 overflow-hidden text-wrap '>
								<Link href={certificate.link}>
									<h5 className='mb-2 mt-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
										{certificate.name}
									</h5>
								</Link>
								<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
									{certificate.desc}
								</p>
							</div>
						</div>
					</MagicCard>
				))}
			</div>

			<div className='w-full bg-transparent p-5'></div>
		</div>
	);
}
