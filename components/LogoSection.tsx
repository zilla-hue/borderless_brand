"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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
];

export default function LogoSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="px-6 lg:px-8 py-16 bg-background">
      <div className="mx-auto max-w-7xl">
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
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8 items-center justify-items-center"
        >
          {customerLogos.map((logo) => (
            <motion.div
              key={logo.name}
              variants={itemVariants}
              className="flex items-center justify-center p-4 h-24"
            >
              <div className="relative w-full h-full max-w-[240px] flex items-center justify-center transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-[120px] w-auto"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
