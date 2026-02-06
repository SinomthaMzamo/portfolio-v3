import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Wrench,
  Briefcase,
  FolderOpen,
  Award,
  Compass,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const sections = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "certifications", label: "Certs", icon: Award },
  { id: "exploring", label: "Exploring", icon: Compass },
  { id: "contact", label: "Contact", icon: Mail },
];

export const PortfolioNav = () => {
  const [active, setActive] = useState("hero");
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections
        .map((s) => {
          const el = document.getElementById(s.id);
          if (!el) return null;
          return { id: s.id, top: el.getBoundingClientRect().top };
        })
        .filter(Boolean) as { id: string; top: number }[];

      const current = offsets.reduce((closest, section) => {
        if (section.top <= 150 && section.top > (closest?.top ?? -Infinity)) {
          return section;
        }
        return closest;
      }, offsets[0]);

      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const activeSection = sections.find((s) => s.id === active);
  const ActiveIcon = activeSection?.icon ?? Home;

  return (
    <>
      {/* Desktop side nav */}
      <motion.nav
        initial={{ x: -80 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col"
      >
        <motion.div
          animate={{ width: expanded ? 160 : 52 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-r-2xl shadow-lg py-3 px-1.5 flex flex-col gap-1 overflow-hidden"
        >
          {sections.map((section) => {
            const isActive = active === section.id;
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors duration-200 whitespace-nowrap group"
              >
                {isActive && (
                  <motion.div
                    layoutId="sidenav-indicator"
                    className="absolute inset-0 rounded-xl bg-primary/15 border border-primary/30"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon
                  className={`relative z-10 w-4.5 h-4.5 shrink-0 transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                  }`}
                />
                <AnimatePresence>
                  {expanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.15 }}
                      className={`relative z-10 text-sm font-medium ${
                        isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {section.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </motion.div>
      </motion.nav>

      {/* Mobile bottom indicator + expandable nav */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <AnimatePresence mode="wait">
          {!expanded ? (
            <motion.button
              key="collapsed"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setExpanded(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-card/90 backdrop-blur-xl border border-border/60 shadow-lg"
            >
              <ActiveIcon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{activeSection?.label}</span>
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
            </motion.button>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="flex items-center gap-1 p-1.5 rounded-2xl bg-card/90 backdrop-blur-xl border border-border/60 shadow-lg"
            >
              <button
                onClick={() => setExpanded(false)}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              {sections.map((section) => {
                const isActive2 = active === section.id;
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => {
                      scrollTo(section.id);
                      setExpanded(false);
                    }}
                    className="relative p-2 rounded-xl transition-colors"
                  >
                    {isActive2 && (
                      <motion.div
                        layoutId="mobile-nav-indicator"
                        className="absolute inset-0 rounded-xl bg-primary/15 border border-primary/30"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <Icon
                      className={`relative z-10 w-4 h-4 ${
                        isActive2 ? "text-primary" : "text-muted-foreground"
                      }`}
                    />
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
