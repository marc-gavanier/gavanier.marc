import { HomePage } from '@/features/presentation/abilities/home';
import jsonLd from '@/features/presentation/abilities/home/ui/pages/person.jsonLd.json';

export { metadata } from './metadata';

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
