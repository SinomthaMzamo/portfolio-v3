import Realm from "@/components/game/Realm";
import { Terminal } from "@/components/Terminal";
import BasicPortfolio from "@/components/basic/BasicPortfolio";
import { ModeSelector, ViewMode } from "@/components/ModeSelector";
import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, scale: 0.98, filter: "blur(6px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, scale: 0.98, filter: "blur(6px)" },
};

const pageTransition = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
};

const Index = () => {
  const [view, setView] = useState<ViewMode>("basic");

  const themeClass = useMemo(() => {
    if (view === "terminal") return "theme-terminal";
    if (view === "game") return "theme-game";
    return "theme-game"; // basic uses game theme styling
  }, [view]);

  useEffect(() => {
    document.documentElement.classList.remove("theme-terminal", "theme-game");
    document.documentElement.classList.add(themeClass);

    return () => {
      document.documentElement.classList.remove(themeClass);
    };
  }, [themeClass]);

  return (
    <>
      <ModeSelector current={view} onChange={setView} />

      <AnimatePresence mode="wait">
        {view === "terminal" && (
          <motion.div
            key="terminal"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Terminal />
          </motion.div>
        )}

        {view === "game" && (
          <motion.div
            key="game"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <Realm />
          </motion.div>
        )}

        {view === "basic" && (
          <motion.div
            key="basic"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            <BasicPortfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
