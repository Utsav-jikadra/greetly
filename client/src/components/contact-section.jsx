import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Mail, Phone, MessageSquare, MapPin, Send } from 'lucide-react';

export function ContactSection() {
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

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      info: "support@greetly.com",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      info: "+1 (555) 123-4567",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Available 24/7",
      info: "Start a conversation",
      color: "text-emerald-600 bg-emerald-100"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Come say hello",
      info: "123 Greetly Street, NY",
      color: "text-rose-600 bg-rose-100"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerAnimation}
        initial="hidden"
        animate="show"
      >
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4"
            variants={itemAnimation}
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemAnimation}
          >
            Have questions? We're here to help you every step of the way.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              variants={itemAnimation}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className={`p-3 rounded-lg inline-block ${method.color} mb-4`}>
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-2">{method.description}</p>
              <p className="font-medium text-gray-900">{method.info}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          variants={itemAnimation}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="How can we help you?"
                required
              />
            </div>
            <Button
              variant="contact"
              size="lg"
              type="submit"
              title="Send your message to our support team"
              className="w-full group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-lg hover:shadow-cyan-200/50 border border-cyan-200/50 transform hover:scale-[1.02] transition-all duration-300"
            >
              <span className="font-semibold">Send Message</span>
              <Send className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
            </Button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
} 