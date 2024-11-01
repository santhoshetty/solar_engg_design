import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo and Company Info */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/images/logo/4solar-logo.png"
                alt="4Solar"
                width={48}
                height={48}
                className="mr-2"
              />
              <span className="font-bold text-2xl">4Solar</span>
            </Link>
            <p className="text-gray-400 max-w-sm">
              Professional solar design and engineering solutions for installers and EPC companies
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services#feasibility">Feasibility Study</Link></li>
                <li><Link href="/services#permit">Permit Design</Link></li>
                <li><Link href="/services#detail">Detail Engineering</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/careers">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact">Get in Touch</Link></li>
                <li>info@4solar.com</li>
                <li>+1 234 567 8900</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} 4Solar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 