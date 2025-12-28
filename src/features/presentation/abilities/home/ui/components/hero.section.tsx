import { RiCompass3Line, RiMailLine } from 'react-icons/ri';
import { ButtonLink } from '@/libraries/ui/primitives/button-link';
import { Link } from '@/libraries/ui/primitives/link';
import { cn } from '@/libraries/utils';
import { RoundedShapeFrame } from './rounded-shape-frame';

export const HeroSection = ({ className }: { className?: string }) => (
  <section id='hero' className={cn('md:flex gap-12 my-24', className)}>
    <div className='flex-2/6 order-first md:order-last flex justify-center max-w-2/3 mx-auto'>
      <RoundedShapeFrame
        width={368}
        height={306}
        src='/images/home/profil-picture.webp'
        alt='Portrait de Marc Gavanier'
        fetchPriority='high'
      />
    </div>
    <div className='md:flex-4/6'>
      <p className='text-4xl sm:text-5xl font-bold my-12 text-center md:text-left'>
        <span className='inline-flex items-center gap-3'>
          <span aria-hidden>👋</span>
          <span className='md:inline-block inline-grid'>
            Bonjour, je suis{' '}
            <span className='bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] whitespace-nowrap bg-clip-text text-transparent'>
              Marc Gavanier
            </span>
          </span>
        </span>
      </p>
      <h1 className='text-lg md:text-xl'>
        Ingénieur logiciel indépendant – Créateur de produits numériques pensés pour les utilisateurs.
      </h1>
      <p className='text-lg md:text-xl mb-12'>
        J’accompagne la transformation des besoins métier en solutions numériques concrètes, du concept à la production,{' '}
        <strong>en livrant rapidement des outils utiles et fiables</strong>.
      </p>
      <div className='mb-12 flex flex-col sm:flex-row justify-center md:justify-start gap-2'>
        <ButtonLink href='/contact' scale='btn-lg' color='btn-primary'>
          <RiMailLine className='mr-1' aria-hidden />
          Entrez en contact
        </ButtonLink>
        <ButtonLink href='#approach' scale='btn-lg' kind='btn-soft' color='btn-primary'>
          <RiCompass3Line className='mr-1' aria-hidden />
          Découvrez mon approche
        </ButtonLink>
      </div>
      <p className='text-muted'>
        Depuis 2021, je collabore avec{' '}
        <Link href='https://anct.gouv.fr/' target='_blank' rel='noopener noreferrer'>
          l’Agence Nationale de la Cohésion des Territoires
        </Link>{' '}
        dans le cadre du programme{' '}
        <Link href='https://www.societenumerique.gouv.fr/' target='_blank' rel='noopener noreferrer'>
          Société Numérique
        </Link>
        , en concevant et développant des produits numériques plébiscités par les acteurs de terrain.
      </p>
    </div>
  </section>
);
