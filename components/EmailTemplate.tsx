import Image from 'next/image';
import { getStorageUrl } from '@/lib/constants';

export default function EmailTemplate() {
  return (
    <div className="email-container">
      <div className="email-header">
        <Image
          src={getStorageUrl('images/logo/4solar-logo.webp')}
          alt="4Solar"
          width={40}
          height={40}
          className="mx-auto mb-4"
        />
        <h2>4Solar Engineering Design</h2>
      </div>
      {/* Email content */}
    </div>
  );
} 