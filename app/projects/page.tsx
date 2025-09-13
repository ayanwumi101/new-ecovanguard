'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const projects = [
  {
    id: 1,
    title: 'Solar Villages Initiative',
    description: 'Bringing clean, renewable energy to remote communities across Southeast Asia through solar panel installations and training programs.',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Clean Energy',
    location: 'Southeast Asia',
    date: '2024',
    status: 'Active',
    impact: '50+ communities served'
  },
  {
    id: 2,
    title: 'Ocean Cleanup Program',
    description: 'Removing plastic waste from our oceans using innovative cleanup technologies and preventing further pollution.',
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Conservation',
    location: 'Pacific Ocean',
    date: '2024',
    status: 'Active',
    impact: '500+ tons removed'
  },
  {
    id: 3,
    title: 'Urban Forest Restoration',
    description: 'Restoring green spaces in urban areas to improve air quality, biodiversity, and community wellbeing.',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Reforestation',
    location: 'Global',
    date: '2024',
    status: 'Expanding',
    impact: '100,000+ trees planted'
  },
  {
    id: 4,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean drinking water through well drilling and water purification systems in rural communities.',
    image: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Water',
    location: 'Sub-Saharan Africa',
    date: '2023',
    status: 'Active',
    impact: '25,000+ people served'
  },
  {
    id: 5,
    title: 'Sustainable Agriculture Program',
    description: 'Teaching farmers sustainable farming techniques to increase yields while protecting the environment.',
    image: 'https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Agriculture',
    location: 'Latin America',
    date: '2023',
    status: 'Completed',
    impact: '500+ farmers trained'
  },
  {
    id: 6,
    title: 'Wildlife Protection Network',
    description: 'Establishing protected areas and anti-poaching measures to preserve endangered species and their habitats.',
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Wildlife',
    location: 'East Africa',
    date: '2023',
    status: 'Active',
    impact: '10+ species protected'
  }
];

const categories = ['All', 'Clean Energy', 'Conservation', 'Reforestation', 'Water', 'Agriculture', 'Wildlife'];

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Filter projects based on search and category
  const handleFilter = () => {
    let filtered = projects;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  // Apply filters whenever search term or category changes
  React.useEffect(() => {
    handleFilter();
  }, [searchTerm, selectedCategory]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Projects
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Discover the initiatives that are making a real difference in communities around the world. 
                From clean energy to conservation, we're creating lasting environmental impact.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full lg:w-48 h-12">
                  <Filter size={16} className="mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="text-sm text-gray-500">
                {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${searchTerm}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <motion.div
                    layout
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-white/90 text-slate-900">
                            {project.category}
                          </Badge>
                          <Badge 
                            variant="secondary" 
                            className={`
                              ${project.status === 'Active' ? 'bg-emerald-500 text-white' : 
                                project.status === 'Expanding' ? 'bg-amber-500 text-white' : 
                                project.status === 'Completed' ? 'bg-blue-500 text-white' :
                                'bg-gray-500 text-white'}
                            `}
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                          {project.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin size={14} className="mr-2" />
                            {project.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar size={14} className="mr-2" />
                            {project.date}
                          </div>
                          <div className="text-sm font-medium text-emerald-600">
                            Impact: {project.impact}
                          </div>
                        </div>
                        
                        <Link href={`/projects/${project.id}`}>
                          <Button variant="ghost" className="group p-0 h-auto font-medium justify-start">
                            Learn More
                            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}