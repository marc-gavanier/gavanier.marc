import type { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => (
  <main className='my-24 lg:container mx-auto px-8 xl:px-16 2xl:px-32'>
    <article className='prose max-w-none'>{children}</article>
  </main>
);
