interface HeroProps {
  title: string;
  description: string;
  imagePath: string;
}

export default function Hero({ title, description, imagePath }: HeroProps) {
  return (
    <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${imagePath})`,
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
} 