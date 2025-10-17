import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const DeveloperContact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          <p className="font-body text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:hm896292@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hm896292@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Available for remote work</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-1">Availability</h3>
                  <p className="text-muted-foreground">Open to new opportunities</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 bg-card border-border hover:border-primary transition-all hover:shadow-glow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-body font-medium block mb-2">Your Name</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="font-body font-medium block mb-2">Email Address</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label className="font-body font-medium block mb-2">Your Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-32 bg-background border-border focus:border-primary"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full group shadow-glow hover:shadow-glow"
                  size="lg"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperContact;
