import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { theme } from '../theme/config';

export function Pricing() {
const plans = [
  {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
    features: [
        "Up to 10 contacts",
        "Basic message templates",
      "Email notifications",
        "Manual scheduling",
      "Basic analytics"
    ],
      gradient: "from-[#60A5FA] to-[#3B82F6]",
    popular: false
  },
  {
      name: "Pro",
      price: "9.99",
      description: "Best for active users",
    features: [
        "Unlimited contacts",
        "AI message generation",
        "WhatsApp & SMS",
        "Auto-scheduling",
      "Advanced analytics",
        "Priority support",
        "Custom templates"
    ],
      gradient: "from-[#F472B6] to-[#EC4899]",
    popular: true
  },
  {
      name: "Business",
      price: "29.99",
      description: "For teams and businesses",
    features: [
        "Everything in Pro",
        "Team collaboration",
        "API access",
        "Custom branding",
        "Bulk scheduling",
        "24/7 support",
        "Account manager"
    ],
      gradient: "from-[#FFB86C] to-[#F59E0B]",
    popular: false
  }
];

  return (
    <section className={`${theme.gradients.primary} ${theme.spacing.section} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 h-72 w-72 rounded-full bg-[#F472B6]/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 h-72 w-72 rounded-full bg-[#60A5FA]/10 blur-3xl" />
      </div>

      <div className={theme.spacing.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative"
        >
        {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose the perfect plan for your needs
            </p>
          </motion.div>

        {/* Pricing Cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            {plans.map((plan) => (
            <motion.div
                key={plan.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 50,
                      damping: 15
                    }
                  }
                }}
                className={`group relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                </div>
              )}

                <div className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.shadows.card} p-8 relative h-full
                  ${plan.popular ? 'border-2 border-[#F472B6]' : ''}`}
                >
              <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-[#60A5FA] transition-colors duration-300">
                  {plan.name}
                </h3>
                    <p className="text-text-secondary mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center">
                      <span className="text-3xl font-semibold">$</span>
                      <span className="text-5xl font-bold mx-1">{plan.price}</span>
                    <span className="text-text-secondary">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-text-secondary">
                        <Check className="w-5 h-5 text-[#60A5FA] mr-3 flex-shrink-0" />
                        {feature}
                  </li>
                ))}
              </ul>

                  <button
                    className={`w-full py-4 px-6 rounded-full font-semibold transition-all duration-300
                      ${plan.popular 
                        ? 'bg-gradient-to-r from-[#F472B6] to-[#EC4899] text-white hover:shadow-lg hover:shadow-[#F472B6]/20' 
                        : 'bg-white text-[#60A5FA] border-2 border-[#60A5FA] hover:bg-[#60A5FA]/10'
                }`}
              >
                    Get Started
                  </button>
                </div>
            </motion.div>
          ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { delay: 0.4 }
              }
            }}
            className="mt-16 text-center"
          >
            <p className="text-text-secondary mb-4">
              All plans include 14-day free trial. No credit card required.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Star className="w-5 h-5 text-[#FFB86C] fill-current" />
              <span className="text-text-secondary">
                4.9/5 average rating - Trusted by 10,000+ users
              </span>
        </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 

export default Pricing; 