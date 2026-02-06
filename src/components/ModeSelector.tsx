import { Code, Joystick, Layout } from "lucide-react";
import { motion } from "framer-motion";

export type ViewMode = "terminal" | "game" | "basic";

interface ModeSelectorProps {
  current: ViewMode;
  onChange: (mode: ViewMode) => void;
}

const modes: { id: ViewMode; label: string; icon: React.ElementType }[] = [
  { id: "basic", label: "Portfolio", icon: Layout },
  { id: "game", label: "Game", icon: Joystick },
  { id: "terminal", label: "Terminal", icon: Code },
];

export const ModeSelector = ({ current, onChange }: ModeSelectorProps) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-1 p-1 rounded-2xl border border-border/60 bg-card/80 backdrop-blur-xl shadow-lg">
        {modes.map((mode) => {
          const isActive = current === mode.id;
          const Icon = mode.icon;
          return (
            <button
              key={mode.id}
              onClick={() => onChange(mode.id)}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium
                transition-colors duration-200
                ${isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="mode-pill"
                  className="absolute inset-0 rounded-xl bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{mode.label}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
