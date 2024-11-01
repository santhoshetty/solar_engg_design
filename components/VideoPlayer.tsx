'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  audioUrl: string;
  fallbackImage?: string;
}

export default function VideoPlayer({ videoUrl, audioUrl, fallbackImage }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isAudioReady, setIsAudioReady] = useState(false);

  useEffect(() => {
    const startMedia = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
        if (audioRef.current) {
          audioRef.current.volume = 0;
          // Just load the audio but don't play yet
          await audioRef.current.load();
          setIsAudioReady(true);
        }
      } catch (error) {
        console.log("Media autoplay failed:", error);
      }
    };

    startMedia();
  }, []);

  const toggleMute = async () => {
    if (audioRef.current && isAudioReady) {
      try {
        if (isMuted) {
          // When unmuting, we need to play the audio first
          await audioRef.current.play();
          audioRef.current.volume = 1;
        } else {
          audioRef.current.volume = 0;
        }
        setIsMuted(!isMuted);
      } catch (error) {
        console.log("Audio toggle failed:", error);
      }
    }
  };

  // Handle audio loop independently
  useEffect(() => {
    const audioElement = audioRef.current;
    
    const handleAudioEnd = () => {
      if (audioElement && !isMuted) {
        audioElement.currentTime = 0;
        audioElement.play().catch(error => {
          console.log("Audio replay failed:", error);
        });
      }
    };

    if (audioElement) {
      audioElement.addEventListener('ended', handleAudioEnd);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', handleAudioEnd);
      }
    };
  }, [isMuted]);

  return (
    <div className="relative w-full h-[100vh]">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        preload="auto"
        poster={fallbackImage}
        aria-label="Solar transformation video"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <audio
        ref={audioRef}
        preload="auto"
      >
        <source src={audioUrl} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div className="absolute inset-0 bg-black/30" />

      {/* Audio Control Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-8 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors text-white"
        aria-label={isMuted ? "Unmute audio" : "Mute audio"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
    </div>
  );
} 