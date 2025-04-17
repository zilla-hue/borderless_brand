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

interface Client {
  id: number;
  name: string;
  logo: string;
}

interface LogoCarouselProps {
  clients: Client[];
  className?: string;
  speed?: number;
}

export default function LogoCarousel({
  clients,
  className,
  speed = 20,
}: LogoCarouselProps) {
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
        setCurrent((prev) => prev + 1);
      }
    }, speed * 10);
    return () => clearInterval(interval);
  }, [api, speed]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={cn("w-full", className)}
    >
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent>
          {clients.map((client, index) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/5"
              key={client.id}
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center p-3 sm:p-4 w-[200px] sm:w-[240px] transition-all duration-500"
              >
                <div className="relative w-full h-[80px] sm:h-[100px] flex items-center justify-center rounded-xl border border-transparent hover:border-primary/20 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105 hover:shadow-lg hover:shadow-primary/5 group">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="object-contain w-auto h-auto max-w-full max-h-full transition-transform duration-500 group-hover:scale-110"
                    style={{ maxWidth: "100%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                </div>
                <span className="sr-only">{client.name}</span>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
