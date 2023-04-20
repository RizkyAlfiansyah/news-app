import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEye } from '@fortawesome/free-solid-svg-icons';

const Card = ({ data }) => {
  // destructuring data from props
  const { title, source, urlToImage, publishedAt } = data || {};
  return (
    <div className="min-h-64 w-full flex flex-col rounded-md gap-2 group cursor-pointer">
      <div className="w-full">
        <Link
          href={{
            pathname: '/detail',
            query: { title: title },
          }}
        >
          <figure
            className="relative overflow-hidden rounded-md cursor-pointer bg-black group"
            onClick={() => localStorage.setItem('data', JSON.stringify(data))}
          >
            <img
              loading="lazy"
              src={
                urlToImage
                  ? urlToImage
                  : 'https://joadre.com/wp-content/uploads/2019/02/no-image.jpg'
              }
              alt="Picture of the author"
              className="w-full h-48 object-cover group-hover:scale-110 z-50 ease-in duration-75 group-hover:opacity-50 group-hover:blur-sm"
            />
            <figcaption className="absolute w-full h-full text-white font-semibold text-sm text-opacity-90 top-0 grid place-items-center -z-10 group-hover:z-50 p-2">
              <p className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faEye} /> See More
              </p>
            </figcaption>
          </figure>
        </Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-2">
        <div className="bg-blue-500 p-1 px-2 rounded-md text-xs text-white">
          {source.name}
        </div>
        <p className="font-bold text-xs group-hover:text-blue-900">{title}</p>
        <p className="text-xs text-gray-600 flex gap-2 items-center">
          <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />{' '}
          {format(new Date(publishedAt), 'MMMM dd, yyyy')}
        </p>
      </div>
    </div>
  );
};

export default Card;
