import { motion } from "framer-motion";
import { Kingdom, Mission } from "./gameData";
import { MissionNode } from "./MissionTile";
import { ArrowLeft, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MissionMapProps {
  kingdom: Kingdom;
  onMissionClick: (mission: Mission) => void;
  onBack: () => void;
  progress: { unlocked: number; total: number; percentage: number };
}

export const MissionMap = ({
  kingdom,
  onMissionClick,
  onBack,
  progress,
}: MissionMapProps) => {
  const Icon = kingdom.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen px-4 py-8"
    >
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Kingdoms
        </Button>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-4"
        >
          <div
            className={`
              w-16 h-16 rounded-xl flex items-center justify-center
              bg-gradient-to-br ${kingdom.colour}
            `}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-glow">
              {kingdom.name}
            </h1>
            <p className="text-muted-foreground">{kingdom.description}</p>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex-1 h-2 rounded-full bg-secondary overflow-hidden max-w-[200px]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress.percentage}%` }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
              <span className="text-sm text-muted-foreground">
                {progress.unlocked}/{progress.total}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mission Path */}
      <div className="max-w-2xl mx-auto relative">
        {/* Connecting line */}
        <svg
          className="absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none"
          width="4"
          style={{ height: `${kingdom.missions.length * 120}px` }}
        >
          <line
            x1="2"
            y1="0"
            x2="2"
            y2="100%"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            strokeDasharray="8 4"
          />
          <motion.line
            x1="2"
            y1="0"
            x2="2"
            y2="100%"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress.percentage / 100 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </svg>

        {/* Mission nodes */}
        <div className="space-y-8 relative z-10">
          {kingdom.missions.map((mission, index) => (
            <div
              key={mission.id}
              className={`
                flex justify-center
                ${index % 2 === 0 ? "pr-8 sm:pr-16" : "pl-8 sm:pl-16"}
              `}
            >
              <MissionNode
                mission={mission}
                index={index}
                onClick={() => onMissionClick(mission)}
                isAlternate={index % 2 === 0}
              />
            </div>
          ))}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <div
            className={`
              w-12 h-12 rounded-full flex items-center justify-center
              ${
                progress.percentage === 100
                  ? "bg-accent/20 border-2 border-accent"
                  : "bg-secondary border-2 border-border"
              }
            `}
          >
            <Crown
              className={`w-5 h-5 ${
                progress.percentage === 100
                  ? "text-accent"
                  : "text-muted-foreground"
              }`}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
