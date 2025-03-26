import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { projectData } from "./projectData";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Separate the projects by type
  const companyProjects = projectData.filter(
    (project) => project.type && project.type.toLowerCase().includes("company")
  );
  const personalProjects = projectData.filter(
    (project) => project.type && project.type.toLowerCase().includes("personal")
  );
  const academicProjects = projectData.filter(
    (project) => project.type && project.type.toLowerCase().includes("academic")
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
            {project.client && ` (Client: ${project.client})`}
            {project.institution && ` - ${project.institution}`}
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
            className="bg-blue-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            View Details
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 py-2 sm:py-3 px-4 sm:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
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
      className="min-h-screen flex flex-col items-center justify-center py-20 w-full"
    >
      <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Company Projects */}
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

          {/* Academic Projects */}
          {academicProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-white/90 mb-4">
                Academic Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderProjectCards(academicProjects)}
              </div>
            </div>
          )}

          {/* Personal Projects */}
          {personalProjects.length > 0 && (
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-white/90 mb-4">
                Personal Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderProjectCards(personalProjects)}
              </div>
            </div>
          )}

          {/* View More Projects Link */}
          <div className="text-center mt-8">
            <a
              href="https://github.com/shravanksubrahmanya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-lg font-medium transition"
            >
              View More Projects →
            </a>
          </div>
        </div>
      </RevealOnScroll>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-6">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl p-6 rounded-lg max-w-xl w-full mx-auto max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-2xl text-gray-300 hover:text-red-400 transition-colors"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {selectedProject.title}
            </h3>
            {selectedProject.type && (
              <p className="text-sm text-gray-400 mb-2">
                {selectedProject.type}
                {selectedProject.company && ` - ${selectedProject.company}`}
                {selectedProject.client &&
                  ` (Client: ${selectedProject.client})`}
                {selectedProject.institution &&
                  ` - ${selectedProject.institution}`}
                {selectedProject.guide && ` (Guide: ${selectedProject.guide})`}
              </p>
            )}
            <p className="text-gray-300 mb-4">
              {selectedProject.briefDescription}
            </p>
            {selectedProject.detailedDescription && (
              <div
                className="text-gray-300 mb-4 leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: selectedProject.detailedDescription,
                }}
              />
            )}
            {selectedProject.technologies && (
              <div className="mb-4">
                <h4 className="font-bold mb-2 text-white">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
