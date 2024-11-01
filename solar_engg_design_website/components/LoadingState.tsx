import Image from 'next/image';

export default function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Image
          src="/images/logo/4solar-logo.png"
          alt="4Solar"
          width={80}
          height={80}
          className="mx-auto animate-pulse"
        />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
} 