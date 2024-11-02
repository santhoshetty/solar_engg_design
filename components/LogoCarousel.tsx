'use client';

import Image from 'next/image';
import { getStorageUrl, MEDIA_PATHS } from '@/lib/constants';

const companyLogos = MEDIA_PATHS.companyLogos.map((path, index) => ({
  src: getStorageUrl(path),
  alt: `Company ${index + 1}`
}));

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