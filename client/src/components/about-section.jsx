import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { slideInLeft, slideInRight } from '@/lib/animations';

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-16 bg-soft-cream" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={slideInLeft.initial}
            animate={isIntersecting ? slideInLeft.animate : slideInLeft.initial}
            transition={slideInLeft.transition}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal-black mb-6">
              Our Mission: Bringing Joy Through Connection
            </h2>
            <p className="text-lg text-muted-slate mb-6 leading-relaxed">
              We built Greetly because we kept forgetting birthdays! Our team of forgetful but caring people created this solution to help everyone stay kind and connected — without the stress.
            </p>
            <p className="text-lg text-muted-slate mb-8 leading-relaxed">
              Every special moment deserves to be celebrated. Greetly helps you be the friend, family member, or colleague who always remembers and always cares.
            </p>
            
            <div className="bg-white p-6 rounded-xl border-l-4 border-bright-coral shadow-lg">
              <h3 className="text-xl font-semibold text-charcoal-black mb-3">Our Story</h3>
              <p className="text-muted-slate leading-relaxed">
                Built by a team that kept forgetting birthdays! We've all been there - missing important dates, 
                scrambling for last-minute wishes, or sending generic messages. Greetly is our solution to help 
                people stay kind and connected — without the stress.
              </p>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-vibrant-indigo">10K+</div>
                <div className="text-muted-slate text-sm">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vibrant-indigo">50K+</div>
                <div className="text-muted-slate text-sm">Messages Sent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-vibrant-indigo">99%</div>
                <div className="text-muted-slate text-sm">Delivery Rate</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={slideInRight.initial}
            animate={isIntersecting ? slideInRight.animate : slideInRight.initial}
            transition={slideInRight.transition}
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg w-full h-48 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Mobile messaging" 
                className="rounded-xl shadow-lg mt-8 w-full h-48 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Celebration and greetings" 
                className="rounded-xl shadow-lg -mt-8 w-full h-48 object-cover" 
              />
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
                alt="Team celebration" 
                className="rounded-xl shadow-lg w-full h-48 object-cover" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
