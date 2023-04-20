'use client';
import { getNews } from '@/services/common';
import { useEffect, useState } from 'react';

// custom hooks for fetching news
export const useNews = (endpoint, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let mounted = false;

  useEffect(() => {
    if (!mounted) {
      _fetchData(endpoint, params);
      mounted = true;
    }

    return () => (mounted = true);
  }, [mounted]);

  const _fetchData = async (endpoint, params) => {
    setLoading(true);
    getNews(endpoint, params)
      .then((res) => {
        setData(res.articles);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return { data, loading, refetch: _fetchData };
};

// custom hooks for fetching sources
export const useSources = (endpoint, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let mounted = false;

  useEffect(() => {
    if (!mounted) {
      _fetchData(endpoint, params);
      mounted = true;
    }

    return () => (mounted = true);
  }, [mounted]);

  const _fetchData = async (endpoint, params) => {
    setLoading(true);
    getNews(endpoint, params)
      .then((res) => {
        setData(res.sources);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return { data, loading, refetch: _fetchData };
};
