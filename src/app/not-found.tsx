import type { Metadata } from 'next';
import { RiHome2Line } from 'react-icons/ri';
import { contentId, footerId, SkipLinksPortal } from '@/libraries/ui/blocks/skip-links';
import { ButtonLink } from '@/libraries/ui/primitives/button-link';

export const metadata: Metadata = {
  title: '404 - Page introuvable | Marc Gavanier',
  description: `La page que vous recherchez n'existe pas ou n'est plus disponible. Retournez à l'accueil pour poursuivre la navigation.`,
  robots: 'noindex'
};

const Page = () => (
  <>
    <SkipLinksPortal
      links={[
        { label: 'Contenu', anchor: `#${contentId}` },
        { label: 'Pied de page', anchor: `#${footerId}` }
      ]}
    >
      Liens de navigation rapide
    </SkipLinksPortal>
    <main id={contentId} className='flex flex-1 items-center justify-center px-6 pt-6 pb-12'>
      <div className='text-center flex flex-col gap-10'>
        <h1 className='font-bold'>
          <span className='text-9xl'>404</span>
          <br />
          <span className='text-3xl md:text-5xl lg:text-6xl'>Cette page est introuvable</span>
        </h1>
        <p className='sm:text-xl md:text-2xl'>
          L'URL contient peut-être une erreur ou la page n’est plus disponible
          <br />
          Revenir à la page d’accueil pour poursuivre la navigation
        </p>
        <div>
          <ButtonLink scale='btn-xl' color='btn-primary' href='/'>
            <RiHome2Line className='mr-1' aria-hidden />
            Retour à l’accueil
          </ButtonLink>
        </div>
      </div>
    </main>
  </>
);

export default Page;
