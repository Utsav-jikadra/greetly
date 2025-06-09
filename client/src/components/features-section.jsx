import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar,
  Heart,
  Bell,
  MessageCircle,
  Gift,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { theme } from '../theme/config';

const features = [
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "Automatically schedule greetings for all important dates",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-[#60A5FA] to-[#3B82F6]"
  },
  {
    icon: Heart,
    title: "Personal Touch", 
    description: "Create messages that feel authentic and heartfelt",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    gradient: "from-[#F472B6] to-[#EC4899]"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never forget an important occasion again",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-[#FFB86C] to-[#F59E0B]"
  },
  {
    icon: MessageCircle,
    title: "Multi-Channel",
    description: "Send via WhatsApp, SMS, Email or social media",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-[#60A5FA] to-[#3B82F6]"
  },
  {
    icon: Gift,
    title: "Gift Integration",
    description: "Add the perfect gift to your greeting",
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-[#F472B6] to-[#EC4899]"
  },
  {
    icon: Sparkles,
    title: "AI Magic",
    description: "Let our AI craft the perfect message for you",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
    gradient: "from-[#FFB86C] to-[#F59E0B]"
  }
];

export function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-[#60A5FA]/10 blur-3xl" />
        <div className="absolute bottom-20 left-20 h-64 w-64 rounded-full bg-[#F472B6]/10 blur-3xl" />
        <Sparkles className="absolute top-1/3 left-1/4 w-8 h-8 text-[#FFB86C] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r  from-[#09A3DA] via-[#7749B9] to-[#C03D84] bg-clip-text text-transparent">
            Celebrate Every Moment
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Thoughtful greetings made effortless with Greetly's powerful features
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image carousel - Left */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-8 border-white/40 backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <img 
                    src={features[activeFeature].image} 
                    alt={features[activeFeature].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Feature cards - Right */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setActiveFeature(index)}
                  className="group"
                >
                  <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 ${
                    activeFeature === index ? 'border-[#60A5FA] shadow-[#60A5FA]/10' : ''
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg text-white`}>
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-[#60A5FA] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-text-secondary">
                          {feature.description}
                        </p>
                      </div>
                      <ChevronRight className={`w-5 h-5 mt-1 transition-transform group-hover:translate-x-1 ${
                        activeFeature === index ? 'text-[#60A5FA]' : 'text-gray-400'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}