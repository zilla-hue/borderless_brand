"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { X, ExternalLink, ArrowRight, Filter } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { cn } from "@/lib/utils";
// import LogoCarousel from "@/components/LogoCarousel";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  fullDescription: string;
  results: string[];
  relatedProjects?: number[]; // IDs of related projects
}

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

interface Client {
  id: number;
  name: string;
  logo: string;
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
  {
    id: 5,
    name: "WBHF",
    logo: "/images/WBH LOGO -01.png",
  },
  {
    id: 6,
    name: "Range The Brand",
    logo: "/images/Range The Brand.png",
  },
  {
    id: 7,
    name: "WSW",
    logo: "/images/WSW-LOGO-1-1.webp",
  },
  {
    id: 8,
    name: "Voice Aid",
    logo: "/images/voice-aid-logo-colors.png",
  },
  {
    id: 9,
    name: "SFC",
    logo: "/images/SFC_Logox2.webp",
  },
  {
    id: 10,
    name: "EEMS",
    logo: "/images/eems-logo (1).png",
  },
  {
    id: 11,
    name: "Digitvant",
    logo: "/images/digitvant.png",
  },
  {
    id: 12,
    name: "Defense Headquarters",
    logo: "/images/Defense head quarters.png",
  },
  {
    id: 13,
    name: "Logo 1700419940",
    logo: "/images/logo1700419940.png",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Margaret Spicy Yakubu",
    position: "Co Founder",
    company: "Gyali Foods",
    quote:
      "As someone with an uncompromising eye for quality and excellence, I can confidently say that no other entity has captured the essence of my vision through design as effectively as the Borderless Brand. Their ability to translate ideas into impactful visuals remains unparalleled.",
    image: "/images/margaret-spicy-yakubu.jpeg",
  },
  {
    id: 2,
    name: "Ruth Edegbo",
    position: "CEO",
    company: "SipSup Hospitality",
    quote:
      "Working with Borderless Brand has been a game changer for Sip-Sup Hospitality. They handle my website, graphics, and photography with such professionalism and creativity. Their ability to capture my vision and translate it into a strong online presence has been truly impressive. I highly recommend them to anyone looking to elevate their brand.",
    image: "/images/ruth-edegbo.jpg",
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

const projects = [
  {
    id: 1,
    title: "TSPM Style Scape",
    category: "Branding & Style Guide",
    description:
      "Developed a comprehensive style scape for TSPM, establishing a cohesive visual direction and brand identity.",
    image: "/images/TSPM - Style Scape copy.jpg",
    tags: ["Branding", "Style Guide", "Visual Identity"],
    fullDescription:
      "For TSPM, we crafted a detailed style scape that unified their brand elements, color palette, and typography. This foundational work ensured consistency across all brand touchpoints and set the stage for impactful marketing materials.",
    results: [
      "Unified brand visuals",
      "Positive client feedback",
      "Accelerated brand recognition",
    ],
    relatedProjects: [2, 3],
  },
  {
    id: 2,
    title: "Tai Glow",
    category: "Product Photography & Branding",
    description:
      "Captured and branded Tai Glow's signature product line, highlighting its unique appeal and market positioning.",
    image: "/images/Tai glow.jpg",
    tags: ["Photography", "Branding", "Product"],
    fullDescription:
      "Our team executed a vibrant product shoot and developed branding assets for Tai Glow, emphasizing the product's natural glow and premium quality. The visuals were used across digital campaigns and packaging.",
    results: [
      "Enhanced product visibility",
      "Increased online engagement",
      "Strengthened brand loyalty",
    ],
    relatedProjects: [1, 4],
  },
  {
    id: 3,
    title: "Style by Mercy",
    category: "Fashion Design & Campaign",
    description:
      "Fashion campaign and lookbook for Style by Mercy, showcasing contemporary designs and creative direction.",
    image: "/images/Style by mercy.jpg",
    tags: ["Fashion", "Campaign", "Design"],
    fullDescription:
      "We collaborated with Style by Mercy to produce a visually stunning campaign and lookbook, highlighting the brand's modern aesthetic and attention to detail. The project included creative direction, styling, and photography.",
    results: [
      "Featured in fashion magazines",
      "Expanded client base",
      "Boosted social media presence",
    ],
    relatedProjects: [2, 4],
  },
  {
    id: 4,
    title: "Gyali",
    category: "Branding & Photography",
    description:
      "Branding and product photography for Gyali, capturing the elegance and craftsmanship of their product.",
    image: "/images/Gyali.jpg",
    tags: ["Food", "Branding", "Photography"],
    fullDescription:
      "For Gyali, we delivered a refined branding package and a series of high-quality product photographs that emphasized the luxury and artistry of their product. The assets were used for web, print, and promotional campaigns.",
    results: [
      "Improved brand perception",
      "Increased sales inquiries",
      "Strengthened market positioning",
    ],
    relatedProjects: [1, 3],
  },
  {
    id: 5,
    title: "Sip-Sup Hospitality Website",
    category: "Web Design & Hospitality",
    description:
      "Modern, responsive website for Sip-Sup Hospitality, showcasing services and brand story.",
    image: "/images/sip-sup-hospitality.png",
    tags: ["Web Design", "Hospitality", "Branding", "UI/UX"],
    fullDescription:
      "We designed and developed a visually engaging, user-friendly website for Sip-Sup Hospitality. The site highlights their unique approach to hospitality, integrates their brand identity, and provides an intuitive experience for visitors seeking information about their services.",
    results: [
      "Increased online inquiries",
      "Improved brand perception",
      "Mobile-first, accessible design",
      "Positive client testimonial",
    ],
    relatedProjects: [2, 3],
  },
];

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
  rest: {
    scale: 1,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    y: 0,
  },
  hover: {
    scale: 1.05,
    boxShadow:
      "0 25px 30px -5px rgba(0, 0, 0, 0.1), 0 15px 15px -5px rgba(0, 0, 0, 0.05)",
    y: -15,
    transition: { duration: 0.5, ease: [0.19, 1, 0.22, 1] }, // Custom easing for more elegant motion
  },
};

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // All projects are displayed without filtering
  const allProjects = projects;

