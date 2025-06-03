import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';

export function PricingSection() {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const plans = [
    {
      name: "Starter",
      price: "$9",
      description: "Perfect for individuals",
      icon: <Star className="w-5 h-5" />,
      features: [
        "50 greetings per month",
        "Basic templates",
        "Email support",
        "WhatsApp integration"
      ],
      buttonVariant: "ghost",
      gradient: "from-gray-100 to-gray-50",
      hoverGradient: "hover:from-gray-200 hover:to-gray-100",
      borderColor: "border-gray-200",
      iconColor: "text-gray-600 bg-gray-100",
      wrapperClass:
      "inline-block p-[2px] rounded-md bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 transition-all duration-300 transform hover:scale-[1.02] shadow-md",
      buttonClass: "bg-gradient-to-r from-gray-500 to-gray-700 hover:from-gray-600 hover:to-gray-800 text-white hover:text-white transform hover:scale-[1.02] hover:shadow-[0_8px_25px_-8px_rgba(75,85,99,0.5)] transition-all duration-300 border-none outline-none"
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for growing businesses",
      icon: <Zap className="w-5 h-5" />,
      features: [
        "500 greetings per month",
        "Premium templates",
        "Priority support",
        "All integrations",
        "Analytics dashboard"
      ],
      buttonVariant: "premium",
      gradient: "from-blue-50 to-purple-50",
      hoverGradient: "hover:from-blue-100 hover:to-purple-100",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600 bg-blue-100",
      popular: true,
      buttonClass: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-[1.02] hover:shadow-[0_8px_25px_-8px_rgba(147,51,234,0.5)] transition-all duration-300"
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large organizations",
      icon: <Crown className="w-5 h-5" />,
      features: [
        "Unlimited greetings",
        "Custom templates",
        "24/7 support",
        "All integrations",
        "Advanced analytics",
        "API access"
      ],
      buttonVariant: "success",
      gradient: "from-emerald-50 to-teal-50",
      hoverGradient: "hover:from-emerald-100 hover:to-teal-200",
      borderColor: "border-emerald-200",
      iconColor: "text-emerald-600 bg-emerald-100",
      buttonClass: "bg-gradient-to-r from-emerald-400 to-teal-600 hover:from-emerald-500 hover:to-teal-700 text-white transform hover:scale-[1.02] hover:shadow-[0_8px_25px_-8px_rgba(20,184,166,0.5)] transition-all duration-300"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4"
            variants={itemAnimation}
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemAnimation}
          >
            Choose the perfect plan for your needs. No hidden fees.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemAnimation}
              className={`relative bg-gradient-to-b ${plan.gradient} ${plan.hoverGradient} rounded-2xl shadow-lg p-8 border-2 ${plan.borderColor} transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="flex items-center justify-center mb-6">
                <div className={`p-3 rounded-lg ${plan.iconColor}`}>
                  {plan.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{plan.price}</span>
                <span className="text-gray-600">/month</span>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.buttonVariant}
                size="lg"
                className={`w-full group ${plan.buttonClass}`}
              >
                <span className="font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
