import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Bloom App",
      category: "UI/UX Design",
      description: "A mindfulness app designed to help users build healthy daily habits through beautiful, calming interfaces.",
      tags: ["Mobile Design", "User Research", "Prototyping"],
      image: project1
    },
    {
      title: "Verde Branding",
      category: "Brand Identity",
      description: "Complete brand identity system for a sustainable lifestyle brand, including logo, color palette, and brand guidelines.",
      tags: ["Branding", "Logo Design", "Guidelines"],
      image: project2
    },
    {
      title: "Dash Dashboard",
      category: "Web Design",
      description: "An intuitive analytics dashboard that makes complex data beautiful and accessible for startup founders.",
      tags: ["Web Design", "Data Viz", "UI Design"],
      image: project3
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of work I'm proud to share
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-heading text-xl font-semibold">{project.title}</h3>
                  <span className="text-xs font-body text-primary font-medium">{project.category}</span>
                </div>
                
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary" 
                      className="font-body text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
