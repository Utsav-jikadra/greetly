import React, { useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Users, Heart, Globe, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Heart,
    title: 'Authentic Connections',
    description: 'We believe in fostering genuine relationships through meaningful communication.'
  },
  {
    icon: Users,
    title: 'User-Centric',
    description: "Every feature we build starts with our users' needs and experiences."
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Helping people stay connected across different time zones and cultures.'
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Constantly pushing boundaries to make staying in touch effortless.'
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
    <div className="overflow-hidden">
      {/* Mission Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20 mission-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mission-content">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At Greetly, we're on a mission to make personal connections easier and more meaningful in our busy digital world. We believe that maintaining relationships shouldn't be a burden, but a joy.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="value-card p-6 border-2 hover:border-vibrant-indigo transition-colors">
                <div className="h-12 w-12 bg-vibrant-indigo/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-vibrant-indigo" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 team-section">
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