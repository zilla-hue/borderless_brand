'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'Essential',
    price: '$2,999/mo',
    description: 'Perfect for growing brands looking to establish a strong digital presence.',
    features: [
      'Brand strategy development',
      'Visual identity design',
      'Social media management',
      'Content creation (2 platforms)',
      'Monthly performance reports',
      'Basic SEO optimization'
    ],
    buttonText: 'Book Consultation',
    buttonVariant: 'default',
    buttonColor: 'bg-purple-600 hover:bg-purple-700'
  },
  {
    name: 'Growth',
    price: '$5,999/mo',
    description: 'Ideal for established brands seeking comprehensive digital solutions.',
    features: [
      'Everything in Essential, plus:',
      'Advanced brand strategy',
      'Content creation (4 platforms)',
      'Video production (2 videos/mo)',
      'PR & media outreach',
      'Influencer partnership management'
    ],
    buttonText: 'Book Consultation',
    buttonVariant: 'default',
    buttonColor: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    name: 'Premium',
    price: '$9,999/mo',
    description: 'For brands ready to dominate their market with full-service solutions.',
    features: [
      'Everything in Growth, plus:',
      'Full-scale digital marketing',
      'Custom video production',
      'Publication & printing services',
      'Event planning & execution',
      'Dedicated account manager'
    ],
    buttonText: 'Book Consultation',
    buttonVariant: 'default',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-600'
  },
  {
    name: 'Enterprise',
    price: "Custom",
    description: 'Tailored solutions for large organizations with complex needs.',
    features: [
      'Everything in Premium, plus:',
      'Custom service package',
      'Multiple brand management',
      'International market strategy',
      'Crisis management support',
      'Priority support 24/7'
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'default',
    buttonColor: 'bg-blue-500 hover:bg-blue-600'
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function PricingPage() {
  return (
    <div className="container mx-auto py-16 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
          Transform Your Brand's Story
        </h1>
        <p className="text-3xl text-primary font-semibold">
          Choose the perfect plan for your journey
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
      >
        {plans.map((plan) => (
          <motion.div key={plan.name} variants={fadeInUp}>
            <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="mt-2">
                  <div className="text-3xl font-bold">{plan.price}</div>
                  {plan.name === 'Enterprise' && (
                    <div className="text-sm text-muted-foreground">Tailored pricing</div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <Button 
                  className={`w-full mb-8 ${plan.buttonColor}`}
                  asChild
                >
                  <Link href={`/contact?plan=${plan.name.toLowerCase()}`}>
                    {plan.buttonText}
                  </Link>
                </Button>
                <div className="space-y-4 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center mt-16"
      >
        <p className="text-lg text-muted-foreground mb-8">
          Not sure which plan is right for you? Our team is here to help you choose the perfect solution for your brand.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90"
          asChild
        >
          <Link href="/contact">
            Schedule a Free Consultation
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}