export default function ProjectsPage() {
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
            Our Projects
          </h1>
          <p className="text-xl text-center text-white font-medium max-w-2xl mx-auto [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)]">
            Discover our portfolio of successful solar installations
          </p>
        </div>
      </div>
      {/* Rest of the page content */}
    </>
  );
} 