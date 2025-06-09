import React from 'react';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import logo from '../assets/Greetly-logo.svg';

export function Footer() {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features', onClick: () => handleScrollTo('features') },
      { label: 'Pricing', href: '#pricing', onClick: () => handleScrollTo('pricing') },
      { label: 'Testimonials', href: '#testimonials', onClick: () => handleScrollTo('testimonials') }
    ],
    Company: [
      { label: 'About', href: '#about', onClick: () => handleScrollTo('about') },
      { label: 'Support', href: '#support', onClick: () => handleScrollTo('support') },
      { label: 'Privacy Policy', href: '/privacy' }
    ],
    Resources: [
      { label: 'Blog', href: '/blog' },
      { label: 'Help Center', href: '/help' },
      { label: 'Contact', href: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Mail, href: '#', label: 'Email' }
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
          <Link href="/greetly">
            <a className="flex items-center">
              <img
                src={logo}
                alt="Greetly Logo"
                className="h-10 w-auto"
              />
            </a>
          </Link>
            <p className="mt-4 text-base text-gray-600 max-w-md">
              Making personal connections easier with automated greetings that feel authentic.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.onClick ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          link.onClick();
                        }}
                        className="text-base text-gray-600 hover:text-[#3B82F6] transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <a className="text-base text-gray-600 hover:text-[#3B82F6] transition-colors">
                          {link.label}
                        </a>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Greetly. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 sm:space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-500 hover:text-[#3B82F6] transition-colors p-2 hover:bg-blue-50 rounded-full group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 sm:h-6 sm:w-6 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
