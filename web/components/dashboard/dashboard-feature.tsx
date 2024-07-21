'use client';

import { AppHero } from '../ui/ui-layout';

const links: { label: string; href: string }[] = [
  { label: 'Solana Docs', href: 'https://docs.solana.com/' },
  { label: 'Solana Faucet', href: 'https://faucet.solana.com/' },
  { label: 'Solana Cookbook', href: 'https://solanacookbook.com/' },
  { label: 'Solana Stack Overflow', href: 'https://solana.stackexchange.com/' },
  {
    label: 'Solana Developers GitHub',
    href: 'https://github.com/solana-developers/',
  },
];

export default function DashboardFeature() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="/logos/hestia_bust_black_logo.svg" alt="Hestia" style={{width: '80%'}} />
      <AppHero title="Restaurant I.T. Infrastructure" subtitle="POS | Inventory | Employees | Customers | Orders | Rewards | Payment">
        <p>All in One Program | All on Solana</p>
      </AppHero>
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          
          {/* {links.map((link, index) => (
            <div key={index}>
              <a
                href={link.href}
                className="link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
