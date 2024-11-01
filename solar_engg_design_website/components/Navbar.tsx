'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isScrolled
    ? 'bg-white shadow-md'
    : isHomePage
    ? 'bg-transparent'
    : 'bg-white';

  const textColor = isScrolled || !isHomePage
    ? 'text-gray-900'
    : 'text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/4solar-logo.png"
              alt="4Solar"
              width={40}
              height={40}
              className="mr-2"
            />
            <span className={`font-bold text-xl ${textColor}`}>4Solar</span>
          </Link>
          
          <div className={`hidden md:flex space-x-8 ${textColor}`}>
            {!isHomePage && (
              <Link href="/services" className="hover:opacity-80">
                Services
              </Link>
            )}
            <Link href="/projects" className="hover:opacity-80">
              Projects
            </Link>
            <Link href="/about" className="hover:opacity-80">
              About
            </Link>
            <Link href="/careers" className="hover:opacity-80">
              Careers
            </Link>
            <Link href="/contact" className="hover:opacity-80">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 