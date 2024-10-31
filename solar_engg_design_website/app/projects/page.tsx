import Hero from '@/app/components/Hero';
import ProjectCard from '@/components/ProjectCard';
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
  {
    id: 'industrial-roof',
    title: 'Industrial Rooftop Array',
    description: 'Complex rooftop solar system designed for an industrial facility with multiple roof levels and HVAC integration considerations.',
    imageUrl: '/images/projects/industrial-roof.jpg',
    capacity: '750 kW',
    location: 'Denver, CO',
    completionDate: '2023-09',
  },
  {
    id: 'school-campus',
    title: 'Educational Campus Solar',
    description: 'Multi-building solar installation across a school campus, combining rooftop and ground-mounted systems with educational monitoring displays.',
    imageUrl: '/images/projects/school-campus.jpg',
    capacity: '400 kW',
    location: 'Austin, TX',
    completionDate: '2023-07',
  },
  {
    id: 'agricultural-solar',
    title: 'Agricultural Solar Project',
    description: 'Innovative agrivoltaic system design allowing for dual land use with solar panels installed above active farmland.',
    imageUrl: '/images/projects/agricultural-solar.jpg',
    capacity: '1.2 MW',
    location: 'Sacramento, CA',
    completionDate: '2023-10',
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Our Projects"
        description="Discover our portfolio of successful solar installations"
        imagePath="/images/hero.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Project Filters - Optional future enhancement */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            Explore our diverse portfolio of solar engineering projects across various sectors and scales.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 