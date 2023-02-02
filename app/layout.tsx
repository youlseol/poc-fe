import '@/styles/globals.css';
import { Inter as FontSans } from '@next/font/google';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn('bg-white font-sans text-slate-900 antialiased', fontSans.variable)}
    >
      <head />
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
