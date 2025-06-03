import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses",
    features: [
      "Up to 100 visitors per month",
      "Basic visitor registration",
      "Email notifications",
      "Visitor badge printing",
      "Basic analytics"
    ],
    buttonText: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$79",
    description: "Ideal for growing companies",
    features: [
      "Up to 500 visitors per month",
      "Advanced visitor screening",
      "SMS notifications",
      "Custom branding",
      "Advanced analytics",
      "API access",
      "Priority support"
    ],
    buttonText: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited visitors",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantees",
      "Custom features",
      "On-premise option",
      "24/7 phone support"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="relative py-20 bg-[#d5bef7] overflow-hidden" id="pricing">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d5bef7]/80 via-[#d5bef7]/50 to-white/30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 via-[#d5bef7]/40 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tl from-secondary/20 via-[#d5bef7]/40 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-text-primary mb-4"
          >
            Simple,{' '}
            <span className="bg-gradient-to-r from-primary via-accent-dark to-secondary bg-clip-text text-transparent">
              Transparent
            </span>{' '}
            Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg"
          >
            Choose the perfect plan for your business needs
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl bg-white/50 backdrop-blur-sm ${
                plan.popular 
                  ? 'border-2 border-primary shadow-lg shadow-primary/25' 
                  : 'border border-primary/10 hover:border-primary/20'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-text-light text-sm font-medium px-3 py-1 rounded-full shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-text-secondary">/month</span>
                  )}
                </div>
                <p className="text-text-secondary">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-text-secondary">
                    <div className="w-5 h-5 mr-2 flex-shrink-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                className={`w-full h-12 text-base ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary text-text-light shadow-lg shadow-primary/25'
                    : 'border-2 border-primary text-primary hover:bg-primary hover:text-text-light'
                }`}
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 