'use client';

import Image from 'next/image';

const companyLogos = [
  { src: '/images/companies/company1.png', alt: 'Company 1' },
  { src: '/images/companies/company2.png', alt: 'Company 2' },
  { src: '/images/companies/company3.png', alt: 'Company 3' },
  { src: '/images/companies/company4.png', alt: 'Company 4' },
  { src: '/images/companies/company5.png', alt: 'Company 5' },
  { src: '/images/companies/company6.png', alt: 'Company 6' },
];

export default function LogoCarousel() {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-white text-center mb-6 text-xl font-semibold">
          Trusted by Industry Leaders
        </h3>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center animate-scroll space-x-12 whitespace-nowrap">
            {/* First set of logos */}
            {companyLogos.map((logo, index) => (
              <div 
                key={`set1-${index}`} 
                className="inline-flex w-32 relative flex-shrink-0"
                style={{ height: '40px' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={128}
                  height={40}
                  className="object-contain object-center my-auto"
                  priority={index < 3}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {companyLogos.map((logo, index) => (
              <div 
                key={`set2-${index}`} 
                className="inline-flex w-32 relative flex-shrink-0"
                style={{ height: '40px' }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={128}
                  height={40}
                  className="object-contain object-center my-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 