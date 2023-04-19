'use client';
import MainLayout from '@/components/layouts/main.layout';
import React, { Suspense } from 'react';
import { SWRConfig } from 'swr';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SWRConfig value={{ provider: () => new Map() }}>
        <MainLayout />
      </SWRConfig>
    </Suspense>
  );
}
