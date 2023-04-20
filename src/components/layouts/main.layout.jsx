'use client';
import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Card, Input } from '@/components/atoms';
import { useDebounce } from '@/utils/global';
import {
  ModalFilterCategory,
  ModalFilterCountry,
  ModalFilterSource,
} from '../organism';
import { selection } from '@/data/common';
import { useNews } from '@/hooks/global';

const MainLayout = () => {
  const [query, setQuery] = useState({});
  const [sourcesValue, setSourcesValue] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openModalCategory, setOpenModalCategory] = useState(false);
  const [openModalSource, setOpenModalSource] = useState(false);

  // use custom hook to fetch data from api (newsapi.org) using axios
  const { data, refetch, loading } = useNews('top-headlines', {
    country: 'us',
  });

  //use debounce to prevent multiple request to api when user typing in search input field (1000ms)
  const filterSearch = useDebounce(query.q, 1000);

  useEffect(() => {
    filterSearch
      ? refetch('top-headlines', query)
      : refetch('top-headlines', query.country ? query : { country: 'us' });
  }, [filterSearch, query.country, query.category]);

  // handle change filter value (country, category, source) and set query to fetch data from api (newsapi.org) using axios
  const onChangeFilter = (value, id) => {
    const enums = {
      0: 'sources',
      1: 'category',
      2: 'country',
    };
    setQuery({ ...query, [enums[id]]: value });
  };

  // handle delete filter value (country, category, source) and set query to fetch data from api (newsapi.org) using axios
  const modals = {
    0: setOpenModalSource,
    1: setOpenModalCategory,
    2: setOpenModal,
  };

  // data filtered by sources value
  const dataFiltered = data.filter((item) => {
    return item.source?.id?.toLowerCase().includes(sourcesValue.toLowerCase());
  });

  return (
    <>
      <div className="xl:w-[1280px] w-full flex justify-start items-start flex-col gap-2 px-2">
        <div className="w-full flex lg:flex-row flex-col-reverse gap-4 items-center justify-between bg-blue-800 p-2 rounded-md">
          <div className="relative w-full flex gap-3 justify-start items-center md:items-start">
            {selection.map((item, idx) => (
              <p
                className="text-white text-sm hover:text-yellow-300 hover:font-semibold cursor-pointer"
                key={idx}
                onClick={() => modals[idx](true)}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="lg:w-5/12 w-full flex items-center gap-2 bg-white px-2 p-1 rounded-md">
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
        {filterSearch && (
          <div className="w-full flex gap-2 items-center justify-start">
            <p className="text-sm">
              Found {dataFiltered.length} articles related to :{' '}
              <strong>{filterSearch}</strong>
            </p>
          </div>
        )}
      </div>
      <div className="xl:w-[1280px] h-full flex gap-2 justify-center items-center px-2">
        {dataFiltered.length > 0 && !loading ? (
          <div className="w-full h-full p-2 rounded-md grid md:grid-cols-3 grid-flow-row gap-3 bg-white">
            {dataFiltered.map((item, idx) => (
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
      <ModalFilterCountry
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        active={query.country || 'us'}
        onChange={(value) => onChangeFilter(value, 2)}
        onDelete={(value) => onChangeFilter(value, 2)}
      />
      <ModalFilterCategory
        isOpen={openModalCategory}
        onClose={() => setOpenModalCategory(false)}
        active={query.category}
        onChange={(value) => onChangeFilter(value, 1)}
        onDelete={(value) => onChangeFilter(value, 1)}
      />
      <ModalFilterSource
        isOpen={openModalSource}
        onClose={() => setOpenModalSource(false)}
        active={sourcesValue}
        onChange={(value) => setSourcesValue(value)}
        onDelete={(value) => setSourcesValue(value)}
      />
    </>
  );
};

export default MainLayout;
