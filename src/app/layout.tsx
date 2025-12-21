import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { Navbar } from '@/features/presentation/abilities/layout/ui/components/navbar';
import { type Category, Footer, FooterLegal, type FooterLink, FooterSocialLinks } from '@/libraries/ui/blocks/footer';
import { ThemeChanger } from '@/libraries/ui/blocks/theme-changer';
import { Toaster } from '@/libraries/ui/blocks/toaster';
import { Logo } from '@/libraries/ui/illustrations/logo';
import { MaltLogo } from '@/libraries/ui/illustrations/products/malt/malt.logo';
import { ThemeProvider } from '@/libraries/ui/theme/providers';

const footerCategories: Category[] = [];

const socialLinks: FooterLink[] = [
  {
    key: 'github',
    linkProps: {
      href: 'https://github.com/marc-gavanier',
      icon: <RiGithubFill size='24' aria-hidden={true} />,
      children: 'GitHub'
    }
  },
  {
    key: 'linkedin',
    linkProps: {
      href: 'https://www.linkedin.com/in/marc-gavanier',
      icon: <RiLinkedinBoxFill size='24' aria-hidden={true} />,
      children: 'Linkedin'
    }
  },
  {
    key: 'malt',
    linkProps: {
      href: 'https://www.malt.fr/profile/marcgavanier',
      icon: <MaltLogo width='24' height='24' fill='currentColor' className='p-0.5' aria-hidden={true} />,
      children: 'Malt'
    }
  }
];

export default ({ children }: { children: ReactNode }) => (
  <html lang='fr' data-theme='light' suppressHydrationWarning>
    <body>
      <ThemeProvider attribute='data-theme' defaultTheme='light' enableSystem disableTransitionOnChange>
        <Toaster directionY='toast-top' directionX='toast-center' />
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          {children}
        </div>
        <Footer className='bg-base-200' categories={footerCategories}>
          <Logo color='color-base-500' className='max-w-40 pb-4' />
          <ThemeChanger />
        </Footer>
        <FooterLegal
          className='bg-base-300'
          company='Marc Gavanier'
          legalNoticeLink='/legal-notice'
          privacyPolicyLink='/privacy'
          termsOfServiceLink='/terms'
        >
          <FooterSocialLinks links={socialLinks}></FooterSocialLinks>
        </FooterLegal>
      </ThemeProvider>
    </body>
  </html>
);
