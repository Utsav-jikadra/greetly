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
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/greetly">
            <a className="flex items-center">
              <img src={logo} alt="Greetly Logo" className="h-8 w-auto sm:h-10" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className={`nav-link ${
                  location === item.href
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-primary/5 hover:text-primary'
                }`}>
                  {item.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden items-center space-x-4 md:flex">
            <Button
              variant="ghost"
              onClick={() => setLocation('/greetly/login')}
              className="btn btn-secondary"
            >
              Log In
            </Button>
            <Button
              onClick={() => setLocation('/greetly/signup')}
              className="btn btn-primary"
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground hover:bg-primary/5 hover:text-primary md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu animate-fade-in">
            <div className="container-custom py-4">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <a className={`block rounded-lg px-4 py-2.5 text-base font-medium transition-colors ${
                      location === item.href
                        ? 'bg-primary/10 text-primary'
                        : 'text-foreground hover:bg-primary/5 hover:text-primary'
                    }`}>
                      {item.label}
                    </a>
                  </Link>
                ))}
                <div className="flex-responsive mt-6">
                  <Button
                    variant="ghost"
                    onClick={() => setLocation('/greetly/login')}
                    className="btn btn-secondary w-full"
                  >
                    Log In
                  </Button>
                  <Button
                    onClick={() => setLocation('/greetly/signup')}
                    className="btn btn-primary w-full"
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 