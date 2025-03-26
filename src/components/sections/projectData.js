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
    githubUrl: "https://doassist.donyati.com/",
  },
  {
    id: 2,
    title: "SkyAI - Skyward Specialty Insurance",
    type: "Company Project",
    company: "Donyati India Private Limited",
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
  },
  {
    id: 3,
    title: "New Gandhi Sakshi Kayaka (NGSK)",
    type: "Company Project",
    company: "Centre for Smart Governance",
    client: "Government of Karnataka",
    briefDescription:
      "Developed a web application for the Government of Karnataka during my internship, focusing on delivering a robust and user-friendly solution.",
    detailedDescription: `
          <p>Key achievements in this project:</p>
          <ul class="list-disc list-inside">
            <li>Developed full-stack web application using ASP.NET and MS-SQL</li>
            <li>Implemented responsive UI using Bootstrap and modern front-end technologies</li>
            <li>Created dynamic user interactions using AJAX for seamless experience</li>
            <li>Collaborated with development team to ensure project quality</li>
            <li>Gained practical experience in government sector development</li>
          </ul>
          <p>The project provided valuable experience in enterprise-level application development and team collaboration.</p>
        `,
    technologies: [
      "ASP.NET",
      "MS-SQL",
      "AJAX",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    learnings:
      "Enhanced full-stack development skills, gained experience in enterprise architecture, and improved team collaboration abilities.",
    githubUrl: "https://ngsk.karnataka.gov.in",
  },
  {
    id: 4,
    title: "Power Platform Solutions - SunTrust Banks",
    type: "Company Project",
    company: "Infosys Ltd",
    client: "SunTrust Banks",
    briefDescription:
      "Developed Power Platform solutions including Power Pages and Power Apps for SunTrust Banks, focusing on interactive web experiences and efficient business solutions.",
    detailedDescription: `
          <p>Key achievements in this project:</p>
          <ul class="list-disc list-inside">
            <li>Created dynamic and interactive web pages using Power Pages</li>
            <li>Implemented custom JavaScript solutions for enhanced functionality</li>
            <li>Developed scalable Power Platform solutions</li>
            <li>Built user-friendly interfaces with Power Apps</li>
          </ul>
          <p>The project significantly improved user experience and business process efficiency.</p>
        `,
    technologies: [
      "Power Pages",
      "JavaScript",
      "Power Platform",
      "HTML",
      "CSS",
    ],
    learnings:
      "Gained extensive experience in Power Platform development, JavaScript implementation, and enterprise-level solution architecture.",
  },
  {
    id: 5,
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
    githubUrl: "https://github.com/shravanksubrahmanya/shravanksubrahmanya",
  },
  {
    id: 6,
    title: "Full Stack ToDo Application",
    type: "Personal Project",
    briefDescription:
      "A comprehensive task management application with user authentication and a modern interface for organizing daily tasks.",
    detailedDescription: `
          <p>Key features of this project:</p>
          <ul class="list-disc list-inside">
            <li>Secure user authentication and authorization system</li>
            <li>Create, read, update, and delete task functionality</li>
            <li>Modern, responsive user interface</li>
            <li>REST API with structured endpoints</li>
            <li>Database integration for persistent storage</li>
          </ul>
          <p>This project demonstrates full-stack development capabilities and best practices in modern web development.</p>
        `,
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "SQLite",
      "TailwindCSS",
      "Material-UI",
    ],
    learnings:
      "Gained hands-on experience in full-stack development, API design, and implementing user authentication.",
    githubUrl: "https://github.com/shravanksubrahmanya/ToDos-FastApi",
  },
  {
    id: 7,
    title: "Books Inventory API",
    type: "Personal Project",
    briefDescription:
      "A FastAPI-based RESTful API for managing a books inventory system with comprehensive CRUD operations and filtering capabilities.",
    detailedDescription: `
          <p>Key features of this project:</p>
          <ul class="list-disc list-inside">
            <li>Complete CRUD operations for managing books inventory</li>
            <li>Advanced filtering system by rating and publication date</li>
            <li>Interactive API documentation with Swagger UI</li>
            <li>Structured data models using Pydantic</li>
            <li>RESTful architecture following best practices</li>
          </ul>
          <p>This project showcases backend development skills and API design principles using modern Python frameworks.</p>
        `,
    technologies: ["FastAPI", "Python", "SQLite", "Pydantic", "Swagger UI"],
    learnings:
      "Deepened understanding of RESTful API design, backend development, and database operations using modern Python frameworks.",
    githubUrl: "https://github.com/shravanksubrahmanya/BooksInventory",
  },
  {
    id: 8,
    title: "PDF Scanner AI ChatBot",
    type: "Personal Project",
    briefDescription:
      "An intelligent chatbot that uses OpenAI and LangChain to analyze PDFs and answer questions based on their content, implementing RAG (Retrieval Augmented Generation) approach.",
    detailedDescription: `
          <p>Key features of this project:</p>
          <ul class="list-disc list-inside">
            <li>PDF scanning and content extraction capabilities</li>
            <li>Natural language processing using OpenAI's API</li>
            <li>Intelligent question-answering system using RAG approach</li>
            <li>Redis-based caching for improved performance</li>
            <li>Secure file handling and API integration</li>
            <li>Scalable architecture with separate worker processes</li>
          </ul>
          <p>This project demonstrates advanced AI integration and modern application architecture practices.</p>
        `,
    technologies: [
      "Python",
      "Flask",
      "OpenAI API",
      "LangChain",
      "Redis",
      "SQLAlchemy",
      "Pinecone",
      "RAG",
    ],
    learnings:
      "Gained expertise in AI integration, document processing, and building scalable applications with modern AI frameworks.",
    githubUrl: "https://github.com/shravanksubrahmanya/pdf_scanner_ai_bot",
  },
  {
    id: 9,
    title: "Intelligent Vulnerability Detection and Response System",
    type: "Academic Project",
    institution: "M S Ramaiah Institute of Technology",
    university: "Visvesvaraya Technological University",
    projectType: "MCA Final Semester Project",
    guide: "Dr. Manish Kumar",
    briefDescription:
      "A web application security system that integrates traditional vulnerability scanning with OpenAI's intelligent capabilities to detect and respond to security threats.",
    detailedDescription: `
          <p>Key features and achievements:</p>
          <ul class="list-disc list-inside">
            <li>Automated web crawler for systematic URL collection and vulnerability scanning</li>
            <li>Detection of multiple security threats (SQL injection, XSS, RCE, file inclusion, IDOR)</li>
            <li>Integration with OpenAI API for intelligent response generation</li>
            <li>Real-time vulnerability analysis and mitigation recommendations</li>
            <li>Comprehensive logging and reporting system</li>
            <li>User-friendly interface for security assessment results</li>
          </ul>
          <p>This project demonstrates advanced integration of AI with cybersecurity practices for enhanced web application protection.</p>
        `,
    technologies: [
      "Python",
      "Django",
      "OpenAI API",
      "SQLite",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap4",
      "BeautifulSoup",
      "Request Library",
    ],
    learnings:
      "Gained extensive knowledge in web security, AI integration, vulnerability assessment, and full-stack development while working on a real-world cybersecurity solution.",
    githubUrl:
      "https://github.com/shravanksubrahmanya/website_vulnerability_detection_and_analysis",
  },
  {
    id: 10,
    title: "Problem Solving Centre",
    type: "Academic Project",
    institution: "M S Ramaiah Institute of Technology",
    university: "Visvesvaraya Technological University",
    projectType: "MCA Mini Project",
    guide: "Dr. Manish Kumar",
    briefDescription:
      "A platform connecting Problem Providers with Problem Solvers, enabling organizations to post real-world problems and get solutions from verified experts in a secure environment.",
    detailedDescription: `
          <p>Key features and objectives:</p>
          <ul class="list-disc list-inside">
            <li>Secure platform for posting and solving real-world problems</li>
            <li>User verification system with multi-document proof requirements</li>
            <li>Three-tier confidentiality system (Confidential, Semi-Confidential, Public)</li>
            <li>Trusted member system for accessing confidential problems</li>
            <li>Support for multiple solution formats (Research Papers, Documents, Designs)</li>
            <li>Dynamic reputation system based on solutions and trusted memberships</li>
          </ul>
          <p>Target Users:</p>
          <ul class="list-disc list-inside">
            <li>Companies needing R&D support</li>
            <li>NGOs and Government agencies seeking guidance</li>
            <li>Startups looking to reduce R&D costs</li>
            <li>Individual experts (Professors, Scientists, Engineers)</li>
            <li>Professional groups and communities</li>
          </ul>
          <p>The platform facilitates secure collaboration between problem providers and solvers while maintaining confidentiality and rewarding innovation.</p>
        `,
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    learnings:
      "Gained experience in building secure multi-user platforms, implementing authentication systems, and managing different levels of data access and confidentiality.",
    githubUrl: "https://github.com/shravanksubrahmanya/problem_solvers_centre",
  },
  {
    id: 11,
    title: "Crafts Store",
    type: "Academic Project",
    institution: "M S Ramaiah Institute of Technology",
    university: "Visvesvaraya Technological University",
    projectType: "Academic Project",
    briefDescription:
      "An online e-commerce platform for selling crafts and handicraft products across India, featuring a modern tech stack and user-friendly interface.",
    detailedDescription: `
          <p>Key features and objectives:</p>
          <ul class="list-disc list-inside">
            <li>Full-featured e-commerce platform for crafts and handicrafts</li>
            <li>Secure user authentication using JWT</li>
            <li>Responsive and modern user interface</li>
            <li>Product catalog management system</li>
            <li>Shopping cart and order processing functionality</li>
            <li>RESTful API architecture with Express.js backend</li>
          </ul>
          <p>Technical Implementation:</p>
          <ul class="list-disc list-inside">
            <li>Angular-based frontend with modular architecture</li>
            <li>Express.js backend with RESTful endpoints</li>
            <li>MariaDB for reliable data persistence</li>
            <li>JWT implementation for secure authentication</li>
            <li>Responsive design for multiple device support</li>
          </ul>
          <p>The application provides a seamless shopping experience for handicraft enthusiasts while supporting local artisans.</p>
        `,
    technologies: [
      "Angular",
      "Express.js",
      "Node.js",
      "MariaDB",
      "JWT",
      "HTML",
      "CSS",
      "TypeScript",
    ],
    learnings:
      "Developed expertise in full-stack development using MEAN stack, implemented secure authentication, and created a scalable e-commerce solution.",
    githubUrl: "https://github.com/shravanksubrahmanya/Crafts-Store",
  },
  {
    id: 12,
    title: "EVENTZO - Online Events Ticket Selling App",
    type: "Academic Project",
    institution: "Alvas Degree College",
    university: "Mangalore University",
    projectType: "Academic Project",
    guide: "Abhijna",
    briefDescription:
      "A mobile application platform for connecting users with social events, enabling ticket booking and event information sharing across various event categories.",
    detailedDescription: `
          <p>Key features and capabilities:</p>
          <ul class="list-disc list-inside">
            <li>Event discovery and ticket booking system</li>
            <li>User-to-user event information sharing</li>
            <li>Live messaging and notifications system</li>
            <li>Comprehensive event details including descriptions, videos, and articles</li>
            <li>Support for multiple event categories (Sports, Competitions, Social Events)</li>
            <li>Real-time event updates and notifications</li>
          </ul>
          <p>Implementation Details:</p>
          <ul class="list-disc list-inside">
            <li>Android native application development</li>
            <li>Server-side implementation with PHP and MySQL</li>
            <li>User authentication and authorization</li>
            <li>Real-time messaging capabilities</li>
            <li>Secure ticket booking system</li>
          </ul>
          <p>The application serves as a comprehensive platform connecting event organizers with potential attendees while providing detailed event information and secure ticket purchasing.</p>
        `,
    technologies: ["Android", "Java", "XML", "PHP", "MySQL", "RESTful APIs"],
    learnings:
      "Gained experience in mobile app development, backend integration, real-time messaging systems, and implementing secure payment workflows.",
    githubUrl:
      "https://github.com/shravanksubrahmanya/Online-Events-Tickets-Sellling-App",
  },
];
