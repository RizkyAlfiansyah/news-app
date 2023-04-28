import MainLayout from '@/components/layouts/main.layout';
import React, { Suspense } from 'react';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout />
    </Suspense>
  );
}
