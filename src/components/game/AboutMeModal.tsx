import { motion } from "framer-motion";
import { aboutMe } from "@/components/game/portfolioData";
import { User, Mail, Phone, MapPin, Linkedin, Github, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AboutMeModalProps {
  onClose: () => void;
}

export const AboutMeModal = ({ onClose }: AboutMeModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-primary bg-card shadow-2xl"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none rounded-2xl" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative z-10 p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1"
            >
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
              </div>
            </motion.div>
            <div className="text-center sm:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-display text-2xl sm:text-3xl font-bold text-glow"
              >
                {aboutMe.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-primary font-medium mt-1"
              >
                {aboutMe.title}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-muted-foreground text-sm mt-2"
              >
                {aboutMe.tagline}
              </motion.p>
            </div>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-foreground/90 leading-relaxed">{aboutMe.bio}</p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
          >
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href={`mailto:${aboutMe.contact.email}`}
                className="hover:text-primary transition-colors"
              >
                {aboutMe.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary" />
              <span>{aboutMe.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{aboutMe.contact.location}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Linkedin className="w-4 h-4 text-primary" />
              <a
                href={`https://${aboutMe.contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Quick Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="font-display text-lg font-semibold mb-4">
              Core Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(aboutMe.skills).map(([category, skills]) => (
                <div
                  key={category}
                  className="p-3 rounded-lg bg-secondary/30 border border-border"
                >
                  <h4 className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    {category.replace(/([A-Z])/g, " $1").trim()}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-xs rounded bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button
              onClick={() =>
                window.open(`mailto:${aboutMe.contact.email}`, "_blank")
              }
              className="bg-primary hover:bg-primary/90"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Me
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                window.open(`https://${aboutMe.contact.github}`, "_blank")
              }
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
      </motion.div>
    </motion.div>
  );
};
