import React, { useState } from 'react';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HeroSection } from './components/hero-section';
import { FeaturesSection } from './components/features-section';
import { PricingSection } from './components/pricing-section';
import { AboutSection } from './components/about-section';
import { SupportSection } from './components/support-section';
import { AuthModal } from './components/auth-modal';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState('login');
  const [activeSection, setActiveSection] = useState('home');

  const handleAuthClick = (type) => {
    setAuthModalView(type); // Set the view type (login/signup)
    setIsAuthModalOpen(true); // Open the modal
  };

  const handleFormSubmit = (formData, formType) => {
    console.log(`${formType} form submitted:`, formData);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar 
        onAuthClick={handleAuthClick}
        onSectionChange={setActiveSection} 
      />
      
      <main className="flex-grow">
        <section id="home">
          <HeroSection 
            onStartFree={() => handleAuthClick('signup')}
            onWatchDemo={() => {/* Handle demo */}}
          />
        </section>
        
        <section id="features">
          <FeaturesSection />
        </section>
        
        <section id="pricing">
          <PricingSection 
            onGetStarted={() => handleAuthClick('signup')}
            onFormSubmit={(data) => handleFormSubmit(data, 'pricing')}
          />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="support">
          <SupportSection 
            onFormSubmit={(data) => handleFormSubmit(data, 'support')}
          />
        </section>
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialView={authModalView}
      />
    </div>
  );
}

export default App;
