import { Heart, Palette, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Human-Centered",
      description: "I believe great design starts with empathy and understanding people's needs."
    },
    {
      icon: Palette,
      title: "Aesthetically Driven",
      description: "Beautiful design isn't just decorative—it's functional and purposeful."
    },
    {
      icon: Sparkles,
      title: "Detail Obsessed",
      description: "Every pixel, every interaction, every moment matters in creating magic."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A designer who loves bringing ideas to life through thoughtful, beautiful design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 animate-fade-in">
            <p className="font-body text-lg leading-relaxed">
              Hey there! I'm Emma, a creative designer based in San Francisco. With over 5 years 
              of experience, I've had the joy of working with amazing brands and startups to 
              create designs that truly resonate.
            </p>
            <p className="font-body text-lg leading-relaxed">
              My journey in design started with a simple love for colors and typography, and has 
              evolved into a passion for creating holistic brand experiences. When I'm not designing, 
              you'll find me exploring art galleries, trying new coffee shops, or sketching in my journal.
            </p>
            <p className="font-body text-lg leading-relaxed">
              I believe design has the power to inspire, connect, and create meaningful change. 
              Let's create something beautiful together!
            </p>
          </div>

          <div className="grid gap-6 animate-fade-in-up">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-card transition-all hover:-translate-y-1 border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="font-body text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
