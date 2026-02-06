import { motion, AnimatePresence } from "framer-motion";
import { Mission } from "@/components/game/gameData";
import { X, ExternalLink, Calendar, Code, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RevealCardProps {
  mission: Mission;
  onClose: () => void;
}

export const RevealCard = ({ mission, onClose }: RevealCardProps) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, rotateY: -90 }}
          animate={{ scale: 1, rotateY: 0 }}
          exit={{ scale: 0.8, rotateY: 90 }}
          transition={{ type: "spring", duration: 0.6 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border-2 border-accent bg-card shadow-2xl"
          style={{ perspective: "1000px" }}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-primary/20 pointer-events-none" />

          {/* Sparkle particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 200],
                  y: [0, (Math.random() - 0.5) * 200],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full bg-accent"
              />
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="w-14 h-14 rounded-xl bg-accent/20 border border-accent flex items-center justify-center"
              >
                <Sparkles className="w-7 h-7 text-accent" />
              </motion.div>
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="font-display text-xl sm:text-2xl font-bold text-glow-gold"
                >
                  {mission.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground mt-1"
                >
                  {mission.description}
                </motion.p>
              </div>
            </div>

            {/* Date */}
            {mission.date && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
              >
                <Calendar className="w-4 h-4" />
                {mission.date}
              </motion.div>
            )}

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2 mb-6"
            >
              {mission.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm text-foreground/90">{detail}</span>
                </div>
              ))}
            </motion.div>

            {/* Technologies */}
            {mission.technologies && mission.technologies.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-6"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Code className="w-4 h-4" />
                  Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {mission.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Links */}
            {mission.links && mission.links.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3"
              >
                {mission.links.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Bottom accent */}
          <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
