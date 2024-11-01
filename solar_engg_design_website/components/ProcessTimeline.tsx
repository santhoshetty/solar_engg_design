'use client';

import { 
  Camera, 
  FileSearch, 
  Ruler, 
  Zap,
  Cog, 
  Table2,
  GitBranch,
  Route,
  Calculator
} from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Site Survey",
    description: "Drone inspection and site assessment",
    tools: "DJI Phantom 4 RTK, Pix4D",
    color: "bg-gradient-to-br from-blue-500 to-blue-600"
  },
  {
    icon: FileSearch,
    title: "Overview Layout",
    description: "Technical and financial evaluation",
    tools: "PVsyst, HelioScope, Excel",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600"
  },
  {
    icon: Ruler,
    title: "Inter-Connection SLD",
    description: "Initial layout and system sizing",
    tools: "AutoCAD, SketchUp Pro",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
  },
  {
    icon: Zap,
    title: "3D PVSyst Yield",
    description: "Detailed electrical engineering",
    tools: "AutoCAD Electrical, ETAP",
    color: "bg-gradient-to-br from-amber-500 to-amber-600"
  },
  {
    icon: Cog,
    title: "Dimensional Layout",
    description: "Load calculations and mounting design",
    tools: "STAAD.Pro, RISA 3D",
    color: "bg-gradient-to-br from-rose-500 to-rose-600"
  },
  {
    icon: Table2,
    title: "String Table",
    description: "Complete engineering package",
    tools: "Adobe Acrobat, Bluebeam Revu",
    color: "bg-gradient-to-br from-teal-500 to-teal-600"
  },
  {
    icon: GitBranch,
    title: "String Plan",
    description: "Complete engineering package",
    tools: "Adobe Acrobat, Bluebeam Revu",
    color: "bg-gradient-to-br from-purple-500 to-purple-600"
  },
  {
    icon: Route,
    title: "AC/DC Trajectory Layouts",
    description: "Complete engineering package",
    tools: "Adobe Acrobat, Bluebeam Revu",
    color: "bg-gradient-to-br from-orange-500 to-orange-600"
  },
  {
    icon: Calculator,
    title: "AC/DC Cable Calculations",
    description: "Complete engineering package",
    tools: "Adobe Acrobat, Bluebeam Revu",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600"
  }
];

export default function ProcessTimeline() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-24">
          Our Design Process
        </h2>
        
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute top-[88px] left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-amber-500 to-teal-500" />
          
          {/* Steps */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="flex flex-col items-center relative group"
                  style={{ width: '16.666%' }}
                >
                  {/* Icon circle with hover effect */}
                  <div className={`
                    w-20 h-20 rounded-full 
                    ${step.color} shadow-lg 
                    flex items-center justify-center 
                    border-2 border-white
                    relative z-10 mb-8
                    transform transition-all duration-300
                    group-hover:scale-110 group-hover:shadow-2xl
                    group-hover:border-opacity-100
                    cursor-pointer
                  `}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Text content with hover effect */}
                  <div className="text-center transform transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="font-semibold mb-2 text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.description}
                    </p>
                    <p className="text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-500">
                      Tools: {step.tools}
                    </p>
                  </div>

                  {/* Connecting line animation on hover */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-[60%] w-full h-0.5 bg-gray-200 -z-10">
                      <div className="h-full bg-gradient-to-r from-current to-gray-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
} 