# 🎮 Sinomtha's Interactive Portfolio

> A next-generation developer portfolio featuring three unique viewing modes: Terminal, Game, and Traditional Portfolio.

[![React](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646cff?logo=vite)](https://vitejs.dev/)

## ✨ Features

### 🖥️ **Terminal Mode**
Experience my portfolio through an interactive Unix-like terminal interface.

- **Full filesystem navigation** with `ls`, `cd`, `cat`, `pwd`, `tree` commands
- **ASCII art visualizations** for different sections
- **Tab completion** for commands and file names
- **Command history** with arrow key navigation
- **CRT monitor effects** with phosphor green theme
- **Responsive design** optimized for mobile and desktop

### 🎮 **Game Mode**
Explore my experience as an interactive RPG-style adventure.

- **6 Kingdoms** representing different aspects of my career:
  - 🛠️ The Forge (Projects)
  - 💼 The Guild Hall (Experience)
  - ⚔️ The Arsenal (Skills)
  - 🎓 The Academy (Education)
  - 👑 The Treasury (Certifications)
  - 🧭 The Frontier (Currently Exploring)

- **Gamified learning** with 4 mini-games per mission:
  - 🧠 Memory Match
  - 📝 Tech Crossword
  - 🎯 Tech Match (Candy Crush-style)
  - 🔧 Architecture Builder

- **Progress tracking** with localStorage persistence
- **Unlock system** revealing content as you complete challenges
- **Smooth animations** powered by Framer Motion

### 📄 **Portfolio Mode**
Traditional, elegant portfolio presentation.

- **Smooth scroll animations** with Intersection Observer
- **Responsive navigation** with active section highlighting
- **Collapsible sidebar** for desktop and mobile
- **Clean, professional design** with Tailwind CSS
- **Optimized performance** with lazy loading

## 🚀 Tech Stack

### Core
- **React 18.3** - UI framework
- **TypeScript 5.6** - Type safety
- **Vite 5.4** - Build tool and dev server
- **React Router 6.28** - Client-side routing

### Styling
- **Tailwind CSS 3.4** - Utility-first CSS
- **shadcn/ui** - High-quality component library
- **Framer Motion 11.11** - Animation library
- **Lucide React** - Icon library

### State Management
- **React Query 5.59** - Server state management
- **LocalStorage** - Game progress persistence
- **Custom hooks** - Terminal state, game progress, active sections

### Development
- **Vitest** - Unit testing
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── components/
│   ├── basic/           # Traditional portfolio components
│   │   ├── Nav.tsx      # Collapsible navigation sidebar
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── ...
│   ├── game/            # RPG game mode components
│   │   ├── Realm.tsx    # Main game container
│   │   ├── RealmMap.tsx # Kingdom selection screen
│   │   ├── KingdomMap.tsx # Mission selection
│   │   ├── GameModal.tsx
│   │   ├── RevealCard.tsx
│   │   └── games/       # Mini-games
│   │       ├── MemoryGame.tsx
│   │       ├── CrosswordGame.tsx
│   │       ├── CandyCrushGame.tsx
│   │       └── DragDropGame.tsx
│   ├── Terminal.tsx     # Terminal interface
│   ├── TerminalInput.tsx
│   ├── TerminalOutput.tsx
│   └── ModeSelector.tsx # View mode switcher
├── hooks/
│   ├── useTerminal.ts   # Terminal command execution
│   ├── useGameProgress.ts # Game state management
│   └── useActiveSection.ts # Scroll spy for nav
├── data/
│   └── portfolioData.ts # Portfolio content & file system
├── pages/
│   ├── Index.tsx        # Main page with view switching
│   └── NotFound.tsx
└── lib/
    └── utils.ts         # Utility functions

```

## 🎨 Design System

### Terminal Theme
```css
--primary: 120 100% 50%        /* Phosphor green */
--background: 0 0% 0%          /* CRT black */
--terminal-glow: 120 100% 50%  /* Green glow effect */
```

### Game Theme
```css
--primary: 174 72% 56%         /* Cyan accent */
--accent: 45 90% 55%           /* Gold for completed */
--background: 210 25% 8%       /* Dark blue-gray */
```

## 🎯 Key Highlights

### Terminal Mode
- **Complete Unix-like environment** with navigable filesystem
- **Smart tab completion** for commands and files
- **CRT effects** including scanlines and phosphor glow
- **Responsive terminal** that works on mobile devices

### Game Mode
- **Progressive disclosure** of portfolio content through gameplay
- **LocalStorage persistence** maintains progress across sessions
- **Framer Motion animations** for smooth transitions
- **4 different mini-game types** to keep engagement high
- **Visual progress tracking** with completion percentages

### Portfolio Mode
- **Intersection Observer** for scroll-spy navigation
- **Collapsible sidebar** adapts to screen size (full → icons → single)
- **Smooth scroll animations** on all sections
- **Mobile-optimized** with responsive breakpoints

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SinomthaMzmo/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

## 📝 Available Scripts

```json
{
  "dev": "vite",           // Start dev server on http://localhost:8080
  "build": "tsc && vite build",  // Production build
  "preview": "vite preview",     // Preview production build
  "test": "vitest"               // Run tests
}
```

## 🎮 Terminal Commands

Once in Terminal Mode, try these commands:

```bash
help        # Show all available commands
ls          # List directory contents
cd about    # Navigate to about section
cat bio.txt # Display file contents
tree        # Show full directory structure
pwd         # Print working directory
whoami      # Display user info
welcome     # Show welcome screen
clear       # Clear terminal
```

## 🌟 Portfolio Content

### Projects
- **Student Accommodation Platform** - React, Supabase, real-time booking
- **Bhala Edolweni** - Debtor management with Python & React
- **Vuka Coach** - AI interview coaching with Gemini & FastAPI
- **DHA Appointment Booking** - Angular UX redesign
- **Personal Portfolio CRM** - Angular, AWS Lambda, DynamoDB
- **RoutePool** - Flutter carpooling app
- **NoteWatch** - Confluence analytics tool
- **Burn After Reading** - Encrypted messaging app

### Experience
- **Software Developer Intern @ Safety IO** (Jan 2023 - Sep 2025)
- **Coding Expert @ Outlier AI** (Aug 2024 - Present)
- **Data Science Intern @ CodSoft** (Apr 2024 - Present)

### Skills
- **Frontend**: React, Angular, TypeScript, Tailwind CSS
- **Backend**: Python, Java, Node.js, Flask, FastAPI
- **Mobile**: Flutter, React Native, Kotlin
- **Cloud**: AWS (Certified), Docker, Kubernetes, CI/CD
- **AI/ML**: LangChain, OpenAI API, Prompt Engineering

## 🔧 Configuration

### Vite Config
The project uses Vite with the following plugins:
- `@vitejs/plugin-react` - React Fast Refresh
- Path aliasing for clean imports

### Tailwind Config
Custom theme with:
- Terminal color scheme (phosphor green)
- Game theme (cyan/gold accents)
- Custom animations (glow, pulse, fade)
- Font families (JetBrains Mono, Cinzel, Inter)

## 🚀 Deployment

The portfolio is optimized for static hosting:

```bash
# Build for production
npm run build

# Output directory: dist/
# Deploy to: Vercel, Netlify, GitHub Pages, etc.
```

### Recommended Platforms
- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment
- **GitHub Pages** - Free static hosting
- **AWS S3 + CloudFront** - Scalable hosting

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Sinomtha Mzamo**
- 📧 Email: sinomtha.dev@gmail.com
- 💼 LinkedIn: [linkedin.com/in/sinomtha](https://linkedin.com/in/sinomtha)
- 🐙 GitHub: [github.com/SinomthaMzmo](https://github.com/SinomthaMzmo)
- 📍 Location: Cape Town, South Africa

## 🙏 Acknowledgments

- **shadcn/ui** - Beautiful component library
- **Framer Motion** - Smooth animations
- **Lucide Icons** - Clean icon set
- **Tailwind CSS** - Utility-first styling
- **React Query** - Data fetching made easy

---

<div align="center">

**Built with 💚 using React, TypeScript, and Tailwind CSS**

*"Building incredible user interfaces that leave lasting impressions"*

</div>
