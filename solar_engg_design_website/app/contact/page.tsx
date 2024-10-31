'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white [text-shadow:_2px_2px_2px_rgb(0_0_0_/_100%)]">
            Contact Us
          </h1>
          <p className="text-xl text-center text-white font-medium max-w-2xl mx-auto [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]">
            Get in touch with our solar engineering experts
          </p>
        </div>
      </div>
      {/* Rest of the page content */}
    </>
  );
} 