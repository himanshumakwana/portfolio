import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/emma-hero.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-soft px-4 py-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-primary animate-float">
              <Sparkles className="w-5 h-5" />
              <span className="font-body text-sm font-medium">Creative Designer</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Emma Liu
              </span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl">
              I craft beautiful, meaningful experiences through design. Specializing in brand identity, 
              UI/UX design, and visual storytelling that connects with people.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-full"></div>
            <img 
              src={heroImage} 
              alt="Emma Liu - Creative Designer"
              className="relative rounded-3xl shadow-soft w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
