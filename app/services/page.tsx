// "use client";

// import { useState } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Megaphone,
//   Briefcase,
//   Video,
//   Palette,
//   CheckCircle2,
//   LayoutTemplate,
//   RadioTower,
//   BarChart,
//   BookOpen,
//   ShoppingBag,
//   Users,
//   Zap,
//   ChevronRight,
// } from "lucide-react";
// import Link from "next/link";

// // Define types for our services data structure
// interface ServiceFeatureType {
//   title: string;
//   icon: React.ElementType;
//   description: string;
//   features: string[];
// }

// type ServicesType = {
//   [key: string]: ServiceFeatureType;
// };

// // Separated services data for better maintainability
// const services: ServicesType = {
//   "brand-strategy": {
//     title: "Brand Strategy & Engagement",
//     icon: LayoutTemplate,
//     description:
//       "Compelling brand identities that create lasting loyalty in a crowded world.",
//     features: [
//       "Brand strategy development",
//       "Visual identity design",
//       "Brand guidelines",
//       "Logo design",
//       "Brand messaging",
//       "Brand collateral",
//     ],
//   },
//   "media-content": {
//     title: "Media & Content Creation",
//     icon: RadioTower,
//     description:
//       "Scroll-stopping digital campaigns and strategic media management.",
//     features: [
//       "Social media strategy development",
//       "Content creation and curation",
//       "Community management",
//       "Analytics and reporting",
//       "Influencer partnerships",
//       "Social media advertising",
//     ],
//   },
//   "video-production": {
//     title: "Video & Film Production",
//     icon: Video,
//     description:
//       "Cinematic storytelling that captivates from first frame to last.",
//     features: [
//       "Commercial production",
//       "Brand storytelling",
//       "Product demonstrations",
//       "Event coverage",
//       "Animation and motion graphics",
//       "Social media video content",
//     ],
//   },
//   "digital-marketing": {
//     title: "Digital Marketing",
//     icon: BarChart,
//     description: "Data-driven campaigns maximizing visibility and conversions.",
//     features: [
//       "PPC campaign management",
//       "Display advertising",
//       "Retargeting campaigns",
//       "Ad creative development",
//       "Performance optimization",
//       "ROI tracking and analysis",
//     ],
//   },
//   "publication-printing": {
//     title: "Publication & Printing",
//     icon: BookOpen,
//     description:
//       "High-impact materials that demand attention and leave lasting impressions.",
//     features: [
//       "Brochure design",
//       "Annual report design",
//       "Magazine and book layout",
//       "Packaging design",
//       "Print management",
//       "Quality control",
//     ],
//   },
//   merchandising: {
//     title: "Merchandising",
//     icon: ShoppingBag,
//     description: "Branded merchandise that turns customers into ambassadors.",
//     features: [
//       "Product design",
//       "Promotional items",
//       "Corporate gifts",
//       "Event merchandise",
//       "Custom apparel",
//       "Packaging solutions",
//     ],
//   },
//   "public-relations": {
//     title: "Public Relations & Perception Management",
//     icon: Users,
//     description:
//       "We strengthen trust, align your brand's identity with global expectations, and shape public perception through strategic communications.",
//     features: [
//       "Media relations",
//       "Crisis management",
//       "Press release writing",
//       "Media training",
//       "Event planning",
//       "Reputation management",
//     ],
//   },
//   innovation: {
//     title: "Innovation & Thought Leadership",
//     icon: Zap,
//     description:
//       "We help businesses pioneer new ways to connect, share, and grow by leveraging technology, research and industry insights.",
//     features: [
//       "Market research",
//       "Trend analysis",
//       "Competitive intelligence",
//       "Innovation workshops",
//       "Thought leadership content",
//       "Industry speaking opportunities",
//     ],
//   },
//   "personality-profiling": {
//     title: "Personality Profiling",
//     icon: Palette,
//     description:
//       "We develop clear, relatable, and authentic brand voices through strategic analysis and deep research for consistency across every touchpoint.",
//     features: [
//       "Brand voice development",
//       "Audience persona creation",
//       "Communication style guides",
//       "Tone of voice documentation",
//       "Content strategy alignment",
//       "Brand personality workshops",
//     ],
//   },
// };

// // Separate components for better organization and reusability
// interface ServiceFeatureProps {
//   feature: string;
// }

