import { useState, useEffect } from "react";
import { kingdoms as initialKingdoms } from "@/components/game/portfolioData";
import { Kingdom } from "@/components/game/gameData";

const STORAGE_KEY = "portfolio-game-progress-v2";

// Only store mission unlock status, not full kingdom data
interface ProgressData {
  [missionId: string]: boolean;
}

// Clear old format data
if (localStorage.getItem("portfolio-game-progress")) {
  localStorage.removeItem("portfolio-game-progress");
}

export const useGameProgress = () => {
  const [progress, setProgress] = useState<ProgressData>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Validate it's the right format (object with boolean values)
        if (typeof parsed === "object" && !Array.isArray(parsed)) {
          return parsed;
        }
      } catch {
        // Invalid data, start fresh
      }
    }
    return {};
  });

  // Derive kingdoms with unlock status from progress
  const kingdoms: Kingdom[] = initialKingdoms.map((kingdom) => ({
    ...kingdom,
    missions: kingdom.missions.map((mission) => ({
      ...mission,
      unlocked: progress[mission.id] || false,
    })),
  }));

  const [totalUnlocked, setTotalUnlocked] = useState(0);
  const [totalMissions, setTotalMissions] = useState(0);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));

    let unlocked = 0;
    let total = 0;
    kingdoms.forEach((k) => {
      k.missions.forEach((m) => {
        total++;
        if (m.unlocked) unlocked++;
      });
    });
    setTotalUnlocked(unlocked);
    setTotalMissions(total);
  }, [progress, kingdoms]);

  const unlockMission = (kingdomId: string, missionId: string) => {
    setProgress((prev) => ({
      ...prev,
      [missionId]: true,
    }));
  };

  const getKingdomProgress = (kingdomId: string) => {
    const kingdom = kingdoms.find((k) => k.id === kingdomId);
    if (!kingdom) return { unlocked: 0, total: 0, percentage: 0 };

    const unlocked = kingdom.missions.filter((m) => m.unlocked).length;
    const total = kingdom.missions.length;
    return {
      unlocked,
      total,
      percentage: total > 0 ? (unlocked / total) * 100 : 0,
    };
  };

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress({});
  };

  return {
    kingdoms,
    totalUnlocked,
    totalMissions,
    unlockMission,
    getKingdomProgress,
    resetProgress,
  };
};
