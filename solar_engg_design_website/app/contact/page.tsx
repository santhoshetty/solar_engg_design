'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <div className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our solar engineering experts
          </p>
        </div>
      </div>
      {/* Rest of the page content */}
    </>
  );
} 