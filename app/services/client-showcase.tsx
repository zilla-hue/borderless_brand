"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

interface ClientShowcaseProps {
  className?: string;
}

const clients = [
  {
    id: 1,
    name: "KaraPay",
    logo: "/images/KaraPay Logo.png",
  },
  {
    id: 2,
    name: "Eco Loop",
    logo: "/images/Eco Loop-01.png",
  },
  {
    id: 3,
    name: "Abba's Bellas Jewels",
    logo: "/images/Abba's Bellas Jewels-01.png",
  },
  {
    id: 4,
    name: "DB Brows",
    logo: "/images/db-brows.png",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechCorp",
    quote:
      "The team at Borderless Brand transformed our visual identity and helped us connect with our audience in ways we never thought possible. The results speak for themselves.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "Eco Loop",
    quote:
      "Working with Borderless Brand was a game-changer for our sustainable product launch. Their strategic approach and creative execution exceeded our expectations.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150",
  },
  {
    id: 3,
    name: "Amara Williams",
    position: "Founder",
    company: "Abba's Bellas Jewels",
    quote:
      "The branding package we received perfectly captured our vision and values. Our customers constantly compliment our new visual identity.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150",
  },
];

const ClientShowcase: React.FC<ClientShowcaseProps> = ({ className }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`py-12 md:py-16 ${className}`}
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="text-center mb-12 relative z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Clients
        </span>
        <h2 className="text-3xl font-bold mb-3">Trusted by Brands</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We've helped these amazing brands transform their visual identity and
          connect with their audience
        </p>
      </div>

      {/* Client logos */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mb-16 relative z-10"
      >
        {clients.map((client) => (
          <motion.div
            key={client.id}
            variants={fadeIn}
            className="flex items-center justify-center p-4 bg-card border border-border/50 rounded-xl hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
          >
            <div className="relative h-16 w-full">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h3 className="text-2xl font-semibold text-center mb-8">
          What Our Clients Say
        </h3>

        <div className="relative">
          <Card className="border border-border/50 overflow-hidden bg-gradient-to-br from-background to-accent/5">
            <CardContent className="p-0">
              <div className="relative overflow-hidden">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-500 ${
                      index === activeTestimonial
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 absolute top-0 left-0 right-0 translate-x-full"
                    }`}
                  >
                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full overflow-hidden border-2 border-primary/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="(max-width: 768px) 80px, 96px"
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="mb-4 text-primary">
                          <Quote className="h-8 w-8 opacity-20" />
                        </div>
                        <p className="text-lg italic mb-4">
                          {testimonial.quote}
                        </p>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.position}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between p-4 border-t border-border/50">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeTestimonial
                          ? "bg-primary w-4"
                          : "bg-primary/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientShowcase;
