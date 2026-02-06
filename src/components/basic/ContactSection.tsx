import { motion } from "framer-motion";
import { aboutMe } from "@/components/game/portfolioData";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Let's build something together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${aboutMe.contact.email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary/40 bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-medium text-sm"
            >
              <Mail className="w-4 h-4" />
              {aboutMe.contact.email}
            </a>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              {aboutMe.contact.location}
            </span>
          </div>

          <div className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground">
            © {new Date().getFullYear()} {aboutMe.name}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
