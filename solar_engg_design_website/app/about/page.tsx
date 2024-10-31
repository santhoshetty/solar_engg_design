import Image from 'next/image';

const teamMembers = [
  {
    name: "John Smith",
    role: "Founder & CEO",
    bio: "20+ years of experience in solar engineering and renewable energy projects.",
    imageUrl: "/images/team/john-smith.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Technical Director",
    bio: "Expert in solar system design with a background in electrical engineering.",
    imageUrl: "/images/team/sarah-johnson.jpg"
  },
  {
    name: "Michael Chen",
    role: "Lead Engineer",
    bio: "Specialized in structural engineering and advanced solar mounting solutions.",
    imageUrl: "/images/team/michael-chen.jpg"
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div 
        className="relative py-20 bg-primary/5"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            About 4Solar
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Leading the way in solar engineering excellence
          </p>
        </div>
      </div>

      {/* Company Story */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, 4Solar emerged from a vision to revolutionize solar engineering design. 
                Our team of experienced engineers saw the need for specialized design services in the 
                rapidly growing solar industry.
              </p>
              <p>
                Today, we're proud to have contributed to over 100 successful solar projects across 
                the country, ranging from commercial rooftops to utility-scale installations.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/about/office.jpg"
              alt="4Solar office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-primary/5">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-muted-foreground">
                Delivering the highest quality engineering solutions that exceed industry standards.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-primary/5">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-muted-foreground">
                Embracing new technologies and methodologies to optimize solar designs.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-primary/5">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                Contributing to a cleaner future through renewable energy solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 