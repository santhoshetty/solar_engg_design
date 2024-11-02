import { getStorageUrl } from '@/lib/constants';
import Hero from '@/components/Hero';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Services"
        description="Professional solar engineering solutions tailored to your project needs"
        imagePath={getStorageUrl('images/hero.jpg')}
      />

      {/* Process Timeline */}
      <ProcessTimeline />
    </>
  );
} 