'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    id: 1,
    title: 'Solar Villages Initiative',
    description: 'Bringing clean, renewable energy to remote communities across Southeast Asia.',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Clean Energy',
    location: 'Southeast Asia',
    date: '2024',
    status: 'Active'
  },
  {
    id: 2,
    title: 'Ocean Cleanup Program',
    description: 'Removing plastic waste from our oceans using innovative cleanup technologies.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Conservation',
    location: 'Pacific Ocean',
    date: '2024',
    status: 'Active'
  },
  {
    id: 3,
    title: 'Urban Forest Restoration',
    description: 'Restoring green spaces in urban areas to improve air quality and biodiversity.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Reforestation',
    location: 'Global',
    date: '2024',
    status: 'Expanding'
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our ongoing initiatives that are making a real impact on environmental conservation 
              and sustainable development worldwide.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-900">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${project.status === 'Active' ? 'bg-emerald-500 text-white' : 
                            project.status === 'Expanding' ? 'bg-amber-500 text-white' : 
                            'bg-gray-500 text-white'}
                        `}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      <div className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.date}
                      </div>
                    </div>
                    
                    <Link href={`/projects/${project.id}`}>
                      <Button variant="ghost" className="group p-0 h-auto font-medium">
                        Learn More
                        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link href="/projects">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-8">
                View All Projects
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}