import { BasesIllustration } from '@/libraries/ui/illustrations/products/bases/bases.illustration';
import { BasesLogo } from '@/libraries/ui/illustrations/products/bases/bases.logo';
import { CartographieIllustration } from '@/libraries/ui/illustrations/products/cartographie/cartographie.illustration';
import { CartographieLogo } from '@/libraries/ui/illustrations/products/cartographie/cartographie.logo';
import { CoopIllustration } from '@/libraries/ui/illustrations/products/coop/coop.illustration';
import { CoopLogo } from '@/libraries/ui/illustrations/products/coop/coop.logo';
import { Badge } from '@/libraries/ui/primitives/badge';
import { cn } from '@/libraries/utils';

export const ProjectsSection = ({ className }: { className?: string }) => (
  <section id='projects' className={cn('my-24', className)}>
    <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
      Contributions récentes
    </h2>
    <div className='flex flex-col gap-12'>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-3/5'>
          <CoopLogo width={60} height={60} />
          <h3 className='font-bold text-2xl mt-4 mb-2'>La Coop de la médiation numérique</h3>
          <p className='text-muted mb-2'>Outil national dédié à l’accompagnement des publics éloignés du numérique.</p>
          <p>
            J’ai participé dès les premières étapes à construire un outil fiable et utile, en restant connecté au terrain et aux
            médiateurs. Cette approche collaborative a permis des livraisons régulières de fonctionnalités à fort impact.
          </p>
          <p className='py-3 font-medium'>
            Aujourd’hui, la plateforme est robuste, évolutive et utilisée quotidiennement par les médiateurs&nbsp;:
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +2 000 professionnels actifs
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +1,5M d’accompagnements en un an
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +100 000 bénéficiaires suivis régulièrement
              </Badge>
            </li>
          </ul>
        </div>
        <div className='lg:w-2/5'>
          <CoopIllustration width='100%' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-3/5'>
          <CartographieLogo width={60} height={60} />
          <h3 className='font-bold text-2xl mt-4 mb-2'>La Cartographie nationale des lieux d’inclusion numérique</h3>
          <p className='text-muted mb-2'>
            Plateforme nationale pour orienter les publics vers les lieux d’accompagnement les plus adaptés.
          </p>
          <p>
            J’ai conçu l’outil cartographique qui permet de rechercher, filtrer et consulter les lieux de médiation numérique,
            et surtout un pipeline complet (normalisation, déduplication, publication) pour agréger quotidiennement des données
            hétérogènes provenant de multiples sources.
          </p>
          <p className='py-3 font-medium'>
            La cartographie est ainsi alimentée automatiquement par les données remontées du terrain, fiable et accessible à
            tous&nbsp;:
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                23 sources consolidées
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +17 000 lieux référencés
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +300 visites quotidiennes.
              </Badge>
            </li>
          </ul>
        </div>
        <div className='lg:w-2/5'>
          <CartographieIllustration width='100%' />
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-3/5'>
          <BasesLogo width={60} height={60} />
          <h3 className='font-bold text-2xl mt-4 mb-2'>Les Bases du numérique d’intérêt général</h3>
          <p className='text-muted mb-2'>Plateforme collaborative pour partager ressources, outils et communs numériques.</p>
          <p>
            Arrivé juste avant le lancement officiel, j’ai renforcé l’équipe technique pour sécuriser une mise en production
            fluide et accompagné l’équipe produit pour itérer rapidement sur les fonctionnalités clés.
          </p>
          <p className='py-3 font-medium'>
            Aujourd’hui, la plateforme offre une expérience utilisateur solide et adaptée aux usages réels des acteurs du
            terrain&nbsp;:
          </p>
          <ul className='flex flex-wrap gap-2'>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +2 000 ressources publiées
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +1M de vues des ressources
              </Badge>
            </li>
            <li>
              <Badge color='badge-primary' kind='badge-soft'>
                +100 membres actifs chaque mois.
              </Badge>
            </li>
          </ul>
        </div>
        <div className='lg:w-2/5'>
          <BasesIllustration width='100%' />
        </div>
      </div>
    </div>
  </section>
);
