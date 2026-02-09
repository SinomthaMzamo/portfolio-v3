import { motion } from "framer-motion";
import { Kingdom } from "./gameData";
import { KingdomNode } from "./KingdomNode";
import { User, RotateCcw, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSize } from "@/hooks/useSize";

interface KingdomMapProps {
  kingdoms: Kingdom[];
  onKingdomClick: (kingdom: Kingdom) => void;
  onAboutClick: () => void;
  getProgress: (id: string) => {
    unlocked: number;
    total: number;
    percentage: number;
  };
  totalUnlocked: number;
  totalMissions: number;
  onReset: () => void;
}

export const KingdomMap = ({
  kingdoms,
  onKingdomClick,
  onAboutClick,
  getProgress,
  totalUnlocked,
  totalMissions,
  onReset,
}: KingdomMapProps) => {
  const calculatePosition = (
    angle: number,
    distance: number,
    isMobile: boolean,
  ) => {
    const rad = (angle * Math.PI) / 180;
    const adjustedDistance = isMobile ? distance * 0.55 : distance;
    return {
      x: Math.cos(rad) * adjustedDistance,
      y: Math.sin(rad) * adjustedDistance,
    };
  };
  const { ref: mapRef, size } = useSize<HTMLDivElement>();
  const cx = size.width / 2;
  const cy = size.height / 2;


  return (
    <div className="min-h-[100svh] flex flex-col items-center justify-center px-4 py-12 md:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-2"
      >
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-glow mb-2">
          Sinomtha's Dev Odyssey
        </h1>
        <p className="text-muted-foreground">
          Explore kingdoms and complete missions to unlock achievements
        </p>

        {/* Progress bar */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <Trophy className="w-5 h-5 text-accent" />
          <div className="w-60 h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(totalUnlocked / totalMissions) * 100 }%` }}
              transition={{ duration: 1 }}
              className="h-full bg-gradient-to-r from-primary to-accent"
            />
          </div>
          <span className="text-sm text-muted-foreground">
            {totalUnlocked}/{totalMissions}
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="text-muted-foreground hover:text-foreground "
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>

      {/* Kingdom Map */}
      <div
        ref={mapRef}
        className="relative w-full max-w-3xl aspect-square flex items-center justify-center"
      >
        {/* Background grid effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--primary)/0.1)_0%,_transparent_70%)]" />

        {/* Connecting lines to center */}
        {size.width > 0 && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block"
            viewBox={`0 0 ${size.width} ${size.height}`}
          >
            {kingdoms.map((kingdom) => {
              const pos = calculatePosition(
                kingdom.position.angle,
                kingdom.position.distance,
                false,
              );
              return (
                <motion.line
                  key={kingdom.id}
                  x1={cx}
                  y1={cy}
                  x2={cx + pos.x}
                  y2={cy + pos.y}
                  stroke="hsl(var(--border))"
                  strokeWidth={1}
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              );
            })}
          </svg>
        )}

        {/* Center - About Me */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="absolute hidden z-20 sm:block"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onAboutClick}
            className="w-12 h-12 sm:w-36 sm:h-36 rounded-full border-2 border-accent bg-card/90 flex flex-col items-center justify-center glow-gold transition-all"
          >
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-1" />
            <span className="font-display text-xs sm:text-sm text-accent">
              About Me
            </span>
          </motion.button>
        </motion.div>

        {/* Kingdom nodes - Desktop */}
        <div className="hidden sm:block">
          {kingdoms.map((kingdom, index) => {
            const pos = calculatePosition(
              kingdom.position.angle,
              kingdom.position.distance,
              false,
            );

            return (
              <div
                key={kingdom.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  style={{ x: pos.x, y: pos.y }}
                >
                  <KingdomNode
                    kingdom={kingdom}
                    progress={getProgress(kingdom.id)}
                    onClick={() => onKingdomClick(kingdom)}
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Kingdom nodes - Mobile (grid layout) */}
        <div className="sm:hidden flex flex-col items-center justify-center">
          {/* About Me (mobile, above grid) */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="z-20 mb-10"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onAboutClick}
              className="w-48 h-12 rounded-full border-2 border-accent bg-card/90 flex flex-col items-center justify-center glow-gold transition-all"
            >
              <User className="w-4 h-4 text-accent mb-0.5" />
              <span className="font-display text-xs text-accent">About Me</span>
            </motion.button>
          </motion.div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10">
            {kingdoms.map((kingdom, index) => (
              <motion.div
                key={kingdom.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="flex justify-center"
              >
                <KingdomNode
                  kingdom={kingdom}
                  progress={getProgress(kingdom.id)}
                  onClick={() => onKingdomClick(kingdom)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Instructions */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-2 text-center text-muted-foreground text-sm pb-[env(safe-area-inset-bottom)]"
      >
        Click a kingdom to explore its missions
      </motion.p>
    </div>
  );
};
