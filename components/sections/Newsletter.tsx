'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500/20 rounded-2xl mb-8">
            <Mail className="text-emerald-400" size={40} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated on Our Impact
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get the latest news on environmental initiatives, project updates, and actionable tips 
            for sustainable living delivered straight to your inbox.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {!isSubscribed ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto"
              layout
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-6 text-lg bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm rounded-full focus:bg-white/20"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-14 px-8 text-lg bg-emerald-600 hover:bg-emerald-700 rounded-full whitespace-nowrap"
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
              
              <p className="text-sm text-gray-400 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-lg mx-auto"
            >
              <div className="flex items-center justify-center space-x-3 text-emerald-400 mb-4">
                <CheckCircle size={32} />
                <span className="text-2xl font-semibold">Thank you!</span>
              </div>
              <p className="text-gray-300 text-lg">
                You've successfully subscribed to our newsletter. 
                Check your inbox for a welcome message.
              </p>
            </motion.div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">50K+</div>
              <div className="text-gray-300">Newsletter Subscribers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">Weekly</div>
              <div className="text-gray-300">Environmental Updates</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-gray-300">Spam-Free Guarantee</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}