export const About = () => {
  const frontendSkills = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "JQuery",
    "Tailwind",
    "Bootstrap",
  ];

  const backendSkills = [
    "Python",
    "Nodejs",
    "Expressjs",
    "FastApi",
    "Django",
    "Flask",
    "MongoDb",
    "CosmosDb",
    "Azure",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-center">
            Innovative Software Engineer and Microsoft Certified Azure Developer
            Associate with expertise in Full-Stack Web Development, specializing
            in React.js, Node.js, Python, and Azure AI. Skilled in crafting
            user-friendly interfaces and designing scalable architectures
          </p>
          {/* skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl hover:translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-boldmb-4 ">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Master of Computer Applications (MCA)</strong> - Ramaiah
                Institute of Technology (2021-2023)
              </li>
              <li>
                <strong>Bachelor of Computer Applications (BCA)</strong> -
                Alva's Degree College, Moodabidri (2016-2019)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-boldmb-4 ">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  <strong>Software Engineer</strong> - Donyati India Private
                  Ltd.(Sept, 2023 - Present)
                </h4>
                <p>
                  At Donyati India Pvt Ltd, I specialize in developing solutions
                  using React JS and Python, integrating Azure AI Services and
                  OpenAI for AI driven applications. By leveraging Azure cloud
                  services, I enhance productivity while focusing on both
                  front-end and back-end development. I create dynamic,
                  user-friendly interfaces and scalable architectures,
                  collaborating with cross functional teams to deliver
                  high-quality software solutions
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  <strong>Software Engineer Intern</strong> - Centre for Smart
                  Governance, Karnataka(Feb, 2023 - May, 2023)
                </h4>
                <p>
                  As an intern at the Centre for Smart Governance Karnataka, I
                  gained hands-on experience with ASP.Net, MS-SQL, AJAX, and
                  JavaScript. I developed web applications, honed my
                  problem-solving skills, and learned to collaborate effectively
                  with a team of developers. My primary project was the
                  development of the "New Gandhi Sakchi Kayaka (NGSK)"
                  application
                </p>
              </div>
              <div>
                <h4 className="font-semibold">
                  <strong>Operations Executive</strong> - Infosys Limited(Jun
                  2019 - Nov 2020)
                </h4>
                <p>
                  During my tenure at Infosys Limited, I worked on JavaScript
                  development for Power Pages, creating interactive and dynamic
                  web pages to enhance user experience. I contributed to
                  building scalable and efficient web solutions, and my major
                  project involved developing Power Platform solutions for
                  SunTrust Banks using Power Apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
