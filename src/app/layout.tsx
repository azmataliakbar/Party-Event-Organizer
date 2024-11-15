"use client";
import './globals.css';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-100 text-gray-900`}>
        <header className="bg-gray-700 text-white p-4 flex items-center justify-between rounded-b-lg">
          <h1 className="text-xl sm:text-4xl font-bold hover:text-blue-300 hover:scale-125 ml-8">
            Happy Event Organizer
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10 font-bold">
            <Link href="/" className="hover:underline hover:text-yellow-300">Home</Link>
            <Link href="/event-form" className="hover:underline hover:text-yellow-300">New Event</Link>
            <Link href="/contact" className="hover:underline hover:text-yellow-300">Contact Us</Link>
          </nav>

          {/* Hamburger Button for Mobile */}
          <button
            className="lg:hidden text-white font-bold text-2xl focus:outline-none no-print"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </header>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-gray-600 text-white p-4 space-y-4 font-bold">
            <Link href="/" className="block hover:underline hover:text-yellow-300" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link href="/event-form" className="block hover:underline hover:text-yellow-300" onClick={() => setIsMobileMenuOpen(false)}>New Event</Link>
            <Link href="/contact" className="block hover:underline hover:text-yellow-300" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </nav>
        )}

        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
