import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection, sections } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Folder,
  Code,
  GraduationCap,
  Medal,
  Compass,
  Mail,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  AwardIcon,
} from "lucide-react";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  about: User,
  skills: Code,
  projects: Folder,
  experience: Briefcase,
  education: GraduationCap,
  certifications: AwardIcon,
  exploring: Compass,
  contact: Mail,
};

type CollapseState = "full" | "icons" | "single";

export function NavbarGlowingPillV2() {
  const { activeSection, scrollToSection } = useActiveSection();
  const [collapseState, setCollapseState] = useState<CollapseState>("icons");

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)"); // < md

    const apply = () => {
      setCollapseState(mql.matches ? "single" : "icons");
    };

    apply(); // run once on mount

    // keep updated if user rotates / resizes
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  const ActiveIcon = icons[activeSection] || Home;

  const handleVerticalCollapse = (direction: "up" | "down") => {
    if (direction === "up") {
      if (collapseState === "icons") setCollapseState("single");
    } else {
      if (collapseState === "single") setCollapseState("icons");
    }
  };

  const handleHorizontalCollapse = (direction: "left" | "right") => {
    if (direction === "left") {
      if (collapseState === "full") setCollapseState("icons");
    } else {
      if (collapseState === "icons") setCollapseState("full");
    }
  };

  return (
    <motion.nav
      className="fixed right-4 bottom-20 -translate-y-1/2 z-50"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center gap-2">
        {/* Horizontal collapse controls - show only relevant chevron */}
        <AnimatePresence>
          {collapseState === "full" && (
            <motion.button
              onClick={() => handleHorizontalCollapse("left")}
              className="p-1.5 bg-card/80 backdrop-blur-xl rounded-lg border border-border shadow-lg text-muted-foreground hover:text-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-3 h-3" />
            </motion.button>
          )}
          {collapseState === "icons" && (
            <motion.button
              onClick={() => handleHorizontalCollapse("right")}
              className="p-1.5 bg-card/80 backdrop-blur-xl rounded-lg border border-border shadow-lg text-muted-foreground hover:text-foreground"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-3 h-3" />
            </motion.button>
          )}
        </AnimatePresence>
        <motion.div
          className="bg-card/80 backdrop-blur-xl rounded-2xl border border-border shadow-2xl overflow-hidden"
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Vertical collapse control - only show UP when in 'icons' state */}
          <AnimatePresence>
            {collapseState === "icons" && (
              <motion.div
                className="flex justify-center py-2 border-b border-border/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <motion.button
                  onClick={() => handleVerticalCollapse("up")}
                  className="p-1 rounded text-muted-foreground hover:text-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation items */}
          <div className="py-2 px-2">
            <AnimatePresence mode="wait">
              {collapseState === "single" ? (
                <motion.button
                  key="single"
                  onClick={() => scrollToSection(activeSection)}
                  className="relative p-3 rounded-full text-primary-foreground"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-primary rounded-full"
                    style={{
                      boxShadow: "0 0 25px hsl(var(--primary) / 0.6)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 20px hsl(var(--primary) / 0.4)",
                        "0 0 30px hsl(var(--primary) / 0.6)",
                        "0 0 20px hsl(var(--primary) / 0.4)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <ActiveIcon className="w-5 h-5 relative z-10" />
                </motion.button>
              ) : (
                <motion.div
                  key="list"
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {sections.map((section, index) => {
                    const Icon = icons[section.id];
                    const isActive = activeSection === section.id;

                    return (
                      <motion.button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`relative flex items-center gap-3 rounded-full transition-colors duration-300 ${
                          collapseState === "full" ? "px-3 py-3" : "p-3"
                        } ${
                          isActive
                            ? "text-primary-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{ scale: 1.02, x: 3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isActive && (
                          <motion.div
                            className="absolute inset-0 bg-primary rounded-full"
                            layoutId="glowingPillV2"
                            style={{
                              boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
                            }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 30,
                            }}
                          />
                        )}
                        <Icon className="w-5 h-5 relative z-10 shrink-0" />
                        <AnimatePresence>
                          {collapseState === "full" && (
                            <motion.span
                              className="text-sm font-medium relative z-10 whitespace-nowrap"
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: "auto" }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              {section.label}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Vertical expand control - only show DOWN when in 'single' state */}
          <AnimatePresence>
            {collapseState === "single" && (
              <motion.div
                className="flex justify-center py-2 border-t border-border/50"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
              >
                <motion.button
                  onClick={() => handleVerticalCollapse("down")}
                  className="p-1 rounded text-muted-foreground hover:text-foreground"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronUp className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.nav>
  );
}
