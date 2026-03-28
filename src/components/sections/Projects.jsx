import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { projectData } from "./projectData";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Listen for robot:project-close to clear local selection state */
  useEffect(() => {
    const onClose = () => setSelectedProject(null);
    window.addEventListener("robot:project-close", onClose);
    return () => window.removeEventListener("robot:project-close", onClose);
  }, []);

  const companyProjects = projectData.filter(
    (p) => p.type?.toLowerCase().includes("company")
  );
  const personalProjects = projectData.filter(
    (p) => p.type?.toLowerCase().includes("personal")
  );
  const academicProjects = projectData.filter(
    (p) => p.type?.toLowerCase().includes("academic")
  );

  const openModal = (project) => {
    setSelectedProject(project);
    window.dispatchEvent(
      new CustomEvent("robot:project-open", {
        detail: { project },
      })
    );
  };

  const ProjectGroup = ({ title, projects }) => {
    if (projects.length === 0) return null;
    return (
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-white/90 mb-4">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} />
          ))}
        </div>
      </div>
    );
  };

  const content = (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        Featured Projects
      </h2>

      <ProjectGroup title="Official / Company Projects" projects={companyProjects} />
      <ProjectGroup title="Academic Projects" projects={academicProjects} />
      <ProjectGroup title="Personal Projects" projects={personalProjects} />

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
      {isMobile ? (
        <div className="reveal visible">{content}</div>
      ) : (
        <RevealOnScroll>{content}</RevealOnScroll>
      )}
    </section>
  );
};
