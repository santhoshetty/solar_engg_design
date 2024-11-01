import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Project } from '@/components/ProjectCard';

// This would typically come from an API or database
const projects: Project[] = [
  {
    id: 'commercial-rooftop-1',
    title: 'Commercial Rooftop Solar Installation',
    description: 'A 500kW rooftop solar installation for a manufacturing facility, including structural reinforcement and custom mounting solutions.',
    imageUrl: '/images/projects/commercial-rooftop.jpg',
    capacity: '500 kW',
    location: 'Phoenix, AZ',
    completionDate: '2023-06',
  },
  {
    id: 'carport-solar',
    title: 'Solar Carport System',
    description: 'Innovative carport solar design providing both parking shade and renewable energy generation for a corporate campus.',
    imageUrl: '/images/projects/carport-solar.jpg',
    capacity: '250 kW',
    location: 'San Diego, CA',
    completionDate: '2023-08',
  },
  {
    id: 'ground-mount',
    title: 'Ground Mount Solar Farm',
    description: 'Large-scale ground mount solar farm with advanced tracking system and optimal terrain utilization.',
    imageUrl: '/images/projects/ground-mount.jpg',
    capacity: '2 MW',
    location: 'Las Vegas, NV',
    completionDate: '2023-11',
  },
];

interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.projectId);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Project Image */}
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Details */}
          <div>
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Capacity</h3>
                <p className="text-muted-foreground">{project.capacity}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">{project.location}</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Completion Date</h3>
                <p className="text-muted-foreground">
                  {new Date(project.completionDate).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 