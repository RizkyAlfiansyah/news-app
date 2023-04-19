'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Card, Input } from '@/components/atoms';
import { useArticles, useNews } from '@/hooks/global';
import { format } from 'date-fns';
import { useDebounce } from '@/utils/global';

const selection = ['Source', 'Category', 'Country'];

const MainLayout = () => {
  const [query, setQuery] = useState({});

  const { data, refetch, loading } = useNews('top-headlines', {
    country: 'us',
  });

  const filterSearch = useDebounce(query.q, 1000);

  useEffect(() => {
    if (filterSearch) {
      refetch('everything', query);
    }
  }, [filterSearch]);

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
          <div className="w-5/12 flex items-center gap-2 bg-white px-2 p-1 rounded-md">
            <Input
              value={query.q}
              placeholder="Search News"
              onChange={(e) => {
                setQuery({ ...query, q: e.target.value });
              }}
            />
            {query.q && (
              <FontAwesomeIcon
                icon={faClose}
                className="text-blue-900 w-4 h-4 cursor-pointer"
                onClick={() => {
                  setQuery({ ...query, q: '' });
                  refetch('top-headlines', {
                    country: 'us',
                  });
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="xl:w-[1280px] h-full flex gap-2 justify-center items-center px-2">
        {data.length > 0 && !loading ? (
          <div className="w-full h-full p-2 rounded-md grid md:grid-cols-3 grid-flow-row gap-3 bg-white">
            {data.map((item, idx) => (
              <Card data={item} key={idx} />
            ))}
          </div>
        ) : loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-2xl text-gray-500">loading...</p>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p className="text-2xl text-gray-500">No Data</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MainLayout;
