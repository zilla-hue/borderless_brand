"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

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

interface ServiceFeaturesProps {
  className?: string;
}

const ServiceFeatures: React.FC<ServiceFeaturesProps> = ({ className }) => {
  const features = [
    {
      id: 1,
      title: "Brand Strategy",
      description:
        "We develop comprehensive brand strategies that create lasting connections with your audience.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&h=300",
      link: "/services?service=brand-strategy",
    },
    {
      id: 2,
      title: "Content Creation",
      description:
        "Our creative team produces engaging content that tells your brand's story across all platforms.",
      image:
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=400&h=300",
      link: "/services?service=media-content",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description:
        "Data-driven campaigns that maximize visibility and drive meaningful conversions for your business.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300",
      link: "/services?service=digital-marketing",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`py-12 md:py-16 ${className}`}
    >
      <div className="text-center mb-12 relative z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Featured Services
        </span>
        <h2 className="text-3xl font-bold mb-3">Transform Your Brand</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our core services designed to elevate your brand and create
          meaningful connections
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={fadeIn}
            className="group relative overflow-hidden rounded-xl h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/80 mb-4 text-sm">
                {feature.description}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 group-hover:translate-x-1 transition-all duration-300"
                asChild
              >
                <Link href={feature.link} className="flex items-center">
                  <span>Learn More</span>
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ServiceFeatures;
