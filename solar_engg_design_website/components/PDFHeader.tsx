import Image from 'next/image';

export default function PDFHeader() {
  return (
    <div className="pdf-header flex items-center justify-between p-4 border-b">
      <Image
        src="/images/logo/4solar-logo.png"
        alt="4Solar"
        width={32}
        height={32}
      />
      <div className="text-right text-sm text-gray-600">
        <p>Project Report</p>
        <p>{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
} 