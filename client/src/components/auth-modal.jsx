import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { X, Mail, Lock, User, Phone, ArrowRight } from 'lucide-react';

export function AuthModal({ isOpen, onClose, initialView = 'login' }) {
  const [view, setView] = React.useState(initialView);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    mobile: '',
    password: ''
  });
  
  // Update view when initialView prop changes
  useEffect(() => {
    setView(initialView);
  }, [initialView]);

  if (!isOpen) return null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: -50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.5
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Get form data
    console.log(`${view} form submitted:`, formData);
    // Here you would typically make an API call
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 relative overflow-hidden"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={e => e.stopPropagation()} // Prevent closing when clicking modal
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            title="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content */}
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <motion.h2 
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                key={view} // Force animation on view change
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {view === 'login' ? 'Welcome Back' : 'Create Account'}
              </motion.h2>
              <motion.p 
                className="text-gray-600 mt-2"
                key={view + '-desc'} // Force animation on view change
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {view === 'login' 
                  ? 'Sign in to access your account' 
                  : 'Join us and start sending greetings'}
              </motion.p>
            </div>

            {/* Form */}
            <motion.form 
              className="space-y-4" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {view === 'signup' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <div className="relative">
                      <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                    <div className="relative">
                      <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange('mobile', e.target.value)}
                        required
                        pattern="[0-9]{10}"
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your mobile number"
                      />
                    </div>
                  </div>
                </>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                    className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {view === 'login' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                      <Lock className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required
                        minLength={6}
                        className="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  <div className="text-right">
                    <a 
                      href="#" 
                      className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        // Handle forgot password
                      }}
                    >
                      Forgot password?
                    </a>
                  </div>
                </>
              )}

              <Button
                variant={view === 'login' ? 'secondary' : 'default'}
                size="lg"
                type="submit"
                className="w-full group shadow-lg hover:shadow-xl"
              >
                <span className="font-semibold">
                  {view === 'login' ? 'Sign In' : 'Create Account'}
                </span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.form>

            {/* Footer */}
            <motion.div 
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <p className="text-gray-600">
                {view === 'login' ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                  className="ml-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  {view === 'login' ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 