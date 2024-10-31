'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  capacity: string;
  location: string;
  completionDate: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-lg transition-all">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-muted-foreground">Capacity:</span>
            <p className="font-medium">{project.capacity}</p>
          </div>
          <div>
            <span className="text-muted-foreground">Location:</span>
            <p className="font-medium">{project.location}</p>
          </div>
        </div>
        
        <Link 
          href={`/projects/${project.id}`}
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          View Details
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