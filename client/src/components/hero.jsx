import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#d5bef7] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d5bef7]/80 via-[#d5bef7]/50 to-white/30" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 via-[#d5bef7]/40 to-secondary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-secondary/20 via-[#d5bef7]/40 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-white/20 rounded-full blur-2xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff30_1px,transparent_1px),linear-gradient(to_bottom,#ffffff30_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 shadow-sm hover:border-primary/30 transition-colors"
          >
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-text-primary text-sm font-medium">
              Revolutionizing Visitor Management
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight mt-8"
          >
            Welcome to the Future of{' '}
            <span className="bg-gradient-to-r from-primary via-accent-dark to-secondary bg-clip-text text-transparent">
              Visitor Management
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-text-secondary text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Streamline your front desk operations with our intelligent visitor management system.
            Enhance security, improve efficiency, and create a lasting first impression.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base h-12 px-8 bg-primary hover:bg-primary-hover text-text-light shadow-primary hover:shadow-primary/50 group"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-base h-12 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-text-light transition-all duration-300 backdrop-blur-sm bg-white/50"
            >
              Watch Demo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto"
          >
            {[
              { number: "10K+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 