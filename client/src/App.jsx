import React from 'react';
import { Route, Switch } from 'wouter';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import HomePage from './pages/home';
import FeaturesPage from './pages/features';
import PricingPage from './pages/pricing';
import AboutPage from './pages/about';
import SupportPage from './pages/support';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import { MotionConfig } from "framer-motion";
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollToTop />
      <Navbar />
      
      <main className="flex-grow">
        <Switch>
          <Route path="/greetly" component={HomePage} />
          <Route path="/greetly/features" component={FeaturesPage} />
          <Route path="/greetly/pricing" component={PricingPage} />
          <Route path="/greetly/about" component={AboutPage} />
          <Route path="/greetly/support" component={SupportPage} />
          <Route path="/greetly/login" component={LoginPage} />
          <Route path="/greetly/signup" component={SignupPage} />
        </Switch>
      </main>

      <Footer />
    </div>
    </MotionConfig>
  );
}

export default App;
