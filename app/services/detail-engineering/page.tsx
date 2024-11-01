export default function DetailEngineeringPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Detail Engineering</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Complete engineering package including electrical designs, structural analysis, and construction documentation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Engineering Services</h2>
              <ul className="space-y-2">
                <li>Detailed electrical design</li>
                <li>Structural engineering analysis</li>
                <li>Construction drawings</li>
                <li>Equipment specifications</li>
                <li>Performance modeling</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
              <ul className="space-y-2">
                <li>Complete drawing set</li>
                <li>Structural calculations</li>
                <li>Bill of materials</li>
                <li>Installation guidelines</li>
                <li>Technical specifications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 