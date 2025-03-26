import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// JSON / Object storing all project details
const projectData = [
  {
    id: 1,
    title: "Donyati Bot - Internal Web Application",
    type: "Company Project",
    company: "Donyati",
    briefDescription:
      "Developed an internal web application that utilizes AI capabilities to assist employees by generating textual data and performing tasks.",
    detailedDescription: `
       <p>This project involved the following key aspects:</p>
        <ul class="list-disc list-inside">
          <li>Integrating AI capabilities with Azure services.</li>
          <li>Developing a user-friendly interface with React.</li>
          <li>Ensuring scalability with Azure Functions and Cosmos DB.</li>
        </ul>
        <p>The project improved internal workflows and enhanced productivity.</p>
      `,
    technologies: [
      "React",
      "Python",
      "Azure Functions",
      "Azure AI Services",
      "Azure Cosmos DB",
      "Azure Entra ID",
      "Azure Storage Account",
      "Azure Application Insights",
    ],
    learnings:
      "Improved skills in AI integration, cloud services, and scalable application development.",
    githubUrl: "https://github.com/example/donyati-bot",
  },
  {
    id: 2,
    title: "SkyAI - Skyward Specialty Insurance",
    type: "Company Project",
    company: "Skyward Specialty Insurance",
    briefDescription:
      "Created web pages for Skyward Specialty, showcasing backend API data through visual representations.",
    detailedDescription: `
      <p>Key elements of this project included:</p>
      <ul class="list-disc list-inside">
        <li>Utilizing DevExtreme for rich UI components.</li>
        <li>Building responsive layouts with HTML and CSS.</li>
      </ul>
      <p>The project helped in improving data visualization and client engagement.</p>
    `,
    technologies: ["JavaScript", "DevExtreme", "HTML", "CSS"],
    learnings:
      "Enhanced front-end design skills and gained practical API integration experience.",
    // No githubUrl provided so the GitHub button will not show
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    type: "Personal Project",
    briefDescription:
      "A personal portfolio website to showcase my work, skills, and side projects.",
    detailedDescription: `
      <p>This project involved:</p>
      <ul class="list-disc list-inside">
        <li>Designing a modern, responsive layout.</li>
        <li>Implementing dynamic content loading.</li>
      </ul>
      <p>It helped me explore the latest in static site generation and front-end development.</p>
    `,
    technologies: ["React", "Next.js", "Tailwind CSS"],
    learnings:
      "Gained experience with static site generation, server-side rendering, and responsive design.",
    githubUrl: "https://github.com/example/portfolio",
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Separate the projects by type
  const companyProjects = projectData.filter(
    (project) => project.type && project.type.toLowerCase().includes("company")
  );
  const personalProjects = projectData.filter(
    (project) => project.type && project.type.toLowerCase().includes("personal")
  );

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Reusable component to render project cards
  const renderProjectCards = (projects) => {
    return projects.map((project) => (
      <div
        key={project.id}
        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        {project.type && (
          <p className="text-sm text-gray-400 mb-2">
            {project.type}
            {project.company && ` - ${project.company}`}
          </p>
        )}
        <p className="text-gray-400 mb-4">{project.briefDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.map((tech, key) => (
            <span
              key={key}
              className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => openModal(project)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            View Details
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    ));
  };

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Company (Official) Projects */}
          {companyProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-white/90 mb-4">
                Official / Company Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderProjectCards(companyProjects)}
              </div>
            </div>
          )}

          {/* Personal (Side) Projects */}
          {personalProjects.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-white/90 mb-4">
                Personal Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderProjectCards(personalProjects)}
              </div>
            </div>
          )}
        </div>
      </RevealOnScroll>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            {selectedProject.type && (
              <p className="text-sm text-gray-400 mb-2">
                {selectedProject.type}
                {selectedProject.company && ` - ${selectedProject.company}`}
              </p>
            )}
            <p className="text-gray-400 mb-4">
              {selectedProject.briefDescription}
            </p>
            {selectedProject.detailedDescription && (
              <div
                className="text-gray-400 mb-4"
                dangerouslySetInnerHTML={{
                  __html: selectedProject.detailedDescription,
                }}
              />
            )}
            {selectedProject.technologies && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Technologies:</h4>
                <ul className="list-disc list-inside">
                  {selectedProject.technologies.map((tech, key) => (
                    <li key={key}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            {selectedProject.learnings && (
              <div>
                <h4 className="font-bold mb-2">Learnings:</h4>
                <p>{selectedProject.learnings}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
