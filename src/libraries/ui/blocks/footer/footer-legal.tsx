import type { ReactNode } from 'react';
import { RiCopyrightLine } from 'react-icons/ri';
import { FooterLinks } from './footer-links';

export const FooterLegal = ({
  company,
  legalNoticeLink,
  termsOfServiceLink,
  privacyPolicyLink,
  children,
  className
}: {
  company: string;
  legalNoticeLink: string;
  termsOfServiceLink: string;
  privacyPolicyLink: string;
  children?: ReactNode;
  className?: string;
}) => {
  const links = [
    { key: 'legal-notice', linkProps: { href: legalNoticeLink, children: 'Mentions légales' } },
    { key: 'terms-of-service', linkProps: { href: termsOfServiceLink, children: 'Conditions d’utilisation' } },
    { key: 'privacy-policy', linkProps: { href: privacyPolicyLink, children: 'Politique de confidentialité' } },
    { key: 'sitemap', linkProps: { href: '/sitemap', children: 'Plan du site' } }
  ];

  return (
    <div className={className}>
      <footer className='footer sm:footer-horizontal container mx-auto items-center px-6 py-4'>
        <aside className='flex flex-row flex-wrap gap-4 text-xs'>
          <p className='flex items-center gap-1'>
            <RiCopyrightLine /> {new Date().getFullYear()} {company}. Tous droits réservés.
          </p>
          <nav className='flex flex-row flex-wrap gap-4 text-xs' aria-label='Legal links'>
            <FooterLinks links={links} />
          </nav>
        </aside>
        {children}
      </footer>
    </div>
  );
};
