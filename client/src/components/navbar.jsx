import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Greetly-logo.svg';

const navItems = [
  { label: 'Home', href: '/greetly' },
  { label: 'Features', href: '/greetly/features' },
  { label: 'Pricing', href: '/greetly/pricing' },
  { label: 'About', href: '/greetly/about' },
  { label: 'Support', href: '/greetly/support' }
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setLocation(path);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-primary/10' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
          
          {/* Logo */}
          <Link href="/greetly">
            <a className="flex items-center">
              <img
                src={logo}
                alt="Greetly Logo"
                className="h-8 sm:h-9 md:h-10 w-auto"
              />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`text-sm lg:text-base font-semibold transition-all duration-300 hover:text-primary hover:scale-105 ${
                    location === item.href ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/greetly/login')}
              className="text-sm lg:text-base text-gray-600 hover:text-primary hover:bg-primary/5 bg-white border border-gray-200 px-3 lg:px-4 py-1.5 lg:py-2 transition-all duration-300 rounded-full"
            >
              Log In
            </Button>
            <Button
              onClick={() => handleNavigation('/greetly/signup')}
              className="text-sm lg:text-base gradient-primary text-white hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 px-3 lg:px-4 py-1.5 lg:py-2"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 sm:py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl border-t border-primary/10">
            <div className="flex flex-col gap-2 sm:gap-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-sm sm:text-base font-medium transition-colors hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/5 text-left ${
                    location === item.href ? 'text-primary bg-primary/5' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 sm:pt-4 flex flex-col gap-2 sm:gap-3 px-4">
                <Button
                  variant="ghost"
                  onClick={() => handleNavigation('/greetly/login')}
                  className="w-full text-sm sm:text-base text-gray-600 hover:text-primary hover:bg-primary/5 border border-gray-200"
                >
                  Log In
                </Button>
                <Button
                  onClick={() => handleNavigation('/greetly/signup')}
                  className="w-full text-sm sm:text-base gradient-primary text-white hover:shadow-lg hover:shadow-primary/25"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};