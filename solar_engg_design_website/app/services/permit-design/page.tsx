export default function PermitDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Permit Design</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Professional permit-ready drawings and documentation that comply with local regulations and expedite your approval process.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Design Package Includes</h2>
              <ul className="space-y-2">
                <li>Site plan and array layout</li>
                <li>Electrical single-line diagrams</li>
                <li>Equipment specifications</li>
                <li>Structural attachment details</li>
                <li>Required calculations and documentation</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Process</h2>
              <ul className="space-y-2">
                <li>Code compliance review</li>
                <li>Authority Having Jurisdiction (AHJ) requirements check</li>
                <li>Drawing preparation and review</li>
                <li>Documentation compilation</li>
                <li>Submission support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 