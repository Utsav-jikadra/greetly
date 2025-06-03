import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Gift, X } from "lucide-react";
import { scaleIn } from '@/lib/animations';

export function LoginModal({ isOpen, onClose }) {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [emailOrMobile, setEmailOrMobile] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { emailOrMobile });
    alert('OTP sent! Check your email/SMS.');
  };

  const handleGoogleAuth = () => {
    console.log('Google auth clicked');
    alert('Google authentication would be implemented here');
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-md">
            <motion.div
              initial={scaleIn.initial}
              animate={scaleIn.animate}
              exit={scaleIn.initial}
              transition={scaleIn.transition}
            >
              <DialogHeader className="text-center mb-6">
                <div className="flex items-center justify-center mb-4">
                  <Gift className="h-8 w-8 text-accent-500 mr-2" />
                  <span className="text-3xl font-bold text-primary-600">Greetly</span>
                </div>
                <DialogTitle className="text-2xl font-semibold text-text-primary">
                  {isLoginMode ? 'Welcome Back' : 'Create Account'}
                </DialogTitle>
                <p className="text-text-secondary">
                  {isLoginMode ? 'Sign in to continue spreading joy' : 'Join thousands spreading joy daily'}
                </p>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="emailOrMobile" className="text-sm font-medium text-text-primary">
                    Email or Mobile
                  </Label>
                  <Input
                    id="emailOrMobile"
                    type="text"
                    value={emailOrMobile}
                    onChange={(e) => setEmailOrMobile(e.target.value)}
                    placeholder="email@example.com or +91 98765 43210"
                    className="mt-2 border-border-color focus:border-primary-600 focus:ring-primary-200"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="default"
                  size="lg"
                  className="w-full"
                >
                  {isLoginMode ? 'Send OTP' : 'Create Account'}
                </Button>
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border-color"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-text-secondary">Or continue with</span>
                  </div>
                </div>
                
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={handleGoogleAuth}
                  className="w-full group"
                >
                  <svg className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-text-secondary">
                  {isLoginMode ? "Don't have an account?" : "Already have an account?"}
                  <button 
                    className="text-primary-600 font-semibold hover:text-primary-700 ml-1"
                    onClick={toggleMode}
                  >
                    {isLoginMode ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              </div>
              
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-text-secondary hover:text-primary-600 transition-colors">
                  Download mobile app
                </a>
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
