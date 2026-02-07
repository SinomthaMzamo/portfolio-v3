import {
  Crown,
  Briefcase,
  Code,
  GraduationCap,
  Award,
  Compass,
  User,
} from "lucide-react";
import { Kingdom, KingdomName } from "./gameData";
import { color } from "framer-motion";

export const aboutMe = {
  name: "Sinomtha Mzamo",
  title: "Full-Stack Developer & Cloud Engineer",
  tagline:
    "Building accessible, user-first solutions from design to deployment",
  bio: "Full-stack developer and certified Cloud Practitioner with proven experience in billing system integrations, patient-facing healthcare applications. Adept at bridging technical gaps and enhancing team productivity across microservices, API development, building native mobile interfaces, deploying cloud solutions, and front-end development. Improved MVP output and API lifecycle services.",
  contact: {
    email: "sinomtha.dev@gmail.com",
    phone: "+27 68 334 3547",
    location: "Cape Town, South Africa",
    linkedin: "linkedin.com/in/sinomtha",
    github: "github.com/sinomtha",
  },
  skills: {
    fullStack: ["React.js", "Python", "Java"],
    cloudDevOps: ["AWS", "CI/CD", "Docker"],
    databases: ["PostgreSQL", "MongoDB", "Firebase"],
    softSkills: ["Leadership", "Mentoring", "Agile"],
  },
};

