import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Bell, Sparkles, Globe, Heart, Shield } from 'lucide-react';
import { theme } from '../theme/config';

const benefits = [
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "AI-Powered Personalization",
    image: "https://static-cse.canva.com/blob/1218654/feature_StockImages_lead_042x.jpg",
    description: "Our smart AI crafts heartfelt messages that sound authentically you, perfect for any occasion.",
    gradient: "from-[#60A5FA] to-[#3B82F6]"
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Never Miss a Moment", 
    image: "https://www.nasa.gov/wp-content/uploads/2025/05/image-0aeff8.jpeg?w=1024",
    description: "Intelligent reminders ensure you're always on time for birthdays, anniversaries, and special days.",
    gradient: "from-[#F472B6] to-[#EC4899]"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Multi-Channel Delivery",
    image: "https://webbtelescope.org/files/live/sites/webb/files/home/news/first-images/gallery/_images/STScI-J-HeroERO-Gallery-Fallback-image-1920x1080.jpg?t=tn370",
    description: "Send greetings via WhatsApp, SMS, or Email - all from one simple dashboard.",
    gradient: "from-[#FFB86C] to-[#F59E0B]"
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Personal Touch",
    image: "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/50ddb44e-ee96-4e10-b5a9-af1d0ad5af14/magic-photo_resources_Marrytextandimagesinyourdesigns_2x.png",
    description: "Add photos, GIFs, and custom messages to make every greeting uniquely meaningful.",
    gradient: "from-[#F472B6] to-[#EC4899]"
  }
];

export function BenefitsSection() {
  const [activeBenefit, setActiveBenefit] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBenefit((prev) => (prev + 1) % benefits.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${theme.gradients.primary} ${theme.spacing.section} relative overflow-hidden min-h-[80vh] 2xl:min-h-[70vh]`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 h-72 w-72 rounded-full bg-[#F472B6]/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 h-72 w-72 rounded-full bg-[#60A5FA]/10 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
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
        className="mb-8 2xl:mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 "
      >
        {[
          { number: "4.9/5", label: "Average Rating" },
          { number: "10K+", label: "Happy Users" },
          { number: "99%", label: "Would Recommend" }
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
            className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.shadows.card} 
              p-8 text-center hover:bg-gradient-to-br hover:from-[#60A5FA]/5 hover:to-transparent rounded-2xl`}
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

      <div className={`${theme.spacing.container} max-w-[1920px] 2xl:max-w-[1600px] mx-auto`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 2xl:mb-16"
        >
          <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-bold mb-4 gradient-text">
            Why Choose Greetly?
          </h2>
          <p className="text-lg 2xl:text-xl text-text-secondary max-w-2xl mx-auto">
            Join thousands of thoughtful people who never miss life's special moments
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 max-w-6xl mx-auto">
          {/* Phone Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative mx-auto w-[600px] h-[600px]">
              <div className={`absolute inset-0 ${theme.cards.base} ${theme.cards.variants.gradient} ${theme.shadows.card} rounded-[40px] border-8 border-gray-200 overflow-hidden`}>
                <div className="absolute top-0 left-0 right-0 h-12 w-full bg-gray-100 rounded-t-[32px] flex items-center justify-center">
                  <div className="w-24 h-6 bg-gray-200 rounded-full"></div>
                </div>
                
                <div className="absolute inset-0 pt-12 pb-4 px-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeBenefit}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="h-full w-full rounded-2xl flex items-center justify-center"
                    >
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={theme.animations.spring}
                        className="w-full h-full"
                      >
                        <img 
                          src={benefits[activeBenefit].image}
                          alt={benefits[activeBenefit].title}
                          className="w-full h-full rounded-2xl object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gray-200 rounded-full"></div>
            </div>
          </div>

          {/* Right Side Benefits List */}
          <div className="w-full lg:w-1/2 space-y-6 ">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveBenefit(index)}
                className="relative hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-2 hover:border-white/20 hover:bg-white/10 rounded-2xl"
              >
                <div className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.shadows.card} p-6 rounded-2xl
                  ${activeBenefit === index ? 'border-2 border-[#60A5FA]' : ''}`}
                >
                  <div className="flex items-start gap-4 rounded-2xl">
                    <div className={`p-3 rounded-xl text-white bg-gradient-to-br ${benefit.gradient}`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {benefit.title}
                      </h3>
                      <p className="text-text-secondary mt-1">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
