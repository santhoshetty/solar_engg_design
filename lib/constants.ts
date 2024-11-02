export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const STORAGE_URL = `${SUPABASE_URL}/storage/v1/object/public/public-assets`;

// Helper function to get media URLs
export const getStorageUrl = (path: string) => {
  // For development/debugging
  console.log('Getting storage URL for:', path);
  const url = `${STORAGE_URL}/${path}`;
  console.log('Generated URL:', url);
  return url;
};

// Media paths
export const MEDIA_PATHS = {
  logo: 'images/logo/4solar-logo.png',
  hero: 'images/hero.jpg',
  video: 'videos/solar-transformation.mp4',
  audio: 'audio/background-music.mp3',
  ogImage: 'images/og-image.jpg',
  globalPresence: 'images/global-presence.png',
  teamMembers: {
    manoj: 'images/team/manoj.png',
    willie: 'images/team/willie.png'
  },
  companyLogos: [
    'images/companies/company1.png',
    'images/companies/company2.png',
    'images/companies/company3.png',
    'images/companies/company4.png',
    'images/companies/company5.png',
    'images/companies/company6.png'
  ]
};