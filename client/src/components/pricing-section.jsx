import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Check, Star, Zap, Crown, ArrowRight } from 'lucide-react';
import { AuthModal } from './auth-modal';

export function PricingSection() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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
      gradient: "from-[#60A5FA]/5 to-transparent",
      hoverGradient: "hover:from-[#60A5FA]/10 hover:to-transparent",
      borderColor: "border-[#60A5FA]/20",
      iconColor: "text-[#60A5FA] bg-[#60A5FA]/10",
      buttonClass: "bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-[#60A5FA]/25 transition-all duration-300"
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
      gradient: "from-[#F472B6]/5 to-transparent",
      hoverGradient: "hover:from-[#F472B6]/10 hover:to-transparent",
      borderColor: "border-[#F472B6]/20",
      iconColor: "text-[#F472B6] bg-[#F472B6]/10",
      popular: true,
      buttonClass: "bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white hover:shadow-lg hover:shadow-[#F472B6]/25 transition-all duration-300"
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
      gradient: "from-[#FFB86C]/5 to-transparent",
      hoverGradient: "hover:from-[#FFB86C]/10 hover:to-transparent",
      borderColor: "border-[#FFB86C]/20",
      iconColor: "text-[#FFB86C] bg-[#FFB86C]/10",
      buttonClass: "bg-gradient-to-r from-[#FFB86C] to-[#F59E0B] text-white hover:shadow-lg hover:shadow-[#FFB86C]/25 transition-all duration-300"
    }
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialView="signup"
      />

      <section id="pricing" className="py-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent mb-4"
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
                className={`relative bg-gradient-to-b ${plan.gradient} ${plan.hoverGradient} rounded-2xl p-8 border ${plan.borderColor} 
                  transition-all duration-300 hover:scale-[1.02] hover:shadow-xl backdrop-blur-sm
                  ${plan.popular ? 'ring-2 ring-[#F472B6]' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-center mb-6">
                  <div className={`p-3 rounded-xl ${plan.iconColor}`}>
                    {plan.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2 text-gray-800">{plan.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="w-5 h-5 text-[#60A5FA] mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  size="lg"
                  onClick={() => setIsAuthModalOpen(true)}
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
    </section>
  );
}
