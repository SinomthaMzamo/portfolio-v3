import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mission } from "@/components/game/gameData";
import { X, Brain, FileText, Layers, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MemoryGame } from "@/components/game/games/MemoryGame";
import { CrosswordGame } from "@/components/game/games/CrosswordGame";
import { DragDropGame } from "@/components/game/games/DragDropGame";
import { CandyCrushGame } from "@/components/game/games/CandyCrushGame";

interface GameModalProps {
  mission: Mission;
  onComplete: () => void;
  onClose: () => void;
}

type GameChoice = "memory" | "crossword" | "candycrush" | null;

const gameInfo = {
  memory: {
    icon: Brain,
    title: "Memory Match",
    description: "Match pairs of tech cards to reveal the content",
  },
  crossword: {
    icon: FileText,
    title: "Tech Crossword",
    description: "Solve clues related to the technologies used",
  },
  candycrush: {
    icon: Gamepad2,
    title: "Tech Match",
    description: "Match 3+ tech icons to score points",
  },
};

export const GameModal = ({ mission, onComplete, onClose }: GameModalProps) => {
  const [selectedGame, setSelectedGame] = useState<GameChoice>(null);

  const handleComplete = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 50 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-4 sm:p-6 border-b border-border bg-card/95 backdrop-blur">
            <div>
              <h2 className="font-display text-lg sm:text-xl font-bold">
                {selectedGame
                  ? gameInfo[selectedGame].title
                  : "Choose Your Challenge"}
              </h2>
              <p className="text-sm text-muted-foreground">
                {selectedGame
                  ? gameInfo[selectedGame].description
                  : `Unlock: ${mission.title}`}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {selectedGame && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedGame(null)}
                >
                  Back
                </Button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          {!selectedGame ? (
            <div className="p-4 sm:p-6">
              <p className="text-center text-muted-foreground mb-6">
                Select a game to complete the mission
              </p>
              <div className="grid gap-4">
                {(Object.keys(gameInfo) as GameChoice[])
                  .filter(Boolean)
                  .map((game) => {
                    if (!game) return null;
                    const info = gameInfo[game];
                    const Icon = info.icon;
                    return (
                      <motion.button
                        key={game}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedGame(game)}
                        className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary bg-secondary/30 hover:bg-secondary/50 transition-all"
                      >
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-display font-semibold">
                            {info.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </motion.button>
                    );
                  })}
              </div>
            </div>
          ) : (
            <>
              {selectedGame === "memory" && (
                <MemoryGame
                  pairs={mission.gameData.memoryMatch}
                  onComplete={handleComplete}
                  onClose={onClose}
                />
              )}
              {selectedGame === "crossword" && (
                <CrosswordGame
                  wordsAndClues={mission.gameData.crossword}
                  onComplete={handleComplete}
                  onClose={onClose}
                />
              )}
              {/* {selectedGame === "dragdrop" && (
                <DragDropGame
                  layers={mission.gameData.layers}
                  onComplete={handleComplete}
                  onClose={onClose}
                />
              )} */}
              {selectedGame === "candycrush" && (
                <CandyCrushGame
                  icons={mission.gameData.matchThree.map((icon) => icon.icon)}
                  targetScore={mission.targetScore}
                  onComplete={handleComplete}
                  onClose={onClose}
                  iconColourMap={mission.gameData.matchThree}
            
                />
              )}
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
