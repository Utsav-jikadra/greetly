import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Shield, 
  Bell, 
  Calendar, 
  MessageSquare, 
  BarChart 
} from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Smart Check-in",
    description: "Streamline visitor registration with our intuitive digital check-in system."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enhanced Security",
    description: "Keep your workplace secure with visitor screening and badge printing."
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Instant Notifications",
    description: "Automatically notify employees when their visitors arrive."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Meeting Scheduling",
    description: "Seamlessly schedule and manage visitor appointments."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Visitor Communication",
    description: "Send automated emails and SMS to visitors with check-in instructions."
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Analytics Dashboard",
    description: "Track visitor patterns and optimize your front desk operations."
  }
];

export function Features() {
  return (
    <section className="relative py-20 bg-[#d5bef7] overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[#d5bef7]/80 via-[#d5bef7]/50 to-white/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        
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
            Powerful Features for Modern{' '}
            <span className="bg-gradient-to-r from-primary via-accent-dark to-secondary bg-clip-text text-transparent">
              Visitor Management
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-text-secondary text-lg"
          >
            Everything you need to create a seamless visitor experience
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 w-fit group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                <div className="text-primary group-hover:text-secondary transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 