"use client";
import React, { useState } from "react";
import { ProjectItem } from "./ProjectItem";

interface Project {
  href: string;
  date: string;
  title: string;
  description: string;
}
// Array of project data
const projects: Project[] = [
  {
    href: "https://github.com/mayurjadhav2002/Progress",
    date: "Jan 2024",
    title: "Progress",
    description:
      "Progress is a Kanban-based sprint tracking tool that streamlines planning and task execution. It offers a visual representation of work, tasks, and progress for efficient project monitoring.",
  },
  {
    href: "https://github.com/mayurjadhav2002/like-button-celebration",
    date: "Dec 2023",
    title: "Like-button-Celebration",
    description:
      "Like-button-celebration designed to add animated buttons for liking, unliking, upvoting, and custom interactions to your blogs, articles, and web content.",
  },
  {
    href: "https://github.com/mayurjadhav2002/qbytespace",
    date: "Nov 2023",
    title: "LearnSource",
    description:
      "Web application that provides learners a platform for accessing information about free resources, internships, and companies’ paid software giveaways on the internet.",
  },
  {
    href: "https://github.com/mayurjadhav2002/yaml-visualize",
    date: "Nov 2023",
    title: "YAMLizer",
    description:
      "The YAML Visualizer is a web application that allows users to upload YAML files and visualize their hierarchical structure using ReactFlow. ",
  },
  {
    href: "https://github.com/mayurjadhav2002/qbytespace",
    date: "June 2023",
    title: "Eflux",
    description:
      "Mobile Application that helps EV owners by simplifying the process of charging electric vehicles by establishing a direct connection between station owners and users.",
  },

  {
    href: "https://github.com/mayurjadhav2002/ZENITH",
    date: "Dec 2022",
    title: "Zenith - an advanced Chatbot",
    description:
      "The code runs a loop that prompts the user for input and generates a response using the defined functions. The chatbot is able to effectively answer a wide range of questions and provide information to the user.",
  },
  {
    href: "https://github.com/mayurjadhav2002/Potato-Disease-Classification-app",
    date: "Oct 2022",
    title: "Educational Event Management",
    description:
      "An education event management application, which will help organizations to promote their events and students can directly enroll in the program through this event management platform.",
  },
  {
    href: "https://github.com/mayurjadhav2002/Emotion-detection-NLP",
    date: "Nov 2022",
    title: "TTE (Text To Emotion) Emotion Detection",
    description: "Emotion Detection Machine Learning Project to identify the emotions of individuals based on their tweets, text messages, or other written communications."
  },
  {
    href: "https://github.com/mayurjadhav2002/flask_url_shortner",
    date: "Nov 2022",
    title: "Brain Tumor Detection",
    description: "Build a machine-learning model for detecting and classifying brain tumors in medical images. My goal was to accurately identify the presence of a brain tumor in an image using the most effective approach."
  },
  {
    href: "https://github.com/mayurjadhav2002/Potato-Disease-Classification-app",
    date: "Oct 2022",
    title: "Early Potato Disease Recognizer",
    description: "Build an image classification model to detect and classify distinct visual symptoms or diseases in potato plants using a convolutional neural network (CNN)."
  },
  {
    href: "https://github.com/mayurjadhav2002/flask_url_shortner",
    date: "Feb 2020",
    title: "URL Shortner",
    description: "A Lightweight URL shortner Application built with Flask, SqlAlechemy, Bootstrap. This Application will allow you to short your own URL or host this app as a URL Shorter Under your maintenance."
  },
  {
    href: "https://github.com/mayurjadhav2002/React-CCourse-Udemy",
    date: "Sep 2022",
    title: "React Udemy Coupon Code",
    description: "An interactive web application built with React, using the Udemy Coupon Code API, allows users to easily search for and obtain free MOOC course coupon codes."
  },
  {
    href: "https://github.com/mayurjadhav2002/Udemy-Coupons-API",
    date: "Aug 2020",
    title: "Flask Udemy API",
    description: "Udemy Coupon code API v.1.0.0 is built using flask and Beautifulsoup, can be used to provide more resources to the student by integrating it in your application."
  },
  {
    href: "/",
    date: "April 2021",
    title: "Home Remedies Provide",
    description: "A website providing home remedies for over 220 diseases was developed to provide information during the quarantine period when medical resources were scarce."
  },
  {
    href: "https://github.com/mayurjadhav2002/covid-19",
    date: "April 2021",
    title: "Cov-19 Helping System",
    description: "Developed a website using PHP that connects COVID-19 patients and organizations through a platform. On the website, organizations can share information about resources they have available, such as oxygen, blood, and hospital availability."
  },
  {
    href: "https://github.com/mayurjadhav2002/Udemy-Coupons-API",
    date: "May 2022",
    title: "JetRail Forecasting",
    description: "Developed Forecasting model of JetRail Company that can predict traffic on JetRail for the next 7 months."
  }
];
export default function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <div className="mt-2 main-div backdrop:shadow-1 shadow-sm-light py-10 " id="project">
      <h2 className="animate__fadeInUp animate__animated font-sans text-3xl font-bold text-center text-gray-900 dark:text-primary sm:text-4xl sm:leading-none z-10">
        📔 Projects
      </h2>
      <div className="p-5 mx-auto md:max-w-full lg:py-20">
        <div className="grid gap-2 lg:grid-cols-5 md:grid-cols-2 lg:max-w-full">
          {/* Render only 5 projects initially */}
          {projects.slice(0, showAllProjects ? projects.length : 5).map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
        {/* Toggle visibility of the remaining projects */}
        {!showAllProjects && (
          <div className="text-center justify-end w-full p-3">
            <button
              onClick={() => setShowAllProjects(true)}
              className="animate__fadeInUp animate__animated font-sans btn btn-outline btn-primary font-bold text-center text-gray-900  dark:text-white dark:border-blue-50 dark:border-2 dark:p-5 dark:rounded-lg"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}