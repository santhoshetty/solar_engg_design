import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || req.nextUrl.origin;

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // If accessing admin page without auth, redirect to login
    if (!session && req.nextUrl.pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/login', baseUrl));
    }

    // If accessing login page with auth, redirect to admin
    if (session && req.nextUrl.pathname === '/login') {
      return NextResponse.redirect(new URL('/admin', baseUrl));
    }

    return res;
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.redirect(new URL('/login', baseUrl));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/login']
}; 