import Image from 'next/image';
import Link from 'next/link';
import { getStorageUrl } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          {/* Logo and Company Info */}
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src={getStorageUrl('images/logo/4solar-logo.webp')}
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

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Netherlands (HQ)</h3>
              <p className="text-gray-400">
                Manis Krijgsmanhof 30,<br />
                5233BS Den Bosch,<br />
                Netherlands<br />
                +31 85 060 3859
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">India</h3>
              <p className="text-gray-400">
                #74, 2nd Cross,<br />
                Sapthagiri County Layout,<br />
                Uttarahalli, Bengaluru, 560060<br />
                +91 911 066 0658
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">USA</h3>
              <p className="text-gray-400">
                539 W Commerce St #5249,<br />
                Dallas, TX 75208,<br />
                USA<br />
                +1 469 606 1283
              </p>
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