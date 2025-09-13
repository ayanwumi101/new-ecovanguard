'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      
      // Animate hero elements
      tl.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
      .fromTo(subtitleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      )
      .fromTo(buttonRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
        '-=0.4'
      );

      // Floating animation for elements
      gsap.to('.floating', {
        y: -20,
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="hero-bg absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="floating absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-60"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 0
          }}
        />
        <motion.div
          className="floating absolute top-1/3 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-40"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            delay: 1
          }}
        />
        <motion.div
          className="floating absolute bottom-1/3 left-1/5 w-1.5 h-1.5 bg-amber-400 rounded-full opacity-50"
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity,
            delay: 2
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Protecting Our Planet for 
            <span className="gradient-text block">Future Generations</span>
          </motion.h1>
          
          <motion.p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
          >
            Join EcoFuture in the fight against climate change. Together, we can create a sustainable world through clean energy initiatives and environmental protection.
          </motion.p>
          
          <motion.div ref={buttonRef} className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg rounded-full group"
            >
              Get Involved
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm"
            >
              <Play className="mr-2" size={18} />
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}