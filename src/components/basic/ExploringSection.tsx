import { motion } from "framer-motion";
import { kingdoms } from "@/components/game/portfolioData";
import { Compass } from "lucide-react";

const exploringKingdom = kingdoms.find((k) => k.id === "exploring");

export const ExploringSection = () => {
  if (!exploringKingdom) return null;

  return (
    <section id="exploring" className="py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-10">Currently Exploring</h2>
          <div className="grid gap-6">
            {exploringKingdom.missions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                    <Compass className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{mission.description}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {mission.details.map((detail, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