  return (
    <div className="container mx-auto py-16 px-4 overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-16 blur-3xl opacity-70 z-0"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 blur-3xl opacity-70 z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-60 z-0"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Portfolio
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Our Work
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Showcasing our creative solutions and success stories
        </p>
      </motion.div>

      {/* Featured Projects Carousel */}
      {/* Project count and grid header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="mb-6 flex items-center justify-between relative z-10"
      >
        <div>
          <h3 className="text-xl font-semibold">Our Projects</h3>
          <p className="text-muted-foreground">
            Showcasing our creative solutions and success stories
          </p>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {allProjects.map((project) => (
          <motion.div key={project.id} variants={fadeIn}>
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={hoverEffect}
            >
              <Card
                className="overflow-hidden group cursor-pointer h-full transition-all duration-500 border-border/40 hover:border-primary/30 relative bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm"
                onClick={() => setSelectedProject(project as any)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project as any);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details of ${project.title}`}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-4 h-4 bg-primary transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="relative h-56 overflow-hidden">
                  {/* Enhanced gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"></div>

                  {/* Enhanced decorative pattern overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_60%)] z-10 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

                  {/* Additional decorative elements */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:10px_10px] z-10 opacity-0 group-hover:opacity-30 transition-all duration-700 group-hover:scale-125"></div>

                  {/* Project number on hover with animation */}
                  <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="text-5xl font-bold text-white/30 tracking-tighter">
                      {project.id.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.category} project by Borderless Brand`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-90"
                    priority={project.id <= 3} // Prioritize loading for first 3 images
                  />

                  {/* Category badge with improved styling */}
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-primary/90 hover:bg-primary text-white backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:shadow-primary/20">
                      {project.category}
                    </Badge>
                  </div>

                  {/* View project button on hover with improved animation */}
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/30 hover:text-white hover:border-white/40 transition-all duration-300"
                    >
                      View Project
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 relative">
                  {/* Enhanced accent line with animation */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-50 group-hover:opacity-100 group-hover:via-primary/50 transition-all duration-500"></div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300"></span>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium group-hover:text-primary/70 transition-colors duration-300">
                      Project {project.id.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300 relative inline-block">
                    {project.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 group-hover:opacity-100"></span>
                  </h3>

                  <p className="text-muted-foreground mb-4 group-hover:text-muted-foreground/90 transition-colors duration-500 relative">
                    {project.description}
                    <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary/30 group-hover:w-1/3 transition-all duration-1000 ease-out opacity-0 group-hover:opacity-100"></span>
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 transform group-hover:translate-y-0 opacity-80 group-hover:opacity-100"
                        style={{
                          transitionDelay: `${index * 50}ms`,
                        }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-4 px-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary p-0 h-auto font-medium group/btn relative overflow-hidden"
                  >
                    <span className="relative z-10">View Project Details</span>
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1 relative z-10" />
                    <span className="absolute inset-0 bg-primary/5 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out rounded-sm"></span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Client Logo Showcase */}
      {/* <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="my-24 py-16 px-6 bg-muted/30 rounded-2xl border border-border/50 relative overflow-hidden"
      >
       
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01)_0%,rgba(0,0,0,0)_70%)] z-0"></div>

        <div className="text-center mb-12 relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Trusted by Innovative Brands
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've had the privilege of working with amazing clients across
            various industries
          </p>
        </div>


        <div className="w-full max-w-5xl mx-auto relative z-10">
          <LogoCarousel clients={clients} className="py-6" speed={40} />
        </div>
      </motion.div> */}

      {/* Testimonials Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="my-24 relative z-10"
      >
        {/* Decorative elements */}
        <div className="absolute -top-40 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>
        <div className="absolute -bottom-40 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>

        <div className="text-center mb-12 relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold mb-3">Client Testimonials</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeIn}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                },
              }}
              className="bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Accent elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
              <div className="absolute -right-16 -bottom-16 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex flex-col h-full relative z-10">
                <div className="mb-4 relative">
                  <div className="absolute -top-2 -left-2 w-12 h-12 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                  <svg
                    className="h-10 w-10 text-primary/30 group-hover:text-primary/50 transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-muted-foreground mb-6 flex-grow italic text-base leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-auto pt-4 border-t border-border/30 group-hover:border-primary/20 transition-colors duration-300">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.position},{" "}
                      <span className="font-medium">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="max-w-5xl p-0 overflow-y-auto max-h-[90vh] bg-background/95 backdrop-blur-md border-primary/20 shadow-xl shadow-primary/5">
            <Button
              className="absolute right-4 top-4 z-50 rounded-full p-2 bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 hover:scale-110"
              variant="ghost"
              onClick={() => setSelectedProject(null)}
              aria-label="Close dialog"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10"></div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full min-h-[300px] md:min-h-[500px] overflow-hidden"
              >
                {/* Project number watermark */}
                <div className="absolute top-6 left-6 z-10 opacity-30">
                  <span className="text-7xl font-bold text-white">
                    {selectedProject.id.toString().padStart(2, "0")}
                  </span>
                </div>

                <Image
                  src={selectedProject.image}
                  alt={`${selectedProject.title} - ${selectedProject.category} project by Borderless Brand`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-6 md:hidden">
                  <h2 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="p-6 md:p-8 flex flex-col h-full relative"
              >
                {/* Subtle background pattern */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_50%)] z-0"></div>

                <DialogHeader className="mb-4 relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-primary/20 text-primary hover:bg-primary/30 transition-colors duration-300">
                      {selectedProject.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      Project {selectedProject.id.toString().padStart(2, "0")}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl md:text-3xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <DialogDescription className="flex-1 relative z-10">
                  <div className="space-y-6">
                    <p className="text-base md:text-lg">
                      {selectedProject.fullDescription}
                    </p>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      className="bg-muted/30 p-5 rounded-lg border border-border/50 relative overflow-hidden"
                    >
                      {/* Accent corner */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-4 h-4 bg-primary/30 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
                      </div>

                      <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                        <span className="inline-block w-1.5 h-6 bg-primary rounded-full mr-1"></span>
                        Key Results
                      </h4>
                      <ul className="space-y-3">
                        {selectedProject.results.map((result, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.4 + index * 0.1,
                            }}
                            className="flex items-start gap-3"
                          >
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-muted-foreground">
                              {result}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Related Projects Section */}
                    {selectedProject.relatedProjects &&
                      selectedProject.relatedProjects.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 }}
                          className="bg-muted/20 p-5 rounded-lg border border-border/50 relative overflow-hidden"
                        >
                          {/* Decorative elements */}
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5"></div>
                          <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary/5 rounded-full blur-xl opacity-70"></div>

                          <h4 className="font-semibold mb-4 text-lg flex items-center gap-2">
                            <span className="inline-block w-1.5 h-6 bg-primary/70 rounded-full mr-1"></span>
                            Related Projects
                          </h4>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedProject.relatedProjects.map(
                              (relatedId) => {
                                const relatedProject = projects.find(
                                  (p) => p.id === relatedId
                                );
                                if (!relatedProject) return null;

                                return (
                                  <motion.div
                                    key={relatedId}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    className="group cursor-pointer"
                                    onClick={() => {
                                      setSelectedProject(relatedProject as any);
                                    }}
                                  >
                                    <div className="flex items-start gap-3 p-3 rounded-md bg-background/50 hover:bg-background/80 border border-border/30 hover:border-primary/30 transition-all duration-300 h-full">
                                      <div className="relative h-16 w-16 rounded-md overflow-hidden shrink-0">
                                        <Image
                                          src={relatedProject.image}
                                          alt={relatedProject.title}
                                          fill
                                          className="object-cover transition-all duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/10 group-hover:opacity-0 transition-opacity duration-300"></div>
                                      </div>
                                      <div>
                                        <h5 className="font-medium text-sm group-hover:text-primary transition-colors duration-300">
                                          {relatedProject.title}
                                        </h5>
                                        <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                                          {relatedProject.description}
                                        </p>
                                        <span className="text-xs text-primary/70 mt-1 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                          View project{" "}
                                          <ArrowRight className="h-3 w-3" />
                                        </span>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              }
                            )}
                          </div>
                        </motion.div>
                      )}

                    <div className="flex flex-wrap gap-2 mt-4">
                      {selectedProject.tags.map((tag, index) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.5 + index * 0.05,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="bg-secondary/50 hover:bg-secondary/70 transition-colors duration-300"
                          >
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </DialogDescription>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="mt-6 pt-4 border-t border-border/50 relative z-10"
                >
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="group bg-primary hover:bg-primary/90">
                      Request Similar Project
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline" className="group">
                      View More Projects
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Project Statistics Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="my-24 relative z-10"
      >
        <div className="text-center mb-12 relative z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl font-bold mb-3">Project Statistics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Numbers that showcase our expertise and success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="text-4xl font-bold text-primary mb-2 flex items-baseline">
              <span className="counter">150</span>
              <span className="text-xl text-primary/70">+</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Projects Completed</h3>
            <p className="text-sm text-muted-foreground">
              Across various industries and platforms
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="text-4xl font-bold text-primary mb-2 flex items-baseline">
              <span className="counter">95</span>
              <span className="text-xl text-primary/70">%</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Client Satisfaction</h3>
            <p className="text-sm text-muted-foreground">
              Based on post-project surveys
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="text-4xl font-bold text-primary mb-2 flex items-baseline">
              <span className="counter">12</span>
              <span className="text-xl text-primary/70">+</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Industry Awards</h3>
            <p className="text-sm text-muted-foreground">
              Recognition for excellence in design
            </p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-card border border-border/50 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="text-4xl font-bold text-primary mb-2 flex items-baseline">
              <span className="counter">8</span>
              <span className="text-xl text-primary/70">yrs</span>
            </div>
            <h3 className="text-lg font-medium mb-1">Industry Experience</h3>
            <p className="text-sm text-muted-foreground">
              Creating impactful brand experiences
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Call to Action Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="my-24 py-20 px-8 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-2xl border border-primary/10 relative overflow-hidden"
      >
        {/* Enhanced background elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0)_60%)] z-0" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-32 -mb-32 animate-pulse z-0"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-32 -mt-32 animate-pulse z-0"
          style={{ animationDuration: "10s" }}
        />

        {/* Decorative patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.03)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.03)_50%,rgba(255,255,255,0.03)_75%,transparent_75%)] bg-[length:20px_20px] opacity-20 z-0"></div>

        {/* Decorative accent lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 z-10"></div>

        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden z-10">
          <div className="absolute top-0 right-0 w-6 h-6 bg-primary/20 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden z-10">
          <div className="absolute bottom-0 left-0 w-6 h-6 bg-primary/20 transform rotate-45 -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Let's Collaborate
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  Ready to Transform <br className="hidden md:block" />
                  <span className="text-primary">Your Brand?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-md">
                  Let's create something extraordinary together. Our team is
                  ready to bring your vision to life with our expertise in
                  branding and design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
                    >
                      <Link
                        href="/contact"
                        className="flex items-center gap-2 relative z-10"
                      >
                        Start Your Project
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <span className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="group relative overflow-hidden border-primary/20 hover:border-primary/40"
                    >
                      <Link
                        href="/services"
                        className="flex items-center gap-2 relative z-10"
                      >
                        Explore Services
                        <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      </Link>
                      <span className="absolute inset-0 bg-primary/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative hidden md:block"
            >
              <div className="relative bg-gradient-to-br from-background/80 to-muted/30 p-6 rounded-xl border border-border/50 backdrop-blur-sm shadow-xl">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary/10 rounded-full blur-xl"></div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl text-primary/30">❝</div>
                  <p className="text-lg italic text-foreground/90">
                    As someone with an uncompromising eye for quality and
                    excellence, I can confidently say that no other entity has
                    captured the essence of my vision through design as
                    effectively as the Borderless Brand. Their ability to
                    translate ideas into impactful visuals remains unparalleled.
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image
                      src="/images/margaret-spicy-yakubu.jpeg"
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Margaret Spicy Yakubu</h4>
                    <p className="text-sm text-muted-foreground">
                      Co Founder, Gyali Foods
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
