import type { Metadata } from 'next';
import './styles/globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = { title: { default: 'Grubox | Office Snacking Made Easy', template: '%s | Grubox' }, description: 'Smart cafeterias, vending machines and office snack delivery by Grubox.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header/><main>{children}</main><Footer/></body></html>;
}
