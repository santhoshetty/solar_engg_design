import Hero from '@/app/components/Hero';
import Image from 'next/image';

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
    name: "Sarah Chen",
    role: "Founder & CEO",
    image: "/images/team/sarah-chen.jpg",
    description: "With over 15 years in solar engineering, Sarah leads 4Solar's vision of excellence and innovation."
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Engineer",
    image: "/images/team/michael-rodriguez.jpg",
    description: "Michael brings 10+ years of experience in structural engineering and solar system design."
  },
  {
    name: "David Park",
    role: "Technical Director",
    image: "/images/team/david-park.jpg",
    description: "David specializes in electrical engineering and oversees all technical aspects of our projects."
  },
  {
    name: "Emily Thompson",
    role: "Project Manager",
    image: "/images/team/emily-thompson.jpg",
    description: "Emily ensures smooth project execution and client satisfaction with her detail-oriented approach."
  }
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
              Founded in 2018, 4Solar emerged from a vision to transform the solar engineering industry. 
              What began as a small team of dedicated engineers has grown into a leading solar engineering firm, 
              serving clients across the United States.
            </p>
            <p className="text-muted-foreground mt-4">
              Our journey started with a focus on residential solar designs, but quickly expanded to include 
              commercial and utility-scale projects. Through continuous innovation and commitment to excellence, 
              we've established ourselves as a trusted partner in the renewable energy sector.
            </p>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div 
                key={member.name}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
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