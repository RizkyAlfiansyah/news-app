import instance from '@/lib/axios';

export async function getNews(endpoint, params) {
  const res = await instance.get(`/${endpoint}`, { params: params });
  return res;
}
