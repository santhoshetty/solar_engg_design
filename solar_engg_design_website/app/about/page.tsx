import Hero from '@/app/components/Hero';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in every project, delivering high-quality solar engineering solutions that exceed industry standards and client expectations.",
    icon: "🎯"
  },
  {
    title: "Sustainability",
    description: "Our commitment to environmental sustainability drives us to innovate and optimize solar solutions that create a cleaner, greener future.",
    icon: "🌱"
  },
  {
    title: "Innovation",
    description: "We embrace cutting-edge technology and creative problem-solving to advance solar engineering and deliver forward-thinking solutions.",
    icon: "💡"
  }
];

const teamMembers = [
  {
    name: "Manoj Payani",
    role: "Co-Founder & CEO",
    image: "/images/team/sarah-chen.jpg",
    description: "With over 15 years in solar engineering, Manoj leads 4Solar's vision of excellence and innovation.",
    linkedin: "https://linkedin.com/in/sarah-chen"
  },
  {
    name: "Willie Van Aalst",
    role: "Co-Founder & CTO",
    image: "/images/team/michael-rodriguez.jpg",
    description: "Willie brings 10+ years of experience in structural engineering and solar system design.",
    linkedin: "https://linkedin.com/in/michael-rodriguez"
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="About 4Solar"
        description="Leading the way in solar engineering excellence"
        imagePath="/images/hero.jpg"
      />

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground">
              Founded in 2017 in the Netherlands by Willie van Aalst, 4Solar emerged from a vision to transform 
              the solar engineering industry. In 2018, Manoj Payani joined the team, bringing additional 
              leadership and expertise as the current CEO.
            </p>
            <p className="text-muted-foreground mt-4">
              Since 2021, we've operated from our head office in Bengaluru, India, where our team has grown to 
              include 10 professional, youthful, and dedicated individuals. Through continuous innovation and 
              commitment to excellence, we've established ourselves as a trusted partner in the renewable 
              energy sector.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Global Presence</h2>
          <div className="relative w-full aspect-[2/1] max-w-5xl mx-auto">
            <Image
              src="/images/global-presence.png"
              alt="4Solar Global Presence"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            <p>Delivering solar engineering excellence across the globe</p>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission and Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              To accelerate the world's transition to sustainable energy by providing 
              exceptional solar engineering solutions that empower our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div 
                key={value.title}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-4">
                  {/* Profile Image */}
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* LinkedIn Icon */}
                  <Link 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg 
                             transform transition-transform duration-300 
                             hover:scale-110 hover:bg-blue-50"
                  >
                    <Linkedin className="w-5 h-5 text-[#0077b5]" />
                  </Link>
                </div>
                
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 