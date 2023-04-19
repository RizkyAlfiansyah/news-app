'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card, Input } from '@/components/atoms';
import useSWR from 'swr';
import { useArticles } from '@/hooks/global';
import { useDebounce } from '@/utils/global';

const selection = ['Source', 'Category', 'Country'];
const fetcher = (url) => fetch(url).then((res) => res.json());

const MainLayout = () => {
  const [query, setQuery] = useState({
    country: 'us',
    category: 'general',
    source: 'bbc-news',
  });

  const { data, error, isLoading } = useArticles(query);

  console.log(data);

  return (
    <>
      <div className="xl:w-[1280px] w-full flex flex-col gap-2 px-2">
        <div className="w-full flex lg:flex-row flex-col-reverse gap-4 items-center justify-between bg-blue-800 p-2 rounded-md">
          <div className="flex gap-3 justify-start items-center">
            {selection.map((item, idx) => (
              <p
                className="text-white text-sm hover:text-yellow-300 hover:font-semibold cursor-pointer"
                key={idx}
              >
                {item}
              </p>
            ))}
          </div>
          <Input
            placeholder="Search News"
            onChange={(e) => {
              setQuery({ ...query, q: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="xl:w-[1280px] h-full flex gap-2 justify-center items-center px-2">
        {isLoading && (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-2xl text-gray-500">loading...</p>
          </div>
        )}
        {data && (
          <div className="w-full h-full p-2 rounded-md grid md:grid-cols-3 grid-flow-row gap-3 bg-white">
            {data.articles?.map((item, idx) => (
              <Card data={item} key={idx} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MainLayout;
