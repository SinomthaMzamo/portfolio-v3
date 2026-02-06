import { motion } from "framer-motion";
import { kingdoms } from "@/components/game/portfolioData";

const experienceKingdom = kingdoms.find((k) => k.id === "experience");

export const ExperienceSection = () => {
  if (!experienceKingdom) return null;

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-10">Experience</h2>
          <div className="space-y-10">
            {experienceKingdom.missions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-6 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
              >
                {mission.date && (
                  <span className="text-xs text-muted-foreground font-mono">{mission.date}</span>
                )}
                <h3 className="text-lg font-semibold text-foreground mt-1">{mission.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{mission.description}</p>
                <ul className="space-y-1.5">
                  {mission.details.map((detail, j) => (
                    <li key={j} className="text-sm text-foreground/80 leading-relaxed">
                      <span className="text-primary mr-2">›</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
