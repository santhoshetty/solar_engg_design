import { useState } from 'react'
import Image from 'next/image'

// Create a simple LoadingSpinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
);

export default function MediaSection() {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <Image
        src="/path/to/image.jpg"
        alt="description"
        width={800}
        height={600}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
} 