import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RotateCcw, Sparkles, Check, X } from "lucide-react";

interface CrosswordGameProps {
  wordsAndClues: {word:string;hint:string;}[];
  onComplete: () => void;
  onClose: () => void;
}

interface WordClue {
  word: string;
  clue: string;
  userInput: string;
  isCorrect: boolean | null;
}

const clueMap: Record<string, string> = {
  REACT: "Facebook's JavaScript library for building UIs",
  VOICE: "Type of assistant or coach using speech",
  AI: "Artificial _____ (machine learning)",
  COACH: "Mentor or trainer",
  BANK: "Financial institution",
  JAVA: "Coffee-named programming language",
  API: "Application Programming Interface",
  SECURE: "Safe and protected",
  AWS: "Amazon's cloud platform (abbr.)",
  DOCKER: "Container platform with whale logo",
  CICD: "Continuous Integration/Deployment (abbr.)",
  DEPLOY: "Release code to production",
  BSC: "Bachelor of Science (abbr.)",
  CODE: "Write programs",
  UCT: "University of Cape Town (abbr.)",
  ALGO: "Algorithm (abbr.)",
  WEB3: "Decentralized internet era",
  ETH: "Ethereum (abbr.)",
  DEFI: "Decentralized Finance (abbr.)",
  CHAIN: "Block_____ technology",
  TRAIN: "Teach a machine learning model",
  MODEL: "AI/ML trained system",
};

export const CrosswordGame = ({
  wordsAndClues = [],
  onComplete,
  onClose,
}: CrosswordGameProps) => {
  const [wordClues, setWordClues] = useState<WordClue[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (!wordsAndClues || wordsAndClues.length === 0) return;

    setWordClues(
      wordsAndClues.map((word) => ({
        word: word.word.toUpperCase(),
        clue:
          word.hint ||
          `Tech term with ${word.word.length} letters`,
        userInput: "",
        isCorrect: null,
      })),
    );
  }, [wordsAndClues]);

  const handleInputChange = (index: number, value: string) => {
    setWordClues((prev) =>
      prev.map((wc, i) =>
        i === index
          ? { ...wc, userInput: value.toUpperCase(), isCorrect: null }
          : wc,
      ),
    );
  };

  const checkAnswer = (index: number) => {
    setAttempts((a) => a + 1);
    setWordClues((prev) =>
      prev.map((wc, i) =>
        i === index ? { ...wc, isCorrect: wc.userInput === wc.word } : wc,
      ),
    );
  };

  const resetGame = () => {
    setWordClues((prev) =>
      prev.map((wc) => ({ ...wc, userInput: "", isCorrect: null })),
    );
    setAttempts(0);
    setIsComplete(false);
  };

  useEffect(() => {
    if (
      wordClues.length > 0 &&
      wordClues.every((wc) => wc.isCorrect === true)
    ) {
      setIsComplete(true);
      setTimeout(onComplete, 1500);
    }
  }, [wordClues, onComplete]);

  if (!wordsAndClues || wordsAndClues.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Loading game...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <span className="text-muted-foreground text-sm">
          Attempts: {attempts}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetGame}
          className="text-primary hover:text-primary/80"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        {wordClues.map((wc, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              p-4 rounded-lg border-2 transition-all duration-300
              ${
                wc.isCorrect === true
                  ? "bg-primary/10 border-primary"
                  : wc.isCorrect === false
                    ? "bg-destructive/10 border-destructive"
                    : "bg-card border-border"
              }
            `}
          >
            <div className="flex items-start gap-4">
              <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-sm font-display">
                {index + 1}
              </span>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">{wc.clue}</p>
                <div className="flex gap-2">
                  <div className="flex gap-1 flex-1">
                    {wc.word.split("").map((_, charIndex) => (
                      <Input
                        key={charIndex}
                        maxLength={1}
                        value={wc.userInput[charIndex] || ""}
                        onChange={(e) => {
                          const newValue = wc.userInput.split("");
                          newValue[charIndex] = e.target.value.toUpperCase();
                          handleInputChange(index, newValue.join(""));

                          // Auto-focus next input
                          if (
                            e.target.value &&
                            charIndex < wc.word.length - 1
                          ) {
                            const nextInput = e.target.parentElement?.children[
                              charIndex + 1
                            ] as HTMLInputElement;
                            nextInput?.focus();
                          }
                        }}
                        onKeyDown={(e) => {
                          if (
                            e.key === "Backspace" &&
                            !wc.userInput[charIndex] &&
                            charIndex > 0
                          ) {
                            const prevInput = (e.target as HTMLElement)
                              .parentElement?.children[
                              charIndex - 1
                            ] as HTMLInputElement;
                            prevInput?.focus();
                          }
                        }}
                        disabled={wc.isCorrect === true}
                        className={`
                          w-8 h-10 sm:w-10 sm:h-12 text-center font-display text-lg uppercase
                          ${wc.isCorrect === true ? "bg-primary/20" : ""}
                        `}
                      />
                    ))}
                  </div>
                  <Button
                    size="sm"
                    onClick={() => checkAnswer(index)}
                    disabled={
                      wc.userInput.length !== wc.word.length ||
                      wc.isCorrect === true
                    }
                    className="self-end"
                  >
                    {wc.isCorrect === true ? (
                      <Check className="w-4 h-4" />
                    ) : wc.isCorrect === false ? (
                      <X className="w-4 h-4" />
                    ) : (
                      "Check"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {isComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-primary text-lg font-display">
            <Sparkles className="w-5 h-5" />
            Mission Complete!
            <Sparkles className="w-5 h-5" />
          </div>
        </motion.div>
      )}
    </div>
  );
};
