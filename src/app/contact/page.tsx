import type { Metadata } from 'next';
import { ContactPage } from '@/features/presentation/abilities/contact';

export const metadata: Metadata = {
  title: 'Contact | Marc Gavanier',
  description:
    'Vous souhaitez discuter d’un projet, poser une question ou collaborer ? Développeur freelance spécialisé en ingénierie logicielle, je suis disponible pour échanger et vous accompagner dans la conception d’applications fiables et performantes, adaptées à vos besoins.'
};

const Page = () => <ContactPage />;

export default Page;
