'use client';

import { AppHero } from '../ui/ui-layout';
import CTA1Card from '../ui/cards/CtaCard1';
import CTA2Card from '../ui/cards/CtaCard2';

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
      <img src="/logos/hestia_bust_black_logo.svg" alt="Hestia" style={{width: '40%'}} />
      <AppHero title="Restaurant I.T. Infrastructure" subtitle="POS | Inventory | Employees | Customers | Orders | Rewards | Payment">
        <div className="opos" />
      </AppHero>
      <div className="flex flex-col gap-12 pb-6">
        <CTA1Card />
        <CTA2Card />
      </div>
    </div>
  );
}
