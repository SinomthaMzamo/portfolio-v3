import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Briefcase, CalculatorIcon, RotateCcw, Satellite, Sparkles, TelescopeIcon } from "lucide-react";

import {
  SiReact,
  SiTypescript,
  SiKotlin,
  SiDocker,
  SiNodedotjs,
  SiGo,
  SiGraphql,
  SiAmazonwebservices,
  SiAmazons3,
  SiAmazonec2,
  SiAwslambda,
  SiAmazondynamodb,
  SiSwift,
  SiRust,
  SiExpo,
  SiStarship,
  SiPostgresql,
  SiAngular,
  SiNetflix,
  SiGooglegemini,
} from "react-icons/si";

import { GiSoapExperiment, GiStarSwirl } from "react-icons/gi";
import { TbJson } from "react-icons/tb";
import { LuBrainCircuit, LuFileBadge, LuLayoutDashboard } from "react-icons/lu";




import {
  RiFormula
}
from "react-icons/ri"

import {
  FaCloud,
  FaDatabase,
  FaLock,
  FaBolt,
  FaCogs,
  FaMobileAlt,
  FaPaintBrush,
  FaClipboardCheck,
  FaBoxOpen,
  FaProjectDiagram,
  FaRegIdBadge,
  FaCreditCard,
  FaCodeBranch,
  FaStar,
  FaSatelliteDish,
  FaJava,
  FaFigma,
  FaServer,
  FaCalculator,
  FaFileInvoiceDollar,
  FaShopify,
  FaFacebookSquare,
  FaGithub,
  FaMicrophone,
  FaPython,
  FaBriefcase,
  FaCode,
  FaMailBulk,
  FaEdit,
  FaCloudUploadAlt,
} from "react-icons/fa";

import type { IconType } from "react-icons";
import { IoTelescopeSharp, IoLogoAngular } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiSouthAfrica } from "react-icons/gi";
import { PiCubeDuotone } from "react-icons/pi";





export const techIcons: Record<string, IconType> = {
  React: SiReact,
  Angular: IoLogoAngular,
  TypeScript: SiTypescript,
  API: FaProjectDiagram,
  Payment: FaCreditCard,
  Invoice: FaFileInvoiceDollar,
  UX: FaPaintBrush,
  Form: FaRegIdBadge,
  Kotlin: SiKotlin,
  Docker: SiDocker,
  CRUD: FaDatabase,
  SQL: FaDatabase,
  Auth: FaLock,
  REST: FaCodeBranch,
  Sprint: FaBolt,
  QA: FaClipboardCheck,
  SDK: FaBoxOpen,
  Node: SiNodedotjs,
  Java: FaJava,
  Go: SiGo,
  GraphQL: SiGraphql,
  AWS: SiAmazonwebservices,
  Cloud: FaCloud,
  S3: SiAmazons3,
  EC2: SiAmazonec2,
  Lambda: SiAwslambda,
  IAM: FaRegIdBadge,
  Native: FaMobileAlt,
  Expo: SiExpo,
  Swift: SiSwift,
  Mobile: FaMobileAlt,
  App: FaMobileAlt,
  Rust: SiRust,
  Memory: FaBoxOpen,
  Safe: FaLock,
  Fast: FaBolt,
  System: FaCogs,
  Cargo: FaBoxOpen,
  Star: FaStar,
  Satellite: FaSatelliteDish,
  Rocket: SiStarship,
  Formula: RiFormula,
  Calculator: FaCalculator,
  Experiment: GiSoapExperiment,
  Galaxy: GiStarSwirl,
  Telescope: IoTelescopeSharp,
  Dynamodb: SiAmazondynamodb,
  Server: FaServer,
  PGSQL: SiPostgresql,
  JSON: TbJson,
  Figma: FaFigma,
  Shopify: FaShopify,
  Facebook: FaFacebookSquare,
  Netflix: SiNetflix,
  Twitter: FaSquareXTwitter,
  GitHub: FaGithub,
  AI: LuBrainCircuit,
  Voice: FaMicrophone,
  Python: FaPython,
  Gemini: SiGooglegemini,
  Briefcase: FaBriefcase,
  RSA: GiSouthAfrica,
  Code: FaCode,
  Cursor: PiCubeDuotone,
  Mail: FaMailBulk,
  Cert: LuFileBadge,
  Editing: FaEdit,
  Dashboard: LuLayoutDashboard,
  Upload: FaCloudUploadAlt,
};


interface MemoryGameProps {
  pairs: string[];
  onComplete: () => void;
  onClose: () => void;
  moveLimit?: number;
}

interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// const techIcons: Record<string, string> = {
//   React: "⚛️",
//   TypeScript: "📘",
//   API: "🔗",
//   Payment: "💳",
//   UX: "🎨",
//   Form: "📝",
//   Kotlin: "🟣",
//   Docker: "🐳",
//   CRUD: "📊",
//   SQL: "💾",
//   Auth: "🔐",
//   REST: "🌐",
//   Sprint: "🏃",
//   QA: "✅",
//   SDK: "📦",
//   Node: "🟢",
//   Java: "☕",
//   Go: "🔵",
//   GraphQL: "🔺",
//   AWS: "☁️",
//   Cloud: "⛅",
//   S3: "🪣",
//   EC2: "💻",
//   Lambda: "λ",
//   IAM: "👤",
//   Native: "📱",
//   Expo: "📲",
//   Swift: "🦅",
//   Mobile: "📳",
//   App: "📲",
//   Rust: "🦀",
//   Memory: "🧠",
//   Safe: "🛡️",
//   Fast: "⚡",
//   System: "⚙️",
//   Cargo: "📦",
// };

export const MemoryGame = ({
  pairs = [],
  onComplete,
  onClose,
  moveLimit,
}: MemoryGameProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const maxMoves = moveLimit ?? (pairs.length * 3);

  const initializeGame = () => {
    if (!pairs || pairs.length === 0) return;

    const cardPairs = pairs.flatMap((value, index) => [
      { id: index * 2, value, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, value, isFlipped: false, isMatched: false },
    ]);
    setCards(cardPairs.sort(() => Math.random() - 0.5));
    setFlippedCards([]);
    setMoves(0);
    setIsComplete(false);
    setIsGameOver(false);
  };

  useEffect(() => {
    initializeGame();
  }, [pairs]);

  const handleCardClick = (cardId: number) => {
    if (isProcessing || isComplete || isGameOver) return;
    if (flippedCards.length === 2) return;
    if (cards.find((c) => c.id === cardId)?.isMatched) return;
    if (flippedCards.includes(cardId)) return;

    const newFlipped = [...flippedCards, cardId];
    setFlippedCards(newFlipped);
    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c)),
    );

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setIsProcessing(true);

      const [first, second] = newFlipped;
      const firstCard = cards.find((c) => c.id === first);
      const secondCard = cards.find((c) => c.id === second);

      if (firstCard?.value === secondCard?.value) {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first || c.id === second ? { ...c, isMatched: true } : c,
            ),
          );
          setFlippedCards([]);
          setIsProcessing(false);
        }, 500);
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first || c.id === second
                ? { ...c, isFlipped: false }
                : c,
            ),
          );
          setFlippedCards([]);
          setIsProcessing(false);
        }, 1000);
      }
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every((c) => c.isMatched)) {
      setIsComplete(true);
      setTimeout(onComplete, 1500);
    } else if (cards.length > 0 && moves >= maxMoves && !cards.every((c) => c.isMatched)) {
      setIsGameOver(true);
    }
  }, [cards, onComplete, moves, maxMoves]);

  if (!pairs || pairs.length === 0) {
    return (
      <div className="p-6 text-center text-muted-foreground">
        Loading game...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground text-sm">Moves: {moves}/{maxMoves}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={initializeGame}
            className="text-primary hover:text-primary/80"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      {/* Move progress bar */}
      <div className="h-1.5 bg-secondary rounded-full mb-4 overflow-hidden">
        <motion.div
          className={`h-full rounded-full transition-colors ${moves / maxMoves > 0.8 ? "bg-destructive" : "bg-primary"}`}
          animate={{ width: `${Math.min((moves / maxMoves) * 100, 100)}%` }}
        />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
        <AnimatePresence>
          {cards.map((card) => {
            const Icon = techIcons[card.value];
            return (
            <motion.button
              key={card.id}
              initial={{ scale: 0, rotateY: 180 }}
              animate={{
                scale: 1,
                rotateY: card.isFlipped || card.isMatched ? 0 : 180,
              }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleCardClick(card.id)}
              disabled={card.isMatched || isProcessing}
              className={`
                aspect-square rounded-lg border-2 font-display font-semibold
                transition-all duration-300 flex items-center justify-center
                text-sm sm:text-base
                ${
                  card.isMatched
                    ? "bg-primary/20 border-primary glow-primary"
                    : card.isFlipped
                      ? "bg-secondary border-primary"
                      : "bg-card border-border hover:border-primary/50"
                }
              `}
            >
              {(card.isFlipped || card.isMatched) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-1"
                >
                  {Icon && <Icon className="w-6 h-6 sm:w-8 sm:h-8" />}

                  <span className="text-xs text-foreground/80">
                    {card.value}
                  </span>
                </motion.div>
              )}
              {!card.isFlipped && !card.isMatched && (
                <span className="text-2xl text-muted-foreground">?</span>
              )}
            </motion.button>
          );
})}
        </AnimatePresence>
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
          <p className="text-muted-foreground text-sm mt-2">
            Completed in {moves} moves
          </p>
        </motion.div>
      )}

      {isGameOver && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="text-destructive font-semibold mb-2">Out of moves!</p>
          <div className="flex gap-2 justify-center">
            <Button variant="outline" onClick={initializeGame}>
              Try Again
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
