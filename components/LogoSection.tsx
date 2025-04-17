"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

// Define the logo data structure
interface Logo {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Sample logos from the public/images directory
const customerLogos: Logo[] = [
  {
    name: "Abba's Bellas Jewels",
    src: "/images/Abba's Bellas Jewels-01.png",
    alt: "Abba's Bellas Jewels logo",
    width: 240,
    height: 120,
  },
  {
    name: "Eco Loop",
    src: "/images/Eco Loop-01.png",
    alt: "Eco Loop logo",
    width: 240,
    height: 120,
  },
  {
    name: "KaraPay",
    src: "/images/KaraPay Logo.png",
    alt: "KaraPay logo",
    width: 240,
    height: 120,
  },
  {
    name: "DB Brows",
    src: "/images/db-brows.png",
    alt: "DB Brows logo",
    width: 240,
    height: 120,
  },
  {
    name: "WBHF",
    src: "/images/WBH LOGO -01.png",
    alt: "WBHF logo",
    width: 240,
    height: 120,
  },
  {
    name: "Range The Brand",
    src: "/images/Range The Brand.png",
    alt: "Range The Brand logo",
    width: 240,
    height: 120,
  },
  {
    name: "WSW",
    src: "/images/WSW-LOGO-1-1.webp",
    alt: "WSW logo",
    width: 240,
    height: 120,
  },
  {
    name: "Voice Aid",
    src: "/images/voice-aid-logo-colors.png",
    alt: "Voice Aid logo",
    width: 240,
    height: 120,
  },
  {
    name: "SFC",
    src: "/images/SFC_Logox2.webp",
    alt: "SFC logo",
    width: 240,
    height: 120,
  },
  {
    name: "EEMS",
    src: "/images/eems-logo (1).png",
    alt: "EEMS logo",
    width: 240,
    height: 120,
  },
  {
    name: "Digitvant",
    src: "/images/digitvant.png",
    alt: "Digitvant logo",
    width: 240,
    height: 120,
  },
  {
    name: "Defense Headquarters",
    src: "/images/Defense head quarters.png",
    alt: "Defense Headquarters logo",
    width: 240,
    height: 120,
  },
  {
    name: "Logo 1700419940",
    src: "/images/logo1700419940.png",
    alt: "Logo 1700419940 logo",
    width: 240,
    height: 120,
  },
];

export default function LogoSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Function to determine logo position class based on index
  const getLogoPositionClass = (index: number) => {
    // Create a staggered effect by applying different classes based on position
    const row = Math.floor(index / 4); // Assuming 4 logos per row on large screens
    const isEvenRow = row % 2 === 0;
    const positionInRow = index % 4;

    // Apply different vertical offsets based on position
    if (isEvenRow) {
      return positionInRow % 2 === 0 ? "" : "lg:mt-8";
    } else {
      return positionInRow % 2 === 0 ? "lg:mt-8" : "";
    }
  };

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, current]);

  return (
    <section className="px-6 lg:px-8 py-16 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-30 z-0"></div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted by Leading Brands
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Partnering with innovative companies to deliver exceptional results
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {customerLogos.map((logo, index) => (
                <CarouselItem
                  className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                  key={index}
                >
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center justify-center p-3 sm:p-4 w-[200px] sm:w-[240px] transition-all duration-500"
                  >
                    <div className="relative w-full h-[80px] sm:h-[100px] flex items-center justify-center rounded-xl border border-transparent hover:border-primary/20 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105 hover:shadow-lg hover:shadow-primary/5 group">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className="object-contain w-auto h-auto max-w-full max-h-full transition-transform duration-500 group-hover:scale-110"
                        style={{ maxWidth: "100%" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    </div>
                    <span className="sr-only">{logo.name}</span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
