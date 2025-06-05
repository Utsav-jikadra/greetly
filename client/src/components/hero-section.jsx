import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { PlayCircle } from 'lucide-react';
import mascotImage from '../assets/main.jpg';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import { AuthModal } from './auth-modal';

export const HeroSection = () => {
  const { scrollY } = useScroll();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Animation triggers when hero section starts going out of view
  const heroHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  
  // Transform values - top images move UP, bottom images move DOWN, all go to sides at 20-degree angle
  const img1Transform = useTransform(
    scrollY,
    [0, heroHeight * 1],
    ["translate(0, 0) rotate(-12deg)", "translate(-200px, -150px) rotate(-32deg)"]
  );

  const img2Transform = useTransform(
    scrollY,
    [0, heroHeight * 1],
    ["translate(0, 0) rotate(12deg)", "translate(200px, -150px) rotate(32deg)"]
  );

  const img4Transform = useTransform(
    scrollY,
    [heroHeight*1, heroHeight*2 ],
    ["translate(0, 0) rotate(-12deg)", "translate(-200px, -150px) rotate(-32deg)"]
  );

  const img5Transform = useTransform(
    scrollY,
    [heroHeight*1, heroHeight*2],
    ["translate(0, 0) rotate(12deg)", "translate(200px, -150px) rotate(32deg)"]
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#E6F4F1] to-white pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Background decorative elements */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        initialView="signup"
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#60A5FA]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#F472B6]/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 right-1/3 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-[#FFB86C]/10 blur-2xl" />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-[#60A5FA]/10 blur-2xl" />
      </div>

      <div className="container relative mx-auto px-4 max-w-[1920px] 2xl:max-w-[2560px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold leading-tight tracking-tight text-text-primary"
          >
            Never Miss a <span className="bg-gradient-to-r from-[#F472B6] via-[#FFB86C] to-[#60A5FA] bg-clip-text text-transparent">Special Day</span>
            <span className="inline bg-gradient-to-r from-[#60A5FA] via-[#F472B6] to-[#FFB86C] bg-clip-text text-transparent"> Again</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto mb-7 max-w-xl md:max-w-2xl 2xl:max-w-3xl text-base sm:text-lg md:text-xl 2xl:text-2xl text-text-secondary"
          >
            Schedule greetings via WhatsApp, SMS & Email — with just one click.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button 
              size="lg" 
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full sm:w-auto min-w-[200px] md:min-w-[250px] bg-[#60A5FA] hover:bg-[#3B82F6] text-white font-semibold py-3 sm:py-4 text-base sm:text-lg 2xl:text-xl shadow-lg shadow-[#60A5FA]/25 hover:shadow-xl hover:shadow-[#60A5FA]/30 transition-all duration-300"
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto min-w-[200px] md:min-w-[250px] border-2 border-[#60A5FA] text-[#60A5FA] hover:bg-[#60A5FA]/10 font-semibold py-3 sm:py-4 text-base sm:text-lg 2xl:text-xl"
            >
              <PlayCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 sm:mt-16 lg:mt-24 flex justify-center"
        >
          <div className="relative max-w-[280px] xs:max-w-[350px] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl 2xl:max-w-[2000px] z-10">
            {/* Main mascot image */}
            <img
              src={mascotImage}
              alt="Greetly Mascot"
              className="w-full h-auto aspect-[85/80] rounded-xl shadow-xl relative z-20 border-[8px] sm:border-[15px] border-white/40 backdrop-blur-sm"
            />

            {/* Floating yellow hearts */}
            <div className="absolute -left-4 sm:-left-8 -top-4 sm:-top-8 animate-float z-30">
              <div className="w-4 h-4 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full transform rotate-45"></div>
            </div>
            <div className="absolute -right-4 sm:-right-8 top-1/2 animate-float delay-150 z-30">
              <div className="w-4 h-4 sm:w-8 sm:h-8 bg-[#FFD700] rounded-full transform rotate-45"></div>
            </div>

            {/* Decorative images - Hidden on mobile, visible from sm breakpoint */}
            <div className="hidden sm:block">
              <motion.img
                src={img1}
                alt="Top Left"
                className="absolute top-[-50px] sm:top-[-100px] left-[-100px] sm:left-[-200px] w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] object-cover rounded-xl shadow-xl rotate-[-12deg] z-0 border-[8px] sm:border-[15px] border-white/40 backdrop-blur-sm"
                style={{ 
                  transform: img1Transform,
                  willChange: 'transform',
                  transformOrigin: 'center center'
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
              
              <motion.img
                src={img2}
                alt="Top Right"
                className="absolute top-[-60px] sm:top-[-120px] right-[-100px] sm:right-[-200px] w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] object-cover rounded-xl shadow-xl rotate-[12deg] z-0 border-[8px] sm:border-[15px] border-white/40 backdrop-blur-sm"
                style={{ 
                  transform: img2Transform,
                  willChange: 'transform',
                  transformOrigin: 'center center'
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
              
              <motion.img
                src={img4}
                alt="Bottom Left"
                className="absolute bottom-[-50px] sm:bottom-[-100px] left-[-90px] sm:left-[-180px] w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] object-cover rounded-xl shadow-xl rotate-[10deg] z-0 border-[8px] sm:border-[15px] border-white/40 backdrop-blur-sm"
                style={{ 
                  transform: img4Transform,
                  willChange: 'transform',
                  transformOrigin: 'center center'
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
              
              <motion.img
                src={img5}
                alt="Bottom Right"
                className="absolute bottom-[-60px] sm:bottom-[-120px] right-[-90px] sm:right-[-180px] w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] object-cover rounded-xl shadow-xl rotate-[-10deg] z-0 border-[8px] sm:border-[15px] border-white/40 backdrop-blur-sm"
                style={{ 
                  transform: img5Transform,
                  willChange: 'transform',
                  transformOrigin: 'center center'
                }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              />
            </div>
          </div>
        </motion.div>
        
        
      </div>
    </section>
  );
};

export default HeroSection;