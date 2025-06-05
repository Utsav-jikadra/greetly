import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Users, Heart, Globe, Zap, MessageSquare, Bell, Shield, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: 'Empathy & Care',
    description: 'We put ourselves in our users shoes, designing experiences that truly resonate with their emotional needs.'
  },
  {
    icon: Shield,
    title: 'Trust & Reliability',
    description: 'We build trust through consistent, reliable service and unwavering commitment to user privacy.'
  },
  {
    icon: Globe,
    title: 'Inclusive Connection',
    description: 'We celebrate diversity and create tools that bring people together across all cultures and backgrounds.'
  },
  {
    icon: Sparkles,
    title: 'Thoughtful Innovation',
    description: 'We innovate with purpose, ensuring every new feature enhances genuine human connection.'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'We believe in transparent, honest dialogue with our users and within our team.'
  },
  {
    icon: Bell,
    title: 'Proactive Service',
    description: 'We anticipate needs and go above and beyond to delight our users with exceptional service.'
  }
];

const team = [
  {
    name: 'David Wilson',
    role: 'CEO & Founder',
    image: 'https://i.pravatar.cc/300?img=4',
    bio: 'Former tech executive passionate about meaningful connections in the digital age.'
  },
  {
    name: 'Lisa Zhang',
    role: 'Head of Product',
    image: 'https://i.pravatar.cc/300?img=5',
    bio: 'Product veteran with 10+ years experience in social and messaging platforms.'
  },
  {
    name: 'James Anderson',
    role: 'Lead Engineer',
    image: 'https://i.pravatar.cc/300?img=6',
    bio: 'AI specialist focused on creating natural, context-aware communication.'
  }
];

export default function AboutPage() {
  useEffect(() => {
    // Mission section animation
    gsap.from('.mission-content', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      scrollTrigger: {
        trigger: '.mission-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Values animation
    gsap.from('.value-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.values-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Team animation
    gsap.from('.team-card', {
      opacity: 0,
      x: -30,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.team-section',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#E6F4F1] to-white pt-16 sm:pt-24 md:pt-32 pb-10 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Mission Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#60A5FA]/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#F472B6]/10 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 right-1/3 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-[#FFB86C]/10 blur-2xl" />
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 sm:w-72 sm:h-72 rounded-full bg-[#60A5FA]/10 blur-2xl" />
      </div>
        <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mission-content">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto ">
              At Greetly, we're on a mission to make personal connections easier and more meaningful in our busy digital world. We believe that maintaining relationships shouldn't be a burden, but a joy.
            </p>
          </div>
        </div>  
      </section>

      {/* Values Section */}
      <section className="py-20 values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-text-primary mb-10">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="value-card p-6 border-2 hover:border-[#60A5FA] transition-colors hover:shadow-lg">
                <div className="h-12 w-12 bg-[#60A5FA]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-[#60A5FA]" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">{value.title}</h3>
                <p className="text-text-secondary leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="team-card overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-vibrant-indigo mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 