// const ServiceFeature = ({ feature }: ServiceFeatureProps) => (
//   <div className="flex items-start gap-2 p-2 transition-colors rounded-md hover:bg-muted/50">
//     <CheckCircle2
//       className="h-5 w-5 text-primary shrink-0 mt-0.5"
//       aria-hidden="true"
//     />
//     <span className="text-sm md:text-base break-words">{feature}</span>
//   </div>
// );

// interface ServiceCardProps {
//   service: ServiceFeatureType;
//   id: string;
// }

// const ServiceCard = ({ service, id }: ServiceCardProps) => (
//   <Card className="shadow-md hover:shadow-lg transition-all duration-300 h-full">
//     <CardHeader className="pb-2 px-4 sm:px-6">
//       <div className="flex flex-col sm:flex-row sm:items-start gap-4">
//         <div className="bg-primary/10 p-3 rounded-full self-start">
//           <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
//         </div>
//         <div>
//           <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
//           <CardDescription className="mt-2 text-sm md:text-base">
//             {service.description}
//           </CardDescription>
//         </div>
//       </div>
//     </CardHeader>
//     <CardContent className="pt-4 px-4 sm:px-6">
//       <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 mb-8">
//         {service.features.map((feature) => (
//           <ServiceFeature key={feature} feature={feature} />
//         ))}
//       </div>
//       <Button className="w-full group" asChild>
//         <Link
//           href={`/contact?service=${id}`}
//           className="flex items-center justify-center"
//         >
//           <span>Get Started</span>
//           <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//         </Link>
//       </Button>
//     </CardContent>
//   </Card>
// );

// // Dropdown for mobile view
// interface MobileSelectorProps {
//   selectedService: string;
//   services: ServicesType;
//   onChange: (value: string) => void;
// }

// const MobileServiceSelector = ({ selectedService, services, onChange }: MobileSelectorProps) => (
//   <div className="relative w-full mb-6 md:hidden">
//     <select
//       value={selectedService}
//       onChange={(e) => onChange(e.target.value)}
//       className="w-full p-4 pr-10 border rounded-md appearance-none bg-background text-foreground border-input focus:outline-none focus:ring-2 focus:ring-primary text-base font-medium"
//       aria-label="Select a service"
//     >
//       {Object.entries(services).map(([key, service]) => (
//         <option key={key} value={key}>
//           {service.title}
//         </option>
//       ))}
//     </select>
//     <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
//       <ChevronRight className="h-5 w-5 text-muted-foreground transform rotate-90" />
//     </div>
//   </div>
// );

// export default function ServicesPage() {
//   // Track selected service for mobile dropdown synchronization
//   const [selectedService, setSelectedService] = useState("brand-strategy");

//   // Handle tab change to keep mobile dropdown in sync
//   const handleTabChange = (value: string) => {
//     setSelectedService(value);
//   };

//   return (
//     <div className="container mx-auto py-6 sm:py-8 md:py-16 px-3 sm:px-4">
//       {/* Improved header section with better spacing and semantic markup */}
//       <section className="text-center mb-8 md:mb-16">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
//           Our Services
//         </h1>
//         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//           Comprehensive digital solutions to elevate your brand and drive
//           meaningful engagement
//         </p>
//       </section>

//       {/* Mobile service selector */}
//       <MobileServiceSelector
//         selectedService={selectedService}
//         services={services}
//         onChange={setSelectedService}
//       />

//       {/* Main tabs component with accessibility improvements */}
//       <Tabs
//         value={selectedService}
//         onValueChange={handleTabChange}
//         className="max-w-5xl mx-auto"
//       >
//         {/* Desktop tabs - hidden on mobile */}
//         <TabsList
//           className="hidden md:grid w-full grid-cols-3 lg:grid-cols-9 mb-6 sticky top-0 z-10 bg-background/95 backdrop-blur-sm"
//           aria-label="Service categories"
//         >
//           {Object.entries(services).map(([key, service]) => (
//             <TabsTrigger
//               key={key}
//               value={key}
//               className="text-xs lg:text-sm py-3"
//             >
//               <div className="flex flex-col items-center gap-2">
//                 <service.icon className="h-5 w-5" aria-hidden="true" />
//                 <span className="line-clamp-1">{service.title}</span>
//               </div>
//             </TabsTrigger>
//           ))}
//         </TabsList>

