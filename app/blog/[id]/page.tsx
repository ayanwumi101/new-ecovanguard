'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag, Heart, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// This would typically come from an API or database
const blogData: { [key: string]: any } = {
  '1': {
    title: 'The Future of Renewable Energy in Remote Communities',
    excerpt: 'Exploring how solar technology is transforming lives in areas without traditional grid access.',
    content: `
      <p>In the remote villages of Southeast Asia, where traditional power grids have never reached, a quiet revolution is taking place. Solar technology is not just providing electricity—it's transforming entire communities and opening up new possibilities for education, healthcare, and economic development.</p>
      
      <h2>The Challenge of Energy Access</h2>
      <p>Over 770 million people worldwide still lack access to electricity, with the majority living in rural and remote areas. Traditional grid extension is often economically unfeasible in these regions due to difficult terrain, low population density, and high infrastructure costs.</p>
      
      <p>This energy poverty has far-reaching consequences:</p>
      <ul>
        <li>Children cannot study after dark, limiting educational opportunities</li>
        <li>Healthcare facilities lack reliable power for essential equipment</li>
        <li>Small businesses cannot operate efficiently or extend their hours</li>
        <li>Communication with the outside world remains limited</li>
      </ul>
      
      <h2>Solar: A Game-Changing Solution</h2>
      <p>Solar technology has emerged as the most viable solution for remote energy access. The dramatic reduction in solar panel costs—down by over 80% in the past decade—has made solar installations increasingly affordable for rural communities.</p>
      
      <blockquote>
        "Solar energy is not just about electricity—it's about dignity, opportunity, and hope for communities that have been left behind by traditional development models."
      </blockquote>
      
      <h2>Real Impact Stories</h2>
      <p>In the village of Mae Hong Son, Thailand, the installation of a community solar grid has transformed daily life. The local school now has computers and internet access, enabling students to connect with the global digital economy. The village clinic can now refrigerate vaccines and operate essential medical equipment 24/7.</p>
      
      <p>Similarly, in rural Bangladesh, solar home systems have enabled women to start small businesses, from tailoring to food processing, extending their productive hours well into the evening.</p>
      
      <h2>The Path Forward</h2>
      <p>While the progress is encouraging, significant challenges remain. Financing mechanisms need to be more accessible, technical training programs must be expanded, and maintenance networks need to be established to ensure long-term sustainability.</p>
      
      <p>The future of renewable energy in remote communities is bright, but it requires continued investment, innovation, and commitment from governments, NGOs, and the private sector working together.</p>
    `,
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    author: 'Dr. Sarah Mitchell',
    date: '2024-01-15',
    category: 'Clean Energy',
    readTime: '5 min read',
    tags: ['Solar Energy', 'Rural Development', 'Energy Access', 'Sustainability'],
    likes: 127,
    comments: 23
  },
  '2': {
    title: 'Ocean Conservation: A Global Responsibility',
    excerpt: 'Understanding the critical importance of marine ecosystem protection and what we can all do to help.',
    content: `
      <p>Our oceans cover more than 70% of Earth's surface and contain 97% of the planet's water. They are home to countless species, regulate our climate, and provide livelihoods for billions of people. Yet, human activities are threatening marine ecosystems at an unprecedented scale.</p>
      
      <h2>The State of Our Oceans</h2>
      <p>The statistics are sobering. Every year, approximately 8 million tons of plastic waste enter our oceans. Overfishing has depleted fish stocks by 90% since pre-industrial times. Climate change is causing ocean acidification and rising sea temperatures, leading to coral bleaching and ecosystem disruption.</p>
      
      <p>The consequences extend far beyond marine life:</p>
      <ul>
        <li>Coastal communities face increased flooding and erosion</li>
        <li>Food security is threatened as fish populations decline</li>
        <li>Tourism-dependent economies suffer from degraded marine environments</li>
        <li>Climate regulation is compromised as ocean systems become unstable</li>
      </ul>
      
      <h2>Innovative Conservation Approaches</h2>
      <p>Despite these challenges, innovative conservation efforts are showing promise. Marine protected areas (MPAs) have proven effective in allowing ecosystems to recover. Technology is playing a crucial role, from satellite monitoring of illegal fishing to AI-powered systems that can identify and track marine species.</p>
      
      <blockquote>
        "The ocean is not just a resource to be exploited—it's a complex, interconnected system that requires our respect and protection."
      </blockquote>
      
      <h2>Community-Based Solutions</h2>
      <p>Some of the most successful conservation efforts have come from local communities. In the Philippines, community-managed marine sanctuaries have led to remarkable recoveries in fish populations. In Kenya, coastal communities have established locally managed marine areas that balance conservation with sustainable fishing practices.</p>
      
      <h2>What You Can Do</h2>
      <p>Ocean conservation is not just the responsibility of governments and large organizations. Individual actions can make a significant difference:</p>
      <ul>
        <li>Reduce plastic consumption and properly dispose of waste</li>
        <li>Choose sustainable seafood options</li>
        <li>Support organizations working on ocean conservation</li>
        <li>Participate in beach cleanups and citizen science projects</li>
        <li>Advocate for stronger marine protection policies</li>
      </ul>
      
      <p>The health of our oceans is inextricably linked to the health of our planet and our own well-being. By working together—individuals, communities, governments, and organizations—we can ensure that future generations inherit oceans that are vibrant, healthy, and teeming with life.</p>
    `,
    image: 'https://images.pexels.com/photos/1076758/pexels-photo-1076758.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    author: 'Dr. Amara Okafor',
    date: '2024-01-10',
    category: 'Conservation',
    readTime: '7 min read',
    tags: ['Ocean Conservation', 'Marine Life', 'Climate Change', 'Sustainability'],
    likes: 89,
    comments: 15
  },
  '3': {
    title: 'Urban Reforestation: Bringing Nature Back to Cities',
    excerpt: 'How strategic tree planting and green space development can improve urban life quality.',
    content: `
      <p>As urbanization accelerates globally, cities are grappling with challenges ranging from air pollution to urban heat islands. Urban reforestation—the strategic planting and management of trees in urban environments—offers a powerful solution that addresses multiple environmental and social challenges simultaneously.</p>
      
      <h2>The Urban Challenge</h2>
      <p>Cities occupy just 3% of the Earth's land surface but consume 78% of global energy and produce more than 60% of greenhouse gas emissions. Urban areas are typically 2-5°C warmer than surrounding rural areas due to the urban heat island effect, caused by concrete and asphalt absorbing and retaining heat.</p>
      
      <p>The lack of green spaces in cities contributes to:</p>
      <ul>
        <li>Poor air quality and increased respiratory diseases</li>
        <li>Higher energy consumption for cooling</li>
        <li>Increased stormwater runoff and flooding</li>
        <li>Reduced mental health and well-being for residents</li>
        <li>Loss of biodiversity and wildlife habitat</li>
      </ul>
      
      <h2>The Power of Urban Trees</h2>
      <p>Trees are nature's air conditioners, air purifiers, and carbon storage systems all rolled into one. A single mature tree can absorb 48 pounds of CO2 per year and produce enough oxygen for two people. Urban forests can reduce air temperatures by 2-9°F and reduce energy costs by up to 30%.</p>
      
      <blockquote>
        "Urban forests are not a luxury—they are essential infrastructure for sustainable cities."
      </blockquote>
      
      <h2>Success Stories from Around the World</h2>
      <p>Cities worldwide are embracing urban reforestation with remarkable results. Singapore's "City in a Garden" vision has created one of the world's greenest cities, with over 47% tree cover. Milan's Bosco Verticale (Vertical Forest) demonstrates how buildings themselves can become forests, hosting 900 trees and 20,000 plants.</p>
      
      <p>In New York City, the MillionTreesNYC initiative successfully planted one million trees, resulting in measurable improvements in air quality and property values. The program showed that every dollar invested in urban forestry returns $5.60 in benefits.</p>
      
      <h2>Innovative Approaches</h2>
      <p>Modern urban reforestation goes beyond simply planting trees. It involves:</p>
      <ul>
        <li>Strategic species selection based on local climate and conditions</li>
        <li>Integration with urban planning and infrastructure development</li>
        <li>Community engagement and stewardship programs</li>
        <li>Use of technology for monitoring and maintenance</li>
        <li>Creation of green corridors that connect urban forests</li>
      </ul>
      
      <h2>The Role of Technology</h2>
      <p>Technology is revolutionizing urban forestry. Satellite imagery and AI help identify optimal planting locations. IoT sensors monitor tree health and water needs. Mobile apps engage citizens in tree care and reporting. These tools make urban reforestation more efficient and effective than ever before.</p>
      
      <h2>Getting Involved</h2>
      <p>Urban reforestation is a collective effort that requires participation from all levels of society. Citizens can get involved by participating in tree planting events, adopting trees in their neighborhoods, advocating for green policies, and supporting organizations working on urban forestry.</p>
      
      <p>The future of our cities depends on our ability to integrate nature into urban environments. Urban reforestation is not just about planting trees—it's about creating livable, sustainable, and resilient cities for future generations.</p>
    `,
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    author: 'Marcus Chen',
    date: '2024-01-05',
    category: 'Reforestation',
    readTime: '6 min read',
    tags: ['Urban Planning', 'Reforestation', 'Air Quality', 'Sustainability'],
    likes: 156,
    comments: 31
  }
};

