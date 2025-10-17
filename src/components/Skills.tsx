import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiMysql,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiRedis
} from "react-icons/si";
import { TbBrandNextjs, TbBrandAzure } from "react-icons/tb";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
    { name: "Next.js", icon: TbBrandNextjs, color: "text-foreground" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    { name: "Azure", icon: TbBrandAzure, color: "text-[#0078D4]" },
    { name: "AWS", icon: SiAmazon, color: "text-[#FF9900]" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
    { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Express", icon: SiExpress, color: "text-foreground" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]" },
    { name: "Redis", icon: SiRedis, color: "text-[#DC382D]" },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-card" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-primary">Stack</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background border border-border hover:border-primary hover:shadow-glow transition-all group cursor-pointer"
            >
              <skill.icon className={`w-12 h-12 md:w-14 md:h-14 ${skill.color} group-hover:scale-110 transition-transform`} />
              <span className="font-body text-sm font-medium text-center group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
