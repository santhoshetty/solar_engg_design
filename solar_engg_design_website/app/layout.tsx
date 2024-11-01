import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SUPABASE_URL } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '4Solar Engineering Design',
  description: 'Professional solar design and engineering solutions for installers and EPC companies',
  keywords: 'solar engineering, solar design, PV system design, solar permit design',
  openGraph: {
    title: '4Solar Engineering Design',
    description: 'Professional solar design and engineering solutions',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
    siteName: '4Solar Engineering Design',
    images: [
      {
        url: `${SUPABASE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
