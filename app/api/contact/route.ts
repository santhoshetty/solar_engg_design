import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with service role key for admin access
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Add this to your env variables

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    console.log('API: Received contact form data:', data);

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      console.error('API: Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create submission object
    const submission = {
      name: data.name.trim(),
      email: data.email.trim(),
      company: data.company?.trim() || null,
      phone: data.phone?.trim() || null,
      project_type: data.projectType || null,
      message: data.message.trim()
    };

    console.log('API: Attempting to insert:', submission);

    // Use service role client to bypass RLS
    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert(submission);

    if (insertError) {
      console.error('API: Database error:', insertError);
      return NextResponse.json(
        { error: insertError.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API: Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 