export default function BlogPost() {
  const params = useParams();
  const postId = params.id as string;
  const post = blogData[postId];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-600 mb-4">Article Not Found</h1>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${post.image}')`,
            filter: 'brightness(0.3)'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Blog
            </Link>
            
            <Badge className="bg-emerald-600 text-white mb-6">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-gray-300">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                {post.readTime}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:p-6 prose-blockquote:rounded-lg prose-blockquote:not-italic prose-blockquote:text-slate-900"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </ScrollReveal>

              {/* Tags */}
              <ScrollReveal delay={0.2}>
                <div className="mt-12 pt-8 border-t">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="hover:bg-emerald-50 hover:border-emerald-300">
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Share & Engagement */}
              <ScrollReveal delay={0.3}>
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Heart size={18} />
                        <span>{post.likes} likes</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MessageCircle size={18} />
                        <span>{post.comments} comments</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Share2 size={16} className="mr-2" />
                      Share Article
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Author Info */}
                <ScrollReveal delay={0.1}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-4">About the Author</h3>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                          <User className="text-emerald-600" size={20} />
                        </div>
                        <div>
                          <div className="font-medium text-slate-900">{post.author}</div>
                          <div className="text-sm text-gray-600">Environmental Scientist</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        Leading researcher in sustainable energy solutions with over 15 years of experience in environmental protection.
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* Related Articles */}
                <ScrollReveal delay={0.2}>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-4">Related Articles</h3>
                      <div className="space-y-4">
                        <Link href="/blog/2" className="block group">
                          <div className="text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                            Ocean Conservation: A Global Responsibility
                          </div>
                          <div className="text-xs text-gray-500 mt-1">7 min read</div>
                        </Link>
                        <Separator />
                        <Link href="/blog/3" className="block group">
                          <div className="text-sm font-medium text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                            Urban Reforestation: Bringing Nature Back to Cities
                          </div>
                          <div className="text-xs text-gray-500 mt-1">6 min read</div>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* Newsletter CTA */}
                <ScrollReveal delay={0.3}>
                  <Card className="bg-gradient-to-br from-emerald-50 to-cyan-50 border-emerald-200">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-slate-900 mb-2">Stay Updated</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Get the latest environmental insights delivered to your inbox.
                      </p>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Subscribe
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}