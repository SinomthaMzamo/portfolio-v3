// Portfolio data for Sinomtha Mzamo

export const ASCII_ARTS = {
  welcome: `
 ███████╗██╗███╗   ██╗ ██████╗ ███╗   ███╗████████╗██╗  ██╗ █████╗ 
 ██╔════╝██║████╗  ██║██╔═══██╗████╗ ████║╚══██╔══╝██║  ██║██╔══██╗
 ███████╗██║██╔██╗ ██║██║   ██║██╔████╔██║   ██║   ███████║███████║
 ╚════██║██║██║╚██╗██║██║   ██║██║╚██╔╝██║   ██║   ██╔══██║██╔══██║
 ███████║██║██║ ╚████║╚██████╔╝██║ ╚═╝ ██║   ██║   ██║  ██║██║  ██║
 ╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝
           ███╗   ███╗███████╗ █████╗ ███╗   ███╗ ██████╗ 
           ████╗ ████║╚══███╔╝██╔══██╗████╗ ████║██╔═══██╗
           ██╔████╔██║  ███╔╝ ███████║██╔████╔██║██║   ██║
           ██║╚██╔╝██║ ███╔╝  ██╔══██║██║╚██╔╝██║██║   ██║
           ██║ ╚═╝ ██║███████╗██║  ██║██║ ╚═╝ ██║╚██████╔╝
           ╚═╝     ╚═╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ 
`,
  about: `
    _    ____   ___  _   _ _____   __  __ _____ 
   / \\  | __ ) / _ \\| | | |_   _| |  \\/  | ____|
  / _ \\ |  _ \\| | | | | | | | |   | |\\/| |  _|  
 / ___ \\| |_) | |_| | |_| | | |   | |  | | |___ 
/_/   \\_\\____/ \\___/ \\___/  |_|   |_|  |_|_____|
`,
  projects: `
 ____  ____   ___      _ _____ ____ _____ ____  
|  _ \\|  _ \\ / _ \\    | | ____/ ___|_   _/ ___| 
| |_) | |_) | | | |_  | |  _|| |     | | \\___ \\ 
|  __/|  _ <| |_| | |_| | |__| |___  | |  ___) |
|_|   |_| \\_\\\\___/ \\___/|_____\\____| |_| |____/ 
`,
  experience: `
 _______  ______  _____ ____  ___ _____ _   _  ____ _____ 
| ____\\ \\/ /  _ \\| ____|  _ \\|_ _| ____| \\ | |/ ___| ____|
|  _|  \\  /| |_) |  _| | |_) || ||  _| |  \\| | |   |  _|  
| |___ /  \\|  __/| |___|  _ < | || |___| |\\  | |___| |___ 
|_____/_/\\_\\_|   |_____|_| \\_\\___|_____|_| \\_|\\____|_____|
`,
  skills: `
 ____  _  _____ _     _     ____  
/ ___|| |/ /_ _| |   | |   / ___| 
\\___ \\| ' / | || |   | |   \\___ \\ 
 ___) | . \\ | || |___| |___ ___) |
|____/|_|\\_\\___|_____|_____|____/ 
`,
  education: `
 _____ ____  _   _  ____    _  _____ ___ ___  _   _ 
| ____|  _ \\| | | |/ ___|  / \\|_   _|_ _/ _ \\| \\ | |
|  _| | | | | | | | |     / _ \\ | |  | | | | |  \\| |
| |___| |_| | |_| | |___ / ___ \\| |  | | |_| | |\\  |
|_____|____/ \\___/ \\____/_/   \\_\\_| |___\\___/|_| \\_|
`,
  certifications: `
  ____ _____ ____ _____ ____  
 / ___| ____|  _ \\_   _/ ___| 
| |   |  _| | |_) || | \\___ \\ 
| |___| |___|  _ < | |  ___) |
 \\____|_____|_| \\_\\|_| |____/ 
`,
  cat: `
    /\\_____/\\
   /  o   o  \\
  ( ==  ^  == )
   )         (
  (           )
 ( (  )   (  ) )
(__(__)___(__)__)
`,
  help: `
 _   _ _____ _     ____  
| | | | ____| |   |  _ \\ 
| |_| |  _| | |   | |_) |
|  _  | |___| |___|  __/ 
|_| |_|_____|_____|_|    
`
};

