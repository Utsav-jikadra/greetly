import React, { useState } from 'react';
import { Route, Switch } from 'wouter';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { AuthModal } from './components/auth-modal';
import HomePage from './pages/home';
import FeaturesPage from './pages/features';
import PricingPage from './pages/pricing';
import AboutPage from './pages/about';
import SupportPage from './pages/support';
import { MotionConfig } from "framer-motion"; // ✅ only this is valid



function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalView, setAuthModalView] = useState('login');

  const handleAuthClick = (type) => {
    setAuthModalView(type);
    setIsAuthModalOpen(true);
  };

  return (
    <MotionConfig reducedMotion="user">
       
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar onAuthClick={handleAuthClick} />
      
      <main className="flex-grow">
        <Switch>
          <Route path="/greetly" component={HomePage} />
          <Route path="/greetly/features" component={FeaturesPage} />
          <Route path="/greetly/pricing" component={PricingPage} />
          <Route path="/greetly/about" component={AboutPage} />
          <Route path="/greetly/support" component={SupportPage} />
        </Switch>
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialView={authModalView}
      />
    </div>
    
    </MotionConfig>
  );
}

export default App;
