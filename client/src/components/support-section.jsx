import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useToast } from '@/hooks/use-toast';

const faqs = [
  {
    question: "How does WhatsApp sending work?",
    answer: "We integrate with WhatsApp Business API to send messages directly from our platform. Your messages appear as if sent from your personal WhatsApp."
  },
  {
    question: "Is it really automatic?",
    answer: "Yes! Once you set up your contacts and events, Greetly will automatically send greetings on the scheduled dates. You can also send manually anytime."
  },
  {
    question: "How does AI message generation work?",
    answer: "Our AI analyzes the relationship type, occasion, and your preferred tone to craft personalized messages that sound authentically you."
  },
  {
    question: "Can I customize the AI messages?",
    answer: "Absolutely! You can edit any AI-generated message, choose different tones, or use your own custom templates."
  }
];

export function SupportSection() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const faqVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const formVariants = {
    hidden: {
      opacity: 0,
      x: 20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Frontend-only demo submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you soon.",
      variant: "success",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="support" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50" ref={sectionRef}>
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4"
            variants={itemVariants}
          >
            Help & Support
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
            variants={itemVariants}
          >
            We're here to help you make every greeting perfect
          </motion.p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* FAQ Section */}
          <motion.div
            className="space-y-4"
            variants={faqVariants}
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Frequently Asked Questions
            </motion.h3>
            <motion.div 
              className="space-y-3 sm:space-y-4"
              variants={containerVariants}
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01 }}
                >
                  <Card className="border border-gray-200 hover:border-blue-200 transition-colors duration-300">
                    <CardContent className="p-0">
                      <button
                        className="w-full text-left p-4 sm:p-5 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg transition-all duration-300"
                        onClick={() => toggleFaq(index)}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          </motion.div>
                        </div>
                      </button>
                      <AnimatePresence>
                        {openFaqIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            className="lg:pl-8"
          >
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              Get in Touch
            </motion.h3>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <Label htmlFor="name" className="text-sm font-semibold text-gray-900 mb-1.5">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your name"
                  className="mt-1 sm:mt-2 w-full text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-300"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-900 mb-1.5">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className="mt-1 sm:mt-2 w-full text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-300"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Label htmlFor="message" className="text-sm font-semibold text-gray-900 mb-1.5">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="How can we help you?"
                  className="mt-1 sm:mt-2 w-full text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-300 hover:border-blue-300"
                />
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="pt-2"
                whileHover={{ 
                  scale: 1.02,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 20
                  }
                }}
              >
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send Message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
