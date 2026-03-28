import { useState } from "react";
import {
  FiEye,
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { focusRobotOnCard } from "../../utils/robotEvents";

export const ProjectCard = ({ project, openModal }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = (e) => {
    focusRobotOnCard(
      e.currentTarget,
      `${project.title} — ${project.type || "Project"}`,
      "projects"
    );
  };

  return (
    <div
      onClick={handleCardClick}
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-lg transition cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
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
              onClick={(e) => {
                e.stopPropagation();
                openModal(project);
              }}
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
                onClick={(e) => e.stopPropagation()}
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
