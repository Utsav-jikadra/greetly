import React from 'react';
import { HeroSection } from '../components/hero-section';
import BenefitsSection from '../components/benefits-section';
import HowItWorks from '../components/how-it-works';
import Testimonials from '../components/testimonials';
import CTASection from '../components/cta-section';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <HeroSection />
      <div className="space-y-24 md:space-y-32">
        <BenefitsSection />
        <HowItWorks />
        <Testimonials />
        <CTASection />
      </div>
    </div>
  );
};

export default HomePage;