export interface FileItem {
  name: string;
  type: 'file' | 'directory';
  content?: string;
  children?: FileItem[];
}

export const FILE_SYSTEM: FileItem = {
  name: "~",
  type: "directory",
  children: [
    {
      name: "about",
      type: "directory",
      children: [
        {
          name: "bio.txt",
          type: "file",
          content: `╔══════════════════════════════════════════════════════════════════╗
║                        SINOMTHA MZAMO                              ║
║              Full-Stack Developer & Cloud Engineer                 ║
╚══════════════════════════════════════════════════════════════════╝

Building incredible user interfaces that leave lasting impressions.

I'm a Full-stack developer and Certified Cloud Practitioner with proven 
expertise in building modern, performant, scalable front-end architectures.

Whether it's crafting elegant UIs, architecting scalable APIs, or deploying
robust cloud solutions — I turn complex problems into elegant, maintainable 
software.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧  sinomtha.mzamo@gmail.com
📍  Cape Town, South Africa
🔗  linkedin.com/in/sinomtha-mzamo
🐙  github.com/SinomthaMzmo
`,
        },
        {
          name: "contact.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                           CONTACT INFO                                ║
╚═══════════════════════════════════════════════════════════════════════╝

📧 Email:      sinomtha.mzamo@gmail.com
🐙 GitHub:     github.com/SinomthaMzamo
💼 LinkedIn:   linkedin.com/in/sinomtha-mzamo
📍 Location:   Cape Town, South Africa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's build something together!
`,
        },
      ],
    },
    {
      name: "projects",
      type: "directory",
      children: [
        {
          name: "vuka_coach_ai_interview_platform.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║             VUKA COACH - AI INTERVIEW COACHING PLATFORM                ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: React | FastAPI | Google Gemini | Groq Whisper | Google Cloud TTS | Python

Co-developed an AI-powered interview coaching platform in 36 hours to help
address South Africa’s youth unemployment challenge through personalized
interview practice and real-time AI feedback.

Features:
• AI-generated interview questions based on CV + Job Description parsing
• Real-time voice interview practice with speech-to-text (Whisper)
• AI feedback on delivery, confidence, relevance, and professionalism
• Performance reports with actionable insights and metrics
• STAR method story generation for behavioral interviews
• Mobile-first, data-efficient UI optimized for low-end devices

🔗 github.com/SinomthaMzamo
`,
        },
        {
          name: "ai_portfolio_assistant_content_generator.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║        AI PORTFOLIO ASSISTANT - PROFESSIONAL CONTENT GENERATOR        ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: React | TypeScript | Supabase | PostgreSQL | Gemini AI | Edge Functions

Co-developed an AI-powered web application that transforms user input into
polished professional content such as bios, project summaries, and learning
reflections using Gemini Generative AI.

Features:
• Dual interaction modes (chatbot + structured form workflow)
• Semantic validation + context retention across chat turns
• Dynamic question flow that adapts to user input and edits
• Content refinement via natural language instructions
• Generation history with persistent storage + user preferences
• Multi-format export (PDF, Markdown, Plain Text)
• Secure multi-tenant backend using Supabase RLS policies

🔗 github.com/SinomthaMzamo
`,
        },
        {
          name: "dha_booking_system_ux_revamp.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║             UX REVAMP - DHA APPOINTMENT BOOKING SYSTEM                 ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Angular | TypeScript | Cursor

Redesigned the online DHA appointment booking experience to improve usability,
feature visibility, and user-centricity for cross-device users.

Features:
• Landing page redesign to introduce services and platform value
• Improved group booking visibility via layout + visual hierarchy
• Progress indicators to guide users through booking flow
• Alternative branch suggestions for failed searches
• Improved navigation + data persistence for smooth backtracking
• Cross-browser and cross-device support (including Safari on iOS)

🔗 github.com/SinomthaMzamo
`,
        },
        {
          name: "personal_portfolio_dashboard.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               PERSONAL PORTFOLIO & ADMIN DASHBOARD                    ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Angular | TypeScript | AWS (S3, CloudFront, Lambda, DynamoDB) | Cognito | SES | Gmail API

Built a fully deployed portfolio showcasing projects and blog posts, with a
secure admin dashboard to manage content, update CV/avatar, and respond to
messages without touching code.

Features:
• Responsive Angular frontend deployed via S3 + CloudFront CDN
• Serverless backend using Lambda + API Gateway + DynamoDB
• Infrastructure-as-Code via CloudFormation
• Secure authentication + authorization using AWS Cognito
• Gmail API + AWS SES integration for contact form notifications and replies
• CMS-like dashboard for content and profile management

🔗 github.com/SinomthaMzamo
`,
        },
        {
          name: "bhala_edolweni_debt_management.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║          BHALA EDOLWENI - DEBTOR MANAGEMENT WEB APPLICATION            ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Python | REST API | MVC | React | Kotlin | Kotlin Multiplatform (KMP)

Developed a full-stack debtor management application for small business owners
to track customers who owe money, inspired by managing debtors for my own
small business.

Features:
• REST API supporting both headless and React-based clients
• Full CRUD implementation with role-based access (Admin, Agent, Debtor)
• Clean MVC architecture with separation of concerns
• Strong test coverage using TDD/BDD practices (unittest + pytest)
• AES encryption for sensitive debtor and payment data
• CORS-safe client-server integration for scalable deployments
• Backend migration in progress: Python → Kotlin for scalability/performance

🔗 github.com/SinomthaMzamo
`,
        },
      ],
    },
    {
      name: "experience",
      type: "directory",
      children: [
        {
          name: "python_game_design_tutor_kodland.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║              PYTHON GAME DESIGN TUTOR @ KODLAND                        ║
║                    Nov 2025 - Present                                  ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Kodland | Remote

Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Teach Python programming through structured game development curricula,
  delivering both group classes and 1-on-1 tutoring sessions

• Guide students through hands-on projects using Turtle and Pygame,
  covering loops, conditionals, functions, lists, and introductory OOP

• Deliver interactive online lessons via Zoom using screen sharing and
  annotation tools to explain algorithms, debugging, and code structure

• Review student submissions on the Kodland learning platform, providing
  targeted feedback to improve correctness, readability, and problem-solving

• Use Kodland Backoffice tools to manage student progress, schedules, and
  planning for smooth lesson delivery and learner support

• Collaborate with managers and customer support via Slack to coordinate
  student needs and resolve issues efficiently
`,
        },
        {
          name: "fullstack_freelance_student_accommodation_platform.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║          FULL-STACK DEVELOPER (FREELANCE)                              ║
║     STUDENT ACCOMMODATION MANAGEMENT PLATFORM                          ║
║                 Aug 2025 - Oct 2025                                    ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Freelance | Remote

Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Designed and developed a booking and property management system for a
  student accommodation company managing 3 properties

• Conducted requirements gathering sessions and translated business needs
  into technical specifications

• Delivered iterative prototypes using Figma mockups for stakeholder approval

• Built a responsive React booking platform using Vite, React Hook Form,
  Zod validation, and ReactQuery for server state management

• Implemented a real-time admin dashboard with occupancy tracking, tenant
  directory, broadcast messaging, and property analytics

• Integrated Supabase authentication, PostgreSQL database, and secure file
  storage for tenant documentation

• Reduced booking processing time from 48 hours to under 5 minutes through
  digital automation and streamlined workflows

• Built exportable reporting features for financial reconciliation and
  capacity planning

🔧 Tech Stack: React | Tailwind CSS | Supabase | PostgreSQL | Zod | ReactQuery
`,
        },
        {
          name: "software_developer_intern_safetyio.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║          SOFTWARE DEVELOPER INTERN @ SAFETY IO                         ║
║                   Jan 2025 - Sep 2025                                  ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Safety IO | Cape Town, South Africa

Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Designed UI prototypes, workflows, org charts, and team mappings using
  Figma & Miro to support agile delivery and process improvements

• Collaborated with cross-functional teams (developers, PMs, designers,
  QA engineers) through stand-ups, retrospectives, pair programming,
  and internal documentation

• Migrated Bamboo runner to Bitbucket Pipelines, improving CI/CD efficiency
  and reducing deployment errors by 25%

• Analysed Datadog logs to identify and fix performance bottlenecks,
  improving uptime and response times

• Developed and integrated RESTful APIs, authentication workflows using
  AWS Cognito, and cloud deployments via AWS Lambda, S3, and API Gateway

• Built and deployed full-stack applications using Angular, TypeScript,
  and PostgreSQL

• Conducted a deep dive into modern development tools like Cursor and
  applied them in internal projects

• Initiated and co-developed a Confluence scraping side project to generate
  activity analytics and search functionality similar to a GitHub heatmap

• Implemented agile training practices in backlog refinement and flow metrics
  tracking using Nave and the Atlassian ecosystem

🔧 Tech Stack: Angular | TypeScript | PostgreSQL | AWS | Datadog | Bitbucket Pipelines
`,
        },
        {
          name: "coding_expert_ai_trainer_outlier_ai.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               CODING EXPERT - AI TRAINER @ OUTLIER AI                  ║
║                    Aug 2024 - Present                                  ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Outlier AI | Global / Remote

Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Reviewed and optimized AI-generated code in JavaScript, Python, Java,
  and TypeScript for correctness, clarity, and efficiency under tight deadlines

• Delivered detailed, actionable feedback to improve accuracy, tone,
  and alignment with project guidelines

• Completed 100+ coding tasks in one month, earning over R25,000 through
  consistent high-quality delivery

• Designed coding challenges and structured solutions to strengthen AI
  reasoning and problem-solving capabilities

• Applied annotation guidelines consistently, resolving ambiguous edge cases
  with strong engineering judgment

• Gained hands-on experience with RLHF workflows and structured evaluation
  pipelines for improving model performance
`,
        },
        {
          name: "data_science_intern_codsoft.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                 DATA SCIENCE INTERN @ CODSOFT                          ║
║                   Apr 2024 - May 2024                                  ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 CodSoft | Remote

Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Completed a structured internship focused on applying data science
  principles through hands-on machine learning projects

• Built predictive and classification models using Python, Pandas, NumPy,
  and Scikit-learn on datasets such as Titanic Survival Prediction,
  Movie Rating Prediction, and Iris Flower Classification

• Applied preprocessing, feature engineering, and evaluation techniques
  to improve model performance and interpretability

• Strengthened understanding of regression and classification algorithms
  including Logistic Regression, Decision Trees, and Random Forests

• Improved reporting and visualization skills using Matplotlib and Seaborn,
  producing clear insights from model outputs

• Gained exposure to real-world applications like sales forecasting and
  fraud detection through applied learning projects

🔧 Tech Stack: Python | Pandas | NumPy | Scikit-learn | Matplotlib
`,
        },
      ],
    },
    {
      name: "skills",
      type: "directory",
      children: [
        {
          name: "backend.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                    BACKEND & APIs                                      ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  🐍 Python        ████████████████████  Expert
  ☕ Java          ████████████████░░░░  Advanced  
  📦 Node.js       ██████████████░░░░░░  Advanced
  🔥 Flask         ████████████████████  Expert
  🚀 FastAPI       ████████████████░░░░  Advanced
  🐘 PostgreSQL    ████████████████░░░░  Advanced
  📊 MySQL         ██████████████░░░░░░  Intermediate
  🍃 MongoDB       ██████████████░░░░░░  Intermediate

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`,
        },
        {
          name: "frontend.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                       FRONTEND                                         ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  ⚛️  React         ████████████████░░░░  Advanced
  📐 Angular       ████████████████░░░░  Advanced
  🟦 TypeScript    ██████████████████░░  Advanced
  🎨 JavaScript    ██████████████████░░  Advanced
  🖌️  Tailwind CSS  ███████████████░░░░░  Advanced
  🔥 Next.js       ████████████████░░░░  Advanced

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`,
        },
        {
          name: "mobile.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                  MOBILE DEVELOPMENT                                    ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  🐦 Flutter       ██████████░░░░░░░░░░  Competent
  ☕ Kotlin        ████████████░░░░░░░░  Intermediate

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`,
        },
        {
          name: "cloud_devops.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                   CLOUD & DEVOPS                                       ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  ☁️  AWS           ████████████████░░░░  Advanced (Certified)
  🐳 Docker        ██████████████░░░░░░  Intermediate
  🔄 CI/CD         ██████████████░░░░░░  Intermediate
  🐙 GitHub Actions████████████████░░░░  Advanced
  📊 Datadog       ████████████░░░░░░░░  Competent

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`,
        },
        {
          name: "ai_ml.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               ARTIFICIAL INTELLIGENCE                                  ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  🧠 OpenAI API    ████████████████░░░░  Advanced
  📊 TensorFlow    ██████████░░░░░░░░░░  Competent
  🔮 Prompt Eng    ████████████████████  Expert

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`,
        },
        {
          name: "testing.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                  TESTING & QA                                          ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  🧪 Jest          ████████████████░░░░  Advanced
  🎭 Playwright       ██████████░░░░░░░░░░  Competent
  🌐 Selenium      ████████████████░░░░  Advanced
  🎯 Pytest        ████████████████████  Expert

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`,
        },
      ],
    },
    {
      name: "education",
      type: "directory",
      children: [
        {
          name: "wethinkcode.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                      WETHINKCODE_                                      ║
║              National Certificate in IT                                ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Durban Campus
📅 2022 - 2024

Program Highlights:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Peer-to-peer learning methodology
• Project-based curriculum
• Full-stack development focus
• Agile & collaborative workflows
• Real-world software engineering practices

Skills Developed:
• Software Development
• System Design
• Problem Solving
• Team Collaboration
`,
        },
        {
          name: "ufs_physics_astrophysics.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               UNIVERSITY OF THE FREE STATE (INCOMPLETE)                ║
║                  BSc PHYSICS & ASTROPHYSICS                            ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Bloemfontein, South Africa
📅 Jan 2020 - May 2022

Program Highlights:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Completed advanced coursework in Vector Calculus, Differential Equations,
  Mathematical Modeling (Excel), and Scientific Computing (MATLAB)

• Studied Physics, Chemistry, Astrophysics, and Engineering Statics with
  strong mathematical foundations

• Developed practical lab experience and formal scientific report writing
  skills through structured experimental work

Achievements & Skills:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Achieved six distinctions in first year
• Strengthened problem-solving, critical thinking, and analytical reasoning
• Built strong data analysis and scientific computing capability
• Improved technical communication through research-style reporting
`,
        },
        {
          name: "wynberg_girls_high_school.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                 WYNBERG GIRLS' HIGH SCHOOL                             ║
║                  NSC - BASIC EDUCATION                                 ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Cape Town, South Africa
📅 Jan 2012 - Dec 2016
🎓 Grade: A-

Activities & Societies:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• First Team Netball Captain
• Current Affairs Society Member
• First Aid Team Member
• Cross Country Club Member
• Social Diving & Swimming Club Member
• Social Tennis & Squash Club Member

Academic Performance:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Maintained a consistent record of academic excellence throughout

Skills Developed:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Problem-solving and critical thinking
• Public speaking and communication
• Ability to understand and explain complex information
• Leadership and teamwork
`,
        },
      ],
    },
    {
      name: "certifications",
      type: "directory",
      children: [
        {
          name: "aws_cloud_practitioner.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║          AWS CERTIFIED CLOUD PRACTITIONER                              ║
╚═══════════════════════════════════════════════════════════════════════╝

🏅 Amazon Web Services
📅 2024

Validates foundational understanding of AWS Cloud concepts:
• AWS services and core cloud concepts
• Security, compliance, and shared responsibility
• Cloud pricing and support models
• Architectural best practices

🔗 https://www.credly.com/badges/a05b31fc-dbb4-4216-8450-f51c8ac4dd66/public_url
`,
        },
        {
          name: "ibm_ux_design_fundamentals.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║           USER EXPERIENCE DESIGN FUNDAMENTALS                          ║
╚═══════════════════════════════════════════════════════════════════════╝

🏅 IBM SkillsBuild
📅 2024

Covers essential UX design principles and product thinking:
• Human-centered design process
• User research and personas
• Wireframing and prototyping basics
• Usability and accessibility foundations

🔗 https://www.credly.com/badges/e8388ac0-91ad-4d41-b636-ed3c2b1273a5/public_url
`,
        },
        {
          name: "ibm_project_management_fundamentals.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║             PROJECT MANAGEMENT FUNDAMENTALS                            ║
╚═══════════════════════════════════════════════════════════════════════╝

🏅 IBM SkillsBuild
📅 2024

Validates project delivery knowledge across planning and execution:
• Defining project scope and objectives
• Scheduling, milestones, and deliverables
• Risk identification and mitigation
• Agile and traditional project management basics

🔗 https://www.credly.com/badges/e7203af1-1f13-473b-90c3-36cd3198569f/public_url
`,
        },
        {
          name: "ibm_sql_relational_databases_101.txt",
          type: "file",
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║             SQL AND RELATIONAL DATABASES 101                           ║
╚═══════════════════════════════════════════════════════════════════════╝

🏅 IBM SkillsBuild / Skills Network
📅 2024

Covers relational database foundations and SQL querying:
• Relational database concepts and schema design
• SQL SELECT queries and filtering
• Joins, grouping, and aggregation
• Database normalization basics

🔗 https://courses.skillsbuild.skillsnetwork.site/certificates/2536f3fca5684a4aada4a7a3987be9dc
`,
        },
      ],
    },
  ],
};

export const HELP_TEXT = `
╔═══════════════════════════════════════════════════════════════════════╗
║                     AVAILABLE COMMANDS                                 ║
╚═══════════════════════════════════════════════════════════════════════╝

  ls              List directory contents
  cd <dir>        Change directory (use 'cd ..' to go back)
  cat <file>      Display file contents (with cute ASCII cat!)
  pwd             Print working directory
  clear           Clear the terminal screen
  help            Show this help message
  whoami          Display user information
  tree            Show directory structure
  welcome         Show the welcome screen again
  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 TIP: Use TAB for auto-completion!
💡 TIP: Navigate with cd about/, cd projects/, etc.
`;

export const WHOAMI_TEXT = `
╔═══════════════════════════════════════════════════════════════════════╗
║                        USER PROFILE                                    ║
╚═══════════════════════════════════════════════════════════════════════╝

  User:     sinomtha
  Name:     Sinomtha Mzamo
  Role:     Full-Stack Developer & Cloud Engineer
  Shell:    /bin/bash
  Home:     /home/sinomtha
  
  Status:   🟢 Available for opportunities
  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  "Building incredible user interfaces that leave lasting impressions."
`;
