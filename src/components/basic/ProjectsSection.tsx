import { motion } from "framer-motion";
import { kingdoms } from "@/components/game/portfolioData";
import { ExternalLink } from "lucide-react";

const projectsKingdom = kingdoms.find((k) => k.id === "projects");

export const ProjectsSection = () => {
  if (!projectsKingdom) return null;

  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-10">Projects</h2>
          <div className="grid gap-6">
            {projectsKingdom.missions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {mission.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{mission.description}</p>
                    {mission.technologies && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {mission.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {mission.links && mission.links.length > 0 && (
                    <a
                      href={mission.links[0].url}
                      className="shrink-0 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                      aria-label="View project"
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
