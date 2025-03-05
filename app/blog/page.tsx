'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: 'The Future of Digital Marketing in 2024',
    excerpt: 'Explore the emerging trends that will shape digital marketing strategies in the coming year.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=500',
    author: 'Sarah Johnson',
    date: '2024-03-15',
    category: 'Digital Marketing',
    tags: ['Marketing Trends', 'Digital Strategy', 'Innovation'],
  },
  {
    id: 2,
    title: 'Creating Engaging Video Content for Social Media',
    excerpt: 'Learn the key elements of creating video content that captures and retains audience attention.',
    image: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&h=500',
    author: 'Michael Chen',
    date: '2024-03-10',
    category: 'Video Production',
    tags: ['Video Marketing', 'Social Media', 'Content Creation'],
  },
  {
    id: 3,
    title: 'Building a Strong Brand Identity',
    excerpt: 'Discover the essential components of creating a memorable and effective brand identity.',
    image: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?q=80&w=800&h=500',
    author: 'Emily Rodriguez',
    date: '2024-03-05',
    category: 'Branding',
    tags: ['Brand Strategy', 'Design', 'Marketing'],
  },
];

const categories = [
  'All',
  'Digital Marketing',
  'Video Production',
  'Branding',
  'Social Media',
  'Content Strategy',
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Insights and updates from the world of digital marketing
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? 'default' : 'secondary'}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid gap-8">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="md:flex">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge>{post.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                    <CardTitle className="hover:text-primary">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">By {post.author}</span>
                      <div className="flex gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}