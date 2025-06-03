import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { LogIn, UserPlus, Menu, X, HelpCircle } from 'lucide-react';

export function Navbar({ onAuthClick }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleAuthClick = (type) => {
    setIsMenuOpen(false);
    onAuthClick(type);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent-dark bg-clip-text text-transparent">
              Greetly
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-8">
            {[
              { href: "#", text: "Home" },
              { href: "#features",text: "Features" },
              { href: "#pricing", text: "Pricing" },
              { href: "#about", text: "About" },
              { href: "#support", text: "Support" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-text-secondary hover:text-text-primary transition-colors flex items-center gap-1.5 px-2 py-1 rounded-md hover:bg-background"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
                <span className="text-sm lg:text-base font-bold">{item.text}</span>
              </motion.a>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-3 lg:space-x-4">
            <Button 
              variant="outline"
              size="sm"
              className="text-sm lg:text-base px-3 lg:px-4 py-2 group border-2 border-primary text-primary hover:bg-primary hover:text-text-light transition-all duration-300 shadow-primary/25 hover:shadow-primary/50"
              onClick={() => handleAuthClick('login')}
              title="Sign in to your account"
            >
              <LogIn className="w-4 h-4 mr-1.5 transition-transform group-hover:translate-x-1" />
              Login
            </Button>
            <Button 
              variant="default"
              size="sm"
              className="text-sm lg:text-base px-3 lg:px-4 py-2 group bg-secondary hover:bg-secondary-hover text-text-light shadow-secondary hover:shadow-secondary/50 transition-all duration-300"
              onClick={() => handleAuthClick('signup')}
              title="Create a new account"
            >
              <UserPlus className="w-4 h-4 mr-1.5 transition-transform group-hover:scale-110" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1.5 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed inset-x-0 top-16 bg-background-card border-b border-border shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="px-4 py-2 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {[
                { href: "#", icon: <Home className="w-4 h-4" />, text: "Home" },
                { href: "#features", text: "Features" },
                { href: "#pricing", text: "Pricing" },
                { href: "#about", text: "About" },
                { href: "#support", icon: <HelpCircle className="w-4 h-4" />, text: "Support" }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-background rounded-lg transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="text-base">{item.text}</span>
                </motion.a>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 pb-6">
                <Button 
                  variant="outline"
                  size="sm" 
                  className="w-full text-sm py-2.5 group border-2 border-primary text-primary hover:bg-primary hover:text-text-light transition-all duration-300 shadow-primary/25 hover:shadow-primary/50"
                  onClick={() => handleAuthClick('login')}
                >
                  <LogIn className="w-4 h-4 mr-1.5 transition-transform group-hover:translate-x-1" />
                  Login
                </Button>
                <Button 
                  variant="default"
                  size="sm" 
                  className="w-full text-sm py-2.5 group bg-secondary hover:bg-secondary-hover text-text-light shadow-secondary hover:shadow-secondary/50 transition-all duration-300"
                  onClick={() => handleAuthClick('signup')}
                >
                  <UserPlus className="w-4 h-4 mr-1.5 transition-transform group-hover:scale-110" />
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 