import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/layout/Preloader';
import { PageTransition } from '@/components/layout/PageTransition';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EcoFuture - Environmental Protection NGO',
  description: 'Leading the fight for environmental protection, clean energy, and a sustainable future for all.',
  keywords: ['environment', 'clean energy', 'sustainability', 'NGO', 'climate change'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Preloader />
        <Navigation />
        <PageTransition>
          <main className="pt-20">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}