'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TreePine, Droplets, Zap, Users } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  {
    icon: TreePine,
    value: 1250000,
    suffix: '+',
    label: 'Trees Planted',
    description: 'Across 15 countries'
  },
  {
    icon: Droplets,
    value: 850,
    suffix: 'M',
    label: 'Liters Water Saved',
    description: 'Through conservation programs'
  },
  {
    icon: Zap,
    value: 500,
    suffix: 'MW',
    label: 'Clean Energy Generated',
    description: 'Renewable energy projects'
  },
  {
    icon: Users,
    value: 25000,
    suffix: '+',
    label: 'Lives Impacted',
    description: 'Communities we serve'
  }
];

export function Impact() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate counter numbers
      const statElements = gsap.utils.toArray('.stat-number');
      
      statElements.forEach((element: any, index) => {
        const stat = stats[index];
        let endValue = stat.value;
        
        gsap.fromTo(element, 
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 2,
            ease: 'power2.out',
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              toggleActions: 'play none none none'
            },
            onUpdate: function() {
              const value = Math.floor(this.targets()[0].innerText);
              let displayValue = value.toLocaleString();
              
              if (stat.suffix === 'M' && value >= 1000) {
                displayValue = (value / 1000).toFixed(1) + 'M';
              } else if (stat.suffix === 'MW') {
                displayValue = value + 'MW';
              } else {
                displayValue = value.toLocaleString() + (stat.suffix === '+' ? '+' : '');
              }
              
              element.innerText = displayValue;
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-emerald-600 via-cyan-600 to-blue-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Global Impact
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              See the measurable difference we're making in communities around the world. 
              These numbers represent real change and hope for our planet's future.
            </p>
          </div>
        </ScrollReveal>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <motion.div 
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 group-hover:bg-white/30 transition-colors">
                  <stat.icon className="text-white" size={40} />
                </div>
                
                <div className="stat-number text-4xl md:text-5xl font-bold text-white mb-2">
                  0
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-white/80">
                  {stat.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <motion.div
              className="inline-block p-6 bg-white/10 backdrop-blur-sm rounded-2xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                Join Our Mission
              </h3>
              <p className="text-white/90">
                Be part of the solution. Every action counts towards a sustainable future.
              </p>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}