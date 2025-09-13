'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Users, Award, Globe, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Environmental scientist with 15+ years leading sustainability initiatives globally.'
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Projects',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Former UN advisor specializing in renewable energy and climate adaptation.'
  },
  {
    name: 'Dr. Amara Okafor',
    role: 'Research Director',
    image: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Marine biologist focused on ocean conservation and sustainable fishing practices.'
  },
  {
    name: 'James Rodriguez',
    role: 'Community Outreach',
    image: 'https://images.pexels.com/photos/2182983/pexels-photo-2182983.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    bio: 'Community organizer with expertise in grassroots environmental movements.'
  }
];

const timeline = [
  {
    year: '2019',
    title: 'Foundation',
    description: 'EcoFuture was founded with a mission to combat climate change through community action.'
  },
  {
    year: '2020',
    title: 'First Major Project',
    description: 'Launched the Solar Villages Initiative, bringing clean energy to 50 remote communities.'
  },
  {
    year: '2021',
    title: 'Global Expansion',
    description: 'Extended operations to 5 continents with over 100 active projects worldwide.'
  },
  {
    year: '2022',
    title: 'Ocean Conservation',
    description: 'Started the Ocean Cleanup Program, removing over 500 tons of plastic waste.'
  },
  {
    year: '2023',
    title: 'Reforestation Milestone',
    description: 'Planted our 1 millionth tree and partnered with 200+ local organizations.'
  },
  {
    year: '2024',
    title: 'Technology Innovation',
    description: 'Launched AI-powered conservation tools and reached 25,000 direct beneficiaries.'
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Timeline animation
      gsap.utils.toArray('.timeline-item').forEach((item: any, index) => {
        gsap.fromTo(item,
          {
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About EcoFuture
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                We are a global non-governmental organization dedicated to environmental protection, 
                clean energy advancement, and building sustainable communities for future generations.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and drive our commitment to environmental stewardship.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Impact',
                description: 'Working across continents to address climate challenges at every scale.'
              },
              {
                icon: Users,
                title: 'Community First',
                description: 'Empowering local communities to lead their own environmental initiatives.'
              },
              {
                icon: Target,
                title: 'Results Driven',
                description: 'Measuring success through tangible environmental and social outcomes.'
              },
              {
                icon: Award,
                title: 'Innovation',
                description: 'Pioneering new technologies and approaches for sustainability.'
              }
            ].map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 0.1}>
                <Card className="h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
                      <value.icon className="text-emerald-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in environmental science, 
                policy, and community development.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-emerald-600 font-medium mb-3">
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From humble beginnings to global impact—see how we've grown and evolved over the years.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-500/30" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`timeline-item flex items-start ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1" />
                  
                  <div className="relative flex-shrink-0 mx-8">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {item.year.slice(-2)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <Card className="bg-slate-800 border-slate-700">
                      <CardContent className="p-6">
                        <div className="text-emerald-400 font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}