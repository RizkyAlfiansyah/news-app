import instance from '@/lib/axios';

export async function getNews(params) {
  const res = await instance.get('/top-headlines', { params: params });
  return res;
}
