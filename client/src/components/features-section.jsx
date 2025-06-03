import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MessageSquare, 
  Zap, 
  Users, 
  BarChart, 
  Shield 
} from 'lucide-react';

export function FeaturesSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const featureVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9
    }
  };

  const features = [
    {
      icon: <Calendar className="w-7 h-7" />,
      title: "Smart Scheduling",
      description: "Never miss important dates with our AI-powered scheduling system",
      color: "bg-blue-100 text-blue-600",
      hoverColor: "group-hover:bg-blue-200 group-hover:text-blue-700",
      shadowColor: "group-hover:shadow-blue-200/50",
      gradient: "hover:bg-gradient-to-br hover:from-blue-50 hover:to-blue-100/50"
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "AI Message Generation",
      description: "Create perfect personalized messages with our advanced AI technology",
      color: "bg-purple-100 text-purple-600",
      hoverColor: "group-hover:bg-purple-200 group-hover:text-purple-700",
      shadowColor: "group-hover:shadow-purple-200/50",
      gradient: "hover:bg-gradient-to-br hover:from-purple-50 hover:to-purple-100/50"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Instant Delivery",
      description: "Send greetings instantly via WhatsApp, SMS, or Email",
      color: "bg-amber-100 text-amber-600",
      hoverColor: "group-hover:bg-amber-200 group-hover:text-amber-700",
      shadowColor: "group-hover:shadow-amber-200/50",
      gradient: "hover:bg-gradient-to-br hover:from-amber-50 hover:to-amber-100/50"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Contact Management",
      description: "Easily organize and manage your contacts and relationships",
      color: "bg-emerald-100 text-emerald-600",
      hoverColor: "group-hover:bg-emerald-200 group-hover:text-emerald-700",
      shadowColor: "group-hover:shadow-emerald-200/50",
      gradient: "hover:bg-gradient-to-br hover:from-emerald-50 hover:to-emerald-100/50"
    },
    {
      icon: <BarChart className="w-7 h-7" />,
      title: "Analytics Dashboard",
      description: "Track your greeting history and engagement metrics",
      color: "bg-rose-100 text-rose-600",
      hoverColor: "group-hover:bg-rose-200 group-hover:text-rose-700",
      shadowColor: "group-hover:shadow-rose-200/50",
      gradient: "hover:bg-gradient-to-br hover:from-rose-50 hover:to-rose-100/50"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Privacy & Security",
      description: "Your data is protected with enterprise-grade security",
      color: "bg-cyan-100 text-cyan-600",
      hoverColor: "group-hover:bg-cyan-200 group-hover:text-cyan-700",
      shadowColor: "group-hover:shadow-cyan-200/50",
      gradient: "hover:bg-gradient-to-br hover:from-cyan-50 hover:to-cyan-100/50"
    }
  ];

  return (
    <section 
      id="features" 
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50"
      ref={ref}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={titleVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4"
            variants={titleVariants}
          >
            Powerful Features
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0"
            variants={titleVariants}
          >
            Everything you need to manage and send perfect greetings
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className={`group bg-white rounded-xl p-6 sm:p-8 shadow-lg border border-gray-100 
                transform transition-all duration-300 hover:shadow-xl ${feature.gradient} 
                hover:-translate-y-1 ${feature.shadowColor}`}
              whileHover={{
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }
              }}
            >
              <motion.div 
                className={`p-3 rounded-lg inline-block ${feature.color} ${feature.hoverColor} 
                  transition-all duration-300 mb-4 sm:mb-5`}
                variants={iconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
