import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-[#60A5FA]/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent">Greetly</a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`text-base font-medium transition-all duration-300 hover:text-[#60A5FA] hover:scale-105 ${
                    location === item.href ? 'text-[#60A5FA]' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => setLocation('/greetly/login')}
              className="text-gray-600 hover:text-[#60A5FA] hover:bg-[#60A5FA]/5 bg-white border border-gray-200 px-4 py-2 transition-all duration-300 rounded-full"
            >
              Log In
            </Button>
            <Button
              onClick={() => setLocation('/greetly/signup')}
              className="bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-[#60A5FA]/25 transition-all duration-300"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl border-t border-[#60A5FA]/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={`text-sm font-medium transition-colors hover:text-[#60A5FA] px-4 py-2 rounded-lg hover:bg-[#60A5FA]/5 ${
                      location === item.href ? 'text-[#60A5FA] bg-[#60A5FA]/5' : 'text-gray-600'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3 px-4">
                <Button
                  variant="ghost"
                  onClick={() => setLocation('/greetly/login')}
                  className="w-full text-gray-600 hover:text-[#60A5FA] hover:bg-[#60A5FA]/5 border border-gray-200"
                >
                  Log In
                </Button>
                <Button
                  onClick={() => setLocation('/greetly/signup')}
                  className="w-full bg-gradient-to-r from-[#60A5FA] to-[#3B82F6] text-white hover:shadow-lg hover:shadow-[#60A5FA]/25"
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