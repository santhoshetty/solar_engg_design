'use client';

import { useState } from 'react';
import Hero from '@/app/components/Hero';
import { Upload, Linkedin } from 'lucide-react';
import Link from 'next/link';

const openPositions = [
  {
    title: "Senior Solar Design Engineer",
    location: "Bengaluru, India",
    type: "Full-time",
    description: "Looking for an experienced solar design engineer with expertise in AutoCAD and PVsyst.",
  },
  {
    title: "Structural Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Seeking a structural engineer with experience in solar mounting systems and load calculations.",
  }
];

export default function CareersPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement CV upload logic
    console.log('File submitted:', selectedFile);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="Join Our Team"
        description="Build your career in solar engineering"
        imagePath="/images/hero.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Grow With Us</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join our team of passionate engineers and contribute to the future of renewable energy. 
            We offer competitive benefits, continuous learning opportunities, and a collaborative work environment.
          </p>
          
          {/* Application Options */}
          <div className="flex justify-center gap-6">
            <Link
              href="https://www.linkedin.com/company/4solar-global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#0077b5] text-white rounded-lg hover:bg-[#0077b5]/90 transition-colors"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Apply via LinkedIn
            </Link>
            
            <label className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors cursor-pointer">
              <Upload className="w-5 h-5 mr-2" />
              Upload CV
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>
          {selectedFile && (
            <p className="mt-4 text-sm text-green-600">
              Selected file: {selectedFile.name}
            </p>
          )}
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div 
                key={position.title}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{position.location}</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-primary border border-primary rounded hover:bg-primary/5 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-muted-foreground">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 