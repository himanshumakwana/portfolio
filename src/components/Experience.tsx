import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Gateway Group of Companies",
      role: "Senior MERN Developer",
      duration: "3 Years",
      description: "Led frontend architecture, implemented CI/CD pipelines, and optimized microservices for scalability.",
      highlights: [
        "Architected scalable React applications",
        "Implemented automated CI/CD workflows",
        "Optimized backend microservices reducing latency by 40%",
      ],
    },
    {
      company: "Accrete Infosolutions",
      role: "MERN Developer",
      duration: "1 Year",
      description: "Built scalable web modules and integrated APIs with Node.js and React.",
      highlights: [
        "Developed RESTful APIs with Express and Node.js",
        "Integrated third-party services and payment gateways",
        "Collaborated with cross-functional teams",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-card" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-primary">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full p-6 bg-background border-border hover:border-primary transition-all hover:shadow-glow group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  </div>
                </div>
                
                <p className="font-body text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-1">▸</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <Card className="p-8 bg-background border-border hover:border-primary transition-all hover:shadow-glow">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary/10">
                <GraduationCap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold mb-2">Education</h3>
                <p className="font-semibold text-lg">Bachelor of Computer Applications (BCA)</p>
                <p className="text-muted-foreground">Graduated 2018</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Foundation in computer science, programming, and software development
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
