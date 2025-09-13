'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, HandHeart } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Ready to Make a 
                <span className="gradient-text block">Lasting Impact?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your actions today shape tomorrow's world. Join our community of environmental 
                champions and be part of the solution to our planet's greatest challenges.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full group"
                  >
                    <HandHeart className="mr-2" size={20} />
                    Volunteer With Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg rounded-full group"
                >
                  <Heart className="mr-2" size={18} />
                  Make a Donation
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="left">
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Volunteers planting trees"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg z-20"
                animate={{ 
                  y: [-5, 5, -5],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="text-emerald-600" size={32} />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center shadow-lg z-20"
                animate={{ 
                  y: [5, -5, 5],
                  rotate: [0, -5, 0, 5, 0]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <HandHeart className="text-cyan-600" size={24} />
              </motion.div>
              
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/30 to-cyan-200/30 rounded-2xl transform rotate-3 scale-105 -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}