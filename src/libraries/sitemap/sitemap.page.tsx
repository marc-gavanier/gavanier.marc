import path from 'node:path';
import Link from 'next/link';
import { RenderTree } from './render-tree';
import { routerNodes } from './router-nodes';

export const SitemapPage = async () => {
  const nodes = await routerNodes(path.join(process.cwd(), 'src/app'));

  return (
    <main>
      <h1 className='text-5xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
        Plan du site
      </h1>
      <nav aria-label='Plan du site'>
        <ul>
          <li>
            <Link href='/'>Accueil</Link>
          </li>
          <RenderTree nodes={nodes} />
        </ul>
      </nav>
    </main>
  );
};
