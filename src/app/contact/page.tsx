import type { Metadata } from 'next';
import { ContactPage } from '@/features/presentation/abilities/contact';

const siteName = 'Marc Gavanier';

export const metadata: Metadata = {
  title: `Contact - ${siteName}`,
  description:
    'Vous souhaitez discuter d’un projet, poser une question ou collaborer ? Développeur freelance spécialisé en ingénierie logicielle, je suis disponible pour échanger et vous accompagner dans la conception d’applications fiables et performantes, adaptées à vos besoins.'
};

const Page = () => {
  return <ContactPage />;
};

export default Page;
