import React, { useState } from 'react';
import { useHNStories } from '../hooks/useHNStories';
import StoryCard from '../components/StoryCard';
import SearchBar from '../components/SearchBar';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: stories, isLoading, error } = useHNStories(searchQuery);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (error) {
    return <div className="text-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hacker News Top Stories</h1>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {isLoading
          ? Array(9)
              .fill()
              .map((_, index) => (
                <Skeleton key={index} className="h-32 w-full" />
              ))
          : stories?.map((story) => <StoryCard key={story.objectID} story={story} />)}
      </div>
    </div>
  );
};

export default Index;