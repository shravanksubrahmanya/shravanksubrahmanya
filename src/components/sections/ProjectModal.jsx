export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center px-4 sm:px-6" style={{ background: "var(--modal-overlay, rgba(0,0,0,0.5))" }}>
      <div className="relative shadow-2xl p-6 rounded-lg w-11/12 sm:max-w-xl mx-auto max-h-[90vh] overflow-y-auto" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)" }}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-2xl hover:text-red-400 transition-colors" style={{ color: "var(--text-secondary)" }}
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          {project.title}
        </h3>

        {project.type && (
          <p className="text-sm mb-2" style={{ color: "var(--text-muted)" }}>
            {project.type}
            {project.company && ` - ${project.company}`}
            {project.client && ` (Client: ${project.client})`}
            {project.institution && ` - ${project.institution}`}
            {project.guide && ` (Guide: ${project.guide})`}
          </p>
        )}

        <p className="mb-4" style={{ color: "var(--text-secondary)" }}>{project.briefDescription}</p>

        {project.detailedDescription && (
          <div
            className="mb-4 leading-relaxed" style={{ color: "var(--text-secondary)" }}
            dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
          />
        )}

        {project.technologies && (
          <div className="mb-4">
            <h4 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, key) => (
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

        {project.learnings && (
          <div>
            <h4 className="font-bold mb-2" style={{ color: "var(--text-primary)" }}>Learnings:</h4>
            <p style={{ color: "var(--text-secondary)" }}>{project.learnings}</p>
          </div>
        )}
      </div>
    </div>
  );
};
