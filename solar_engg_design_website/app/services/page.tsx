import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: "Feasibility Study",
    description: "Comprehensive analysis of your solar project's viability, including site assessment, energy yield predictions, and financial modeling.",
    iconName: "Zap",
    href: "/services/feasibility-study",
    imageUrl: "/images/services/feasibility.jpg"
  },
  {
    title: "Permit Design",
    description: "Professional permit-ready drawings and documentation that comply with local regulations and expedite your approval process.",
    iconName: "FileCheck",
    href: "/services/permit-design",
    imageUrl: "/images/services/permit.jpg"
  },
  {
    title: "Detail Engineering",
    description: "Complete engineering package including electrical designs, structural analysis, and construction documentation.",
    iconName: "Building2",
    href: "/services/detail-engineering",
    imageUrl: "/images/services/engineering.jpg"
  }
] as const;

export default function ServicesPage() {
  return (
    <>
      <div className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Our Services
          </h1>
          <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
            Professional solar engineering solutions tailored to your project needs
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </>
  );
} 