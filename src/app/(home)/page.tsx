import type { Metadata } from 'next';
import { HomePage } from '@/features/presentation/abilities/home';
import jsonLd from '@/features/presentation/abilities/home/ui/pages/person.jsonLd.json';

const images = [
  {
    url: '/images/home/og-image.jpg',
    alt: 'Marc Gavanier - Ingénieur logiciel indépendant'
  }
];

const previewDescription =
  'Développeur spécialisé dans la conception d’applications fiables, performantes et centrées sur les besoins réels des utilisateurs.';

export const metadata: Metadata = {
  title: 'Marc Gavanier',
  description:
    'Développeur freelance expert en ingénierie logicielle, je conçois des applications fiables, performantes et centrées sur les besoins réels des utilisateurs grâce au Domain-Driven Design, au clean code, au TDD et à une architecture soignée déployée selon les pratiques DevOps.',
  metadataBase: new URL('https://marc.gavanier.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://marc.gavanier.com',
    title: 'Marc Gavanier - Ingénieur logiciel indépendant',
    description: previewDescription,
    siteName: 'Marc Gavanier',
    images
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marc Gavanier - Ingénieur logiciel indépendant',
    description: previewDescription,
    images
  },
  manifest: '/manifest.webmanifest'
};

const Page = () => (
  <>
    <script
      type='application/ld+json'
      // biome-ignore lint/security/noDangerouslySetInnerHtml: This JSON-LD script must be injected as raw HTML so that search engines can read it
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <HomePage />
  </>
);

export default Page;
