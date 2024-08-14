import { useQuery } from '@tanstack/react-query';
import { fetchTopStories } from '../services/hnApi';

export const useHNStories = (query = '') => {
  return useQuery({
    queryKey: ['hnStories', query],
    queryFn: () => fetchTopStories(query),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};