'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Camera,
  FileSearch,
  Ruler,
  Zap,
  Cog,
  Table2,
  Route,
  Cable,
  GitBranch,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

const phases = {
  feasibility: {
    title: "Feasibility Study Phase",
    description: "Initial assessment of project viability, including site analysis, energy yield predictions, and preliminary designs to determine technical and financial feasibility.",
    color: "text-blue-800",
    bgColor: "bg-blue-50/50"
  },
  permit: {
    title: "Permit Design Phase",
    description: "Development of detailed technical documentation and drawings required for permit approval, ensuring compliance with local regulations and standards.",
    color: "text-rose-800",
    bgColor: "bg-rose-50/50"
  },
  detail: {
    title: "Detail Engineering Phase",
    description: "Comprehensive engineering package with complete electrical, structural, and construction documentation for project execution.",
    color: "text-purple-800",
    bgColor: "bg-purple-50/50"
  }
};

const steps = [
  {
    icon: Camera,
    title: "Site Survey",
    description: "Drone inspection and site assessment",
    tools: "DJI Phantom 4 RTK, Pix4D",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    group: "feasibility",
    detailedDescription: "High-precision drone mapping and 3D modeling for optimal site assessment. Includes shading analysis, structural evaluation, and precise measurements for maximum system efficiency.",
    images: [
      {
        src: "/images/steps/site-survey/drone-mapping.jpg",
        alt: "Drone Mapping Process"
      },
      {
        src: "/images/steps/site-survey/3d-model.jpg",
        alt: "3D Site Model"
      },
      {
        src: "/images/steps/site-survey/shading-analysis.jpg",
        alt: "Shading Analysis"
      }
    ]
  },
  {
    icon: FileSearch,
    title: "Layout Overview",
    description: "Technical and financial evaluation",
    tools: "PVsyst, HelioScope, Excel",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
    group: "feasibility",
    detailedDescription: "Comprehensive system layout design specifying module placement, equipment locations, and spatial organization. Includes technical specifications and financial analysis for project viability.",
    images: [
      {
        src: "/images/steps/overview-layout/overview-layout-1.png",
        alt: "PVsyst Layout"
      },
      {
        src: "/images/steps/overview-layout/overview-layout-2.png",
        alt: "HelioScope Layout"
      },
      {
        src: "/images/steps/overview-layout/overview-layout-3.png",
        alt: "Excel Layout"
      }
    ]
  },
  {
    icon: Ruler,
    title: "Inter-Connection SLD",
    description: "Initial layout and system sizing",
    tools: "AutoCAD, SketchUp Pro",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    group: "feasibility",
    detailedDescription: "Detailed single-line diagrams illustrating system architecture and electrical interconnections. Ensures compliance with utility requirements and optimal power distribution.",
    images: [
      {
        src: "/images/steps/interconnection-sld/interconnection-sld-1.png",
        alt: "AutoCAD Layout"
      },
      {
        src: "/images/steps/interconnection-sld/interconnection-sld-2.png",
        alt: "SketchUp Pro Layout"
      }
    ]
  },
  {
    icon: Zap,
    title: "3D PVSyst Yield",
    description: "Detailed electrical engineering",
    tools: "AutoCAD Electrical, ETAP",
    color: "bg-gradient-to-br from-amber-500 to-amber-600",
    group: "feasibility",
    detailedDescription: "Advanced 3D modeling and simulation for accurate energy yield predictions. Incorporates shading analysis, weather data, and equipment specifications for performance optimization.",
    images: [
      {
        src: "/images/steps/pvsyst-yield/3d-simulation-1.jpg",
        alt: "3D PVsyst Simulation"
      },
      {
        src: "/images/steps/pvsyst-yield/3d-simulation-2.jpg",
        alt: "Yield Analysis"
      },
      {
        src: "/images/steps/pvsyst-yield/3d-simulation-3.jpg",
        alt: "Energy Output"
      }
    ]
  },
  {
    icon: Cog,
    title: "Dimensional Layout",
    description: "Load calculations and mounting design",
    tools: "STAAD.Pro, RISA 3D",
    color: "bg-gradient-to-br from-rose-500 to-rose-600",
    group: "permit",
    detailedDescription: "Structural analysis and mounting system design ensuring code compliance and structural integrity. Includes load calculations and mounting specifications for safe installation.",
    images: [
      {
        src: "/images/steps/dimensional-layout/dimensional-layout-1.png",
        alt: "Structural Analysis"
      },
      {
        src: "/images/steps/dimensional-layout/dimensional-layout-2.png",
        alt: "Mounting System"
      }
    ]
  },
  {
    icon: Table2,
    title: "String Table",
    description: "Complete engineering package",
    tools: "Adobe Acrobat, Bluebeam Revu",
    color: "bg-gradient-to-br from-teal-500 to-teal-600",
    group: "detail",
    detailedDescription: "Comprehensive string configuration and inverter assignment documentation. Includes voltage/current calculations and optimization strategies for maximum system efficiency.",
    images: [
      {
        src: "/images/steps/string-table/string-table-1.png",
        alt: "Module Connections"
      },
      {
        src: "/images/steps/string-table/string-table-2.png",
        alt: "Inverter Assignments"
      },
      {
        src: "/images/steps/string-table/string-table-3.png",
        alt: "Voltage/Current Calculations"
      }
    ]
  },
  {
    icon: GitBranch,
    title: "String Plan",
    description: "Detailed string configuration layout",
    tools: "AutoCAD, PVsyst",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    group: "detail",
    detailedDescription: "Detailed module placement and string connection diagrams. Optimizes system performance through strategic grouping and efficient electrical configuration.",
    images: [
      {
        src: "/images/steps/string-plan/string-plan-1.png",
        alt: "Module Placement"
      },
      {
        src: "/images/steps/string-plan/string-plan-2.png",
        alt: "Connections"
      },
      {
        src: "/images/steps/string-plan/string-plan-3.png",
        alt: "System Performance"
      }
    ]
  },
  {
    icon: Route,
    title: "AC/DC Trajectory Layouts",
    description: "Cable routing and pathway design",
    tools: "AutoCAD Electrical, Revit",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    group: "detail",
    detailedDescription: "Strategic planning of AC and DC cable routes with support systems. Ensures optimal power transmission while maintaining safety standards and installation efficiency.",
    images: [
      {
        src: "/images/steps/trajectory-layouts/trajectory-layouts-1.png",
        alt: "Optimal Routing"
      },
      {
        src: "/images/steps/trajectory-layouts/trajectory-layouts-2.png",
        alt: "Support Systems"
      },
      {
        src: "/images/steps/trajectory-layouts/trajectory-layouts-3.png",
        alt: "Protection Requirements"
      }
    ]
  },
  {
    icon: Cable,
    title: "AC/DC Cabling",
    description: "Complete cable sizing and specifications",
    tools: "ETAP, Excel",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    group: "detail",
    detailedDescription: "Complete cable sizing and protection coordination using KABEL++. Includes voltage drop analysis and current capacity calculations for system reliability.",
    images: [
      {
        src: "/images/steps/cabling/cabling-1.jpg",
        alt: "Voltage Drop Calculations"
      },
      {
        src: "/images/steps/cabling/cabling-2.jpg",
        alt: "Conduit Sizing"
      },
      {
        src: "/images/steps/cabling/cabling-3.jpg",
        alt: "Protection Coordination"
      },
      {
        src: "/images/steps/cabling/cabling-4.png",
        alt: "Protection Coordination"
      }
    ]
  }
] as const;

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState<typeof steps[number] | null>(null);
  const [isHoveringPanel, setIsHoveringPanel] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{src: string; alt: string} | null>(null);

  const handleStepHover = (step: typeof steps[number] | null) => {
    if (step) {
      setActiveStep(step);
    }
  };

  const handlePanelMouseLeave = () => {
    setIsHoveringPanel(false);
    const timeoutId = setTimeout(() => {
      if (!isHoveringPanel) {
        setActiveStep(null);
      }
    }, 200);
    return () => clearTimeout(timeoutId);
  };

  const nextImage = () => {
    if (activeStep) {
      const newIndex = currentImageIndex === activeStep.images.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      // Update selected image if in modal view
      if (selectedImage) {
        setSelectedImage({
          src: activeStep.images[newIndex].src,
          alt: activeStep.images[newIndex].alt
        });
      }
    }
  };

  const previousImage = () => {
    if (activeStep) {
      const newIndex = currentImageIndex === 0 ? activeStep.images.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      // Update selected image if in modal view
      if (selectedImage) {
        setSelectedImage({
          src: activeStep.images[newIndex].src,
          alt: activeStep.images[newIndex].alt
        });
      }
    }
  };

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeStep]);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>

        <div className="relative flex gap-12">
          {/* Main Timeline Section */}
          <div className="flex-1 relative">
            {/* Feasibility Study Group Background */}
            <div className="absolute left-0 right-0 top-0 bg-blue-50/50 rounded-t-lg -mx-6 px-6"
              style={{ height: '44%', minHeight: '320px' }}>
              <div className="pt-4 mb-32 relative z-20">
                <div className="text-2xl font-semibold text-blue-800 mb-3">
                  {phases.feasibility.title}
                </div>
                <div className="w-2/3 text-base leading-relaxed text-blue-800/90 text-justify">
                  {phases.feasibility.description}
                </div>
              </div>
            </div>

            {/* Permit Design Group Background */}
            <div className="absolute left-0 right-0 bg-rose-50/50 -mx-6 px-6"
              style={{ height: '12%', top: '44%', minHeight: '120px' }}>
              <div className="-mt-8 mb-32 relative z-20">
                <div className="text-2xl font-semibold text-rose-800 mb-3">
                  {phases.permit.title}
                </div>
                <div className="w-2/3 text-base leading-relaxed text-rose-800/90 text-justify">
                  {phases.permit.description}
                </div>
              </div>
            </div>

            {/* Detail Engineering Group Background */}
            <div className="absolute left-0 right-0 bottom-0 bg-purple-50/50 rounded-b-lg -mx-6 px-6"
              style={{ height: '44%', minHeight: '320px' }}>
              <div className="pt-4 mb-32 mt-24 relative z-20">
                <div className="text-2xl font-semibold text-purple-800 mb-3">
                  {phases.detail.title}
                </div>
                <div className="w-2/3 text-base leading-relaxed text-purple-800/90 text-justify">
                  {phases.detail.description}
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative space-y-8 pt-40">
              {steps.map((step, index) => {
                const nextStep = steps[index + 1];
                const isLastStepOfPhase = nextStep && step.group !== nextStep.group;
                const isFirstStepOfPhase = index > 0 && step.group !== steps[index - 1].group;

                return (
                  <div key={step.title}>
                    {isFirstStepOfPhase && <div className="h-24" />}
                    <div
                      className={`relative flex items-center ${
                        index !== steps.length - 1 ? 'pb-8' : ''
                      } transition-all duration-200 hover:scale-102 cursor-pointer
                        ${activeStep?.title === step.title ? 'opacity-100' : 'hover:opacity-80'}`}
                      onMouseEnter={() => handleStepHover(step)}
                    >
                      {/* Vertical Line */}
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
                    {isLastStepOfPhase && (
                      <div className="h-24 relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detail Panel */}
          <div 
            className="w-[32rem] sticky top-8 h-[calc(100vh-4rem)] transition-all duration-300 overflow-hidden rounded-lg bg-white shadow-lg"
            onMouseEnter={() => setIsHoveringPanel(true)}
            onMouseLeave={handlePanelMouseLeave}
          >
            {activeStep ? (
              <div className="h-full overflow-y-auto">
                {/* Image Gallery */}
                <div className="relative h-64 w-full">
                  <button 
                    className="relative h-full w-full"
                    onClick={() => {
                      console.log('Image clicked'); // Debug log
                      setSelectedImage({
                        src: activeStep.images[currentImageIndex].src,
                        alt: activeStep.images[currentImageIndex].alt
                      });
                    }}
                  >
                    <Image
                      src={activeStep.images[currentImageIndex].src}
                      alt={activeStep.images[currentImageIndex].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                  </button>
                  
                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        previousImage();
                      }}
                      className="z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg pointer-events-auto"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg pointer-events-auto"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{activeStep.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-justify">
                    {activeStep.detailedDescription}
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Tools Used:</h4>
                      <p className="text-gray-600">{activeStep.tools}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Phase:</h4>
                      <p className="text-gray-600 capitalize">{activeStep.group}</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-400">
                <p>Hover over a step to see details</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Screen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-0 right-0 p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="object-contain max-h-full max-w-full"
                  width={1920}
                  height={1080}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {/* Modal Navigation Arrows */}
              <div className="absolute inset-x-0 flex items-center justify-between px-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                  className="z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="z-20 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 