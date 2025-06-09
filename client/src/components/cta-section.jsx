import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Gift, Calendar, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

const CTASection = () => {
  const [, setLocation] = useLocation();

  return (
    <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
      {/* Auth Modal */}

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B1F3B] via-[#323A78] to-[#7749B9]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
          <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-[#F472B6]/20 blur-2xl" />
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-[#FFB86C]/20 blur-2xl" />
        </div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Main Content */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Let Greetly Remember,
            <span className="block mt-4">So You Don't Have To</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/90 mb-12 sm:mb-16"
          >
            Join thousands of thoughtful people who never miss life's special
            moments. Start sending meaningful greetings today.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {[
              {
                icon: Calendar,
                text: "Smart Event Reminders",
              },
              {
                icon: MessageCircle,
                text: "AI-Powered Messages",
              },
              {
                icon: Gift,
                text: "Thoughtful Gift Options",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-center gap-3 text-white/90 bg-white/10 rounded-xl px-4 py-4 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
              >
                <feature.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <Button
              size="lg"
              onClick={() => setLocation("/greetly/signup")}
              className="text-white bg-gradient-to-r from-[#09A3DA] via-[#7749B9] to-[#C03D84] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-xl shadow-[#09A3DA]/25 hover:shadow-2xl hover:shadow-[#09A3DA]/30 transition-all duration-300 mb-6 group w-full sm:w-auto max-w-md"
            >
              Start Free – No Credit Card Needed
              <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <p className="text-sm sm:text-base text-white/80">
              Free plan includes up to 50 contacts and unlimited greetings
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
