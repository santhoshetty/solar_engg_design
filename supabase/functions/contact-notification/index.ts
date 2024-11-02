import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const payload = req.body;
    const { record } = payload;

    // Send email using your preferred email service
    // Example using a hypothetical email service:
    await fetch('your-email-service-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'your-email@example.com',
        subject: 'New Contact Form Submission',
        text: `
          Name: ${record.name}
          Email: ${record.email}
          Company: ${record.company}
          Phone: ${record.phone}
          Project Type: ${record.project_type}
          Message: ${record.message}
        `
      })
    });

    return res.status(200).json({ message: 'Notification sent' });
  } catch (error) {
    console.error('Error sending notification:', error);
    return res.status(500).json({ message: 'Error sending notification' });
  }
} 