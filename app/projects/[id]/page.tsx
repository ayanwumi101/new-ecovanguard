'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Users, Target, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
import { projects } from '@/lib/data/projects';

// Extended project data for detailed view
const extendedProjectData: { [key: number]: any } = {
  1: {
    progress: 75,
    budget: '$2.5M',
    beneficiaries: '15,000+',
    partners: ['UN Development Programme', 'Asian Development Bank', 'Local Energy Cooperatives'],
    objectives: [
      'Install 500MW of solar capacity across rural communities',
      'Train 200 local technicians in solar maintenance',
      'Establish sustainable financing models for energy access',
      'Reduce carbon emissions by 50,000 tons annually'
    ],
    achievements: [
      'Completed installations in 50 villages',
      'Trained 150 local technicians',
      'Generated 300MW of clean energy',
      'Reduced energy costs by 60% for participating communities'
    ],
    gallery: [
      'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2800549/pexels-photo-2800549.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ]
  },
  2: {
    progress: 60,
    budget: '$3.2M',
    beneficiaries: '50,000+',
    partners: ['Ocean Conservancy', 'National Geographic', 'Maritime Clean Energy'],
    objectives: [
      'Remove 1,000 tons of plastic waste from ocean surface',
      'Deploy 10 autonomous cleanup systems',
      'Educate 100,000 people about ocean conservation',
      'Influence policy changes in 5 coastal nations'
    ],
    achievements: [
      'Removed 500+ tons of plastic waste',
      'Deployed 6 autonomous cleanup systems',
      'Educated 60,000 people through outreach programs',
      'Influenced 3 major policy changes'
    ],
    gallery: [
      'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ]
  },
  3: {
    progress: 85,
    budget: '$1.8M',
    beneficiaries: '250,000+',
    partners: ['World Wildlife Fund', 'Urban Development Council', 'Green Cities Initiative'],
    objectives: [
      'Plant 100,000 native trees in urban areas',
      'Create 50 new green spaces and parks',
      'Improve air quality by 30% in target areas',
      'Engage 10,000 community volunteers'
    ],
    achievements: [
      'Planted 85,000 trees across 25 cities',
      'Created 42 new parks and green spaces',
      'Improved air quality by 25% in participating areas',
      'Engaged 8,500 community volunteers'
    ],
    gallery: [
      'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    ]
  }
};

export default function ProjectDetail() {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  
  // Find the project from the centralized data
  const baseProject = projects.find(p => p.id === projectId);
  const extendedProject = extendedProjectData[projectId];

  if (!baseProject || !extendedProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Project Not Found</h1>
          <Link href="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Combine base and extended project data
  const project = {
    ...baseProject,
    ...extendedProject
  };

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
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-emerald-600 h-2 rounded-full transition-all" 
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
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
                  {project.beneficiaries}
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