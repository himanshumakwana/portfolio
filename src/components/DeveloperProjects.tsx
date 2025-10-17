import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const DeveloperProjects = ({ sectionRef }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "TaskFlow",
      description: "A task management web app with drag-and-drop UI, real-time collaboration, and smart notifications.",
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "ShopSphere",
      description: "E-commerce platform with scalable backend, payment integration, and inventory management system.",
      tags: ["Next.js", "Express", "MySQL", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "DevOps Dashboard",
      description: "CI/CD monitoring app using Docker, Kubernetes, and AWS with real-time deployment tracking.",
      tags: ["React", "Docker", "Kubernetes", "AWS"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "BlogHive",
      description: "Markdown-based blogging platform with serverless deployment and SEO optimization.",
      tags: ["Next.js", "Vercel", "MongoDB", "MDX"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "InsightTrack",
      description: "Analytics dashboard for tracking app performance metrics with beautiful data visualizations.",
      tags: ["React", "Node.js", "PostgreSQL", "Recharts"],
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "CodeSync",
      description: "Real-time collaborative code editor using WebSockets with syntax highlighting and live preview.",
      tags: ["React", "Socket.io", "Monaco", "Express"],
      gradient: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <>
      <span ref={sectionRef}> </span>
      <section id="projects" className="py-24 px-4 bg-background" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
            <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A showcase of applications I've built to solve real-world problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary transition-all overflow-hidden group hover:shadow-glow">
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="font-body text-xs bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 group/btn hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                        GitHub
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DeveloperProjects;
