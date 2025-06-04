import React from 'react';
import { HeroSection } from '../components/hero-section';
import BenefitsSection from '../components/benefits-section';
import HowItWorks from '../components/how-it-works';
import Testimonials from '../components/testimonials';
import CTASection from '../components/cta-section';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
        <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default HomePage;
