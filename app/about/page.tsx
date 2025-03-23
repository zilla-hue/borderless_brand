"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Users, Target, Lightbulb, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Stats data
const stats = [
  { value: "150+", label: "Happy Client" },
  { value: "350+", label: "Project Done" },
  { value: "25+", label: "Team Member" },
  { value: "30+", label: "Award Winning" },
];

// Values data
const values = [
  {
    icon: Users,
    title: "Empower Connections",
    description:
      "Our state-of-the-art collaboration and communication solutions expand the realm of what is feasible. We build bridges, not walls. Borderless is here to help you break barriers and create opportunities.",
  },
  {
    icon: Target,
    title: "Create Relevance",
    description:
      "Relevance is not static; it evolves. Our tailored solutions ensure our partners stay ahead, adapting to their needs and aspirations. We ignite change rather than merely welcome it.",
  },
  {
    icon: Lightbulb,
    title: "Innovate with Empathy",
    description:
      "Innovation without empathy lacks purpose. Every solution we design is built around human experiences, ensuring inclusivity and impact.",
  },
];

// Skills data
const skills = [
  { name: "Brand Strategy & Engagement", percentage: 95 },
  { name: "Media & Content Creation", percentage: 90 },
  { name: "Video & Film Production", percentage: 88 },
  { name: "Digital Marketing", percentage: 92 },
];

// Team data
const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&h=400",
    bio: "Digital marketing veteran with 15+ years of experience.",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=400",
    bio: "Award-winning designer specializing in brand identity.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Strategy",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&h=400",
    bio: "Strategic thinker with a passion for data-driven solutions.",
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
      staggerChildren: 0.2,
    },
  },
};

const SkillBar = ({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-accent/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 overflow-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="md:w-1/2 order-2 md:order-1">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <p className="text-sm text-muted-foreground mb-2 flex items-center">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>About Us</span>
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Get to Know Us
            </h1>
            <p className="text-muted-foreground mb-8">
              At Borderless, we believe that true progress is built on
              meaningful connections. Our mission is to empower relationships
              that fuel innovation, transcend boundaries and forge lasting
              partnerships. In a rapidly evolving world, we are steadfast in our
              resolve to creating impact that endures for individuals,
              businesses, and communities alike. Empathy. Behind every
              interaction lies a human story, and we are here to listen,
              understand, and bridge the gaps. Whether it is a creative team in
              need of guidance or a startup founder striving to bring an idea to
              life, empathy is the heart of everything we do. Borderless is not
              just bytes and bandwidth; it is hearts and hopes. Agility. As the
              world shifts, we move with it—adapting, innovating, and embracing
              change with confidence. From emerging market trends to disruptive
              technologies, we remain ahead of the curve, transforming
              challenges into opportunities with grace and precision.
            </p>
            <Button className="group">
              Get Started
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=600&h=400"
              alt="Team working on digital solutions"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>

      {/* Mission, Vision & Methodology Section */}
      <div className="mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Purpose & Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            We combine strategic thinking with innovative execution to deliver
            transformative experiences that create lasting impact for our
            clients and their audiences.
          </p>

          {/* Mission Card */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn}
              className="bg-accent/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&h=400"
                  alt="Team collaboration representing our mission"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Mission
                </h3>
                <p className="text-muted-foreground">
                  Empowering meaningful connections through innovative
                  solutions, human-centered design, and the transformative power
                  of storytelling.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeIn}
              className="bg-accent/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&h=400"
                  alt="Visionary leadership representing our vision"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Vision
                </h3>
                <p className="text-muted-foreground">
                  To redefine how the world connects by creating transformative
                  experiences that matter and drive meaningful engagement across
                  all touchpoints.
                </p>
              </div>
            </motion.div>

            {/* Methodology Card */}
            <motion.div
              variants={fadeIn}
              className="bg-accent/30 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 lg:col-span-1 md:col-span-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&h=400"
                  alt="Strategic planning representing our methodology"
                  fill
                  className="object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-primary mb-3">
                  Methodology
                </h3>
                <ol className="space-y-2 text-muted-foreground list-decimal list-outside ml-5">
                  <li>
                    <span className="font-medium">Discovery & Research:</span>{" "}
                    Understanding your history, challenges, needs and goals to
                    build solutions with depth and purpose.
                  </li>
                  <li>
                    <span className="font-medium">Ideation & Strategy:</span>{" "}
                    Crafting concepts that align with our vision and bring
                    measurable impact across globe.
                  </li>
                  <li>
                    <span className="font-medium">
                      Development & Execution:
                    </span>{" "}
                    Implementing solutions that drive engagement, interaction,
                    and seamless connectivity.
                  </li>
                  <li>
                    <span className="font-medium">Optimization & Growth:</span>{" "}
                    Continuous evolution through quality control and insights to
                    enhance our services.
                  </li>
                  <li>
                    <span className="font-medium">Reflection:</span> We reflect
                    on outcomes and refine our approach to drive ongoing
                    improvement and long-term success.
                  </li>
                </ol>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 bg-cyan-500 rounded-lg mb-16 px-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="text-center text-white"
          >
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Core Values Section */}
      <div className="mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-10"
        >
          <p className="text-sm text-primary font-medium mb-2">Our Values</p>
          <h2 className="text-3xl font-bold mb-4">
            Integrity at Our Core, Innovation in Our Spirit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We believe in maintaining the highest standards of integrity while
            constantly pushing the boundaries of innovation to deliver
            exceptional results.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={value.title} variants={fadeIn}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-primary font-medium mb-2">Our Expertise</p>
          <h2 className="text-3xl font-bold mb-6">
            Core Services & Capabilities
          </h2>
          <div className="space-y-6">
            {skills.map((skill) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-muted-foreground mb-6">
              We blend strategic thinking with creative execution to craft
              compelling brand narratives that resonate with audiences. Our
              collaborative approach ensures that every solution is tailored to
              your unique story, helping you build meaningful connections in an
              increasingly digital world.
            </p>
            <Button variant="outline" className="group">
              <Link href="/services">Explore Our Services</Link>
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      {/* <div className="mb-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-10"
        >
          <p className="text-sm text-primary font-medium mb-2">
            Our Expert Team
          </p>
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings together a wealth of experience
            and innovative thinking to every project.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={fadeIn}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-center mb-2">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-center">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div> */}

      {/* CTA Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center bg-accent/50 py-12 px-6 rounded-lg"
      >
        <h2 className="text-3xl font-bold mb-4">Join Our 1500+ Happy Client</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Become part of our growing community of satisfied clients and
          experience the difference our expertise can make for your brand.
        </p>
        <div className="flex justify-center space-x-6 mb-6">
          {[
            "/images/KaraPay Logo.jpg",
            "/images/Abba's Bellas Jewels-01.png",
            "/images/Logo-01.png",
            "/images/Logo.jpg",
            "/images/Coloured.png",
          ].map((logo, i) => (
            <div
              key={i}
              className="w-24 h-12 bg-background rounded-md flex items-center justify-center p-2 overflow-hidden"
            >
              <Image
                src={logo}
                alt={`Client logo ${i + 1}`}
                width={80}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
        <Button size="lg" className="group">
          Get Started
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div> */}
    </div>
  );
}
