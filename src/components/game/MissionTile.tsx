import { motion } from "framer-motion";
import { Mission } from "./gameData";
import { Lock, Sparkles, Crown } from "lucide-react";

interface MissionNodeProps {
  mission: Mission;
  index: number;
  onClick: () => void;
  isAlternate: boolean;
}

const gameTypeIcons: Record<string, string> = {
  memory: "🧠",
  crossword: "📝",
  dragdrop: "🔧",
};

export const MissionNode = ({
  mission,
  index,
  onClick,
  isAlternate,
}: MissionNodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: "spring" }}
      className={`flex items-center ${isAlternate ? "flex-row" : "flex-row-reverse"} gap-4`}
    >
      {/* Node */}
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`
          relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2
          flex items-center justify-center transition-all duration-300
          ${
            mission.unlocked
              ? "border-accent bg-accent/10 glow-gold"
              : "border-primary/50 bg-card hover:border-primary pulse-glow"
          }
        `}
      >
        {mission.unlocked ? (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring" }}
          >
            <Sparkles className="w-6 h-6 text-accent" />
          </motion.div>
        ) : (
          <div className="flex flex-col items-center">
            <Lock className="w-5 h-5 text-muted-foreground" />
            {/* <span className="text-xs mt-1">
              {gameTypeIcons[mission.gameType]}
            </span> */}
          </div>
        )}

        {/* Mission number */}
        <span
          className={`
            absolute -top-2 -right-2 w-5 h-5 rounded-full text-xs
            flex items-center justify-center font-display
            ${mission.unlocked ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}
          `}
        >
          {index + 1}
        </span>
      </motion.button>

      {/* Info card */}
      <motion.div
        initial={{ opacity: 0, x: isAlternate ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.2 }}
        className={`
          flex-1 max-w-[200px] sm:max-w-[280px] p-3 rounded-lg border
          ${mission.unlocked ? "bg-card/80 border-accent/30" : "bg-card/50 border-border"}
        `}
      >
        <h4
          className={`
            font-display text-sm sm:text-base font-semibold truncate
            ${mission.unlocked ? "text-foreground" : "text-muted-foreground"}
          `}
        >
          {mission.title}
        </h4>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
          {mission.unlocked
            ? mission.description
            : "Complete the mission to reveal"}
        </p>
        {/* {!mission.unlocked && (
          <span className="inline-flex items-center gap-1 text-xs text-primary mt-2">
            <span>{gameTypeIcons[mission.gameType]}</span>
            <span className="capitalize">
              {mission.gameType === "dragdrop"
                ? "Architecture"
                : mission.gameType}
            </span>
          </span>
        )} */}
      </motion.div>
    </motion.div>
  );
};
