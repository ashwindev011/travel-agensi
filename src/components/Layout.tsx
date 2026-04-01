import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="min-h-[calc(100vh-200px)]">{children}</main>
      <Footer />
    </div>
  );
}
