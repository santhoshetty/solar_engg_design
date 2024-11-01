import Image from 'next/image';

export default function EmailTemplate() {
  return (
    <div className="email-container">
      <div className="email-header">
        <Image
          src="/images/logo/4solar-logo.png"
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