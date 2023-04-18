import Image from 'next/image';
import React from 'react';

const Card = () => {
  return (
    <div className="lg:w-72 h-64 w-56 bg-white flex flex-col rounded-md shadow-lg">
      <div className="w-full">
        <Image
          loading="lazy"
          src="/img/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/176f6f215c9c45306ca8269f8232701e.jpg"
          alt="Picture of the author"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Card;
