'use client';

import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag, Heart, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface BlogPostClientProps {
  post: any;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
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