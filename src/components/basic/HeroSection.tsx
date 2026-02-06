import { motion } from "framer-motion";
import { aboutMe } from "@/components/game/portfolioData";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center"
        >
          <span className="text-3xl font-bold text-primary">SM</span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="text-foreground">{aboutMe.name}</span>
        </h1>

        <p className="text-lg md:text-xl text-primary font-medium mb-6">
          {aboutMe.title}
        </p>

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {aboutMe.tagline}
        </p>

        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href={`mailto:${aboutMe.contact.email}`}
            className="p-3 rounded-xl border border-border bg-card hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-muted-foreground" />
          </a>
          <a
            href={`https://${aboutMe.contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border bg-card hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-muted-foreground" />
          </a>
          <a
            href={`https://${aboutMe.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-border bg-card hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground" />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="w-5 h-5 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
};
