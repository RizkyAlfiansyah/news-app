import React from 'react';
import { Button, Card, Input } from '../atoms';

const MainLayout = () => {
  return (
    <main className="h-full flex gap-2 justify-center items-center">
      <section className="w-full p-2 rounded-md grid grid-cols-3 grid-flow-row gap-3">
        <Card />
        <Card />
        <Card />
      </section>
    </main>
  );
};

export default MainLayout;
