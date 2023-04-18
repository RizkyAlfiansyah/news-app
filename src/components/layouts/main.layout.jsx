import React from 'react';
import { Button, Input } from '../atoms';

const MainLayout = () => {
  return (
    <main className="lg:w-8/12 w-10/12 h-full flex gap-2 justify-center items-center">
      <section className="w-full bg-white p-2 rounded-md">Main Content</section>
    </main>
  );
};

export default MainLayout;
