import type { ReactNode } from 'react';
import { contentId, footerId, SkipLinksPortal } from '@/libraries/ui/blocks/skip-links';

export default ({ children }: { children: ReactNode }) => (
  <>
    <SkipLinksPortal
      links={[
        { label: 'Contenu', anchor: `#${contentId}` },
        { label: 'Pied de page', anchor: `#${footerId}` }
      ]}
    >
      Liens de navigation rapide
    </SkipLinksPortal>
    <main id={contentId} className='my-24 lg:container mx-auto px-8 xl:px-16 2xl:px-32'>
      <article className='prose max-w-none'>{children}</article>
    </main>
  </>
);
