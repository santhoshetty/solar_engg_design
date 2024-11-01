import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  try {
    // Simple middleware that just forwards the request
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    // Return a basic response in case of error
    return NextResponse.next();
  }
}

// Simplify the matcher to only handle essential paths
export const config = {
  matcher: [
    // Optional: Add specific paths you want to handle
    // '/',
    // '/about',
    // '/services/:path*',
    // '/projects/:path*'
  ]
}; 