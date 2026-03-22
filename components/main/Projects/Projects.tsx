"use client";
import React, { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import FlipText from "@/components/ui/flip-text";
import { AuroraText } from "@/components/ui/aurora-text";

interface Project {
  href: string;
  date: string;
  title: string;
  description: string;
  logo?: string;
}
// Array of project data
const projects: Project[] = [
  {
    href: "https://tryauron.com",
    date: "2026",
    logo: "",
    title: "Auron AI",
    description:
      "An AI desktop companion that automates workflows, controls apps, and helps you get things done using natural language."
  },
  {
    href: "https://github.com/mayurjadhav2002/trakg",
    date: "May 2025",
    logo: "",
    title: "Trakg",
    description:
      "Helps businesses capture and convert abandoned or partially completed form submissions by providing analytics, automation, and re-engagement tools.",
  },
  {
    href: "https://github.com/mayurjadhav2002/kaithia-bot",
    date: "Oct 2024",
    title: "Kaithia",
    description:
      "Research AI agent that scraps all relevant papers from internet based on your research topic and then help you to read papers and QA in one place ",
  },
  {
    href: "https://github.com/mayurjadhav2002/ai-tutor-next",
    date: "Apr 2024",
    title: "AI tutor",
    description:
      "WebApp for E-learning solution in Computer Science. AI tutor uses advanced AI Model to create customized roadmap, curated Topic Explainer and short notes for learning your topic.",
  },
  {
    href: "https://github.com/mayurjadhav2002/Progress",
    date: "Jan 2024",
    title: "Progress",
    description:
      "Progress is a Kanban-based sprint tracking tool that streamlines planning and task execution. It offers a visual representation of work, tasks, and progress for efficient project monitoring.",
  },
  {
    href: "https://github.com/mayurjadhav2002/qbytespace",
    date: "Nov 2023",
    title: "LearnSource",
    description:
      "Application provides learners a all the information about free resources, internships, and companies’ paid software giveaways on the internet.",
  },
  {
    href: "https://github.com/mayurjadhav2002/qbytespace",
    date: "June 2023",
    title: "Eflux",
    description:
      "Mobile Application that helps EV owners making simplified process of charging electric vehicles. Connect Directly to your Nearby CHarging Stations and Book a Slot by your convinience.",
  },

  {
    href: "https://github.com/mayurjadhav2002/ZENITH",
    date: "Dec 2022",
    title: "Zenith - an advanced Chatbot",
    description:
      "Trained on Custom Documents using punkt, Zenith is an advanced chatbot that can answer questions, provide recommendations, and assist users in finding information.",
  },

  {
    href: "https://github.com/mayurjadhav2002/Udemy-Coupons-API",
    date: "Aug 2020",
    title: "Udemy API",
    description: "Udemy Coupon code API v.1.0.0 is built using flask and Beautifulsoup, can be used to provide more resources to the student by integrating it in your application."
  },
];
export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="mt-2 main-div backdrop:shadow-1 shadow-sm-light py-10  " id="project">
      <div>
        <h1 className="text-5xl text-center font-bold tracking-tighter  lg:text-7xl"> <AuroraText>Dev</AuroraText></h1>

      </div>
      <FlipText
        className="text-4xl font-bold -tracking-widest text-black dark:text-white md:text-7xl md:leading-[5rem]"
        word=" Projects"
      />
      <div className="p-5 mx-auto md:max-w-full lg:py-20">
        <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2 lg:max-w-full">
          {/* Render only 5 projects initially */}
          {projects.slice(0, showAllProjects ? projects.length : 4).map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
        {/* Toggle visibility of the remaining projects */}
        {!showAllProjects && (
          <div className="text-center justify-end w-full p-3">
            <button
              onClick={() => setShowAllProjects(true)}
              className="animate__fadeInUp animate__animated font-sans btn btn-outline btn-primary font-bold text-center
               text-gray-900  dark:text-white dark:border-blue-500 dark:border-2 p-5 dark:rounded-lg"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}