import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

const DeveloperFooter = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hm896292@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-heading text-xl font-bold mb-2">Himanshu Makwana</h3>
            <p className="text-muted-foreground text-sm">MERN Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary hover:shadow-glow"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 fill-primary text-primary" /> by Himanshu Makwana © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default DeveloperFooter;
