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
          <div className="flex animate-[slideLoop_20s_linear_infinite]">
            {companyLogos.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex-shrink-0 mx-8 w-24 h-12 relative transition-all duration-[3000ms]"
                style={{ 
                  transform: 'translateX(200%)',
                  opacity: 0,
                  animation: `slideIn 3s ease-out forwards`,
                  animationDelay: `${index * 500}ms`
                }}
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
          <div className="flex animate-[slideLoop_20s_linear_infinite]" aria-hidden="true">
            {companyLogos.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex-shrink-0 mx-8 w-24 h-12 relative transition-all duration-[3000ms]"
                style={{ 
                  transform: 'translateX(200%)',
                  opacity: 0,
                  animation: `slideIn 3s ease-out forwards`,
                  animationDelay: `${(index + companyLogos.length) * 500}ms`
                }}
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

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(200%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideLoop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
} 