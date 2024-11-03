'use client';

import { useState, useEffect } from 'react';
import LogoCarousel from '@/components/LogoCarousel';
import Link from 'next/link';
import { getStorageUrl, MEDIA_PATHS } from '@/lib/constants';
import { Volume2, VolumeX } from 'lucide-react';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize audio and video elements
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
    
    if (video && audio) {
      video.muted = isMuted;
      audio.muted = isMuted;
      
      if (!isMuted) {
        audio.play().catch(error => {
          console.error('Audio playback error:', error);
        });
      }
    }

    // Trigger animation after 5 seconds
    setTimeout(() => setIsLoaded(true), 5000);
  }, [isMuted]);

  const toggleMute = () => {
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
    
    if (video && audio) {
      const newMutedState = !isMuted;
      video.muted = newMutedState;
      audio.muted = newMutedState;
      
      if (!newMutedState) {
        audio.play().catch(error => {
          console.error('Audio playback error:', error);
        });
      }
      
      setIsMuted(newMutedState);
    }
  };

  const videoUrl = getStorageUrl(MEDIA_PATHS.video);
  const audioUrl = getStorageUrl(MEDIA_PATHS.audio);

  return (
    <main className="min-h-screen relative">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => console.error('Video load error:', e)}
          preload="auto"
          poster={getStorageUrl(MEDIA_PATHS.hero)}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <audio autoPlay loop muted={isMuted}>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>

        <button
          onClick={toggleMute}
          className="fixed bottom-10 right-5 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      </div>
      
      {/* Hero Content */}
      <div className="relative min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col items-center justify-center text-white p-4">
          <div className={`container mx-auto px-4 text-center transform transition-all duration-2000 
            ${isLoaded ? 'translate-z-0 opacity-100' : 'translate-z-[-100px] opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight
              transition-all duration-2000 delay-[5400ms]">
              Engineering the Future of Solar Energy
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed
              transition-all duration-2000 delay-[5400ms]">
              Professional solar design and engineering solutions for installers and EPC companies
            </p>
            <Link 
              href="/services"
              className={`inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold 
                px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-all duration-2000 delay-[1500ms]
                text-base sm:text-lg shadow-lg hover:shadow-xl 
                transform hover:-translate-y-0.5 
                ${isLoaded ? 'translate-z-0 opacity-100' : 'translate-z-[-100px] opacity-0'}`}
            >
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Logo Carousel */}
        <div className={`w-full px-4 py-6 transition-all duration-[4000ms] delay-[1500ms]
          transform ease-out
          ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[200%] opacity-0'}`}>
          <LogoCarousel />
        </div>
      </div>
    </main>
  );
}
