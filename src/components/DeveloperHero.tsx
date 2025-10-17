import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DeveloperHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-soft opacity-50"></div>
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, hsl(189, 94%, 43%) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(250, 60%, 65%) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(189, 94%, 43%) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="container mx-auto max-w-5xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8">
          <motion.div variants={itemVariants} className="space-y-2">
            <motion.div
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-primary font-semibold text-sm">
                MERN Stack Developer
              </span>
            </motion.div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Himanshu
              </span>
              <br />
              <span className="text-foreground">Makwana</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Building scalable, optimized, and future-ready web applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Button
              variant="default"
              size="lg"
              className="group shadow-glow hover:shadow-glow"
            >
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center items-center pt-8"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary hover:shadow-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary hover:shadow-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:hm896292@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all border border-border hover:border-primary hover:shadow-glow"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <p className="text-sm text-muted-foreground mb-4">5.5 years of experience</p>
            <div className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto">
              {["React", "Node.js", "MongoDB", "Azure", "AWS", "Docker", "Kubernetes"].map(
                (tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary hover:text-primary transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DeveloperHero;
