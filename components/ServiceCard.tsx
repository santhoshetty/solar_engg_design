'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  Zap, 
  FileCheck, 
  Building2,
  LucideIcon 
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Zap,
  FileCheck,
  Building2,
};

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: keyof typeof iconMap;
  href: string;
  imageUrl?: string;
}

export default function ServiceCard({ 
  title, 
  description, 
  iconName, 
  href, 
  imageUrl 
}: ServiceCardProps) {
  const Icon = iconMap[iconName];
  
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-lg transition-all">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <Icon className="h-6 w-6 text-primary" />
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        
        {imageUrl && (
          <div className="relative h-48 w-full overflow-hidden rounded-md">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
          </div>
        )}
        
        <p className="text-muted-foreground">{description}</p>
        
        <Link 
          href={href}
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          Learn more
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
} 