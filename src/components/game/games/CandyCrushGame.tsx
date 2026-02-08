import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Shuffle } from "lucide-react";
import { techIcons } from "./MemoryGame";

interface CandyCrushGameProps {
  icons?: string[];
  targetScore?: number;
  onComplete: () => void;
  onClose: () => void;
  iconColourMap: { icon: string; colour: string }[];
}

const defaultIcons = ["⚛️", "🟦", "🟨", "🟩", "🟪", "🔶"];

const GRID_SIZE = 6;
const MATCH_MIN = 3;
const HINT_DELAY = 5000;

type Cell = {
  icon: { icon: string; colour: string };
  id: number;
  isNew?: boolean;
  dropDistance?: number;
};

export const CandyCrushGame = ({
  icons = defaultIcons,
  iconColourMap,
  targetScore = 100,
  onComplete,
  onClose,
}: CandyCrushGameProps) => {
  const [grid, setGrid] = useState<Cell[][]>([]);
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(20);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [hintCells, setHintCells] = useState<{ row: number; col: number }[] | null>(null);
  const idRef = useRef(0);
  const hintTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastActionRef = useRef<number>(Date.now());
  const nextId = () => idRef.current++;

  const getRandomIcon = useCallback(() => {
    return iconColourMap[Math.floor(Math.random() * iconColourMap.length)];
  }, [iconColourMap]);

  const initializeGrid = useCallback(() => {
    idRef.current = 0;
    const newGrid: Cell[][] = [];
    for (let row = 0; row < GRID_SIZE; row++) {
      const newRow: Cell[] = [];
      for (let col = 0; col < GRID_SIZE; col++) {
        let icon = getRandomIcon();
        while (
          (col >= 2 && newRow[col - 1]?.icon.icon === icon.icon && newRow[col - 2]?.icon.icon === icon.icon) ||
          (row >= 2 && newGrid[row - 1]?.[col]?.icon.icon === icon.icon && newGrid[row - 2]?.[col]?.icon.icon === icon.icon)
        ) {
          icon = getRandomIcon();
        }
        newRow.push({ icon, id: nextId() });
      }
      newGrid.push(newRow);
    }
    return newGrid;
  }, [getRandomIcon]);

  useEffect(() => {
    setGrid(initializeGrid());
  }, [initializeGrid]);

  // --- Hint system ---
  const resetHintTimer = useCallback(() => {
    lastActionRef.current = Date.now();
    setHintCells(null);
    if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
  }, []);

  const findHintMove = useCallback((g: Cell[][]): { row: number; col: number }[] | null => {
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        // Try swap right
        if (c + 1 < GRID_SIZE) {
          const swapped = swapInGrid(g, r, c, r, c + 1);
          if (hasMatchAt(swapped, r, c) || hasMatchAt(swapped, r, c + 1)) {
            return [{ row: r, col: c }, { row: r, col: c + 1 }];
          }
        }
        // Try swap down
        if (r + 1 < GRID_SIZE) {
          const swapped = swapInGrid(g, r, c, r + 1, c);
          if (hasMatchAt(swapped, r, c) || hasMatchAt(swapped, r + 1, c)) {
            return [{ row: r, col: c }, { row: r + 1, col: c }];
          }
        }
      }
    }
    return null;
  }, []);

  // Start hint timer whenever grid changes and we're not animating
  useEffect(() => {
    if (isAnimating || isShuffling || grid.length === 0) return;
    if (hintTimerRef.current) clearTimeout(hintTimerRef.current);

    hintTimerRef.current = setTimeout(() => {
      const hint = findHintMove(grid);
      if (hint) setHintCells(hint);
    }, HINT_DELAY);

    return () => {
      if (hintTimerRef.current) clearTimeout(hintTimerRef.current);
    };
  }, [grid, isAnimating, isShuffling, findHintMove]);

  const isHintCell = (row: number, col: number) => {
    return hintCells?.some((h) => h.row === row && h.col === col) ?? false;
  };

  // --- Core game logic ---
  const hasMatchAt = (g: Cell[][], r: number, c: number) => {
    const icon = g[r]?.[c]?.icon?.icon;
    if (!icon) return false;
    let count = 1;
    for (let x = c - 1; x >= 0 && g[r][x]?.icon.icon === icon; x--) count++;
    for (let x = c + 1; x < GRID_SIZE && g[r][x]?.icon.icon === icon; x++) count++;
    if (count >= MATCH_MIN) return true;
    count = 1;
    for (let y = r - 1; y >= 0 && g[y][c]?.icon.icon === icon; y--) count++;
    for (let y = r + 1; y < GRID_SIZE && g[y][c]?.icon.icon === icon; y++) count++;
    return count >= MATCH_MIN;
  };

  const hasAnyValidMove = (g: Cell[][]) => {
    for (let r = 0; r < GRID_SIZE; r++) {
      for (let c = 0; c < GRID_SIZE; c++) {
        if (c + 1 < GRID_SIZE) {
          const swapped = swapInGrid(g, r, c, r, c + 1);
          if (hasMatchAt(swapped, r, c) || hasMatchAt(swapped, r, c + 1)) return true;
        }
        if (r + 1 < GRID_SIZE) {
          const swapped = swapInGrid(g, r, c, r + 1, c);
          if (hasMatchAt(swapped, r, c) || hasMatchAt(swapped, r + 1, c)) return true;
        }
      }
    }
    return false;
  };

  const shuffleGrid = (g: Cell[][]) => {
    const flat = g.flat();
    for (let i = flat.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [flat[i], flat[j]] = [flat[j], flat[i]];
    }
    const reshuffled: Cell[][] = [];
    let idx = 0;
    for (let r = 0; r < GRID_SIZE; r++) {
      const row: Cell[] = [];
      for (let c = 0; c < GRID_SIZE; c++) row.push({ ...flat[idx++], id: nextId() });
      reshuffled.push(row);
    }
    return reshuffled;
  };

  const reshuffleIfStuck = (g: Cell[][]) => {
    let attempt = 0;
    let candidate = g;
    while (attempt < 25) {
      candidate = shuffleGrid(candidate);
      const hasInstantMatches = findMatches(candidate).size > 0;
      const hasMove = hasAnyValidMove(candidate);
      if (!hasInstantMatches && hasMove) return candidate;
      attempt++;
    }
    return initializeGrid();
  };

  const findMatches = useCallback((currentGrid: Cell[][]): Set<string> => {
    const matches = new Set<string>();
    for (let row = 0; row < GRID_SIZE; row++) {
      for (let col = 0; col <= GRID_SIZE - MATCH_MIN; col++) {
        const icon = currentGrid[row][col]?.icon;
        if (!icon) continue;
        let matchLength = 1;
        while (col + matchLength < GRID_SIZE && currentGrid[row][col + matchLength]?.icon.icon === icon.icon) matchLength++;
        if (matchLength >= MATCH_MIN) {
          for (let i = 0; i < matchLength; i++) matches.add(`${row},${col + i}`);
        }
      }
    }
    for (let col = 0; col < GRID_SIZE; col++) {
      for (let row = 0; row <= GRID_SIZE - MATCH_MIN; row++) {
        const icon = currentGrid[row][col]?.icon;
        if (!icon) continue;
        let matchLength = 1;
        while (row + matchLength < GRID_SIZE && currentGrid[row + matchLength]?.[col]?.icon.icon === icon.icon) matchLength++;
        if (matchLength >= MATCH_MIN) {
          for (let i = 0; i < matchLength; i++) matches.add(`${row + i},${col}`);
        }
      }
    }
    return matches;
  }, []);

  const removeMatchesAndDrop = useCallback(
    (currentGrid: Cell[][], matches: Set<string>): Cell[][] => {
      const newGrid = currentGrid.map((row) => row.slice());
      matches.forEach((pos) => {
        const [row, col] = pos.split(",").map(Number);
        newGrid[row][col] = null as any;
      });
      for (let col = 0; col < GRID_SIZE; col++) {
        // Count how far each cell needs to drop
        let writeRow = GRID_SIZE - 1;
        const columnCells: (Cell | null)[] = [];
        for (let row = GRID_SIZE - 1; row >= 0; row--) {
          if (newGrid[row][col] !== null) {
            const dropDist = writeRow - row;
            newGrid[writeRow][col] = { ...newGrid[row][col], dropDistance: dropDist > 0 ? dropDist : 0 };
            if (writeRow !== row) newGrid[row][col] = null as any;
            writeRow--;
          }
        }
        // Fill empty top rows with new cells that drop in
        for (let row = writeRow; row >= 0; row--) {
          const dropDist = writeRow + 1; // drops from above the grid
          newGrid[row][col] = { icon: getRandomIcon(), id: nextId(), isNew: true, dropDistance: dropDist + 1 };
        }
      }
      return newGrid;
    },
    [getRandomIcon],
  );

  const processMatches = useCallback(
    async (currentGrid: Cell[][]) => {
      let g = currentGrid.map((r) => r.slice());
      let totalMatches = 0;
      while (true) {
        const matches = findMatches(g);
        if (matches.size === 0) break;
        totalMatches += matches.size;
        await new Promise((resolve) => setTimeout(resolve, 250));
        g = removeMatchesAndDrop(g, matches);
        setGrid([...g]);
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
      if (totalMatches > 0) {
        setScore((prev) => prev + totalMatches * 10);
      }
      // Check if stuck
      if (!hasAnyValidMove(g)) {
        setIsShuffling(true);
        await new Promise((resolve) => setTimeout(resolve, 600));
        g = reshuffleIfStuck(g);
        setGrid(g.map((r) => r.slice()));
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsShuffling(false);
      }
      setIsAnimating(false);
    },
    [findMatches, removeMatchesAndDrop],
  );

  function swapInGrid(g: Cell[][], r1: number, c1: number, r2: number, c2: number) {
    const newGrid = g.map((row) => row.slice());
    const temp = newGrid[r1][c1];
    newGrid[r1][c1] = newGrid[r2][c2];
    newGrid[r2][c2] = temp;
    return newGrid;
  }

  const handleCellClick = useCallback(
    (row: number, col: number) => {
      if (isAnimating || moves <= 0) return;
      resetHintTimer();

      if (!selected) {
        setSelected({ row, col });
        return;
      }

      const r1 = selected.row, c1 = selected.col;
      const r2 = row, c2 = col;
      const isAdjacent = (Math.abs(r1 - r2) === 1 && c1 === c2) || (Math.abs(c1 - c2) === 1 && r1 === r2);

      if (!isAdjacent) {
        setSelected({ row, col });
        return;
      }

      setIsAnimating(true);
      setSelected(null);
      const swapped = swapInGrid(grid, r1, c1, r2, c2);
      const valid = hasMatchAt(swapped, r1, c1) || hasMatchAt(swapped, r2, c2);

      if (valid) {
        setMoves((prev) => prev - 1);
        setGrid(swapped);
        processMatches(swapped);
      } else {
        setGrid(swapped);
        setTimeout(() => {
          setGrid(swapInGrid(swapped, r1, c1, r2, c2));
          setIsAnimating(false);
        }, 250);
      }
    },
    [grid, selected, isAnimating, moves, processMatches, resetHintTimer],
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

      {/* Game Grid with shuffle overlay */}
      <div className="relative mb-4 mx-auto" style={{ maxWidth: "300px" }}>
        {/* Shuffle overlay */}
        <AnimatePresence>
          {isShuffling && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-xl bg-background/80 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
              >
                <Shuffle className="w-10 h-10 text-primary" />
              </motion.div>
              <p className="mt-3 text-sm font-semibold text-primary">Shuffling...</p>
              <p className="text-xs text-muted-foreground">No moves available</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid gap-1">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1 justify-center">
              {row.map((cell, colIndex) => {
                const isSelected = selected?.row === rowIndex && selected?.col === colIndex;
                const isHint = isHintCell(rowIndex, colIndex);
                const dropDist = cell?.dropDistance ?? 0;

                return (
                  <motion.button
                    key={cell?.id ?? `${rowIndex}-${colIndex}`}
                    layout
                    initial={
                      cell?.isNew || dropDist > 0
                        ? { y: -(dropDist * 48), opacity: cell?.isNew ? 0.3 : 1, scale: cell?.isNew ? 0.6 : 1 }
                        : { scale: 0, opacity: 0 }
                    }
                    animate={{
                      y: 0,
                      scale: isHint ? [1, 1.15, 1] : 1,
                      opacity: 1,
                      boxShadow: isSelected
                        ? "0 0 0 2px hsl(var(--primary))"
                        : isHint
                          ? "0 0 12px 2px hsl(var(--primary) / 0.5)"
                          : "none",
                    }}
                    transition={
                      cell?.isNew || dropDist > 0
                        ? {
                            y: { type: "spring", stiffness: 300, damping: 20, mass: 0.8 },
                            opacity: { duration: 0.15 },
                            scale: isHint
                              ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
                              : { type: "spring", stiffness: 400, damping: 15 },
                          }
                        : {
                            layout: { type: "spring", stiffness: 300, damping: 25 },
                            scale: isHint
                              ? { repeat: Infinity, duration: 1.2, ease: "easeInOut" }
                              : undefined,
                          }
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    disabled={isAnimating || isCompleted || isGameOver}
                    style={{ backgroundColor: cell.icon.colour }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-xl sm:text-2xl transition-colors ${
                      isHint ? "ring-2 ring-primary/50" : ""
                    }`}
                  >
                    {(() => {
                      const Icon = techIcons[cell.icon.icon];
                      return Icon && <Icon className="w-6 h-6 sm:w-8 sm:h-8" />;
                    })()}
                  </motion.button>
                );
              })}
            </div>
          ))}
        </div>
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
                <p className="text-destructive font-semibold mb-2">Out of moves!</p>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setGrid(initializeGrid());
                      setScore(0);
                      setMoves(20);
                      setSelected(null);
                      resetHintTimer();
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