export const kingdoms: Kingdom[] = [
  {
    id: "projects",
    name: KingdomName.Projects,
    description: "Featured creations and builds",
    icon: Code,
    colour: "from-cyan-500 to-teal-600",
    position: { angle: 0, distance: 240 },
    missions: [
      {
        id: "debt-mgmt",
        title: "Debt Appointment Booking UX",
        description: "Patient-facing appointment and payment solutions",
        details: [
          "Built payment screens with comprehensive form flows using React.js",
          "Integrated with internal APIs for real-time data validation",
          "Implemented secure payment processing flows",
        ],
        technologies: ["React.js", "TypeScript", "REST API"],
        links: [{ label: "View Project", url: "#" }],
        date: "2024",
        unlocked: false,
        gameType: "memory",
        gameData: {
          crossword: [
            { word: "AGILE", hint: "" },
            { word: "FIGMA", hint: "" },
            { word: "ANGULAR", hint: "" },
            { word: "AWS", hint: "" },
          ],
          architectureLayers: [
            { layerPosition: 0, description: "refrigerant readings", icon: "" },
            { layerPosition: 1, description: "database", icon: "" },
            { layerPosition: 2, description: "monitoring dashboard", icon: "" },
          ],
          matchThree: [
            { colour: "blueviolet", icon: "Calculator" },
            { colour: "mediumpurple", icon: "React" },
            { colour: "salmon", icon: "Form" },
            { colour: "limegreen", icon: "Invoice" },
            { colour: "cornflowerblue", icon: "SQL" },
            { colour: "crimson", icon: "Server" },
          ],
          memoryMatch: ["React", "TypeScript", "API", "Payment", "UX", "Form"],
        },
        targetScore: 150,
      },
    ],
  },
  {
    id: "experience",
    name: KingdomName.Experience,
    description: "Professional journey and roles",
    icon: Briefcase,
    colour: "from-amber-500 to-orange-600",
    position: { angle: 60, distance: 240 },
    missions: [
      {
        id: "software-dev-intern",
        title: "Software Developer Intern",
        description: "Safety IO - Full-stack development internship",
        details: [
          "Migrated Bamboo runner to Bitbucket Pipelines, reducing deployment errors by 25% and streamlining CI/CD workflows",
          "Built full-stack applications with Angular, TypeScript, and PostgreSQL, strengthening expertise in scalable front-end and relational database integration",
          "Analysed Datadog logs to identify performance bottlenecks, improving system uptime and demonstrating strong debugging and observability skills",
          "Co-developed a Confluence analytics tool with activity heatmaps and advanced search functionality, adding data-driven insights for stakeholders",
          "Selected and assessed trade-offs between design patterns such as Factory and Builder to improve system design, demonstrating solid software architecture judgment and maintainability practices",
          "Enhanced team communication pipelines by integrating Bitbucket and Microsoft Teams webhooks automated with Ansible to continuously notify developers of activity on critical branches, strengthening collaboration and supporting a proactive DevOps culture",
          "Refactored and streamlined stylesheets by migrating to modular SCSS and removing legacy code smells, leading to cleaner structure, easier maintenance, and improved front-end performance.",
        ],
        date: "Jan 2025 - Sep 2025",
        unlocked: false,
        gameType: "memory",
        gameData: {
          crossword: [
            {
              word: "AGILE",
              hint: "Iterative way of building software with quick feedback cycles (Scrum/Kanban)",
            },
            {
              word: "FIGMA",
              hint: "Popular collaborative UI/UX design and prototyping tool",
            },
            {
              word: "ANGULAR",
              hint: "TypeScript-based front-end framework maintained by Google",
            },
            {
              word: "AWS",
              hint: "Amazon’s cloud platform for hosting, storage, databases, and more",
            },
          ],
          architectureLayers: [
            { layerPosition: 0, description: "refrigerant readings", icon: "" },
            { layerPosition: 1, description: "database", icon: "" },
            { layerPosition: 2, description: "monitoring dashboard", icon: "" },
          ],
          matchThree: [
            { colour: "cornflowerblue", icon: "TypeScript" },
            { colour: "darksalmon", icon: "Figma" },
            { colour: "blue", icon: "Docker" },
            { colour: "crimson", icon: "Angular" },
            { colour: "green", icon: "Node" },
            { colour: "dodgerblue", icon: "Cloud" },
          ],
          memoryMatch: ["React", "TypeScript", "Sprint", "QA", "SDK", "API"],
        },
        targetScore: 150,
      },
    ],
  },
  {
    id: "skills",
    name: KingdomName.Skills,
    description: "Technical abilities and tools",
    icon: Award,
    colour: "from-purple-500 to-indigo-600",
    position: { angle: 120, distance: 240 },
    missions: [
      {
        id: "backend-apis",
        title: "Backend & APIs",
        description: "Server-side technologies and integrations",
        details: [
          "Node.js",
          "Java",
          "Kotlin",
          "Spring Boot",
          "Python",
          "PostgreSQL",
          "REST",
        ],
        unlocked: false,
        gameType: "memory",
        gameData: {
          crossword: [
            {
              word: "SOURCE",
              hint: "Iterative way of building software with quick feedback cycles (Scrum/Kanban)",
            },
            {
              word: "CODE",
              hint: "Instructions written in a programming language to build software",
            },
            {
              word: "SERVER",
              hint: "A computer or system that provides data or services to other computers",
            },
            {
              word: "API",
              hint: "A set of rules that allows different software systems to communicate",
            },
          ],
          architectureLayers: [
            { layerPosition: 0, description: "", icon: "" },
            { layerPosition: 1, description: "", icon: "" },
            { layerPosition: 2, description: "", icon: "" },
          ],
          matchThree: [
            { colour: "mediumpurple", icon: "Server" },
            { colour: "green", icon: "Node" },
            { colour: "crimson", icon: "JSON" },
            { colour: "cornflowerblue", icon: "PGSQL" },
            { colour: "darkorange", icon: "Java" },
          ],
          memoryMatch: ["Node", "Java", "System", "SQL", "REST", "GraphQL"],
        },
        targetScore: 150,
      },
    ],
  },
  {
    id: "education",
    name: KingdomName.Education,
    description: "Academic achievements",
    icon: GraduationCap,
    colour: "from-emerald-500 to-green-600",
    position: { angle: 180, distance: 240 },
    missions: [
      {
        id: "bsc-phys-astro",
        title: "BSc Physics & Astrophysics",
        description: "University of the Free State",
        details: [
          "Focus on algorithms and data structures",
          "Software engineering principles",
          "Database systems and design",
        ],
        date: "2019 - 2022",
        unlocked: false,
        gameType: "crossword",
        gameData: {
          crossword: [
            {
              word: "STAR",
              hint: "A massive glowing sphere of plasma powered by nuclear fusion",
            },
            {
              word: "BLOEM",
              hint: "Nickname for Bloemfontein, the 'City of Roses', also known for its birdlife",
            },
            {
              word: "CALCULUS",
              hint: "Mathematics used to study change, motion, and rates in physics",
            },
            {
              word: "UNIVERSE",
              hint: "Everything that exists: space, time, matter, and energy",
            },
          ],
          architectureLayers: [
            { layerPosition: 0, description: "", icon: "" },
            { layerPosition: 0, description: "", icon: "" },
            { layerPosition: 0, description: "", icon: "" },
          ],
          matchThree: [
            { colour: "green", icon: "Calculator" },
            { colour: "slateblue", icon: "Telescope" },
            { colour: "darkviolet", icon: "Galaxy" },
            { colour: "crimson", icon: "Formula" },
            { colour: "darkorange", icon: "Rocket" },
            { colour: "cornflowerblue", icon: "Experiment" },
          ],
          memoryMatch: [
            "Rocket",
            "Telescope",
            "Experiment",
            "Galaxy",
            "Satellite",
            "GraphQL",
          ],
        },
        targetScore: 150,
      },
    ],
  },
  {
    id: "certifications",
    name: KingdomName.Certifications,
    description: "Credentials and awards",
    icon: Crown,
    colour: "from-yellow-500 to-amber-600",
    position: { angle: 240, distance: 240 },
    missions: [
      {
        id: "aws-cloud",
        title: "AWS Certified Cloud Practitioner",
        description: "Amazon Web Services certification",
        details: [
          "Cloud concepts and AWS core services",
          "Security and compliance",
          "Billing and pricing models",
        ],
        date: "2024",
        links: [{ label: "View Credential", url: "#" }],
        unlocked: false,
        gameType: "memory",
        gameData: {
          crossword: [
            {
              word: "DEPLOY",
              hint: "To release an application or service into a live environment",
            },
            {
              word: "USERS",
              hint: "People or identities that access AWS resources through IAM",
            },
            {
              word: "CLOUD",
              hint: "On-demand computing resources delivered over the internet",
            },
            {
              word: "AWS",
              hint: "Amazon Web Services, a major provider of cloud computing services",
            },
          ],

          architectureLayers: [
            { layerPosition: 0, description: "", icon: "" },
            { layerPosition: 0, description: "", icon: "" },
            { layerPosition: 0, description: "", icon: "" },
          ],
          matchThree: [
            { colour: "darkorange", icon: "AWS" },
            { colour: "cornflowerblue", icon: "Cloud" },
            { colour: "green", icon: "S3" },
            { colour: "crimson", icon: "IAM" },
            { colour: "dodgerblue", icon: "Dynamodb" },
          ],
          memoryMatch: ["AWS", "Cloud", "S3", "EC2", "Lambda", "IAM"],
        },
        targetScore: 150,
      },
    ],
  },
  {
    id: "exploring",
    name: KingdomName.Exploring,
    description: "Currently learning",
    icon: Compass,
    colour: "from-rose-500 to-pink-600",
    position: { angle: 300, distance: 240 },
    missions: [
      {
        id: "graphql",
        title: "GraphQL Fundamentals",
        description: "Build flexible APIs with queries, mutations, and schemas",
        details: [
          "Schema & types",
          "Queries and mutations",
          "Resolvers & caching basics",
        ],
        unlocked: false,
        gameType: "crossword",
        gameData: {
          crossword: [
            {
              word: "SCHEMA",
              hint: "The contract that defines types and operations in a GraphQL API",
            },
            {
              word: "QUERY",
              hint: "Used to read/fetch data from a GraphQL server",
            },
            {
              word: "MUTATION",
              hint: "Used to create, update, or delete data in GraphQL",
            },
            {
              word: "RESOLVER",
              hint: "A function that returns the data for a field",
            },
          ],
          architectureLayers: [
            { layerPosition: 0, description: "", icon: "" },
            { layerPosition: 0, description: "", icon: "" },
            { layerPosition: 0, description: "", icon: "" },
          ],
          matchThree: [
            { colour: "magenta", icon: "GraphQL" },
            { colour: "green", icon: "Shopify" },
            { colour: "red", icon: "Netflix" },
            { colour: "dodgerblue", icon: "Facebook" },
            { colour: "mediumpurple", icon: "GitHub" },
          ],
          memoryMatch: ["AWS", "Cloud", "S3", "EC2", "Lambda", "IAM"],
        },
        targetScore: 150,
      },
    ],
  },
];
