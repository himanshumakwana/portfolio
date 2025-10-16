import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-background border-t border-border">
      <div className="container mx-auto text-center">
        <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
          Designed with <Heart className="w-4 h-4 fill-primary text-primary" /> by Emma Liu © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
