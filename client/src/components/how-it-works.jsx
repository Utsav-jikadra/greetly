import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, Send, Gift } from 'lucide-react';
import { theme } from '../theme/config';

export function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      title: "Set Important Dates",
      image: "https://static-cse.canva.com/blob/1218654/feature_StockImages_lead_042x.jpg",
      description: "Add birthdays, anniversaries, and special occasions to your calendar",
      gradient: "from-[#60A5FA] to-[#3B82F6]"
    },
    {
      icon: MessageCircle,
      title: "Craft Your Message",
      image: "https://lh7-us.googleusercontent.com/docsz/AD_4nXdZpD8I5Q3VXncd6ZSUcRBIus3WyFL0ZYsye5wbT7pVjwjKvHF-qrwHGVd-Me4369B3ZWnnej3XvzHTXBZUmv13-caMMXVS6p7YxfxGc0SOEWIlxlI4b4lSV6JKMZpz3jHMjX0Q5sui8saKPzvNbJ-_PUo?key=1lnbn8-Az2qyojsnZFp1DQ",
      description: "Use our AI to create the perfect personalized message or write your own",
      gradient: "from-[#F472B6] to-[#EC4899]"
    },
    {
      icon: Send,
      title: "Schedule Delivery",
      image: "https://lh7-us.googleusercontent.com/docsz/AD_4nXdZpD8I5Q3VXncd6ZSUcRBIus3WyFL0ZYsye5wbT7pVjwjKvHF-qrwHGVd-Me4369B3ZWnnej3XvzHTXBZUmv13-caMMXVS6p7YxfxGc0SOEWIlxlI4b4lSV6JKMZpz3jHMjX0Q5sui8saKPzvNbJ-_PUo?key=1lnbn8-Az2qyojsnZFp1DQ",
      description: "Choose when and how to send your greeting - SMS, WhatsApp, or Email",
      gradient: "from-[#FFB86C] to-[#F59E0B]"
    },
    {
      icon: Gift,
      title: "Add Optional Gifts",
      image: "https://static-cse.canva.com/blob/1218654/feature_StockImages_lead_042x.jpg",
      description: "Make it extra special by including a thoughtful gift from our partners",
      gradient: "from-[#60A5FA] to-[#3B82F6]"
    }
  ];

  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className={`${theme.gradients.primary} ${theme.spacing.section} relative overflow-hidden`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-[#F472B6]/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 h-64 w-64 rounded-full bg-[#60A5FA]/10 blur-3xl" />
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
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              How It Works
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Send perfect greetings in just a few simple steps
            </p>
          </motion.div>

          {/* Steps - Alternating Layout */}
          <div className="space-y-24 max-w-6xl mx-auto">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeStep === index;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }}
                  viewport={{ once: false, margin: "-100px" }}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                  onViewportEnter={() => setActiveStep(index)}
                >
                  {/* Content */}
                  <div className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.shadows.card} p-8
                    hover:bg-gradient-to-br hover:from-card-hovered/50 hover:to-transparent transition-all duration-300
                    border border-white/10 hover:border-white/20 flex-1 relative group`}
                  >
                    {/* Step Number and Icon */}
                    <div className="flex items-start gap-6">
                      <div className="flex flex-col items-center">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} p-4 text-white
                          transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative`}
                        >
                          <step.icon className="w-full h-full" />
                          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-white flex items-center justify-center text-sm font-bold text-[#3B82F6]">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-[#60A5FA] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector (mobile) */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden absolute left-[2.25rem] bottom-[-2.5rem] w-1 h-8 bg-gradient-to-b from-[#60A5FA] to-transparent" />
                    )}
                  </div>

                  {/* Image */}
                  <motion.div 
                    className={`flex-1 ${isActive ? 'opacity-100' : 'opacity-70'} transition-opacity duration-500`}
                    initial={{ scale: 0.95 }}
                    whileInView={{ scale: 1 }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-auto rounded-xl shadow-xl object-cover max-h-[300px] md:max-h-[400px]"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;