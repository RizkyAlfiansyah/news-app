'use client';
import { getNews } from '@/services/common';
import useSWR from 'swr';

export const useArticles = (params) => {
  const { data, error } = useSWR('top-headline', async () => {
    const res = await getNews(params);
    return res;
  });

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
