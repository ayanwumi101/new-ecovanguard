'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Plus } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { events } from '@/lib/data/projects';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Conference', 'Workshop', 'Expo', 'Webinar'];
  
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const generateCalendarLink = (event: any) => {
    const startDate = new Date(event.date).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const endDate = new Date(event.endDate).toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    const title = encodeURIComponent(event.title);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Upcoming Events
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Join us at environmental conferences, workshops, and community events around the world. 
                Connect with like-minded individuals and make a difference together.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-emerald-600 hover:bg-emerald-700'
                      : 'hover:bg-emerald-50 hover:border-emerald-300'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <ScrollReveal key={event.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/90 text-slate-900">
                          {event.category}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`
                            ${event.type === 'In-person' ? 'bg-emerald-500 text-white' : 
                              event.type === 'Hybrid' ? 'bg-amber-500 text-white' : 
                              'bg-blue-500 text-white'}
                          `}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      
                      {/* Date badge */}
                      <div className="absolute top-4 right-4 bg-white/90 text-slate-900 px-3 py-1 rounded-lg text-sm font-medium">
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    <CardContent className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed flex-1">
                        {event.description}
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-2" />
                          {formatDate(event.date)}
                          {event.date !== event.endDate && ` - ${formatDate(event.endDate)}`}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin size={14} className="mr-2" />
                          {event.location}
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <a
                          href={generateCalendarLink(event)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                        >
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="w-full hover:bg-emerald-50 hover:border-emerald-300"
                          >
                            <Plus size={14} className="mr-2" />
                            Add to Calendar
                          </Button>
                        </a>
                        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                          <Users size={14} className="mr-2" />
                          Join
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Calendar size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No events found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category or check back later for new events.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Never Miss an Event
            </h2>
            <p className="text-xl mb-8 text-emerald-100">
              Subscribe to our newsletter to get notified about upcoming environmental events and opportunities.
            </p>
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
              Subscribe to Updates
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}