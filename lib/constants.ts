export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;

// Helper function to get media URLs
export const getStorageUrl = (path: string) => {
    // Debug logs
    console.log('Base URL:', SUPABASE_URL);
    console.log('Path:', path);
    
    // Construct storage URL
    const url = `${SUPABASE_URL}/storage/v1/object/public/public-assets/${path}`;
    console.log('Generated URL:', url);
    
    return url;
};

// Media paths
export const MEDIA_PATHS = {
  logo: 'images/logo/4solar-logo.webp',
  hero: 'images/hero.webp',
  video: 'videos/solar-transformation.mp4',
  audio: 'audio/background-music.mp3',
  ogImage: 'images/og-image.jpg',
  globalPresence: 'images/global-presence.webp',
  teamMembers: {
    manoj: 'images/team/manoj.png',
    willie: 'images/team/willie.png'
  },
  companyLogos: [
    'images/companies/company1.webp',
    'images/companies/company2.webp',
    'images/companies/company3.webp',
    'images/companies/company4.webp',
    'images/companies/company5.webp',
    'images/companies/company6.webp'
  ]
};