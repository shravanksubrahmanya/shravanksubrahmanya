// projectData.js

export const projectData = [
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
    // Updated: The company is Donyati India Private Limited
    company: "Donyati India Private Limited",
    // Added: The client is Skyward Specialty Insurance
    client: "Skyward Specialty Insurance",
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
    // No githubUrl provided => no "View Project" button
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
