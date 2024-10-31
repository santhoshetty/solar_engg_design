import Hero from '@/app/components/Hero';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Hero
        title="About 4Solar"
        description="Leading the way in solar engineering excellence"
        imagePath="/images/hero.jpg"
      />
      {/* Rest of the content */}
    </div>
  );
} 