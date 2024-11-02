import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export async function POST(request: Request) {
  try {
    const { session } = await request.json();
    
    // Set up Supabase client
    const cookieStore = cookies();
    const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
    
    // Set the session
    await supabase.auth.setSession(session);
    
    // Return redirect URL
    return NextResponse.json({ 
      redirectUrl: '/admin',
      success: true 
    });
  } catch (error) {
    console.error('Login route error:', error);
    return NextResponse.json(
      { error: 'Failed to process login' },
      { status: 500 }
    );
  }
} 