//         {/* Service content */}
//         {Object.entries(services).map(([key, service]) => (
//           <TabsContent
//             key={key}
//             value={key}
//             className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
//           >
//             <ServiceCard service={service} id={key} />
//           </TabsContent>
//         ))}
//       </Tabs>

//       {/* Quick navigation section added at bottom for better UX */}
//       <nav className="mt-12 sm:mt-16 max-w-3xl mx-auto px-2 sm:px-0">
//         <h2 className="text-xl font-medium mb-4 text-center">
//           Quick Navigation
//         </h2>
//         <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
//           {Object.entries(services).map(([key, service]) => (
//             <button
//               key={key}
//               onClick={() => setSelectedService(key)}
//               className="flex items-center p-3 text-sm border rounded-md hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary overflow-hidden"
//             >
//               <service.icon
//                 className="h-4 w-4 mr-2 text-primary"
//                 aria-hidden="true"
//               />
//               <span className="truncate">{service.title}</span>
//             </button>
//           ))}
//         </div>
//       </nav>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Megaphone,
  Briefcase,
  Video,
  Palette,
  CheckCircle2,
  LayoutTemplate,
  RadioTower,
  BarChart,
  BookOpen,
  ShoppingBag,
  Users,
  Zap,
  ChevronRight,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import ServiceProcess from "./service-process";
import ClientShowcase from "./client-showcase";
import ServiceFeatures from "./service-features";

// Separated services data for better maintainability
const services = {
  "brand-strategy": {
    title: "Brand Strategy & Engagement",
    icon: LayoutTemplate,
    description:
      "Compelling brand identities that create lasting loyalty in a crowded world.",
    features: [
      "Brand strategy development",
      "Visual identity design",
      "Brand guidelines",
      "Logo design",
      "Brand messaging",
      "Brand collateral",
    ],
  },
  "media-content": {
    title: "Media & Content Creation",
    icon: RadioTower,
    description:
      "Scroll-stopping digital campaigns and strategic media management.",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management",
      "Analytics and reporting",
      "Influencer partnerships",
      "Social media advertising",
    ],
  },
  "video-production": {
    title: "Video & Film Production",
    icon: Video,
    description:
      "Cinematic storytelling that captivates from first frame to last.",
    features: [
      "Commercial production",
      "Brand storytelling",
      "Product demonstrations",
      "Event coverage",
      "Animation and motion graphics",
      "Social media video content",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    icon: BarChart,
    description: "Data-driven campaigns maximizing visibility and conversions.",
    features: [
      "PPC campaign management",
      "Display advertising",
      "Retargeting campaigns",
      "Ad creative development",
      "Performance optimization",
      "ROI tracking and analysis",
    ],
  },
  "publication-printing": {
    title: "Publication & Printing",
    icon: BookOpen,
    description:
      "High-impact materials that demand attention and leave lasting impressions.",
    features: [
      "Brochure design",
      "Annual report design",
      "Magazine and book layout",
      "Packaging design",
      "Print management",
      "Quality control",
    ],
  },
  merchandising: {
    title: "Merchandising",
    icon: ShoppingBag,
    description: "Branded merchandise that turns customers into ambassadors.",
    features: [
      "Product design",
      "Promotional items",
      "Corporate gifts",
      "Event merchandise",
      "Custom apparel",
      "Packaging solutions",
    ],
  },
  "public-relations": {
    title: "Public Relations & Perception Management",
    icon: Users,
    description:
      "We strengthen trust, align your brand's identity with global expectations, and shape public perception through strategic communications.",
    features: [
      "Media relations",
      "Crisis management",
      "Press release writing",
      "Media training",
      "Event planning",
      "Reputation management",
    ],
  },
  innovation: {
    title: "Innovation & Thought Leadership",
    icon: Zap,
    description:
      "We help businesses pioneer new ways to connect, share, and grow by leveraging technology, research and industry insights.",
    features: [
      "Market research",
      "Trend analysis",
      "Competitive intelligence",
      "Innovation workshops",
      "Thought leadership content",
      "Industry speaking opportunities",
    ],
  },
  "personality-profiling": {
    title: "Personality Profiling",
    icon: Palette,
    description:
      "We develop clear, relatable, and authentic brand voices through strategic analysis and deep research for consistency across every touchpoint.",
    features: [
      "Brand voice development",
      "Audience persona creation",
      "Communication style guides",
      "Tone of voice documentation",
      "Content strategy alignment",
      "Brand personality workshops",
    ],
  },
};

