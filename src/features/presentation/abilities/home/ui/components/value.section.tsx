import { RiShieldCheckLine, RiStackLine, RiTeamLine } from 'react-icons/ri';

export const ValueSection = ({ className }: { className?: string }) => (
  <section id='value' className='py-24 bg-primary-surface'>
    <div className={className}>
      <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-6'>
        Valeur en mission
      </h2>
      <p className='md:text-lg mb-6'>
        J’apporte une dynamique sereine, précise et orientée résultats.
        <br />
        Mon objectif&nbsp;: faire avancer le projet avec efficacité et durabilité, tout en maximisant les bénéfices pour les
        utilisateurs et en facilitant le travail de l’équipe.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <RiShieldCheckLine className='text-base-100 primary bg-primary p-3 mb-3 rounded-full' size={48} aria-hidden />
            <h3 className='card-title'>Fiabilité & transparence</h3>
            <p>
              Je prends le temps de comprendre les enjeux et de clarifier les besoins des utilisateurs, en avançant en toute
              transparence pour livrer des solutions robustes, sans dérive ni surprise.
            </p>
          </div>
        </div>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <RiStackLine className='text-base-100 primary bg-primary p-3 mb-3 rounded-full' size={48} aria-hidden />
            <h3 className='card-title'>Compétences transverses</h3>
            <p>
              Je m’intéresse à tous les aspects du produit&nbsp;: front, back, cloud et automatisation. Cette vision globale me
              permet d’intervenir là où c’est le plus critique et de fluidifier la collaboration entre les équipes.
            </p>
          </div>
        </div>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <RiTeamLine className='text-base-100 primary bg-primary p-3 mb-3 rounded-full' size={48} aria-hidden />
            <h3 className='card-title'>Impact sur l’équipe</h3>
            <p>
              Je m’aligne sur la cadence de l’équipe et contribue activement à améliorer l’expérience développeur grâce à des
              actions ciblées sur la qualité, l’architecture et l’automatisation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
