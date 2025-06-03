import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "./ui/button";
import { RocketIcon, PlayCircleIcon, GiftIcon, HeartIcon, CakeIcon } from 'lucide-react';

export function HeroSection({ onStartFree, onWatchDemo }) {
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

  const floatingAnimation = {
    y: [-10, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemAnimation}
            >
              Never Miss a{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-600">Special Day</span>
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-3 bg-blue-200 rounded-full -rotate-1"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>{' '}
              Again.
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 mb-8 leading-relaxed"
              variants={itemAnimation}
            >
              Schedule greetings via WhatsApp, SMS & Email — with just one click. 
              <span className="font-medium text-gray-900"> AI-powered messages</span> that make every occasion special.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemAnimation}
            >
              <Button 
                size="lg"
                onClick={onStartFree}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <RocketIcon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                Start Free
              </Button>
              <Button 
                variant="outline"
                size="lg"
                onClick={onWatchDemo}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <PlayCircleIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Preview */}
          <motion.div 
            className="relative"
            variants={itemAnimation}
          >
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-6 relative z-10 transform hover:scale-[1.02] transition-transform duration-300"
              whileHover={{ rotate: 0 }}
              initial={{ rotate: 2 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl mb-6">
                <div className="flex items-center space-x-3">
                  <GiftIcon className="h-6 w-6" />
                  <span className="font-bold text-lg">Greetly</span>
                </div>
                <div className="text-sm font-medium">9:30 AM</div>
              </div>

              {/* Messages */}
              <div className="space-y-4">
                <motion.div 
                  className="bg-gray-50 p-4 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-base">🎉 Happy Birthday Sarah! Hope your special day is filled with joy!</p>
                  <p className="text-sm text-gray-500 mt-2">Sent via WhatsApp</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl ml-auto max-w-[80%]"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-base">✓ Message delivered</p>
                  <p className="text-sm opacity-90">Auto-sent by Greetly</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-base">📱 Next: John's anniversary tomorrow</p>
                  <p className="text-sm opacity-90">Ready to send</p>
                </motion.div>
              </div>

              {/* Floating Icons */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-gradient-to-br from-rose-500 to-rose-600 text-white p-3 rounded-full shadow-lg"
                animate={floatingAnimation}
                whileHover={{ scale: 1.1 }}
              >
                <CakeIcon className="h-7 w-7" />
              </motion.div>

              <motion.div 
                className="absolute top-1/4 -right-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white p-3 rounded-full shadow-lg"
                animate={floatingAnimation}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <GiftIcon className="h-7 w-7" />
              </motion.div>

              <motion.div 
                className="absolute bottom-1/4 -left-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg"
                animate={floatingAnimation}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <HeartIcon className="h-7 w-7" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
