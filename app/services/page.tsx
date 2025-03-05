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
}: {
  service: {
    title: string;
    icon: any;
    description: string;
    features: string[];
  };
  id: string;
}) => (
  <Card className="shadow-md hover:shadow-lg transition-all duration-300 h-full">
    <CardHeader className="pb-2 sm:pb-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
        <div className="bg-primary/10 p-3 rounded-full">
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

  // Handle tab change to keep mobile dropdown in sync
  const handleTabChange = (value: string) => {
    setSelectedService(value);

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
    <div className="container mx-auto py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4">
      {/* Improved header section with better spacing and semantic markup */}
      <section className="text-center mb-6 sm:mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4">
          Our Services
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto px-1 sm:px-2">
          Comprehensive digital solutions to elevate your brand and drive
          meaningful engagement
        </p>
      </section>

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
      <Tabs
        value={selectedService}
        onValueChange={handleTabChange}
        className="w-full max-w-5xl mx-auto"
      >
        {/* Desktop tabs - hidden on mobile and tablet */}
        {/* <TabsList
          className="hidden lg:grid w-full lg:grid-cols-3 mb-6 sticky top-0 z-10 bg-background/95 backdrop-blur-sm px-1 py-1 rounded-lg"
          aria-label="Service categories"
        >
          {Object.entries(services).map(([key, service]) => (
            <TabsTrigger
              key={key}
              value={key}
              className="text-xs lg:text-sm py-2 lg:py-3"
            >
              <div className="flex flex-col items-center gap-1 lg:gap-2">
                <service.icon
                  className="h-4 w-4 lg:h-5 lg:w-5"
                  aria-hidden="true"
                />
                <span className="line-clamp-1">{service.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList> */}

        {/* Service content */}
        <div id="service-content">
          {Object.entries(services).map(([key, service]) => (
            <TabsContent
              key={key}
              value={key}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
            >
              <ServiceCard service={service} id={key} />
            </TabsContent>
          ))}
        </div>
      </Tabs>

      {/* Quick navigation section added at bottom for better UX */}
      <nav className="mt-8 md:mt-12 lg:mt-16 max-w-4xl mx-auto px-1 sm:px-2">
        <h2 className="text-lg md:text-xl font-medium mb-4 text-center">
          Quick Navigation
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => handleTabChange(key)}
              className="flex items-center p-2 md:p-3 text-xs sm:text-sm border rounded-md hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
            >
              <service.icon
                className="h-4 w-4 mr-2 text-primary flex-shrink-0"
                aria-hidden="true"
              />
              <span className="truncate">{service.title}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile bottom spacing */}
      <div className="h-8 sm:h-12" aria-hidden="true"></div>
    </div>
  );
}
