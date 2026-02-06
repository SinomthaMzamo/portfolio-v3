import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useGameProgress } from "@/hooks/useGameProgress";
import { Kingdom, Mission } from "@/components/game/gameData";
import { KingdomMap } from "@/components/game/RealmMap";
import { MissionMap } from "@/components/game/KingdomMap";
import { GameModal } from "@/components/game/GameModal";
import { RevealCard } from "@/components/game/RevealCard";
import { AboutMeModal } from "@/components/game/AboutMeModal";

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
      // Update the selected mission to show as unlocked
      setSelectedMission({ ...selectedMission, unlocked: true });
      // Update selected kingdom with new mission state
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
    </div>
  );
};

export default Realm;
