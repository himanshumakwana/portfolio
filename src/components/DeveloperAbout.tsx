import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Cloud, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const DeveloperAbout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Code2,
      title: "Clean Architecture",
      description: "Passionate about writing maintainable, scalable code",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Expert in Azure, AWS, Docker, and Kubernetes",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              I'm a <span className="text-primary font-semibold">MERN Stack Developer</span> with over{" "}
              <span className="text-primary font-semibold">5.5 years of experience</span> building
              scalable, optimized, and high-performance web applications.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              Passionate about <span className="text-secondary font-semibold">clean architecture</span>,{" "}
              <span className="text-secondary font-semibold">cloud deployment</span>, and{" "}
              <span className="text-secondary font-semibold">automation</span>, I thrive on solving
              complex problems with elegant solutions.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              I love exploring cloud services, DevOps workflows, and modern frontend trends that make
              user experiences smoother and faster.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperAbout;
