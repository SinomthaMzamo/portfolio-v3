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
  name: '~',
  type: 'directory',
  children: [
    {
      name: 'about',
      type: 'directory',
      children: [
        {
          name: 'bio.txt',
          type: 'file',
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
`
        },
        {
          name: 'contact.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                           CONTACT INFO                                 ║
╚═══════════════════════════════════════════════════════════════════════╝

📧 Email:      sinomtha.mzamo@gmail.com
🐙 GitHub:     github.com/SinomthaMzamo
💼 LinkedIn:   linkedin.com/in/sinomtha-mzamo
📍 Location:   Cape Town, South Africa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Let's build something together!
`
        }
      ]
    },
    {
      name: 'projects',
      type: 'directory',
      children: [
        {
          name: 'chill_appointment_booking.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║           CHILL APPOINTMENT BOOKING UX REVAMP                          ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Reactjs | Styled Components

Full front-end rewrite for an appointment booking platform catering to 
mobile-first users in the beauty industry.

Features:
• Modern, responsive UI with smooth animations
• Optimized booking flow for mobile users  
• Beauty industry focused design system
• Styled Components for maintainable CSS-in-JS

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'voice_order_ecommerce.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║           VOICE ORDER - AI ECOMMERCE MENTOR                            ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Python | React Native | Next.js | SpeechRecognition

Open-source text-to-speech ecommerce web app designed for visually impaired 
users to access full order and checkout capabilities using voice commands.

Features:
• AI-powered voice recognition for orders
• Full accessibility support
• Cross-platform mobile app
• Real-time speech processing

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'personal_portfolio.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               PERSONAL PORTFOLIO & CHATBOT                             ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: OpenAI | Next.js | Supabase

Developer portfolio with an AI-powered chatbot. 
Visitors can ask questions and get instant answers about my experience 
and projects.

Features:
• AI chatbot powered by OpenAI
• Dynamic portfolio content
• Supabase backend
• Real-time chat interface

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'bliss_editorial.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║           BLISS EDITORIAL - DOCKER MANAGEMENT                          ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Python | Docker | Shell

A Docker-centric approach to managing web development environments. 
Full container orchestration with Traefik for modern software systems.

Features:
• Container orchestration
• Traefik reverse proxy
• Automated deployment pipelines
• Development environment isolation

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'bank_api_mocking.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                    BANK API MOCKING                                    ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Python | Flask

Backend API for bank account operations designed specifically for 
testing and development environments.

Features:
• Mock banking transactions
• Account management APIs
• Transaction history simulation
• Rate limiting and auth simulation

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'readpeak_carpooling.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               READPEAK - CARPOOLING PLATFORM                           ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Dart | Flutter | Python | Firebase

A new mobile carpooling platform designed to connect commuters with 
available rides in their area.

Features:
• Real-time ride matching
• Flutter cross-platform app
• Firebase backend
• Location-based services

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'metrictools_confluence.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║      METRICTOOLS - CONFLUENCE ACTIVITY ANALYTICS                       ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Selenium | Prometheus | Grafana | Python

An automated metrics scraper leveraging Selenium for real-time 
Confluence activity tracking and visualization.

Features:
• Automated web scraping
• Prometheus metrics collection  
• Grafana dashboards
• Real-time activity monitoring

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'toy_robot_server.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║         TOY ROBOT - MULTIPLAYER GAME SERVER                            ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: Python | Docker | JSON | HTTP

A WebSocket-based multiplayer game server enabling up to 4 players 
using HTTP and JSON API. Full documentation with Sphinx/ReStructuredText.

Features:
• Real-time multiplayer support
• WebSocket communication
• JSON API endpoints
• Containerized deployment

🔗 github.com/SinomthaMzamo
`
        },
        {
          name: 'mr_africa_health.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║          MR AFRICA - HEALTH INFORMATION PLATFORM                       ║
╚═══════════════════════════════════════════════════════════════════════╝

🔧 Tech Stack: React | Python | Express

Backend work for routing/navigating for a health information platform 
for African men. Features 4 sub-modules with specialized health content.

Features:
• Health information API
• Multi-module architecture
• Express routing
• React frontend integration

🔗 github.com/SinomthaMzamo
`
        }
      ]
    },
    {
      name: 'experience',
      type: 'directory',
      children: [
        {
          name: 'software_developer_intern.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║           SOFTWARE DEVELOPER INTERN @ EDHUB                            ║
║                   Jan 2023 - Dec 2025                                  ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 EdHub | Cape Town, South Africa

Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Built custom admin dashboards for tracking performance metrics for
  edtech startup, saving manual tracking effort by ~50+ hours/year

• Tailored data visualization solutions utilizing Tableau, PowerBI,
  and Preset SQL, enhancing teacher and admin experience, allowing
  for insights previously unknown to the business

• Delivered micro-UX capabilities like alert scheduling and content
  filtering for a next-gen education platform using Java, JavaScript,
  and Angular 17 (with tests using Jasmine and Mockito)

• Developed a Confluence activity wiki bot utilizing Selenium-based
  web scraping to aggregate blog insights and provide automated search
  and fetch functionality via Slack platform

• Worked with agile team using Jira, creating user stories, sprints,
  and using GitHub flow branching, efficient code review and approval
  processes aligned with test coverage thresholds
`
        },
        {
          name: 'coding_expert_trainer.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               CODING EXPERT - AI TRAINER                               ║
║                        Outlier AI                                      ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Outlier AI | Remote

Key Achievements:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Conducted 15+ million code evaluations, assessing SOTA Code AI 
  responses and test cases in 3 languages across front and back-end 
  domains with a focus on industry best practices

• Prompt engineering with focus on problem solving and overall mastery
  of software development best practices

• Designed and solved various software engineering problems with varying
  levels of difficulty using Python, JavaScript, TypeScript
`
        }
      ]
    },
    {
      name: 'skills',
      type: 'directory',
      children: [
        {
          name: 'backend.txt',
          type: 'file',
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
  🔴 Redis         ████████████░░░░░░░░  Intermediate

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`
        },
        {
          name: 'frontend.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                       FRONTEND                                         ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  ⚛️  React         ████████████████████  Expert
  📐 Angular       ████████████████░░░░  Advanced
  🟦 TypeScript    ████████████████████  Expert
  🎨 JavaScript    ████████████████████  Expert
  🖌️  Tailwind CSS  ████████████████████  Expert
  💅 Styled Comp   ██████████████░░░░░░  Advanced
  🔥 Next.js       ████████████████░░░░  Advanced
  📱 React Native  ██████████████░░░░░░  Advanced

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`
        },
        {
          name: 'mobile.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                  MOBILE DEVELOPMENT                                    ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  🐦 Flutter       ██████████████░░░░░░  Advanced
  📱 React Native  ██████████████░░░░░░  Advanced
  🎯 Dart          ██████████████░░░░░░  Advanced
  ☕ Kotlin        ████████████░░░░░░░░  Intermediate

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`
        },
        {
          name: 'cloud_devops.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                   CLOUD & DEVOPS                                       ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  ☁️  AWS           ████████████████░░░░  Advanced (Certified)
  🐳 Docker        ████████████████████  Expert
  🎡 Kubernetes    ██████████████░░░░░░  Advanced
  🔄 CI/CD         ████████████████░░░░  Advanced
  📦 Terraform     ████████████░░░░░░░░  Intermediate
  🐙 GitHub Actions████████████████░░░░  Advanced
  📊 Grafana       ████████████████░░░░  Advanced
  📈 Prometheus    ██████████████░░░░░░  Intermediate

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`
        },
        {
          name: 'ai_ml.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║               ARTIFICIAL INTELLIGENCE                                  ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  🤖 LangChain     ████████████████░░░░  Advanced
  🧠 OpenAI API    ████████████████░░░░  Advanced
  🦜 CrewAI        ██████████████░░░░░░  Intermediate
  📊 TensorFlow    ████████████░░░░░░░░  Intermediate
  🔮 Prompt Eng    ████████████████████  Expert

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`
        },
        {
          name: 'testing.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                  TESTING & QA                                          ║
╚═══════════════════════════════════════════════════════════════════════╝

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  🧪 Jest          ████████████████████  Expert
  🎭 Jasmine       ████████████████░░░░  Advanced
  🔧 Mockito       ████████████████░░░░  Advanced
  🌐 Selenium      ████████████████░░░░  Advanced
  🎯 Pytest        ████████████████████  Expert

▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
`
        }
      ]
    },
    {
      name: 'education',
      type: 'directory',
      children: [
        {
          name: 'wethinkcode.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                      WETHINKCODE_                                      ║
║              National Certificate in IT                                ║
╚═══════════════════════════════════════════════════════════════════════╝

📍 Cape Town Campus
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
`
        }
      ]
    },
    {
      name: 'certifications',
      type: 'directory',
      children: [
        {
          name: 'aws_cloud_practitioner.txt',
          type: 'file',
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

Credential ID: Available upon request
`
        },
        {
          name: 'cisco_certificate.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║              CISCO - JAVASCRIPT ESSENTIALS                             ║
╚═══════════════════════════════════════════════════════════════════════╝

🏅 Cisco Networking Academy
📅 2023

JavaScript programming fundamentals:
• Core JavaScript syntax and concepts
• DOM manipulation
• Event handling
• Modern ES6+ features
• Async programming patterns

Credential ID: Available upon request
`
        },
        {
          name: 'webflow.txt',
          type: 'file',
          content: `╔═══════════════════════════════════════════════════════════════════════╗
║                    WEBFLOW 101                                         ║
╚═══════════════════════════════════════════════════════════════════════╝

🏅 Webflow University
📅 2023

No-code web development fundamentals:
• Visual web design
• Responsive layouts
• CMS integration
• Interactions & animations
• Publishing & hosting

Credential ID: Available upon request
`
        }
      ]
    }
  ]
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
