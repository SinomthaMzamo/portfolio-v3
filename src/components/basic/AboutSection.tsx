import { motion } from "framer-motion";
import { aboutMe } from "@/components/game/portfolioData";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">About</h2>
          <p className="text-foreground text-lg md:text-xl leading-relaxed">
            {aboutMe.bio}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
