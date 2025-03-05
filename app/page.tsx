"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Palette,
  Video,
  Users,
  Zap,
  ArrowRight,
  Star,
  BookOpen,
  ShoppingBag,
  RadioTower,
  LayoutTemplate,
  BarChart,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import DynamicFrameLayout from "../components/DynamicFrameLayout";

export default function Home() {
  // State for the typing animation
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Your Story, Our Lens";
  const typingSpeed = 100; // milliseconds per character

  // Typing effect
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [displayText, fullText]);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative isolate px-6 lg:px-8 bg-cover bg-center bg-no-repeat h-screen -mt-[100px]"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative ml-6 md:ml-12 lg:ml-24 max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-left text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl relative">
              {displayText}
              <span
                className={`absolute inline-block w-[2px] h-[1em] bg-white ml-1 ${
                  isTypingComplete ? "animate-pulse" : ""
                }`}
              ></span>
            </h1>
            <motion.p
              className="mt-6 text-lg leading-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isTypingComplete ? 1 : 0,
                y: isTypingComplete ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Empowering meaningful connections through innovative solutions and
              human-centered design
            </motion.p>
            <motion.div
              className="mt-10 flex items-center gap-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isTypingComplete ? 1 : 0,
                y: isTypingComplete ? 0 : 20,
              }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button size="lg" asChild>
                <Link href="/contact">Start Your Journey</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="px-6 lg:px-8 bg-accent/50 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Pillars of Excellence
            </h2>
            <div className="mt-8 space-y-8">
              <div className="text-left max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Connection</h3>
                <p className="text-muted-foreground">
                  Building bridges that fuel innovation and forge lasting
                  partnerships. We create impact that endures for individuals,
                  businesses, and communities.
                </p>
              </div>
              <div className="text-left max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Empathy</h3>
                <p className="text-muted-foreground">
                  Listening to the human story behind every interaction. Whether
                  guiding creative teams or helping startups launch, we approach
                  every challenge with heart and understanding.
                </p>
              </div>
              <div className="text-left max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Agility</h3>
                <p className="text-muted-foreground">
                  Adapting and innovating with market trends and disruptive
                  technologies. We transform challenges into opportunities with
                  precision and grace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Transformative Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Crafting experiences that expand your reach and drive real results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Brand Strategy & Engagement",
                icon: LayoutTemplate,
                description:
                  "Compelling brand identities that create lasting loyalty in a crowded world",
              },
              {
                title: "Media & Content Creation",
                icon: RadioTower,
                description:
                  "Scroll-stopping digital campaigns and strategic media management",
              },
              {
                title: "Video & Film Production",
                icon: Video,
                description:
                  "Cinematic storytelling that captivates from first frame to last",
              },
              {
                title: "Digital Marketing",
                icon: BarChart,
                description:
                  "Data-driven campaigns maximizing visibility and conversions",
              },
              {
                title: "Publication & Printing",
                icon: BookOpen,
                description:
                  "High-impact materials that demand attention and leave lasting impressions",
              },
              {
                title: "Merchandising",
                icon: ShoppingBag,
                description:
                  "Branded merchandise that turns customers into ambassadors",
              },
              {
                title: "Public Relations & Perception Management",
                icon: Users,
                description:
                  "We strengthen trust, align your brand's identity with global expectations, and shape public perception through strategic communications",
              },
              {
                title: "Innovation & Thought Leadership",
                icon: Zap,
                description:
                  "We help businesses pioneer new ways to connect, share, and grow by leveraging technology, research and industry insights",
              },
              {
                title: "Personality Profiling",
                icon: Palette,
                description:
                  "We develop clear, relatable, and authentic brand voices through strategic analysis and deep research for consistency across every touchpoint",
              },
            ].map((service) => (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-all hover:scale-[1.02] group"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <CardContent className="p-6">
                  <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
                    <service.icon className="h-12 w-12 mb-4 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <div className="mt-4 overflow-hidden">
                    <Link
                      href="/services"
                      className="text-primary hover:text-primary/80 flex items-center group-hover:font-medium"
                    >
                      Explore{" "}
                      <span className="inline-flex items-center transition-transform duration-300 group-hover:translate-x-1">
                        <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:text-primary" />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="px-6 lg:px-8 py-16 bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore our recent work and creative solutions
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="grid grid-cols-1 w-full min-h-screen mb-8"
          >
            <DynamicFrameLayout />
          </motion.div>

          <div className="text-center mt-10">
            <Button asChild>
              <Link href="/portfolio" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8 bg-accent/50 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8">
            Ready to Redefine Connections?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's shape the future of human interaction together
          </p>
          <Button size="lg" asChild>
            <Link href="/contact" className="text-lg">
              Start Your Transformation Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
