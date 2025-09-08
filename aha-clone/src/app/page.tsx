// src/app/page.tsx
import { Suspense } from 'react';
import Home from '@/modules/Home';

export default function HomePage() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </main>
  );
}
