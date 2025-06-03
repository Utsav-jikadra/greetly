import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Gift, Menu, X } from "lucide-react";

export function Navigation({ onLoginClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-soft-cream/95 backdrop-blur-sm shadow-lg' 
        : 'bg-soft-cream/95 backdrop-blur-sm'
    } border-b border-light-gray-blue`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center text-2xl font-bold text-vibrant-indigo">
              <Gift className="mr-2 h-8 w-8" />
              Greetly
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-muted-slate hover:text-vibrant-indigo transition-colors duration-200"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-muted-slate hover:text-vibrant-indigo transition-colors duration-200"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-slate hover:text-vibrant-indigo transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('support')}
              className="text-muted-slate hover:text-vibrant-indigo transition-colors duration-200"
            >
              Support
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onLoginClick}
              className="text-vibrant-indigo hover:text-deep-indigo"
            >
              Login
            </Button>
            <Button 
              onClick={onLoginClick}
              className="bg-vibrant-indigo text-white hover:bg-deep-indigo px-6 py-2"
            >
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-light-gray-blue">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 text-muted-slate hover:text-vibrant-indigo"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 text-muted-slate hover:text-vibrant-indigo"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-muted-slate hover:text-vibrant-indigo"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('support')}
                className="block w-full text-left px-3 py-2 text-muted-slate hover:text-vibrant-indigo"
              >
                Support
              </button>
              <div className="pt-4 border-t border-light-gray-blue">
                <Button 
                  variant="ghost" 
                  onClick={onLoginClick}
                  className="w-full mb-2 text-vibrant-indigo"
                >
                  Login
                </Button>
                <Button 
                  onClick={onLoginClick}
                  className="w-full bg-vibrant-indigo text-white hover:bg-deep-indigo"
                >
                  Start Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
