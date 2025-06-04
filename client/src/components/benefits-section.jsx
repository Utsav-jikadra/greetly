import React, { useState } from 'react';
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

  return (
    <section className={`${theme.gradients.primary} ${theme.spacing.section} relative overflow-hidden min-h-screen`}>
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
        className=" mb-10 grid grid-cols-1 md:grid-cols-3 gap-8"
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
              p-8 text-center hover:bg-gradient-to-br hover:from-[#60A5FA]/5 hover:to-transparent`}
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

      <div className={`${theme.spacing.container} max-w-[1920px] mx-auto`}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Why Choose Greetly?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Join thousands of thoughtful people who never miss life's special moments
          </p>
        </motion.div>

        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 max-w-5xl mx-auto">
          {/* Left Side Images Container */}
          <div className="hidden lg:block lg:w-[48%] sticky top-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`main-${activeBenefit}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Main Image */}
                <div className="w-full h-[480px] rounded-2xl overflow-hidden shadow-xl relative">
                  <img
                    src={benefits[activeBenefit].image}
                    alt={`${benefits[activeBenefit].title} visualization`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Image Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-white text-xl font-semibold">
                      {benefits[activeBenefit].title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Benefits List */}
          <div className="lg:w-[48%]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "spring",
                        stiffness: 50,
                        damping: 15
                      }
                    }
                  }}
                  onClick={() => setActiveBenefit(index)}
                  className={`cursor-pointer group ${index === activeBenefit ? 'scale-102' : ''} transition-all duration-300`}
                >
                  <div className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.shadows.card} p-4 relative
                    hover:bg-gradient-to-br hover:from-card-hovered/50 hover:to-transparent transition-all duration-300
                    border border-white/10 hover:border-white/20 ${index === activeBenefit ? 'border-white/30 bg-white/5' : ''}
                    transform hover:-translate-y-2 hover:scale-[1.02] rounded-xl`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon and Number */}
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${benefit.gradient} p-2 text-white
                          transform transition-all duration-300 flex items-center justify-center`}
                        >
                          {benefit.icon}
                        </div>
                        <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold text-white/90 group-hover:bg-white/20 transition-colors duration-300">
                          {index + 1}
                        </div>
                      </div>
                      
                      {/* Title and Description */}
                      <div className="flex-1">
                        <h3 className="text-base font-semibold text-text-primary group-hover:text-[#60A5FA] transition-colors duration-300">
                          {benefit.title}
                        </h3>
                        <p className="text-text-secondary text-sm mt-1.5 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
