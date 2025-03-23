"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

const ProcessSection = () => {
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
      className="my-24 relative z-10"
    >
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="text-center mb-12 relative z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Process
        </span>
        <h2 className="text-3xl font-bold mb-3">How We Work</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our proven methodology ensures exceptional results for every project
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative z-10"
      >
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={fadeIn}
            className="bg-card border border-border/50 rounded-xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10"></div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon */}
            <div className="mb-3 h-12 w-12">
              <img
                src={step.icon}
                alt={`${step.title} process icon`}
                className="h-full w-full object-contain"
              />
            </div>

            {/* Step number */}
            <div className="text-6xl font-bold text-primary/10 mb-4">
              {step.number}
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
              {step.title}
            </h3>
            <p className="text-muted-foreground mb-4">{step.description}</p>

            {/* Arrow indicator */}
            <div className="flex justify-end mt-4">
              {index < processSteps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
              )}
            </div>

            {/* Connection line for all but last item */}
            {index < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30 group-hover:bg-primary/50 transition-colors duration-300"></div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProcessSection;
