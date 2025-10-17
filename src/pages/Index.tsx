import ThemeToggle from "@/components/ThemeToggle";
import DeveloperHero from "@/components/DeveloperHero";
import DeveloperAbout from "@/components/DeveloperAbout";
import Skills from "@/components/Skills";
import DeveloperProjects from "@/components/DeveloperProjects";
import Experience from "@/components/Experience";
import DeveloperContact from "@/components/DeveloperContact";
import DeveloperFooter from "@/components/DeveloperFooter";
import { useRef } from "react";

const Index = () => {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      <DeveloperHero handleScroll={handleScroll} />
      <DeveloperAbout />
      <Skills />
      <DeveloperProjects sectionRef={sectionRef} />
      <Experience />
      <DeveloperContact />
      <DeveloperFooter />
    </div>
  );
};

export default Index;
