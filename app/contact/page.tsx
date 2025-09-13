'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    details: 'info@ecofuture.org',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: '+1 (555) 123-4567',
    description: 'Mon-Fri from 8am to 5pm'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    details: '123 Green Street, Eco City, EC 12345',
    description: 'Our headquarters'
  },
  {
    icon: Clock,
    title: 'Office Hours',
    details: 'Mon-Fri: 8am-5pm',
    description: 'Weekend by appointment'
  }
];

const offices = [
  {
    city: 'New York',
    address: '123 Green Street, New York, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'ny@ecofuture.org'
  },
  {
    city: 'London',
    address: '456 Eco Lane, London, UK SW1A 1AA',
    phone: '+44 20 7123 4567',
    email: 'london@ecofuture.org'
  },
  {
    city: 'Singapore',
    address: '789 Sustainability Ave, Singapore 018956',
    phone: '+65 6123 4567',
    email: 'singapore@ecofuture.org'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: ''
      });
    }, 1000);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-emerald-900 to-cyan-900 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Ready to make a difference? We'd love to hear from you. Whether you want to volunteer, 
                partner with us, or learn more about our work, we're here to help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
                        <info.icon className="text-emerald-600" size={32} />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {info.title}
                      </h3>
                      <p className="text-lg font-medium text-emerald-600 mb-2">
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Have a question or want to get involved? Fill out the form below and we'll get back to you as soon as possible.
                </p>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-2"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType">Inquiry Type</Label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="donation">Donation</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                          <SelectItem value="general">General Question</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="mt-2"
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg"
                    >
                      {isLoading ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-6">
                      <CheckCircle className="text-emerald-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </div>
            </ScrollReveal>

            {/* Map & Additional Info */}
            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p>Interactive Map</p>
                    <p className="text-sm">123 Green Street, Eco City</p>
                  </div>
                </div>

                {/* Office Locations */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                      <Globe className="mr-2 text-emerald-600" size={20} />
                      Our Global Offices
                    </h3>
                    <div className="space-y-6">
                      {offices.map((office, index) => (
                        <div key={office.city} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                          <h4 className="font-semibold text-slate-900 mb-2">{office.city}</h4>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p className="flex items-start">
                              <MapPin size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                              {office.address}
                            </p>
                            <p className="flex items-center">
                              <Phone size={14} className="mr-2 flex-shrink-0" />
                              {office.phone}
                            </p>
                            <p className="flex items-center">
                              <Mail size={14} className="mr-2 flex-shrink-0" />
                              {office.email}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Link */}
                <Card className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200">
                  <CardContent className="p-6 text-center">
                    <MessageSquare className="mx-auto text-emerald-600 mb-4" size={32} />
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Frequently Asked Questions
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Find quick answers to common questions about our work and how to get involved.
                    </p>
                    <Button variant="outline" size="sm">
                      View FAQ
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Action?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of environmental advocates making a real difference in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
                Become a Volunteer
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Make a Donation
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}