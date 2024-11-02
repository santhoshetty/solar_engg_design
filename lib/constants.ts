export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const STORAGE_URL = `${SUPABASE_URL}/storage/v1/object/public/public-assets`;

// Helper function to get media URLs
export const getStorageUrl = (path: string) => `${STORAGE_URL}/${path}`;