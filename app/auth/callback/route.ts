import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code) {
      const cookieStore = cookies();
      const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
      
      // Exchange the code for a session
      await supabase.auth.exchangeCodeForSession(code);
    }

    // Always redirect to reset-password page
    return NextResponse.redirect(new URL('/auth/reset-password', request.url));
  } catch (error) {
    console.error('Auth callback error:', error);
    // If there's an error, redirect to login
    return NextResponse.redirect(new URL('/login', request.url));
  }
} 