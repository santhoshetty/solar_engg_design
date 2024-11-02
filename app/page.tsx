import VideoPlayer from '@/components/VideoPlayer';
import LogoCarousel from '@/components/LogoCarousel';
import Link from 'next/link';
import { getStorageUrl } from '@/lib/constants';

export default function Home() {
  return (
    <main className="min-h-screen">
      <VideoPlayer 
        videoUrl={getStorageUrl('videos/solar-transformation.mp4')}
        audioUrl={getStorageUrl('audio/background-music.mp3')}
        fallbackImage={getStorageUrl('images/solar-fallback.jpg')}
      />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Engineering the Future of Solar Energy
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Professional solar design and engineering solutions for installers and EPC companies
          </p>
          <Link 
            href="/services"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                     px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors 
                     text-base sm:text-lg shadow-lg hover:shadow-xl 
                     transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Logo Carousel */}
      <div className="absolute bottom-0 w-full px-4 py-6">
        <LogoCarousel />
      </div>
    </main>
  );
}
