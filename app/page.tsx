'use client';

import { useState, useEffect } from 'react';
import LogoCarousel from '@/components/LogoCarousel';
import Link from 'next/link';
import { getStorageUrl, MEDIA_PATHS } from '@/lib/constants';
import { Volume2, VolumeX } from 'lucide-react';

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Initialize audio and video elements
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
    
    if (video && audio) {
      // Set initial mute state
      video.muted = isMuted;
      audio.muted = isMuted;
      
      // Start playing audio if unmuted
      if (!isMuted) {
        audio.play().catch(error => {
          console.error('Audio playback error:', error);
        });
      }
    }
  }, [isMuted]); // Re-run when mute state changes

  const toggleMute = () => {
    const video = document.querySelector('video');
    const audio = document.querySelector('audio');
    
    if (video && audio) {
      const newMutedState = !isMuted;
      
      // Update mute state for both elements
      video.muted = newMutedState;
      audio.muted = newMutedState;
      
      // If unmuting, ensure audio plays
      if (!newMutedState) {
        audio.play().catch(error => {
          console.error('Audio playback error:', error);
        });
      }
      
      setIsMuted(newMutedState);
    }
  };

  // Log URLs for debugging
  console.log('Video path:', MEDIA_PATHS.video);
  const videoUrl = getStorageUrl(MEDIA_PATHS.video);
  console.log('Final video URL:', videoUrl);

  console.log('Audio path:', MEDIA_PATHS.audio);
  const audioUrl = getStorageUrl(MEDIA_PATHS.audio);
  console.log('Final audio URL:', audioUrl);

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
          poster={getStorageUrl(MEDIA_PATHS.hero)} // Use hero image as placeholder while video loads
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Background Audio */}
        <audio autoPlay loop muted={isMuted}>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>

        {/* Mute Toggle Button - Adjusted position */}
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
        <div className="w-full px-4 py-6">
          <LogoCarousel />
        </div>
      </div>
    </main>
  );
}
