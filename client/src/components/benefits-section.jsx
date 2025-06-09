import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Bell, Sparkles, Globe, Heart, Shield } from 'lucide-react';
import { theme } from '../theme/config';

const benefits = [
  {
    icon: <MessageSquare className="h-4 w-4" />,
    title: "AI-Powered Personalization",
    image: "https://static-cse.canva.com/blob/1218654/feature_StockImages_lead_042x.jpg",
    description: "Our smart AI crafts heartfelt messages that sound authentically you, perfect for any occasion.",
    gradient: "from-[#60A5FA] to-[#3B82F6]"
  },
  {
    icon: <Bell className="h-4 w-4" />,
    title: "Never Miss a Moment", 
    image: "https://www.nasa.gov/wp-content/uploads/2025/05/image-0aeff8.jpeg?w=1024",
    description: "Intelligent reminders ensure you're always on time for birthdays, anniversaries, and special days.",
    gradient: "from-[#F472B6] to-[#EC4899]"
  },
  {
    icon: <Globe className="h-4 w-4" />,
    title: "Multi-Channel Delivery",
    image: "https://webbtelescope.org/files/live/sites/webb/files/home/news/first-images/gallery/_images/STScI-J-HeroERO-Gallery-Fallback-image-1920x1080.jpg?t=tn370",
    description: "Send greetings via WhatsApp, SMS, or Email - all from one simple dashboard.",
    gradient: "from-[#FFB86C] to-[#F59E0B]"
  },
  {
    icon: <Heart className="h-4 w-4" />,
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
    <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-b from-[#E6F4F1] to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-[#F472B6]/10 blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 h-48 sm:h-72 w-48 sm:w-72 rounded-full bg-[#60A5FA]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16 sm:mb-24"
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
              className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-white/20"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#09A3DA] via-[#7749B9] to-[#C03D84] bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-text-secondary font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 pb-2 bg-gradient-to-r from-[#09A3DA] via-[#7749B9] to-[#C03D84] bg-clip-text text-transparent">
            Why Choose Greetly?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Join thousands of thoughtful people who never miss life's special moments
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Phone Mockup */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative mx-auto w-full sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px]">
              <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-[30px] sm:rounded-[40px] border-4 sm:border-8 border-white/40 overflow-hidden shadow-xl">
                <div className="absolute inset-0 pt-8 sm:pt-12 pb-4 px-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeBenefit}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="h-full w-full rounded-2xl flex items-center justify-center overflow-hidden"
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
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-gray-200/80 rounded-full"></div>
            </div>
          </div>

          {/* Right Side Benefits List */}
          <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveBenefit(index)}
                className="group"
              >
                <div className={`bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 ${
                  activeBenefit === index ? 'border-[#60A5FA] shadow-[#60A5FA]/10' : ''
                }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-lg text-white bg-gradient-to-br ${benefit.gradient} shadow-lg`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-1 group-hover:text-[#60A5FA] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-base text-text-secondary">
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
