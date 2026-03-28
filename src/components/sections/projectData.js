// projectData.js

export const projectData = [
  {
    id: 13,
    title: "CRM AI Agent – ONE EVA Platform",
    type: "Company Project",
    company: "Ecolab Digital Centre",
    briefDescription:
      "Engineered a CRM-focused AI agent within the enterprise ONE EVA orchestration platform, enabling intelligent querying of Microsoft Dynamics 365 CRM data for 1000+ users across North America.",
    detailedDescription: `
      <p>Developed as part of the enterprise AI platform <strong>ONE EVA</strong> — a centralized orchestration system managing AI-driven workflows using an Agent-to-Agent (A2A) architecture.</p>
      <p><strong>Key Achievements:</strong></p>
      <ul class="list-disc list-inside">
        <li>Engineered a CRM AI agent for intelligent querying of Microsoft Dynamics 365 data, supporting sales and leadership teams.</li>
        <li>Designed and implemented AI workflows using LangGraph on Azure Databricks.</li>
        <li>Optimized schema handling from JSON to CSV-based vector storage — achieving ~79% reduction in LLM token consumption and ~50% improvement in processing efficiency.</li>
        <li>Delivered a production-grade solution selected over a Microsoft-developed CRM agent (Sales Chat) for superior performance.</li>
        <li>Successfully deployed across North America with 1000+ active users including senior leadership.</li>
        <li>Reduced manual CRM analytics effort by ~50% through intelligent automation.</li>
        <li>Established end-to-end CI/CD pipelines using Databricks Asset Bundles (DAB) and Azure DevOps.</li>
        <li>Integrated with Microsoft Teams via Azure Bot Service and Azure Functions.</li>
        <li>Implemented full MLOps lifecycle using MLflow — covering development, deployment, monitoring, and observability.</li>
      </ul>
    `,
    technologies: [
      "Azure Databricks",
      "LangGraph",
      "GPT Models",
      "Azure Functions",
      "Azure Bot Service",
      "Azure Logic Apps",
      "MLflow",
      "Azure DevOps",
      "Databricks Asset Bundles",
      "Microsoft Dynamics 365",
    ],
    learnings:
      "Gained deep expertise in enterprise-scale AI agent architecture, LangGraph orchestration, MLOps lifecycle management, and optimizing LLM token utilization in production systems.",
  },
  {
    id: 14,
    title: "Sales Training Buddy – AI-Powered Training Agent",
    type: "Company Project",
    company: "Ecolab Digital Centre",
    briefDescription:
      "Designing and developing an AI-powered sales training agent with a multi-agent architecture (Orchestrator, Researcher, Trainer, Role Play, Evaluator) integrated with Microsoft Copilot Studio and ONE EVA.",
    detailedDescription: `
      <p>An AI-powered sales training solution integrated with the ONE EVA platform, built in collaboration with Microsoft using Copilot Studio.</p>
      <p><strong>Key Contributions:</strong></p>
      <ul class="list-disc list-inside">
        <li>Conceptualized and architected the end-to-end solution from scratch.</li>
        <li>Designed a multi-agent architecture with 5 specialized agents: Orchestrator, Researcher, Trainer, Role Play, and Evaluator.</li>
        <li>Developed custom AI agents (Trainer, Role Play, Evaluator) while integrating Microsoft-provided agents for orchestration and research.</li>
        <li>Enabled automated research, guided training, simulated role-play, and performance evaluation workflows.</li>
        <li>Adopted a hybrid architecture (Microsoft + custom-built), reducing development effort by ~30% and improving research accuracy by ~50%.</li>
        <li>Deployed scalable services on Azure Databricks with MLOps practices using MLflow.</li>
      </ul>
      <p><em>Status: Ongoing</em></p>
    `,
    technologies: [
      "Azure Databricks",
      "Microsoft Copilot Studio",
      "Azure Functions",
      "Azure Bot Service",
      "Azure Logic Apps",
      "MLflow",
      "LangGraph",
    ],
    learnings:
      "Gained experience in multi-agent system design, Microsoft Copilot Studio integration, and building hybrid AI architectures combining enterprise and custom AI components.",
  },
  {
    id: 15,
    title: "ServiceNow AI Agent – Backend Integration System",
    type: "Company Project",
    company: "Ecolab Digital Centre",
    briefDescription:
      "Developed a standalone AI-powered backend system integrating with ServiceNow for automated ticket creation, lifecycle management, and intelligent query handling.",
    detailedDescription: `
      <p>A highly scalable AI-powered backend system enabling intelligent ServiceNow integration for automated IT service management workflows.</p>
      <p><strong>Key Contributions:</strong></p>
      <ul class="list-disc list-inside">
        <li>Architected and implemented the end-to-end backend system ensuring scalability, security, and performance.</li>
        <li>Built backend services using Azure Functions, Azure API Management, Azure Storage Accounts, and Azure Service Bus.</li>
        <li>Enabled comprehensive CRUD operations, session management, and conversational context handling for AI-driven interactions.</li>
        <li>Implemented robust authentication and security mechanisms using Azure API Management.</li>
        <li>Designed asynchronous communication workflows using webhooks for efficient AI response handling.</li>
        <li>Improved file upload performance by ~60% through pre-signed URL mechanisms.</li>
        <li>Delivered solution within tight timelines through close collaboration with frontend, AI engineering, and ServiceNow teams.</li>
      </ul>
    `,
    technologies: [
      "Azure Functions",
      "Azure API Management",
      "Azure Storage Accounts",
      "Azure Service Bus",
      "Python",
      "Webhooks",
    ],
    learnings:
      "Deepened expertise in serverless backend architecture, asynchronous communication patterns, and enterprise service integrations with robust security and performance optimization.",
  },
  {
    id: 1,
    title: "DoAssist – Internal AI Platform",
    type: "Company Project",
    company: "Donyati India Private Ltd",
    briefDescription:
      "Led ~80% of the full-stack development of DoAssist, an internal AI platform built with React.js (Azure Static Web Apps) and Python (Azure Functions), featuring a large-scale RAG engine handling 50+ files.",
    detailedDescription: `
      <p>DoAssist is an internal AI productivity platform developed at Donyati, enabling employees to leverage Generative AI for tasks, document retrieval, and knowledge management.</p>
      <p><strong>Key Achievements:</strong></p>
      <ul class="list-disc list-inside">
        <li>Delivered full-stack development contributing ~80% of the platform build.</li>
        <li>Built React.js frontend deployed on Azure Static Web Apps and Python backend on Azure Functions.</li>
        <li>Implemented AI workflows using Semantic Kernel, LangChain, and Azure AI Services — improving development speed by 50%.</li>
        <li>Optimized data retrieval efficiency by 30% using Cosmos DB and Azure Storage.</li>
        <li>Designed and delivered a large-scale RAG-based engine handling 50+ files, contributing to new client acquisition.</li>
        <li>Reduced overall development time by 30% through streamlined architecture and reusable components.</li>
      </ul>
    `,
    technologies: [
      "React.js",
      "Python",
      "Azure Functions",
      "Azure Static Web Apps",
      "Semantic Kernel",
      "LangChain",
      "Azure AI Services",
      "Azure Cosmos DB",
      "Azure Entra ID",
      "Azure Storage Account",
      "Azure Application Insights",
    ],
    learnings:
      "Gained deep expertise in full-stack AI platform development, RAG system design, Semantic Kernel orchestration, and delivering enterprise AI solutions from concept to production.",
    githubUrl: "https://doassist.donyati.com/",
  },
  {
    id: 16,
    title: "IEEE Chatbot – Intelligent Document Retrieval",
    type: "Company Project",
    company: "Donyati India Private Ltd",
    client: "IEEE",
    briefDescription:
      "Built an AI chatbot using LangGraph, FastAPI, and React.js enabling intelligent retrieval across 140+ technical documents and employee datasets, achieving ~89% answer accuracy.",
    detailedDescription: `
      <p>An enterprise-grade AI chatbot for IEEE enabling intelligent, context-aware retrieval across a large corpus of technical documents and employee knowledge bases.</p>
      <p><strong>Key Achievements:</strong></p>
      <ul class="list-disc list-inside">
        <li>Built AI chatbot enabling intelligent retrieval across 140+ technical documents and employee datasets.</li>
        <li>Improved response latency by ~35% through optimized backend architecture and retrieval mechanisms.</li>
        <li>Achieved ~89% answer accuracy through advanced RAG implementation and retrieval optimization.</li>
        <li>Developed backend services using FastAPI and contributed to React.js frontend modules.</li>
        <li>Established CI/CD pipelines using AWS services including Amplify, App Runner, S3, and Bedrock.</li>
      </ul>
    `,
    technologies: [
      "LangGraph",
      "FastAPI",
      "React.js",
      "AWS Amplify",
      "AWS App Runner",
      "AWS S3",
      "AWS Bedrock",
      "Python",
      "RAG",
    ],
    learnings:
      "Gained hands-on experience with LangGraph-based multi-step retrieval workflows, AWS cloud deployment pipelines, and optimizing RAG systems for high accuracy at scale.",
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
