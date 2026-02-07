import { motion } from "framer-motion";
import { Kingdom } from "./gameData";
import { Lock, Check } from "lucide-react";

interface KingdomNodeProps {
  kingdom: Kingdom;
  progress: { unlocked: number; total: number; percentage: number };
  onClick: () => void;
  isCenter?: boolean;
}

export const KingdomNode = ({
  kingdom,
  progress,
  onClick,
  isCenter = false,
}: KingdomNodeProps) => {
  const Icon = kingdom.icon;
  const isComplete = progress.percentage === 100;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`
        relative flex flex-col items-center justify-center
        rounded-full border-2 transition-all duration-300
        ${isCenter ? "w-28 h-28 sm:w-36 sm:h-36" : "w-20 h-20 sm:w-28 sm:h-28"}
        ${
          isComplete
            ? "border-accent bg-accent/10 glow-gold"
            : "border-primary bg-card/80 pulse-glow"
        }
      `}
    >
      {/* Progress ring */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="hsl(var(--border))"
          strokeWidth="4"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke={isComplete ? "hsl(var(--accent))" : "hsl(var(--primary))"}
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: progress.percentage / 100 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{
            strokeDasharray: "289",
            strokeDashoffset: "0",
          }}
        />
      </svg>

      {/* Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        className={`
          relative z-10 flex items-center justify-center rounded-full
          ${isCenter ? "w-12 h-12 sm:w-16 sm:h-16" : "w-8 h-8 sm:w-12 sm:h-12"}
          ${isComplete ? "text-accent" : "text-primary"}
        `}
      >
        <Icon
          className={
            isCenter ? "w-6 h-6 sm:w-8 sm:h-8" : "w-4 h-4 sm:w-6 sm:h-6"
          }
        />
      </motion.div>

      {/* Kingdom name tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className={`
          absolute -bottom-8 sm:-bottom-10 left-0 right-0 mx-auto w-fit whitespace-nowrap
          px-2 py-1 rounded bg-card border border-border text-xs sm:text-sm font-display
          ${isComplete ? "text-accent" : "text-foreground"}
        `}
      >
        {kingdom.name}
        <span className="block text-[10px] text-muted-foreground font-body">
          {progress.unlocked}/{progress.total}
        </span>
      </motion.div>

      {/* Status indicator */}
      <div
        className={`
          absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full
          flex items-center justify-center text-xs
          ${isComplete ? "bg-accent text-accent-foreground" : "bg-secondary text-secondary-foreground"}
        `}
      >
        {isComplete ? <Check className="w-3 h-3" /> : progress.unlocked}
      </div>
    </motion.button>
  );
};
