import type { Metadata } from 'next';
import './globals.css';
import { inter, notoSans } from './fonts';

export const metadata: Metadata = {
  title: 'Raj Pulapakura | Portfolio',
  description: 'My Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
