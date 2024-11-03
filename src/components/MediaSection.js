import { useState, useEffect } from 'react'

function MediaSection() {
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