import { useState, useEffect } from "react";
import { motion, Reorder } from "framer-motion";
import { Button } from "@/components/ui/button";
import { RotateCcw, Sparkles, GripVertical } from "lucide-react";

interface DragDropGameProps {
  layers: string[];
  onComplete: () => void;
  onClose: () => void;
}

const layerDetails: Record<
  string,
  { icon: string; description: string; order: number }
> = {
  Frontend: { icon: "🎨", description: "User Interface Layer", order: 1 },
  Backend: { icon: "⚙️", description: "Business Logic Layer", order: 2 },
  Database: { icon: "💾", description: "Data Storage Layer", order: 3 },
  Mobile: { icon: "📱", description: "Mobile App Layer", order: 1 },
  Server: { icon: "🖥️", description: "API Server Layer", order: 2 },
  UI: { icon: "🖼️", description: "Component Layer", order: 1 },
  State: { icon: "🔄", description: "State Management", order: 2 },
  Styling: { icon: "✨", description: "CSS & Themes", order: 3 },
  Data: { icon: "📊", description: "Raw Data Layer", order: 1 },
  Model: { icon: "🧠", description: "ML Model Layer", order: 2 },
  Insights: { icon: "💡", description: "Output & Visualization", order: 3 },
  Prompt: { icon: "💬", description: "Input Prompt", order: 1 },
  Output: { icon: "📤", description: "Generated Response", order: 3 },
};

export const DragDropGame = ({
  layers = [],
  onComplete,
  onClose,
}: DragDropGameProps) => {
  const [items, setItems] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(
    null,
  );

  const initializeGame = () => {
    if (!layers || layers.length === 0) return;
    const shuffled = [...layers].sort(() => Math.random() - 0.5);
    setItems(shuffled);
    setIsComplete(false);
    setFeedback(null);
  };

  useEffect(() => {
    initializeGame();
  }, [layers]);

  const checkOrder = () => {
    setAttempts((a) => a + 1);
    const sortedByOrder = [...layers].sort(
      (a, b) => (layerDetails[a]?.order || 0) - (layerDetails[b]?.order || 0),
    );

    const isCorrect = items.every(
      (item, index) => item === sortedByOrder[index],
    );

    if (isCorrect) {
      setFeedback("correct");
      setIsComplete(true);
      setTimeout(onComplete, 1500);
    } else {
      setFeedback("incorrect");
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  if (!layers || layers.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Loading game...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="mb-6">
        <p className="text-muted-foreground text-sm text-center">
          Arrange the architecture layers in the correct order (top to bottom)
        </p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-muted-foreground text-sm">
          Attempts: {attempts}
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={initializeGame}
          className="text-primary hover:text-primary/80"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Shuffle
        </Button>
      </div>

      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="space-y-2"
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            className={`
              flex items-center gap-3 p-4 rounded-lg border-2 cursor-grab active:cursor-grabbing
              transition-colors duration-200
              ${
                feedback === "correct"
                  ? "bg-primary/10 border-primary"
                  : feedback === "incorrect"
                    ? "bg-destructive/10 border-destructive"
                    : "bg-card border-border hover:border-primary/50"
              }
            `}
          >
            <GripVertical className="w-5 h-5 text-muted-foreground" />
            <span className="text-2xl">{layerDetails[item]?.icon || "📦"}</span>
            <div className="flex-1">
              <p className="font-display font-semibold">{item}</p>
              <p className="text-xs text-muted-foreground">
                {layerDetails[item]?.description || "Architecture layer"}
              </p>
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      <div className="mt-6 flex justify-center">
        <Button onClick={checkOrder} disabled={isComplete} className="px-8">
          Verify Order
        </Button>
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
