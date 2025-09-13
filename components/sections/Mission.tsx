'use client';

import { Target, Heart, Globe, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';

const missions = [
  {
    icon: Globe,
    title: 'Climate Action',
    description: 'Leading global initiatives to combat climate change through innovative solutions and community engagement.',
  },
  {
    icon: Heart,
    title: 'Sustainable Living',
    description: 'Promoting eco-friendly lifestyles and helping communities transition to sustainable practices.',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description: 'Building strong partnerships with local communities to create lasting environmental change.',
  },
  {
    icon: Target,
    title: 'Clean Energy',
    description: 'Accelerating the adoption of renewable energy sources and green technologies worldwide.',
  },
];

export function Mission() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We envision a world where environmental sustainability and human prosperity go hand in hand. 
              Our mission is to protect and restore our planet's ecosystems while building resilient communities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {missions.map((mission, index) => (
            <ScrollReveal key={mission.title} delay={index * 0.1}>
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 group-hover:bg-emerald-200 transition-colors">
                    <mission.icon className="text-emerald-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">
                    {mission.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Together We Can Make a Difference
            </h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of environmental advocates working towards a sustainable future. 
              Every action counts, every voice matters.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}