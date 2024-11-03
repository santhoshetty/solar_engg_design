import Image from 'next/image'
import { getStorageUrl, MEDIA_PATHS } from '@/lib/constants'

function LandingPage() {
  return (
    <div>
      <Image
        src={getStorageUrl(MEDIA_PATHS.hero)}
        alt="Hero image"
        width={800}
        height={600}
        priority={true}
        quality={80}
      />
      {/* Company logos from the carousel */}
      {MEDIA_PATHS.companyLogos.map((logoPath, index) => (
        <Image
          key={index}
          src={getStorageUrl(logoPath)}
          alt={`Company logo ${index + 1}`}
          width={200}
          height={100}
          quality={80}
        />
      ))}
      <Image
        src={getStorageUrl(MEDIA_PATHS.logo)}
        alt="4solar logo"
        width={150}
        height={50}
        quality={80}
      />
      <Image
        src={getStorageUrl(MEDIA_PATHS.globalPresence)}
        alt="Global presence"
        width={1200}
        height={600}
        quality={80}
      />
    </div>
  )
}

export default LandingPage