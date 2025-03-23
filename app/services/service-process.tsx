"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
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

const pulseAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: ["-5px", "0px", "-5px"],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const shimmerAnimation = {
  initial: { backgroundPosition: "-200% 0" },
  animate: {
    backgroundPosition: ["200% 0", "-200% 0"],
    transition: { duration: 8, repeat: Infinity, ease: "linear" },
  },
};

const slideInFromRight = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
};

interface ServiceProcessProps {
  className?: string;
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ className }) => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Automatic carousel effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % processSteps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin by understanding your brand, audience, and objectives through in-depth research and consultation.",
      icon: "/images/process-discovery-icon.svg",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Based on our findings, we develop a comprehensive strategy tailored to your specific goals and market position.",
      icon: "/images/process-strategy-icon.svg",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our creative team brings your brand vision to life with innovative design solutions that resonate with your audience.",
      icon: "/images/process-design-icon.svg",
    },
    {
      number: "04",
      title: "Implementation",
      description:
        "We execute the strategy across all relevant channels, ensuring consistency and maximum impact.",
      icon: "/images/process-implementation-icon.svg",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className={`my-16 md:my-24 relative z-10 overflow-hidden ${className}`}
    >
      {/* Enhanced decorative elements */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl z-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-1/4 right-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl z-0"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl z-0"
      ></motion.div>

      {/* Enhanced dot pattern background with SVG */}
      <div
        className="absolute inset-0 w-full h-full opacity-20 z-0"
        style={{
          backgroundImage: "url('/images/process-pattern.svg')",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div className="text-center mb-12 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20"
        >
          <Sparkles className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
          Our Process
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
        >
          How We Deliver Results
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Our proven methodology ensures exceptional outcomes for every project
        </motion.p>
      </div>

      {/* Process steps timeline indicator */}
      <div className="flex justify-center mb-12 relative z-10">
        <div className="flex items-center max-w-3xl w-full">
          {processSteps.map((step, index) => (
            <div
              key={`indicator-${index}`}
              className="flex items-center flex-1"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md ${
                  activeStep === index
                    ? "bg-primary text-white scale-110 shadow-primary/30"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
                onMouseEnter={() => {
                  setActiveStep(index);
                  setIsPaused(true);
                }}
                onMouseLeave={() => {
                  setIsPaused(false);
                }}
              >
                {activeStep === index ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <span>{step.number}</span>
                )}
              </motion.div>
              {index < processSteps.length - 1 && (
                <div className="relative flex-1 h-2 overflow-hidden rounded-full bg-primary/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: activeStep >= index ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/60 to-primary/80"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10"
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={fadeIn}
            onMouseEnter={() => {
              setActiveStep(index);
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              setIsPaused(false);
            }}
            className={`bg-card border rounded-xl p-6 relative overflow-hidden group transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 transform-gpu ${
              activeStep === index
                ? "border-primary/50 scale-105 bg-gradient-to-br from-card to-primary/5 translate-y-[-5px]"
                : "border-border/50 hover:translate-y-[-3px]"
            }`}
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Step indicator */}
            <div
              className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeStep === index
                  ? "bg-primary text-white opacity-100"
                  : "bg-primary/10 text-primary opacity-0"
              }`}
            >
              <Check className="h-4 w-4" />
            </div>

            {/* Icon with animation */}
            <motion.div
              className="mb-3 h-14 w-14 p-2.5 rounded-xl bg-primary/5 border border-primary/10"
              variants={activeStep === index ? floatAnimation : pulseAnimation}
              animate={activeStep === index ? "animate" : "initial"}
            >
              <Image
                src={step.icon}
                alt={`${step.title} process icon`}
                width={48}
                height={48}
                className="h-full w-full object-contain drop-shadow-md"
              />
            </motion.div>

            {/* Step number */}
            <motion.div
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-primary/20 to-primary/5"
              animate={{
                opacity: activeStep === index ? [0.8, 1, 0.8] : 0.7,
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              {step.number}
            </motion.div>

            {/* Content */}
            <h3
              className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                activeStep === index ? "text-primary" : ""
              }`}
            >
              {step.title}
              {activeStep === index && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="block h-0.5 mt-1 bg-gradient-to-r from-primary to-primary/30"
                />
              )}
            </h3>
            <p className="text-muted-foreground mb-4">{step.description}</p>

            {/* Additional feature badge */}
            {activeStep === index && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium mb-2"
              >
                <Check className="h-3 w-3 mr-1" /> Included in all packages
              </motion.div>
            )}

            {/* Arrow indicator */}
            <div className="flex justify-end mt-4">
              {index < processSteps.length - 1 && (
                <motion.div
                  variants={slideInFromRight}
                  animate={activeStep === index ? "visible" : "hidden"}
                >
                  <ArrowRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-all duration-300" />
                </motion.div>
              )}
            </div>

            {/* Connection line */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30 group-hover:bg-primary/50 transition-colors duration-300"></div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced call to action */}
      <div className="mt-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="relative inline-block"
        >
          {/* Decorative elements around CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute -top-6 -left-6 w-5 h-5 border-t-2 border-l-2 border-primary/40 rounded-tl-lg"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -top-6 -right-6 w-5 h-5 border-t-2 border-r-2 border-primary/40 rounded-tr-lg"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 w-5 h-5 border-b-2 border-l-2 border-primary/40 rounded-bl-lg"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute -bottom-6 -right-6 w-5 h-5 border-b-2 border-r-2 border-primary/40 rounded-br-lg"
          ></motion.div>

          {/* Sparkle decorations */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: 1.2,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute -top-3 -left-10 text-primary/70"
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              delay: 2,
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute -bottom-3 -right-10 text-primary/70"
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary/90 text-white hover:from-primary/90 hover:to-primary transition-all duration-300 group relative overflow-hidden shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:scale-105"
          >
            <motion.span
              variants={shimmerAnimation}
              initial="initial"
              animate="animate"
              className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_30%_107%,rgba(255,255,255,0.25)_5%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0)_60%)] opacity-30 pointer-events-none"
            ></motion.span>
            <span className="absolute top-0 left-0 w-20 h-full bg-white/10 skew-x-[45deg] transform -translate-x-32 group-hover:translate-x-[400px] transition-all duration-1000 ease-in-out pointer-events-none"></span>
            <span className="relative z-10 font-medium flex items-center">
              <motion.span
                initial={{ y: 0 }}
                animate={{ y: [-1, 1, -1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Start Your Project
              </motion.span>
            </span>
            <ChevronRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            <span className="absolute inset-0 rounded-full border border-primary/20 animate-ping-slow opacity-0 group-hover:opacity-100 pointer-events-none"></span>
            <motion.span
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0, 0.2, 0], scale: [1, 1.1, 1.2] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full border border-primary/10 pointer-events-none"
            ></motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceProcess;
