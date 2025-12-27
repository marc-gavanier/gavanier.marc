import { cn } from '@/libraries/utils';

export const ApproachSection = ({ className }: { className?: string }) => (
  <section id='approach' className={cn('my-24', className)}>
    <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
      Approche
    </h2>
    <p className='md:text-lg mb-6'>
      J’adopte une démarche itérative, centrée sur le terrain, pour transformer vos besoins en solutions concrètes et utiles.
      <br />
      Cette méthode permet d’apprendre, d’ajuster rapidement le produit et de livrer de la valeur dès les premières itérations.
    </p>
    <ul className='list rounded-box shadow-xl shadow-primary-surface grid grid-cols-1 lg:grid-cols-2 py-4'>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>1</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Partir du besoin métier</h3>
          <p className='text-base'>
            On commence par le terrain&nbsp;: identifier le problème à résoudre et définir la prochaine évolution ayant un
            impact concret et immédiat.
          </p>
        </div>
      </li>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>2</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Concevoir pour le changement</h3>
          <p className='text-base'>
            Je développe uniquement ce qui est nécessaire, sur des fondations claires, simples et durables, conçues pour
            s’adapter facilement aux évolutions.
          </p>
        </div>
      </li>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>3</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Livrer tôt, livrer souvent</h3>
          <p className='text-base'>
            Des mises en production fréquentes réduisent les risques de désalignement avec le terrain et permettent de
            confronter rapidement la solution au réel.
          </p>
        </div>
      </li>
      <li className='flex gap-6 p-4'>
        <div className='text-4xl font-light text-primary'>4</div>
        <div className='list-col-grow'>
          <h3 className='uppercase font-bold text-primary py-2'>Mesurer, écouter, ajuster</h3>
          <p className='text-base'>
            Les retours du terrain guident la suite du développement. L’observation et la mesure garantissent que le produit
            évolue toujours dans la bonne direction.
          </p>
        </div>
      </li>
    </ul>
  </section>
);
