import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Mail, label: "Email", href: "mailto:emma@example.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message!
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-card border-border animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-body font-medium block mb-2">Your Name</label>
              <Input 
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="font-body"
              />
            </div>

            <div>
              <label className="font-body font-medium block mb-2">Email Address</label>
              <Input 
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="font-body"
              />
            </div>

            <div>
              <label className="font-body font-medium block mb-2">Your Message</label>
              <Textarea 
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-32 font-body"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Send Message
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-body text-center text-muted-foreground mb-6">
              Or connect with me on
            </p>
            <div className="flex justify-center gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
