import { motion } from 'framer-motion';
import { MessageCircle, Bell, Bot, Smartphone } from "lucide-react";
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { staggerContainer, staggerItem } from '@/lib/animations';

const benefits = [
  {
    icon: MessageCircle,
    title: "One-click WhatsApp Send",
    description: "Send personalized greetings directly through WhatsApp with a single tap",
    color: "bg-vibrant-indigo"
  },
  {
    icon: Bell,
    title: "Smart Event Reminders",
    description: "Never forget another birthday, anniversary, or special occasion",
    color: "bg-bright-coral"
  },
  {
    icon: Bot,
    title: "AI-Powered Messages",
    description: "Generate heartfelt, personalized messages that feel authentically you",
    color: "bg-fresh-mint"
  },
  {
    icon: Smartphone,
    title: "Works on Web & Mobile",
    description: "Access your greetings anywhere, anytime, on any device",
    color: "bg-vibrant-indigo"
  }
];

export function BenefitsSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="benefits" className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-black mb-4">
            Why Choose Greetly?
          </h2>
          <p className="text-xl text-muted-slate max-w-3xl mx-auto">
            Transform how you connect with the people who matter most
          </p>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate={isIntersecting ? "animate" : "initial"}
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div 
                key={index}
                variants={staggerItem}
                className="text-center p-6 rounded-2xl bg-soft-cream hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <div className={`${benefit.color} text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-charcoal-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-slate">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
