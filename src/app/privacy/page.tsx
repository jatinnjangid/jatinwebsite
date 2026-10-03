import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jatin Jangid — Full Stack Web Developer',
  description: 'Privacy Policy and data protection terms for inquiries submitted through Jatin Jangid\'s freelance web development portfolio.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#07090E] text-[#E2E8F0] font-sans antialiased selection:bg-blue-600 selection:text-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors font-mono"
          >
            &larr; Back to Portfolio
          </Link>
        </div>

        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/20 inline-block mb-3">
            Legal &amp; Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-slate-400 text-sm">
            Last updated: October 2026 &middot; Effective immediately for all inquiries.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed text-slate-300">
          <section className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">1.</span> Information We Collect
            </h2>
            <p className="text-slate-300 mb-3">
              When you submit a project inquiry through the contact form or project cost calculator on this website, we collect only the information you voluntarily provide:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 ml-2">
              <li><strong className="text-slate-200">Contact Details:</strong> Your name, work email address, and optional phone number.</li>
              <li><strong className="text-slate-200">Project Details:</strong> Company name, estimated budget, desired timeline, and project description.</li>
              <li><strong className="text-slate-200">Attachments:</strong> Any specification documents, wireframes, or reference files you choose to upload.</li>
            </ul>
          </section>

          <section className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">2.</span> How Your Information Is Used
            </h2>
            <p className="text-slate-300 mb-3">
              Your information is used strictly for direct business communication:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-400 ml-2">
              <li>To review your requirements and provide an accurate engineering scope and quote.</li>
              <li>To respond directly to your messages via email or WhatsApp.</li>
              <li>To coordinate freelance web development contracts and deliver project milestones.</li>
            </ul>
            <p className="text-slate-300 mt-3 font-medium text-emerald-400">
              We never sell, rent, monetize, or share your personal data with third-party marketers or advertisers.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">3.</span> Storage &amp; Data Security
            </h2>
            <p className="text-slate-300">
              Inquiries are transmitted over encrypted TLS/HTTPS connections and stored in a secure Supabase database instance with row-level access controls. We maintain strict hygiene over API keys and production credentials to prevent unauthorized data exposure.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">4.</span> Your Rights &amp; Data Deletion
            </h2>
            <p className="text-slate-300 mb-3">
              You retain full control over your submitted data. If you decide not to proceed with a project or wish to have your contact details and message history permanently expunged, simply send a request to:
            </p>
            <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3 font-mono text-sm text-blue-300">
              <a href="mailto:jatinnjangid72973@gmail.com" className="hover:underline">
                jatinnjangid72973@gmail.com
              </a>
            </div>
            <p className="text-slate-400 text-xs mt-2">
              All deletion requests are processed manually within 24 business hours.
            </p>
          </section>

          <section className="bg-slate-900/50 border border-slate-800/80 rounded-xl p-6 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <span className="text-blue-400">5.</span> Direct Contact
            </h2>
            <p className="text-slate-300">
              If you have any questions regarding this policy or how your project details are handled, you can reach Jatin Jangid directly at{' '}
              <a href="mailto:jatinnjangid72973@gmail.com" className="text-blue-400 hover:underline">
                jatinnjangid72973@gmail.com
              </a>{' '}
              or via WhatsApp at{' '}
              <a href="https://wa.me/917340098982" className="text-emerald-400 hover:underline">
                +91 7340098982
              </a>.
            </p>
          </section>
        </div>

        {/* Footer info */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>&copy; 2026 Jatin Jangid. All rights reserved. Jaipur, Rajasthan, India.</p>
        </div>
      </div>
    </main>
  );
}
