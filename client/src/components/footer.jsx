import React from 'react';
import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <a className="flex items-center">
                <span className="text-2xl font-bold text-vibrant-indigo">Greetly</span>
              </a>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Making personal connections easier with automated greetings that feel authentic.
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                {title}
              </h3>
              <ul className="mt-4 space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.onClick ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          link.onClick();
                        }}
                        className="text-base text-gray-600 hover:text-vibrant-indigo transition-colors cursor-pointer"
                      >
                        {link.label}
                      </a>
                    ) : (
                    <Link href={link.href}>
                      <a className="text-base text-gray-600 hover:text-vibrant-indigo transition-colors">
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

        <div className="mt-8 border-t border-gray-200 pt-5  flex flex-col md:flex-row justify-between items-center">
          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Greetly. All rights reserved.
          </p>
          <div className="flex space-x-6  md:mt-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-500 hover:text-vibrant-indigo transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