// Separate components for better organization and reusability
const ServiceFeature = ({ feature }: { feature: string }) => (
  <div className="flex items-start gap-2 p-1.5 sm:p-2 transition-colors rounded-md hover:bg-muted/50">
    <CheckCircle2
      className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5"
      aria-hidden="true"
    />
    <span className="text-xs sm:text-sm md:text-base">{feature}</span>
  </div>
);

const ServiceCard = ({
  service,
  id,
  onMouseEnter,
  onMouseLeave,
  isActive,
}: {
  service: {
    title: string;
    icon: any;
    description: string;
    features: string[];
  };
  id: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
}) => (
  <Card
    className={`shadow-md hover:shadow-lg transition-all duration-300 h-full ${
      isActive ? "ring-2 ring-primary/20" : ""
    }`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <CardHeader className="pb-2 sm:pb-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div
          className={`bg-primary/10 p-3 rounded-full transition-all duration-300 ${
            isActive ? "bg-primary/20" : ""
          }`}
        >
          <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
        <div>
          <CardTitle className="text-xl md:text-2xl">{service.title}</CardTitle>
          <CardDescription className="mt-2 text-sm md:text-base">
            {service.description}
          </CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent className="pt-2 sm:pt-4">
      <div className="grid gap-1 sm:gap-2 grid-cols-1 sm:grid-cols-2 mb-6 sm:mb-8">
        {service.features.map((feature) => (
          <ServiceFeature key={feature} feature={feature} />
        ))}
      </div>
      <Button className="w-full group" size="sm" asChild>
        <Link
          href={`/contact?service=${id}`}
          className="flex items-center justify-center py-2 sm:py-4"
        >
          <span>Get Started</span>
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>
    </CardContent>
  </Card>
);

// Dropdown for mobile and tablet view
const MobileServiceSelector = ({
  selectedService,
  services,
  onChange,
}: {
  selectedService: string;
  services: Record<
    string,
    { title: string; icon: any; description: string; features: string[] }
  >;
  onChange: (value: string) => void;
}) => (
  <div className="relative w-full mb-4 sm:mb-6 lg:hidden">
    <label
      htmlFor="service-selector"
      className="block text-sm font-medium text-foreground mb-2"
    >
      Select a service category:
    </label>
    <div className="relative">
      <select
        id="service-selector"
        value={selectedService}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 sm:p-3 pr-10 border rounded-md appearance-none bg-background text-foreground border-input focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        aria-label="Select a service"
      >
        {Object.entries(services).map(([key, service]) => (
          <option key={key} value={key}>
            {service.title}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <ChevronRight className="h-5 w-5 text-muted-foreground transform rotate-90" />
      </div>
    </div>
  </div>
);

// Service categories for smaller screens
const ServiceCategories = ({
  selectedService,
  services,
  onChange,
}: {
  selectedService: string;
  services: Record<
    string,
    { title: string; icon: any; description: string; features: string[] }
  >;
  onChange: (value: string) => void;
}) => (
  <div className="hidden md:block lg:hidden mb-6">
    <h2 className="sr-only">Service Categories</h2>
    <div className="grid grid-cols-3 gap-2">
      {Object.entries(services)
        .slice(0, 3)
        .map(([key, service]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex flex-col items-center p-2 text-xs rounded-md transition-colors ${
              selectedService === key
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted/50"
            }`}
          >
            <service.icon className="h-5 w-5 mb-1" aria-hidden="true" />
            <span className="text-center line-clamp-1">{service.title}</span>
          </button>
        ))}
    </div>
    <div className="grid grid-cols-3 gap-2 mt-2">
      {Object.entries(services)
        .slice(3, 6)
        .map(([key, service]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex flex-col items-center p-2 text-xs rounded-md transition-colors ${
              selectedService === key
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted/50"
            }`}
          >
            <service.icon className="h-5 w-5 mb-1" aria-hidden="true" />
            <span className="text-center line-clamp-1">{service.title}</span>
          </button>
        ))}
    </div>
    <div className="grid grid-cols-3 gap-2 mt-2">
      {Object.entries(services)
        .slice(6, 9)
        .map(([key, service]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex flex-col items-center p-2 text-xs rounded-md transition-colors ${
              selectedService === key
                ? "bg-primary/10 text-primary font-medium"
                : "hover:bg-muted/50"
            }`}
          >
            <service.icon className="h-5 w-5 mb-1" aria-hidden="true" />
            <span className="text-center line-clamp-1">{service.title}</span>
          </button>
        ))}
    </div>
  </div>
);

export default function ServicesPage() {
  // Track selected service for mobile dropdown synchronization
  const [selectedService, setSelectedService] = useState("brand-strategy");
  // Track screen size for responsive layout
  const [isMobile, setIsMobile] = useState(false);
  // Track if rotation is paused (when user is interacting with services)
  const [isRotationPaused, setIsRotationPaused] = useState(false);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Handle tab change to keep mobile dropdown in sync
  const handleTabChange = (value: string) => {
    setSelectedService(value);

    // Temporarily pause rotation when user manually changes tab
    setIsRotationPaused(true);
    setTimeout(() => setIsRotationPaused(false), 8000); // Resume rotation after 8 seconds

    // Scroll to content on mobile when switching tabs
    if (isMobile) {
      setTimeout(() => {
        const element = document.getElementById("service-content");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  // Automatic rotation for service cards
  useEffect(() => {
    if (isRotationPaused) return;

    const interval = setInterval(() => {
      // Get all service keys and find current index
      const serviceKeys = Object.keys(services);
      const currentIndex = serviceKeys.indexOf(selectedService);

      // Move to next service, loop back to first if at the end
      const nextIndex = (currentIndex + 1) % serviceKeys.length;
      setSelectedService(serviceKeys[nextIndex]);
    }, 5000); // Change service every 5 seconds

    return () => clearInterval(interval);
  }, [selectedService, isRotationPaused]);

  // Update mobile state based on screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="container mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-primary/5 to-transparent -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-accent/10 to-transparent -z-10 blur-3xl"></div>

      {/* Improved header section with better spacing and semantic markup */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-6 sm:mb-8 md:mb-12"
      >
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Our Expertise
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-1 sm:px-2">
          Comprehensive digital solutions to elevate your brand and drive
          meaningful engagement with your audience
        </p>
      </motion.section>

      {/* Featured Services Section */}
      <ServiceFeatures className="mb-8 md:mb-12" />

      {/* Mobile service selector */}
      <MobileServiceSelector
        selectedService={selectedService}
        services={services}
        onChange={handleTabChange}
      />

      {/* Medium screen service grid */}
      <ServiceCategories
        selectedService={selectedService}
        services={services}
        onChange={handleTabChange}
      />

      {/* Main tabs component with accessibility improvements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs
          value={selectedService}
          onValueChange={handleTabChange}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Service content */}
          <div id="service-content">
            {Object.entries(services).map(([key, service]) => (
              <TabsContent
                key={key}
                value={key}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
              >
                <ServiceCard
                  service={service}
                  id={key}
                  isActive={selectedService === key}
                  onMouseEnter={() => setIsRotationPaused(true)}
                  onMouseLeave={() => setIsRotationPaused(false)}
                />
              </TabsContent>
            ))}
          </div>
        </Tabs>

        {/* Rotation indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedService === key
                  ? "bg-primary scale-125"
                  : "bg-primary/20"
              }`}
              aria-label={`View ${
                services[key as keyof typeof services].title
              } service`}
            />
          ))}
        </div>
      </motion.div>

      {/* Service Process Section */}
      <ServiceProcess className="mt-16 md:mt-24" />

      {/* Client Showcase Section */}
      {/* <ClientShowcase className="mt-16 md:mt-24" /> */}

      {/* Quick navigation section added at bottom for better UX */}
      {/* <motion.nav
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-8 md:mt-12 lg:mt-16 max-w-4xl mx-auto px-1 sm:px-2"
      >
        <h2 className="text-lg md:text-xl font-medium mb-4 text-center">
          Quick Navigation
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {Object.entries(services).map(([key, service]) => (
            <motion.button
              key={key}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(var(--primary), 0.1)",
              }}
              onClick={() => handleTabChange(key)}
              className="flex items-center p-2 md:p-3 text-xs sm:text-sm border rounded-md hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              <service.icon
                className="h-4 w-4 mr-2 text-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="truncate">{service.title}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav> */}

      {/* Mobile bottom spacing */}
      <div className="h-8 sm:h-12" aria-hidden="true"></div>
    </div>
  );
}
