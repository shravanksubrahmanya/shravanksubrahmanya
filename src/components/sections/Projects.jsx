import React, { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { projectData } from "./projectData";
import {
  FiEye,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";

const ProjectCard = ({ project, openModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <span
          onClick={toggleExpanded}
          className="text-green-500 cursor-pointer transition-transform duration-300"
        >
          {isExpanded ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </span>
      </div>
      {project.type && (
        <p className="text-sm text-gray-400 mb-2">
          {project.type}
          {project.company && ` - ${project.company}`}
          {project.client && ` (Client: ${project.client})`}
          {project.institution && ` - ${project.institution}`}
        </p>
      )}
      <p className="text-gray-400 mb-4">{project.briefDescription}</p>
      {isExpanded && (
        <>
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
          <div className="flex gap-4 mb-4">
            <span
              onClick={() => openModal(project)}
              className="flex items-center gap-1 text-green-500 cursor-pointer transition-transform duration-300 hover:scale-105 text-base font-medium"
            >
              View Details{" "}
              <FiEye className="transition-transform duration-300" />
            </span>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-green-500 transition-transform duration-300 hover:scale-105 text-base font-medium"
              >
                View Project{" "}
                <FiArrowRight className="transition-transform duration-300" />
              </a>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  // Reusable function to render a list of project cards
  const renderProjectCards = (projects) => {
    return projects.map((project) => (
      <ProjectCard key={project.id} project={project} openModal={openModal} />
    ));
  };

  const content = (
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
          className="flex items-center justify-center gap-2 text-blue-300 transition-transform duration-300 hover:scale-105 hover:text-blue-200 text-lg font-medium"
        >
          View More Projects →
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-20 w-full"
    >
      {/* On mobile, bypass RevealOnScroll and add "visible" class */}
      {isMobile ? (
        <div className="reveal visible">{content}</div>
      ) : (
        <RevealOnScroll>{content}</RevealOnScroll>
      )}

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-6">
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 shadow-2xl p-6 rounded-lg w-11/12 sm:max-w-xl mx-auto max-h-[90vh] overflow-y-auto">
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
            {selectedProject.learnings && (
              <div>
                <h4 className="font-bold mb-2 text-white">Learnings:</h4>
                <p className="text-gray-300">{selectedProject.learnings}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
