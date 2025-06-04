import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles,
  Heart, 
  Clock, 
  Bell, 
  MessageCircle,
  Gift,
  Calendar
} from 'lucide-react';
import { theme } from '../theme/config';

export function FeaturesSection() {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Never miss important dates with our AI-powered scheduling system",
      gradient: "from-[#60A5FA] to-[#3B82F6]"
    },
    {
      icon: Heart,
      title: "Personal Touch",
      description: "Create heartfelt messages that truly resonate with your loved ones",
      gradient: "from-[#F472B6] to-[#EC4899]"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Get gentle nudges for upcoming occasions and birthdays",
      gradient: "from-[#FFB86C] to-[#F59E0B]"
    },
    {
      icon: MessageCircle,
      title: "Multi-Channel",
      description: "Send via WhatsApp, SMS, or Email — whatever works best",
      gradient: "from-[#60A5FA] to-[#3B82F6]"
    },
    {
      icon: Gift,
      title: "Gift Integration",
      description: "Pair your messages with perfect gifts from our partners",
      gradient: "from-[#F472B6] to-[#EC4899]"
    },
    {
      icon: Sparkles,
      title: "AI Magic",
      description: "Let our AI help craft the perfect message every time",
      gradient: "from-[#FFB86C] to-[#F59E0B]"
    }
  ];

  return (
    <section className={`${theme.gradients.primary} ${theme.spacing.section} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#60A5FA]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#FFB86C]/10 blur-3xl" />
      </div>

      <div className={theme.spacing.container}>
      <motion.div 
        initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="relative"
        >
          {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: "easeOut"
                }
              }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#60A5FA] to-[#F472B6] bg-clip-text text-transparent">
              Why Choose Greetly?
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Join thousands of thoughtful people who never miss a chance to celebrate life's special moments
            </p>
        </motion.div>

          {/* Features Grid */}
        <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
                key={feature.title}
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
                whileHover={theme.animations.cardHover}
                className="group"
              >
                <div className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.borderRadius.default} ${theme.shadows.card} p-8`}>
                  <div className={`mb-6 inline-block bg-gradient-to-br ${feature.gradient} ${theme.borderRadius.default} p-3 text-white
                    transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-text-primary group-hover:text-[#60A5FA] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.3,
                  staggerChildren: 0.1
                }
                }
              }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { number: "50K+", label: "Happy Users" },
              { number: "1M+", label: "Greetings Sent" },
              { number: "99%", label: "On-time Delivery" }
            ].map((stat) => (
              <motion.div 
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 50,
                      damping: 15
                    }
                  }
                }}
                whileHover={theme.animations.cardHover}
                className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.borderRadius.default} ${theme.shadows.card} 
                  p-8 text-center hover:bg-gradient-to-br hover:from-[#60A5FA]/5 hover:to-transparent`}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#F472B6] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSection;
