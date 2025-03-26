import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap } from "react-icons/fa";

export const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications",
      institution: "M S Ramaiah Institute of Technology",
      location: "Bangalore",
      yearStart: "2021",
      yearEnd: "2023",
      gpa: "9.2/10.0",
      achievements: [
        "Member of CSI (Computer Society of India)",
        "Gaming Event Coordinator - Abhyuday 2k23 fest",
      ],
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "Alva's Degree College",
      location: "Moodabidri",
      yearStart: "2016",
      yearEnd: "2019",
      gpa: "7.4/10.0",
      achievements: [
        "MP at Campus Parliament - University Competition",
        "Member of Rustrum Club",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 h-full w-0.5 bg-blue-500/30 -z-10" />

            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row gap-8 mb-16 relative ${
                  index % 2 === 0
                    ? "sm:flex-row"
                    : "sm:flex-row-reverse sm:text-right"
                }`}
              >
                {/* Timeline dot and year */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
                  </div>
                  <div className="mt-2 text-blue-400 text-sm font-medium">
                    {edu.yearStart} - {edu.yearEnd}
                  </div>
                </div>

                <div
                  className={`ml-12 sm:ml-0 p-6 bg-white/5 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 transition-all duration-300 flex-1 backdrop-blur-sm ${
                    index % 2 === 0 ? "sm:mr-16" : "sm:ml-16"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="text-2xl text-blue-500" />
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-300 mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-gray-400 mb-2">{edu.location}</p>
                  {/* Add this line to show years prominently */}
                  <p className="text-blue-400 font-medium mb-2">
                    {edu.yearStart} - {edu.yearEnd}
                  </p>
                  <p className="text-green-400 mb-2">GPA: {edu.gpa}</p>
                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="list-disc list-inside text-gray-400">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
