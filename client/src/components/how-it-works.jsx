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
      image: "https://media.gettyimages.com/id/1404749040/photo/human-vs-robot.jpg?s=612x612&w=0&k=20&c=IjlGSvSqq8-G-Mzc6CFxwIFzjAk6coClu7SRZQ2XgeU=",
      description: "Use our AI to create the perfect personalized message or write your own",
      gradient: "from-[#F472B6] to-[#EC4899]"
    },
    {
      icon: Send,
      title: "Schedule Delivery",
      image: "https://media.gettyimages.com/id/1367899893/photo/multi-racial-diverse-group-of-people-working-with-paperwork-on-a-board-room-table-at-a.jpg?s=612x612&w=0&k=20&c=2t0t2NfFIpuggzGw54kqtYanxj3f7if1CVjnPh5YRCc=",
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
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#E6F4F1] to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-[#F472B6]/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 h-64 w-64 rounded-full bg-[#60A5FA]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
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
            className="text-center mb-16 sm:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#09A3DA] via-[#7749B9] to-[#C03D84] bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
              Send perfect greetings in just a few simple steps
            </p>
          </motion.div>

          {/* Steps - Alternating Layout */}
          <div className="space-y-16 sm:space-y-24 max-w-7xl mx-auto">
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
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
                  onViewportEnter={() => setActiveStep(index)}
                >
                  {/* Content */}
                  <div className="bg-white/80 backdrop-blur-sm p-4   sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 flex-1 relative group">
                    {/* Step Number and Icon */}
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${step.gradient} p-3 text-white
                          transform transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2 relative shadow-md`}
                        >
                          <step.icon className="w-full h-full" />
                          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-bold text-[#3B82F6] shadow">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="text-[20px] font-bold text-text-primary mb-2 group-hover:text-[#60A5FA] transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-[16px] text-text-secondary">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector (mobile) */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden absolute left-[2.5rem] bottom-[-4rem] w-1 h-16 bg-gradient-to-b from-[#60A5FA] to-transparent" />
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
                      className="w-full h-auto rounded-2xl shadow-xl object-cover max-h-[300px] md:max-h-[400px] border-8 border-white/40 backdrop-blur-sm"
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