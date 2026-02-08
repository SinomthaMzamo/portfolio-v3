import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";
import { ProjectsSection } from "./ProjectsSection";
import { CertificationsSection } from "./CertificationsSection";
import { ExploringSection } from "./ExploringSection";
import { ContactSection } from "./ContactSection";
import { PortfolioNav } from "./PortfolioNav";
import { NavbarGlowingPillV2} from "./Nav";

type BasicPortfolioProps = {
  showNav?: boolean;
};

const BasicPortfolio = ({ showNav = true }: BasicPortfolioProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Only show nav if allowed */}
      {showNav && <NavbarGlowingPillV2 />}

      {/* Subtle animated background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <CertificationsSection />
        <ExploringSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default BasicPortfolio;
