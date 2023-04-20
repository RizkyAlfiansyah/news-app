'use client';
import { Card } from '@/components/atoms';
import { useNews } from '@/hooks/global';
import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

const Details = ({ searchParams }) => {
  // change type of searchParams.title to array
  const titles = searchParams.title.split(' ');
  // get data from local storage
  const data = (localStorage && JSON.parse(localStorage.getItem('data'))) || {};
  // using custom hook to fetch data from api (newsapi.org) using axios
  const { data: articles, loading } = useNews('top-headlines', {
    q: titles[0],
  });

  // destructuring data from api
  const { title, urlToImage, url, content, source, publishedAt } = data || {};

  return (
    <>
      <div className="xl:w-[1280px] w-full h-full flex gap-2 justify-center items-center px-2">
        <div className="w-full flex flex-col gap-4 lg:p-6 p-2 rounded-md">
          <header className="w-full flex flex-col gap-3">
            <h3 className="md:text-4xl text-2xl font-bold">
              {title || 'No Title'}
            </h3>
            <span>
              {publishedAt
                ? format(new Date(publishedAt), 'yyyy MMMM dd - hh:mm')
                : 'No Date'}
            </span>
          </header>
          <div className="max-w-fit bg-blue-500 p-1 px-2 rounded-md text-xs text-white">
            {source.name}
          </div>
          <img
            src={
              urlToImage
                ? urlToImage
                : 'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg'
            }
            alt={source?.name}
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="w-full">
            <article className="text-justify text:sm">
              {content || 'No Content'}{' '}
              <Link href={url}>
                <span className="text-blue-900">read more...</span>
              </Link>
            </article>
          </div>
          <div className="w-full h-[1px] bg-gray-500" />
          <div className="w-full flex flex-col gap-2">
            <h3 className="text-xl font-bold">Related News</h3>
            <div className="w-full flex gap-2 overflow-x-auto">
              {loading ? (
                <p>Loading...</p>
              ) : (
                articles &&
                articles.map((item, idx) => (
                  <div className="min-w-[300px] max-w-[300px]" key={idx}>
                    <Card data={item} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
