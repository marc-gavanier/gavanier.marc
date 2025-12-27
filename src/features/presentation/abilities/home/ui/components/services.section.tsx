import { CollaborationPictogram } from '@/libraries/ui/pictograms/human/collaboration.pictogram';
import { ArchitecturePictogram } from '@/libraries/ui/pictograms/technical/architecture.pictogram';
import { AutomationPictogram } from '@/libraries/ui/pictograms/technical/automation.pictogram';
import { CodePictogram } from '@/libraries/ui/pictograms/technical/code.pictogram';
import { cn } from '@/libraries/utils';

export const ServicesSection = ({ className }: { className?: string }) => (
  <section id='services' className={cn('my-24', className)}>
    <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
      Expertises & savoir-faire
    </h2>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
      <div className='flex items-start gap-6'>
        <div>
          <ArchitecturePictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Architecture & conception logicielle</h3>
          <p>
            Je conçois des architectures robustes et évolutives qui mettent la technique au service du métier. Mon approche
            privilégie la clarté et la cohérence, pour garantir des solutions fiables et faciles à faire évoluer sur le long
            terme.
          </p>
        </div>
      </div>
      <div className='flex items-start gap-6'>
        <div>
          <CodePictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Développement full-stack & cloud</h3>
          <p>
            Je construis des produits complets, du front au back jusqu’à la production. J’installe des infrastructures cloud
            solides et économiques, en privilégiant des solutions simples, performantes et immédiatement utiles sur le terrain.
          </p>
        </div>
      </div>
      <div className='flex items-start gap-6'>
        <div>
          <AutomationPictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Industrialisation, qualité & livraisons</h3>
          <p>
            J’automatise les contrôles qualité et les déploiements pour assurer un rythme de livraison soutenu et sans friction.
            Cette approche réduit les erreurs, anticipe les problèmes avant qu’ils n’affectent le produit et maximise les
            retours du terrain.
          </p>
        </div>
      </div>
      <div className='inline-flex items-start gap-6'>
        <div>
          <CollaborationPictogram />
        </div>
        <div>
          <h3 className='font-bold text-xl mb-2'>Collaboration & partage</h3>
          <p>
            J’accompagne les équipes techniques dans l’adoption des bonnes pratiques et des méthodologies de développement les
            plus avancées, par des actions concrètes qui renforcent leurs compétences, leur autonomie et leur performance.
          </p>
        </div>
      </div>
    </div>
  </section>
);
