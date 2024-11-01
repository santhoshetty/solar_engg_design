'use client';

import Image from 'next/image';
import { SUPABASE_URL } from '@/lib/constants';

const companyLogos = [
  { src: `${SUPABASE_URL}/images/companies/company1.png`, alt: 'Company 1' },
  { src: `${SUPABASE_URL}/images/companies/company2.png`, alt: 'Company 2' },
  { src: `${SUPABASE_URL}/images/companies/company3.png`, alt: 'Company 3' },
  { src: `${SUPABASE_URL}/images/companies/company4.png`, alt: 'Company 4' },
  { src: `${SUPABASE_URL}/images/companies/company5.png`, alt: 'Company 5' },
  { src: `${SUPABASE_URL}/images/companies/company6.png`, alt: 'Company 6' },
];

export default function LogoCarousel() {
  return (
    <div className="w-full flex justify-center bg-white/80 backdrop-blur-sm py-4">
      <div className="w-2/3 overflow-hidden">
        <div className="relative flex">
          {/* First set of logos */}
          <div className="flex animate-scroll">
            {companyLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 mx-8 w-24 h-12 relative"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set of logos for seamless loop */}
          <div className="flex animate-scroll" aria-hidden="true">
            {companyLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 mx-8 w-24 h-12 relative"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 