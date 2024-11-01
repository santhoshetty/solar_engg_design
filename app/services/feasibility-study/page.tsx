export default function FeasibilityStudyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Feasibility Study</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-8">
            Our comprehensive feasibility studies help you make informed decisions about your solar project investments.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">What We Analyze</h2>
              <ul className="space-y-2">
                <li>Site assessment and shading analysis</li>
                <li>Solar resource evaluation</li>
                <li>Energy yield predictions</li>
                <li>Financial modeling and ROI calculations</li>
                <li>Technical constraints and opportunities</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
              <ul className="space-y-2">
                <li>Detailed feasibility report</li>
                <li>Preliminary system design</li>
                <li>Energy production estimates</li>
                <li>Financial analysis and projections</li>
                <li>Recommendations and next steps</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 