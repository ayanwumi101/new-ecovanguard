'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface ProjectDetailClientProps {
  project: any;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${project.image}')`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Projects
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className="bg-emerald-600 text-white">
                  {project.category}
                </Badge>
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
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2" />
                  {project.location}
                </div>
                <div className="flex items-center">
                  <Calendar size={18} className="mr-2" />
                  {project.date}
                </div>
                <div className="flex items-center">
                  <Users size={18} className="mr-2" />
                  {project.beneficiaries || 'Multiple'} beneficiaries
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {project.progress}%
                </div>
                <div className="text-gray-600">Progress</div>
                <Progress value={project.progress} className="mt-2" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {project.budget}
                </div>
                <div className="text-gray-600">Total Budget</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {project.beneficiaries || 'Multiple'}
                </div>
                <div className="text-gray-600">People Impacted</div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {project.partners.length}
                </div>
                <div className="text-gray-600">Partners</div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Objectives */}
            <ScrollReveal>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="text-emerald-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-slate-900">
                      Project Objectives
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {project.objectives.map((objective: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Achievements */}
            <ScrollReveal delay={0.1}>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="text-emerald-600 mr-3" size={24} />
                    <h2 className="text-2xl font-bold text-slate-900">
                      Key Achievements
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {project.achievements.map((achievement: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-emerald-600 mr-3 mt-1 flex-shrink-0" size={16} />
                        <span className="text-gray-700 leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Partners */}
          <ScrollReveal delay={0.2}>
            <Card className="mt-12">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Project Partners
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.partners.map((partner: string, index: number) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-slate-900">{partner}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>

          {/* Gallery */}
          <ScrollReveal delay={0.3}>
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.gallery.map((image: string, index: number) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Help Us Continue This Work
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Your support can help us expand this project and create even greater impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Donate to This Project
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Volunteer With Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}