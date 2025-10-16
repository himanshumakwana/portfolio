import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechStart",
      content: "Emma transformed our brand identity completely. Her creative vision and attention to detail helped us stand out in a crowded market. Highly recommend!",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager, InnovateCo",
      content: "Working with Emma was an absolute pleasure. She brought fresh ideas and executed them beautifully. Our app's user engagement increased by 40% after her redesign.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      role: "Founder, GreenLeaf",
      content: "Emma's design work perfectly captured our sustainable brand values. She's incredibly talented, professional, and a joy to collaborate with.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Kind Words
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-card transition-all hover:-translate-y-1 border-border animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div>
                <p className="font-heading font-semibold">{testimonial.name}</p>
                <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
