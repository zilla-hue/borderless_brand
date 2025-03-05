"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription: string;
  results: string[];
}

const projects = [
  {
    id: 1,
    title: "TechCorp Rebrand",
    category: "Branding",
    description:
      "Complete brand refresh for a leading tech company, including new visual identity and brand guidelines.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&h=600",
    tags: ["Branding", "Design", "Strategy"],
    fullDescription:
      "TechCorp approached us for a complete brand overhaul to reflect their evolution in the tech industry. We developed a modern, dynamic visual identity that positioned them as industry leaders.",
    results: [
      "200% increase in brand recognition",
      "150% increase in social media engagement",
      "Successfully launched in 3 new markets",
    ],
  },
  {
    id: 2,
    title: "EcoLife Campaign",
    category: "Digital Advertising",
    description:
      "Sustainable living awareness campaign with targeted digital advertising and social media strategy.",
    image:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&h=600",
    tags: ["Digital Marketing", "Social Media", "Advertising"],
    fullDescription:
      "EcoLife needed to increase awareness about sustainable living products. We created a comprehensive digital campaign that resonated with environmentally conscious consumers.",
    results: [
      "3M+ campaign reach",
      "45% increase in sales",
      "25K+ new social media followers",
    ],
  },
  {
    id: 3,
    title: "FoodFest Promo",
    category: "Video Production",
    description:
      "Promotional video series for an international food festival, showcasing cultural diversity through cuisine.",
    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=800&h=600",
    tags: ["Video", "Events", "Production"],
    fullDescription:
      "Created an engaging video series highlighting the diverse culinary experiences at FoodFest. The campaign captured the essence of international cuisine and cultural celebration.",
    results: [
      "1M+ video views",
      "80% ticket sales increase",
      "Featured in 5 major food publications",
    ],
  },
  {
    id: 4,
    title: "Luxury Watch Collection",
    category: "Product Photography",
    description:
      "Premium product photography for a luxury watch brand's new collection launch.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&h=600",
    tags: ["Photography", "Luxury", "Product"],
    fullDescription:
      "We created a sophisticated visual language for this luxury timepiece collection, highlighting craftsmanship and attention to detail through meticulous photography.",
    results: [
      "Featured in Vogue and GQ",
      "35% increase in online sales",
      "Successful expansion to international markets",
    ],
  },
  {
    id: 5,
    title: "Urban Fitness App",
    category: "UI/UX Design",
    description:
      "Complete user interface redesign for a fitness application targeting urban professionals.",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&h=600",
    tags: ["UI/UX", "Mobile App", "Fitness"],
    fullDescription:
      "We reimagined the user experience for this fitness platform, creating an intuitive interface that simplified workout tracking and social features for busy professionals.",
    results: [
      "120% increase in daily active users",
      "Average session time increased by 45%",
      "Featured in Apple's 'App of the Day'",
    ],
  },
  {
    id: 6,
    title: "Organic Farm Branding",
    category: "Brand Identity",
    description:
      "Comprehensive brand identity for a sustainable organic farm collective.",
    image:
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&h=600",
    tags: ["Branding", "Sustainable", "Agriculture"],
    fullDescription:
      "We developed an authentic brand identity that communicated the farm's commitment to sustainable practices and community values through thoughtful design elements.",
    results: [
      "Successful launch in 12 retail locations",
      "60% increase in direct-to-consumer sales",
      "Won Regional Sustainability Award",
    ],
  },
] as const;

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

const hoverEffect = {
  rest: { scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: { duration: 0.3, ease: "easeInOut" }
  },
};

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="container mx-auto py-16 px-4 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Our Work
        </h1>
        <p className="text-xl text-muted-foreground">
          Showcasing our creative solutions and success stories
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={fadeIn}>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={hoverEffect}
            >
              <Card
                className="overflow-hidden group cursor-pointer h-full transition-all duration-300"
                onClick={() => setSelectedProject(project as any)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project as any);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details of ${project.title}`}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} project by Borderless Brand`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={project.id <= 3} // Prioritize loading for first 3 images
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">{project.category}</Badge>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              <Button 
                className="absolute right-4 top-4 rounded-full p-2" 
                variant="ghost" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </Button>
              <DialogDescription>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 sm:h-80 my-4 rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={selectedProject.image}
                    alt={`${selectedProject.title} - ${selectedProject.category} project by Borderless Brand`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover rounded-lg"
                    priority
                  />
                </motion.div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Key Results:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      {selectedProject.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
