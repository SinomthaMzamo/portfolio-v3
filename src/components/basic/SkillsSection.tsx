import { motion } from "framer-motion";
import { aboutMe } from "@/components/game/portfolioData";

const skillCategories = [
  { label: "Full Stack", items: aboutMe.skills.fullStack },
  { label: "Cloud & DevOps", items: aboutMe.skills.cloudDevOps },
  { label: "Databases", items: aboutMe.skills.databases },
  { label: "Soft Skills", items: aboutMe.skills.softSkills },
];

export const SkillsSection = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-10">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg border border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
