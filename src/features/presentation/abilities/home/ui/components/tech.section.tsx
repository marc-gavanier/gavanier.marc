import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/libraries/utils';

export const TechSection = ({ className }: { className?: string }) => (
  <section id='tech' className={cn('my-24', className)}>
    <h2 className='text-4xl text-center md:text-left font-bold bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-subtle)] bg-clip-text text-transparent mb-8'>
      Socle technique
    </h2>
    <p className='md:text-lg mb-3'>
      Je privilégie les concepts, pratiques et méthodologies transférables plutôt que les outils.
      <br />
      Les technologies listées ci-dessous sont celles que j’utilise régulièrement en production.
    </p>
    <p className='md:text-lg mb-6'>
      Cette approche me permet de m’intégrer rapidement et de créer immédiatement de la valeur pour le projet et l’équipe.
    </p>
    <h3 className='font-bold text-2xl mt-4 mb-2'>Frontend</h3>
    <p className='text-muted mb-2'>
      Interfaces robustes, accessibles et maintenables, avec une attention particulière portée à la simplicité et aux usages
      réels&nbsp;:
    </p>
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 my-12'>
      <Link
        href='https://www.typescriptlang.org/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center'
      >
        <Image
          width={100}
          height={100}
          src='/images/home/tech/typescript.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>TypeScript</span>
      </Link>
      <Link href='https://react.dev/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/react.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>React</span>
      </Link>
      <Link href='https://nextjs.org/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/nextjs.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Next.js</span>
      </Link>
      <Link href='https://tanstack.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/tanstack.webp'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Tanstack</span>
      </Link>
      <Link href='https://angular.dev/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/angular.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Angular</span>
      </Link>
      <Link href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/tailwind.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Tailwind CSS</span>
      </Link>
      <Link href='https://daisyui.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/daisyui.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>daisyUI</span>
      </Link>
      <Link href='https://getbootstrap.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/bootstrap.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Bootstrap</span>
      </Link>
    </div>
    <h3 className='font-bold text-2xl mt-4 mb-2'>Backend</h3>
    <p className='text-muted mb-2'>
      Back-ends orientés métier, conçus pour évoluer dans le temps et rester simples à maintenir&nbsp;:
    </p>
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 my-12'>
      <Link href='https://nodejs.org/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/nodejs.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Node.js</span>
      </Link>
      <Link href='https://effect.website/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/effect.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Effect</span>
      </Link>
      <Link href='https://trpc.io/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/trpc.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>tRPC</span>
      </Link>
      <Link href='https://www.prisma.io/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/prisma.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Prisma</span>
      </Link>
      <Link href='https://orm.drizzle.team/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/drizzle.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Drizzle</span>
      </Link>
      <Link
        href='https://dotnet.microsoft.com/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center'
      >
        <Image
          width={200}
          height={200}
          src='/images/home/tech/dotnet.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>.ASP.NET Core</span>
      </Link>
      <Link href='https://www.postgresql.org/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/postgresql.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>PostgreSQL</span>
      </Link>
      <Link href='https://www.openapis.org/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/openapi.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>OpenAPI</span>
      </Link>
    </div>
    <h3 className='font-bold text-2xl mt-4 mb-2'>Infrastructure & automatisation</h3>
    <p className='text-muted mb-2'>
      Infrastructures pragmatiques et automatisées, pensées pour livrer rapidement sans sacrifier la fiabilité&nbsp;:
    </p>
    <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 my-12'>
      <Link href='https://aws.amazon.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/aws.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>AWS</span>
      </Link>
      <Link
        href='https://www.scaleway.com/fr/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center'
      >
        <Image
          width={200}
          height={200}
          src='/images/home/tech/scaleway.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Scaleway</span>
      </Link>
      <Link
        href='https://developer.hashicorp.com/terraform/'
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center'
      >
        <Image
          width={200}
          height={200}
          src='/images/home/tech/terraform.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Terraform</span>
      </Link>
      <Link href='https://www.pulumi.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/pulumi.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Pulumi</span>
      </Link>
      <Link href='https://sst.dev/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/sst.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>SST</span>
      </Link>
      <Link href='https://www.docker.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/docker.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Docker</span>
      </Link>
      <Link
        href='https://docs.github.com/en/actions'
        target='_blank'
        rel='noopener noreferrer'
        className='flex flex-col items-center'
      >
        <Image
          width={200}
          height={200}
          src='/images/home/tech/github.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>GitHub Actions</span>
      </Link>
      <Link href='https://docs.gitlab.com/ci/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/gitlab.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>GitLab CI</span>
      </Link>
    </div>
    <h3 className='font-bold text-2xl mt-4 mb-2'>Qualité logicielle & observabilité</h3>
    <p className='text-muted mb-2'>
      Qualité intégrée dès le départ&nbsp;: tests, automatisation, lisibilité, observabilité et retours rapides&nbsp;:
    </p>
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 my-12'>
      <Link href='https://git-scm.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/git.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Git</span>
      </Link>
      <Link href='https://vitest.dev/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/vitest.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Vitest</span>
      </Link>
      <Link href='https://biomejs.dev/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/biome.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Biome</span>
      </Link>
      <Link href='https://xunit.net/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/xunit.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>xUnit</span>
      </Link>
      <Link href='https://playwright.dev/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/playwright.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Playwright</span>
      </Link>
      <Link href='https://storybook.js.org/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/storybook.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Storybook</span>
      </Link>
      <Link href='https://sentry.io/welcome/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/sentry.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Sentry</span>
      </Link>
      <Link href='https://grafana.com/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center'>
        <Image
          width={200}
          height={200}
          src='/images/home/tech/grafana.svg'
          alt=''
          className='h-20 md:h-24 mb-2 object-contain transition-transform duration-200 hover:scale-110 hover:-translate-y-1 hover:rotate-5'
          loading='lazy'
        />
        <span className='font-semibold'>Grafana</span>
      </Link>
    </div>
  </section>
);
