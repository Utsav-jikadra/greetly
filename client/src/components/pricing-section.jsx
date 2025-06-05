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
      buttonClass: "bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-[#60A5FA]/25 transition-all duration-300 hover:text-white"
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
      gradient: "from-[#34D399]/5 to-transparent",
      hoverGradient: "hover:from-[#34D399]/10 hover:to-transparent",
      borderColor: "border-[#34D399]/20",
      iconColor: "text-[#34D399] bg-[#34D399]/10",
      popular: true,
      buttonClass: "bg-gradient-to-r from-[#34D399] to-[#10B981] text-white hover:shadow-lg hover:shadow-[#34D399]/25 transition-all duration-300 hover:text-white"
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
    <section className="relative min-h-screen bg-gradient-to-b from-[#E6F4F1] to-white pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialView="signup"
      />
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#60A5FA]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#F472B6]/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 right-1/3 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-[#FFB86C]/10 blur-2xl" />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-[#60A5FA]/10 blur-2xl" />
      </div>

      <section id="pricing" className="py-5">
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
                  ${plan.popular ? 'ring-2 ring-[#34D399]' : ''} flex flex-col justify-between`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#34D399] to-[#10B981] text-white text-sm font-medium px-4 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
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
                </div>

                <div className="mt-auto">
                  <Button
                    variant={plan.buttonVariant}
                    size="lg"
                    onClick={() => setIsAuthModalOpen(true)}
                    className={`w-full group ${plan.buttonClass}`}
                  >
                    <span className="font-semibold">Get Started</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </section>
  );
}
