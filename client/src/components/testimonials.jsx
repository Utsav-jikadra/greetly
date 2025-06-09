import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { theme } from '../theme/config';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "Greetly has transformed how I maintain relationships with clients. The AI-generated messages are surprisingly personal and heartfelt!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Family Person",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "Never missed a birthday since I started using Greetly. The multi-channel delivery options make it so convenient!",
      rating: 5
    },
    {
      name: "Emma Williams",
      role: "HR Manager",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "Perfect for managing employee birthdays and work anniversaries. The automated scheduling is a game-changer!",
      rating: 5
    }
  ];

  return (
    <section className={`${theme.gradients.primary} ${theme.spacing.section} relative overflow-hidden`}>
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-[#FFB86C]/10 blur-3xl" />
        <div className="absolute bottom-1/3 -left-20 h-72 w-72 rounded-full bg-[#F472B6]/10 blur-3xl" />
      </div>

      <div className={theme.spacing.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="relative"
        >
          {/* Section Header */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#09A3DA] via-[#7749B9] to-[#C03D84] bg-clip-text text-transparent">
              What Our Users Say
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Join thousands of happy users who never miss a chance to celebrate
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      stiffness: 50,
                      damping: 15
                    }
                  }
                }}
                className="group"
              >
                <div className={`${theme.cards.base} ${theme.cards.variants.gradient} ${theme.shadows.card} p-8 relative h-full`}>
                  {/* Quote Icon */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] rounded-full flex items-center justify-center text-white transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                    <Quote className="w-4 h-4" />
                  </div>

                  {/* Content */}
                  <div className="mb-6">
                    <p className="text-text-secondary italic">"{testimonial.content}"</p>
                  </div>

                  {/* Rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-[#FFB86C] fill-current"
                      />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-[#60A5FA]"
                    />
                    <div>
                      <h4 className="font-semibold text-text-primary group-hover:text-[#60A5FA] transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials; 