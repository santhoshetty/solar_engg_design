'use client';

import { 
  Camera, 
  FileSearch, 
  Ruler, 
  Zap,
  Cog, 
  FileCheck2 
} from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Site Survey",
    description: "Drone inspection and site assessment",
    color: "bg-blue-500"
  },
  {
    icon: FileSearch,
    title: "Feasibility Analysis",
    description: "Technical and financial evaluation",
    color: "bg-green-500"
  },
  {
    icon: Ruler,
    title: "Preliminary Design",
    description: "Initial layout and system sizing",
    color: "bg-purple-500"
  },
  {
    icon: Zap,
    title: "Electrical Design",
    description: "Detailed electrical engineering",
    color: "bg-orange-500"
  },
  {
    icon: Cog,
    title: "Structural Analysis",
    description: "Load calculations and mounting design",
    color: "bg-red-500"
  },
  {
    icon: FileCheck2,
    title: "Final Documentation",
    description: "Complete engineering package",
    color: "bg-teal-500"
  }
];

export default function ProcessTimeline() {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Our Design Process
        </h2>
        
        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 -translate-y-1/2" />
          
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
                    w-16 h-16 rounded-full 
                    ${step.color} shadow-lg 
                    flex items-center justify-center 
                    border-4 border-white 
                    relative z-10 mb-4
                    transform transition-all duration-300
                    group-hover:scale-110 group-hover:shadow-xl
                    cursor-pointer
                  `}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Text content with hover effect */}
                  <div className="text-center transform transition-all duration-300 group-hover:-translate-y-1">
                    <h3 className="font-semibold mb-1 text-gray-800">{step.title}</h3>
                    <p className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting line animation on hover */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-8 left-[60%] w-full h-0.5 bg-gray-200 -z-10">
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