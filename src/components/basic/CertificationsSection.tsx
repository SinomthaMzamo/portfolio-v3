import { motion } from "framer-motion";
import { kingdoms } from "@/components/game/portfolioData";
import { Award, ExternalLink } from "lucide-react";

const certsKingdom = kingdoms.find((k) => k.id === "certifications");

export const CertificationsSection = () => {
  if (!certsKingdom) return null;

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-10">Certifications</h2>
          <div className="grid gap-6">
            {certsKingdom.missions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {mission.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{mission.description}</p>
                  {mission.date && (
                    <span className="inline-block text-xs text-muted-foreground font-mono mt-2">{mission.date}</span>
                  )}
                  <ul className="mt-3 space-y-1">
                    {mission.details.map((detail, j) => (
                      <li key={j} className="text-sm text-foreground/80">
                        <span className="text-primary mr-2">›</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {mission.links && mission.links.length > 0 && (
                  <a
                    href={mission.links[0].url}
                    className="shrink-0 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="View credential"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
