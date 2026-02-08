import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGameProgress } from "@/hooks/useGameProgress";
import { Kingdom, Mission } from "@/components/game/gameData";
import { KingdomMap } from "@/components/game/RealmMap";
import { MissionMap } from "@/components/game/KingdomMap";
import { GameModal } from "@/components/game/GameModal";
import { RevealCard } from "@/components/game/RevealCard";
import { AboutMeModal } from "@/components/game/AboutMeModal";
import { Trophy, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type View = "kingdoms" | "missions";

const Realm = () => {
  const {
    kingdoms,
    totalUnlocked,
    totalMissions,
    unlockMission,
    getKingdomProgress,
    resetProgress,
  } = useGameProgress();

  const [currentView, setCurrentView] = useState<View>("kingdoms");
  const [selectedKingdom, setSelectedKingdom] = useState<Kingdom | null>(null);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [showGame, setShowGame] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showAllComplete, setShowAllComplete] = useState(false);

  // Check if all missions are complete
  useEffect(() => {
    if (totalMissions > 0 && totalUnlocked === totalMissions) {
      setShowAllComplete(true);
    }
  }, [totalUnlocked, totalMissions]);

  const handleKingdomClick = (kingdom: Kingdom) => {
    setSelectedKingdom(kingdom);
    setCurrentView("missions");
  };

  const handleMissionClick = (mission: Mission) => {
    setSelectedMission(mission);
    if (mission.unlocked) {
      setShowReveal(true);
    } else {
      setShowGame(true);
    }
  };

  const handleGameComplete = () => {
    if (selectedKingdom && selectedMission) {
      unlockMission(selectedKingdom.id, selectedMission.id);
      setSelectedMission({ ...selectedMission, unlocked: true });
      setSelectedKingdom({
        ...selectedKingdom,
        missions: selectedKingdom.missions.map((m) =>
          m.id === selectedMission.id ? { ...m, unlocked: true } : m,
        ),
      });
    }
    setShowGame(false);
    setTimeout(() => setShowReveal(true), 300);
  };

  const handleBackToKingdoms = () => {
    setSelectedKingdom(null);
    setCurrentView("kingdoms");
  };

  return (
    <div className="min-h-screen bg-gradient-dark overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <AnimatePresence mode="wait">
        {currentView === "kingdoms" ? (
          <motion.div
            key="kingdoms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <KingdomMap
              kingdoms={kingdoms}
              onKingdomClick={handleKingdomClick}
              onAboutClick={() => setShowAbout(true)}
              getProgress={getKingdomProgress}
              totalUnlocked={totalUnlocked}
              totalMissions={totalMissions}
              onReset={resetProgress}
            />
          </motion.div>
        ) : (
          <motion.div
            key="missions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {selectedKingdom && (
              <MissionMap
                kingdom={selectedKingdom}
                onMissionClick={handleMissionClick}
                onBack={handleBackToKingdoms}
                progress={getKingdomProgress(selectedKingdom.id)}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      <AnimatePresence>
        {showAbout && <AboutMeModal onClose={() => setShowAbout(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {showGame && selectedMission && (
          <GameModal
            mission={selectedMission}
            onComplete={handleGameComplete}
            onClose={() => setShowGame(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showReveal && selectedMission && (
          <RevealCard
            mission={selectedMission}
            onClose={() => setShowReveal(false)}
          />
        )}
      </AnimatePresence>

      {/* All missions complete celebration */}
      <AnimatePresence>
        {showAllComplete && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
            onClick={() => setShowAllComplete(false)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.5, y: 50 }}
              transition={{ type: "spring", damping: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md p-8 rounded-2xl border-2 border-accent bg-card shadow-2xl text-center overflow-hidden"
            >
              {/* Sparkle particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 300],
                      y: [0, (Math.random() - 0.5) * 300],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: i * 0.15,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent"
                  />
                ))}
              </div>

              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center"
              >
                <Trophy className="w-10 h-10 text-accent" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-display font-bold text-glow-gold mb-2"
              >
                Realm Complete!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground mb-2"
              >
                You've unlocked all {totalMissions} missions across every kingdom!
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-2 text-primary mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Thank you for exploring my portfolio!</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>

              <Button onClick={() => setShowAllComplete(false)} className="w-full">
                <X className="w-4 h-4 mr-2" />
                Continue Exploring
              </Button>

              <div className="mt-4 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Realm;
