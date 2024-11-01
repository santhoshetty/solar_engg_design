'use client';

import { 
  Camera, 
  FileSearch, 
  Ruler, 
  Zap,
  Cog, 
  Table2,
  Route,
  Cable,
  GitBranch
} from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Site Survey",
    description: "Drone inspection and site assessment",
    tools: "DJI Phantom 4 RTK, Pix4D",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    group: "feasibility"
  },
  {
    icon: FileSearch,
    title: "Overview Layout",
    description: "Technical and financial evaluation",
    tools: "PVsyst, HelioScope, Excel",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    group: "feasibility"
  },
  {
    icon: Ruler,
    title: "Inter-Connection SLD",
    description: "Initial layout and system sizing",
    tools: "AutoCAD, SketchUp Pro",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    group: "feasibility"
  },
  {
    icon: Zap,
    title: "3D PVSyst Yield",
    description: "Detailed electrical engineering",
    tools: "AutoCAD Electrical, ETAP",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
    group: "feasibility"
  },
  {
    icon: Cog,
    title: "Dimensional Layout",
    description: "Load calculations and mounting design",
    tools: "STAAD.Pro, RISA 3D",
    color: "bg-gradient-to-br from-rose-500 to-rose-600",
    group: "permit"
  },
  {
    icon: Table2,
    title: "String Table",
    description: "Complete engineering package",
    tools: "Adobe Acrobat, Bluebeam Revu",
    color: "bg-gradient-to-br from-teal-500 to-teal-600",
    group: "detail"
  },
  {
    icon: GitBranch,
    title: "String Plan",
    description: "Detailed string configuration layout",
    tools: "AutoCAD, PVsyst",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    group: "detail"
  },
  {
    icon: Route,
    title: "AC/DC Trajectory Layouts",
    description: "Cable routing and pathway design",
    tools: "AutoCAD Electrical, Revit",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    group: "detail"
  },
  {
    icon: Cable,
    title: "AC/DC Cabling",
    description: "Complete cable sizing and specifications",
    tools: "ETAP, Excel",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    group: "detail"
  }
];

export default function ProcessTimeline() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        
        <div className="relative">
          {/* Feasibility Study Group Background */}
          <div className="absolute left-0 right-0 top-0 bg-blue-50/50 rounded-t-lg -mx-6 px-6" 
               style={{ height: '44%', minHeight: '320px' }}>
            <div className="text-2xl font-semibold text-blue-800 pt-4 mb-8">
              Feasibility Study Phase
            </div>
          </div>

          {/* Permit Design Group Background */}
          <div className="absolute left-0 right-0 bg-rose-50/50 -mx-6 px-6"
               style={{ height: '12%', top: '44%', minHeight: '120px' }}>
            <div className="text-2xl font-semibold text-rose-800 -mt-8 mb-12">
              Permit Design Phase
            </div>
          </div>

          {/* Detail Engineering Group Background */}
          <div className="absolute left-0 right-0 bottom-0 bg-purple-50/50 rounded-b-lg -mx-6 px-6"
               style={{ height: '44%', minHeight: '320px' }}>
            <div className="text-2xl font-semibold text-purple-800 pt-4 mb-12 mt-24">
              Detail Engineering Phase
            </div>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8 pt-20">
            {steps.map((step, index) => {
              const nextStep = steps[index + 1];
              const isLastStepOfPhase = nextStep && step.group !== nextStep.group;
              const isFirstStepOfPhase = index > 0 && step.group !== steps[index - 1].group;

              return (
                <div key={step.title}>
                  {isFirstStepOfPhase && <div className="h-24" />} {/* Space before new phase */}
                  <div className={`relative flex items-center ${
                    index !== steps.length - 1 ? 'pb-8' : ''
                  }`}>
                    {/* Vertical Line - Now continuous */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200" />
                    )}

                    {/* Icon */}
                    <div className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full ${step.color} text-white`}>
                      <step.icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="ml-8">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-2">{step.description}</p>
                      <div className="text-sm text-gray-500">
                        Tools: {step.tools}
                      </div>
                    </div>
                  </div>
                  {isLastStepOfPhase && <div className="h-24 relative">
                    {/* Continue line through the spacing */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
                  </div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 