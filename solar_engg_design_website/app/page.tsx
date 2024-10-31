'use client';

import Link from 'next/link';
import VideoPlayer from '@/components/VideoPlayer';
import LogoCarousel from '@/components/LogoCarousel';

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <VideoPlayer 
        videoUrl="/videos/solar-transformation.mp4"
        audioUrl="/audio/background-music.mp3"
        fallbackImage="/images/solar-fallback.jpg"
      />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Engineering the Future of Solar Energy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Professional solar design and engineering solutions for installers and EPC companies
          </p>
          <Link 
            href="/services"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Logo Carousel */}
      <LogoCarousel />
    </main>
  );
}
