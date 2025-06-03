import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageSquare, Calendar, Sparkles, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { BenefitsSection } from '@/components/benefits-section';
import { FeaturesSection } from '@/components/features-section';
import { PricingSection } from '@/components/pricing-section';
import { AboutSection } from '@/components/about-section';
import { SupportSection } from '@/components/support-section';
import { Footer } from '@/components/footer';
import { LoginModal } from '@/components/login-modal';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: MessageSquare,
    title: 'AI-Powered Messages',
    description: 'Let our AI craft personalized messages that sound authentically you.'
  },
  {
    icon: Calendar,
    title: 'Smart Scheduling',
    description: "Set it and forget it. We'll remember every important date for you."
  },
  {
    icon: Send,
    title: 'Multi-Platform',
    description: 'Send greetings via WhatsApp, Email, SMS, and more.'
  }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Small Business Owner',
    content: 'Greetly has transformed how I maintain relationships with my clients. The personalized touch is incredible!',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director',
    content: 'The AI-generated messages are surprisingly personal. It saves me hours every week.',
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    name: 'Emma Davis',
    role: 'HR Manager',
    content: 'Perfect for keeping in touch with our remote team. The birthday messages are always a hit!',
    image: 'https://i.pravatar.cc/150?img=3'
  }
];

export function HomePage() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleStartFree = () => {
    setIsLoginModalOpen(true);
  };

  const handleWatchDemo = () => {
    // Create a demo video modal or redirect
    alert('Demo video would open here! 🎥');
  };

  const handleSelectPlan = (plan) => {
    if (plan === 'business') {
      alert('Demo booking form would open here! 📅');
    } else {
      setIsLoginModalOpen(true);
    }
  };

  useEffect(() => {
    // Hero section animation
    gsap.from('.hero-content', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Features animation
    gsap.from('.feature-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.features-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Testimonials animation
    gsap.from('.testimonial-card', {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-soft-cream">
      <Navigation onLoginClick={handleLoginClick} />
      
      <main>
        <HeroSection 
          onStartFree={handleStartFree}
          onWatchDemo={handleWatchDemo}
        />
        <BenefitsSection />
        <FeaturesSection />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <AboutSection />
        <SupportSection />
      </main>
      
      <Footer />
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}
