'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

interface Submission {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  project_type: string | null;
  message: string;
  created_at: string;
}

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const PAGE_SIZE = 10;
  const _router = useRouter();

  const fetchSubmissions = async (pageNumber = 0) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('Fetching submissions for page:', pageNumber);
      
      // First, get total count
      const { count, error: countError } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true });

      if (countError) throw countError;
      setTotalCount(count || 0);

      // Then get paginated data
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .range(pageNumber * PAGE_SIZE, (pageNumber + 1) * PAGE_SIZE - 1);

      if (error) throw error;
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid data format received');
      }

      setSubmissions(data);
      setHasMore(data.length === PAGE_SIZE);
      setPage(pageNumber);
    } catch (error: unknown) {
      console.error('Error fetching submissions:', error);
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubmissions();

    // Set up real-time subscription for new submissions
    const channel = supabase
      .channel('contact_submissions_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'contact_submissions'
        },
        (payload) => {
          console.log('New submission received:', payload);
          fetchSubmissions(page); // Refresh current page
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      setLoading(true);
      
      // First, clear any existing session
      await supabase.auth.signOut();
      
      // Clear all storage
      localStorage.clear();
      sessionStorage.clear();
      
      // Clear cookies
      document.cookie.split(";").forEach((c) => {
        document.cookie = c
          .replace(/^ +/, "")
          .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
      });

      console.log('Sign out successful, forcing redirect...');
      
      // Force a complete navigation reset
      window.location.replace('/login');
      
      // If replace doesn't work, try href
      setTimeout(() => {
        window.location.href = '/login';
      }, 100);
      
      // Final fallback
      setTimeout(() => {
        document.location.href = '/login';
      }, 200);
      
    } catch (error) {
      console.error('Error signing out:', error);
      // Force redirect even if there's an error
      window.location.replace('/login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Contact Form Submissions</h1>
          <p className="text-sm text-gray-600 mt-1">
            Showing {submissions.length} of {totalCount} total submissions
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => fetchSubmissions(page)}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Refresh
          </button>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
          Error: {error}
        </div>
      )}
      
      {loading ? (
        <div className="text-center py-4">Loading submissions...</div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-4 text-gray-500">No submissions yet.</div>
      ) : (
        <>
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-white shadow-sm rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {submissions.map((submission) => (
                  <tr key={submission.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {new Date(submission.created_at).toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{submission.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{submission.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{submission.company || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{submission.phone || '-'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{submission.project_type || '-'}</td>
                    <td className="px-6 py-4 text-sm">
                      <div className="max-w-xs truncate">{submission.message}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => fetchSubmissions(page - 1)}
              disabled={page === 0}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {page + 1}
            </span>
            <button
              onClick={() => fetchSubmissions(page + 1)}
              disabled={!hasMore}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
} 