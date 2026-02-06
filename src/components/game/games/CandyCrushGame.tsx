import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface CandyCrushGameProps {
  icons?: string[];
  targetScore?: number;
  onComplete: () => void;
  onClose: () => void;
}

const defaultIcons = ["⚛️", "🟦", "🟨", "🟩", "🟪", "🔶"];

const GRID_SIZE = 6;
const MATCH_MIN = 3;

type Cell = {
  icon: string;
  id: number;
};

export const CandyCrushGame = ({
  icons = defaultIcons,
  targetScore = 100,
  onComplete,
  onClose,
}: CandyCrushGameProps) => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(
    null,
  );
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(20);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cellId, setCellId] = useState(0);

  const getRandomIcon = useCallback(() => {
    return icons[Math.floor(Math.random() * icons.length)];
  }, [icons]);

  const createCell = useCallback((): Cell => {
    setCellId((prev) => prev + 1);
    return { icon: getRandomIcon(), id: cellId };
  }, [getRandomIcon, cellId]);

  const initializeGrid = useCallback(() => {
    let id = 0;
    const newGrid: Cell[][] = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      const newRow: Cell[] = [];
      for (let col = 0; col < GRID_SIZE; col++) {
        let icon = getRandomIcon();
        // Avoid initial matches
        while (
          (col >= 2 &&
            newRow[col - 1]?.icon === icon &&
            newRow[col - 2]?.icon === icon) ||
          (row >= 2 &&
            newGrid[row - 1]?.[col]?.icon === icon &&
            newGrid[row - 2]?.[col]?.icon === icon)
        ) {
          icon = getRandomIcon();
        }
        newRow.push({ icon, id: id++ });
      }
      newGrid.push(newRow);
    }
    setCellId(id);
    return newGrid;
  }, [getRandomIcon]);

  useEffect(() => {
    setGrid(initializeGrid());
  }, [initializeGrid]);

  const findMatches = useCallback((currentGrid: Cell[][]): Set<string> => {
    const matches = new Set<string>();

    // Horizontal matches
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col <= GRID_SIZE - MATCH_MIN; col++) {
        const icon = currentGrid[row][col]?.icon;
        if (!icon) continue;
        let matchLength = 1;
        while (
          col + matchLength < GRID_SIZE &&
          currentGrid[row][col + matchLength]?.icon === icon
        ) {
          matchLength++;
        }
        if (matchLength >= MATCH_MIN) {
          for (let i = 0; i < matchLength; i++) {
            matches.add(`${row},${col + i}`);
          }
        }
      }
    }

    // Vertical matches
    for (let col = 0; col < GRID_SIZE; col++) {
      for (let row = 0; row <= GRID_SIZE - MATCH_MIN; row++) {
        const icon = currentGrid[row][col]?.icon;
        if (!icon) continue;
        let matchLength = 1;
        while (
          row + matchLength < GRID_SIZE &&
          currentGrid[row + matchLength]?.[col]?.icon === icon
        ) {
          matchLength++;
        }
        if (matchLength >= MATCH_MIN) {
          for (let i = 0; i < matchLength; i++) {
            matches.add(`${row + i},${col}`);
          }
        }
      }
    }

    return matches;
  }, []);

  const removeMatchesAndDrop = useCallback(
    (currentGrid: Cell[][], matches: Set<string>): Cell[][] => {
      const newGrid = currentGrid.map((row) => [...row]);
      let newId = cellId;

      // Remove matches (set to null temporarily)
      matches.forEach((pos) => {
        const [row, col] = pos.split(",").map(Number);
        newGrid[row][col] = null as any;
      });

      // Drop cells down
      for (let col = 0; col < GRID_SIZE; col++) {
        let emptyRow = GRID_SIZE - 1;
        for (let row = GRID_SIZE - 1; row >= 0; row--) {
          if (newGrid[row][col] !== null) {
            if (row !== emptyRow) {
              newGrid[emptyRow][col] = newGrid[row][col];
              newGrid[row][col] = null as any;
            }
            emptyRow--;
          }
        }
        // Fill empty cells with new icons
        for (let row = emptyRow; row >= 0; row--) {
          newGrid[row][col] = { icon: getRandomIcon(), id: newId++ };
        }
      }

      setCellId(newId);
      return newGrid;
    },
    [cellId, getRandomIcon],
  );

  const processMatches = useCallback(
    async (currentGrid: Cell[][]) => {
      let grid = currentGrid;
      let totalMatches = 0;

      while (true) {
        const matches = findMatches(grid);
        if (matches.size === 0) break;

        totalMatches += matches.size;
        await new Promise((resolve) => setTimeout(resolve, 200));
        grid = removeMatchesAndDrop(grid, matches);
        setGrid([...grid]);
        await new Promise((resolve) => setTimeout(resolve, 300));
      }

      if (totalMatches > 0) {
        const points = totalMatches * 10;
        setScore((prev) => prev + points);
      }

      setIsAnimating(false);
    },
    [findMatches, removeMatchesAndDrop],
  );

  const swapCells = useCallback(
    (row1: number, col1: number, row2: number, col2: number) => {
      const newGrid = grid.map((row) => [...row]);
      const temp = newGrid[row1][col1];
      newGrid[row1][col1] = newGrid[row2][col2];
      newGrid[row2][col2] = temp;
      return newGrid;
    },
    [grid],
  );

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (isAnimating || moves <= 0) return;

      if (!selected) {
        setSelected({ row, col });
        return;
      }

      const isAdjacent =
        (Math.abs(selected.row - row) === 1 && selected.col === col) ||
        (Math.abs(selected.col - col) === 1 && selected.row === row);

      if (!isAdjacent) {
        setSelected({ row, col });
        return;
      }

      setIsAnimating(true);
      setMoves((prev) => prev - 1);

      const newGrid = swapCells(selected.row, selected.col, row, col);
      const matches = findMatches(newGrid);

      if (matches.size > 0) {
        setGrid(newGrid);
        setSelected(null);
        processMatches(newGrid);
      } else {
        // Swap back if no matches
        setGrid(newGrid);
        setTimeout(() => {
          setGrid(swapCells(row, col, selected.row, selected.col));
          setIsAnimating(false);
        }, 300);
        setSelected(null);
      }
    },
    [selected, isAnimating, moves, swapCells, findMatches, processMatches],
  );

  const isCompleted = score >= targetScore;
  const isGameOver = moves <= 0 && !isCompleted;

  if (grid.length === 0) return null;

  return (
    <div className="p-4 sm:p-6">
      {/* Score and Moves */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Score</p>
          <p className="text-2xl font-bold text-primary">{score}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Target</p>
          <p className="text-lg font-semibold">{targetScore}</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-muted-foreground">Moves</p>
          <p className="text-2xl font-bold">{moves}</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full mb-4 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={{ width: `${Math.min((score / targetScore) * 100, 100)}%` }}
        />
      </div>

      {/* Game Grid */}
      <div className="grid gap-1 mb-4 mx-auto" style={{ maxWidth: "300px" }}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 justify-center">
            {row.map((cell, colIndex) => (
              <motion.button
                key={cell?.id ?? `${rowIndex}-${colIndex}`}
                layout
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  boxShadow:
                    selected?.row === rowIndex && selected?.col === colIndex
                      ? "0 0 0 2px hsl(var(--primary))"
                      : "none",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                disabled={isAnimating || isCompleted || isGameOver}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-xl sm:text-2xl transition-all hover:bg-secondary"
              >
                {cell?.icon}
              </motion.button>
            ))}
          </div>
        ))}
      </div>

      {/* Game Over / Success */}
      <AnimatePresence>
        {(isCompleted || isGameOver) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            {isCompleted ? (
              <>
                <div className="flex items-center justify-center gap-2 text-primary mb-2">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-bold">Mission Complete!</span>
                  <Sparkles className="w-5 h-5" />
                </div>
                <Button onClick={onComplete} className="w-full">
                  Unlock Content
                </Button>
              </>
            ) : (
              <>
                <p className="text-destructive font-semibold mb-2">
                  Out of moves!
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setGrid(initializeGrid());
                      setScore(0);
                      setMoves(20);
                      setSelected(null);
                    }}
                    className="flex-1"
                  >
                    Try Again
                  </Button>
                  <Button variant="ghost" onClick={onClose} className="flex-1">
                    Close
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {!isCompleted && !isGameOver && (
        <p className="text-center text-sm text-muted-foreground">
          Match 3+ icons to score points!
        </p>
      )}
    </div>
  );
};
