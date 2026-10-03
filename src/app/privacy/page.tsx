import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Jatin Jangid — Full Stack Web Developer',
  description: 'Privacy Policy and client data protection practices for project inquiries submitted to Jatin Jangid.',
};

export default function PrivacyPolicyPage() {
  const activeColor = '#38BDF8';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0B0F19',
        color: '#F1F5F9',
        fontFamily: "var(--font-body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Background Ambient Glows */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: 'rgba(11, 15, 25, 0.82)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '920px',
            margin: '0 auto',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: '#F1F5F9',
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" style={{ width: '28px', height: '28px' }}>
              <defs>
                <linearGradient id="nav-j-grad" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38BDF8" />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <path
                d="M 44 24 L 76 24 L 76 60 A 28 28 0 0 1 20 60"
                stroke="url(#nav-j-grad)"
                strokeWidth="10"
              />
              <path
                d="M 44 42 L 60 42 L 60 60 A 12 12 0 0 1 36 60"
                stroke="url(#nav-j-grad)"
                strokeWidth="10"
              />
            </svg>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
              Jatin Jangid
            </span>
          </Link>

          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#F1F5F9',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
          >
            &larr; Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Main Centered Content */}
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '920px',
          margin: '0 auto',
          padding: '48px 24px 80px',
          width: '100%',
        }}
      >
        {/* Page Heading */}
        <div style={{ marginBottom: '40px', textAlign: 'left' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '0.75rem',
              fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: activeColor,
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              marginBottom: '16px',
            }}
          >
            <span>🛡️</span> Legal &amp; Transparency
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              letterSpacing: '-0.03em',
              margin: '0 0 12px',
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
            Effective: October 2026 &middot; How your information is collected, processed, and protected when reaching out for freelance development work.
          </p>
        </div>

        {/* Structured Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Card 1 */}
          <section
            style={{
              background: 'rgba(20, 27, 45, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.25rem' }}>📋</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                1. Information We Collect
              </h2>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 14px' }}>
              When submitting an inquiry via the portfolio contact form or project cost calculator, we collect only the details you voluntarily submit:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: '#94A3B8',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <li>
                <strong style={{ color: '#E2E8F0' }}>Contact Info:</strong> Your name, business/work email, and optional phone or WhatsApp number.
              </li>
              <li>
                <strong style={{ color: '#E2E8F0' }}>Project Scope:</strong> Target timeline, estimated budget range, and requirements description.
              </li>
              <li>
                <strong style={{ color: '#E2E8F0' }}>Attachments:</strong> Optional design files, brief PDFs, or wireframes provided to help scope the build.
              </li>
            </ul>
          </section>

          {/* Card 2 */}
          <section
            style={{
              background: 'rgba(20, 27, 45, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.25rem' }}>🎯</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                2. How Your Information Is Used
              </h2>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 14px' }}>
              Information collected is used strictly for direct freelance consulting and software engineering deliverables:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: '#94A3B8',
                fontSize: '0.9rem',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <li>To evaluate feasibility, architectural requirements, and prepare pricing estimates.</li>
              <li>To reply directly to inquiries via email or WhatsApp regarding milestones and contract discussions.</li>
              <li>To manage deliverables, staging previews, and production project handoffs.</li>
            </ul>
            <div
              style={{
                marginTop: '16px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                color: '#34D399',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              ✓ Zero Spam &middot; Your contact details are never sold, rented, or distributed to any third parties or advertisers.
            </div>
          </section>

          {/* Card 3 */}
          <section
            style={{
              background: 'rgba(20, 27, 45, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.25rem' }}>🔐</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                3. Security &amp; Storage
              </h2>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
              Form submissions are encrypted in transit over TLS/HTTPS and stored securely in a managed Supabase database with Row-Level Security (RLS) policies. We do not expose client data in client bundles or public APIs.
            </p>
          </section>

          {/* Card 4 */}
          <section
            style={{
              background: 'rgba(20, 27, 45, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.25rem' }}>🗑️</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                4. Data Retention &amp; Deletion
              </h2>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 12px' }}>
              You retain complete ownership over your data. If you wish to have your contact details or project brief removed permanently, email your request to:
            </p>
            <a
              href="mailto:jatinnjangid72973@gmail.com?subject=Data%20Deletion%20Request"
              style={{
                display: 'inline-block',
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.88rem',
                color: activeColor,
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '8px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              jatinnjangid72973@gmail.com &rarr;
            </a>
            <p style={{ color: '#64748B', fontSize: '0.8rem', margin: '8px 0 0' }}>
              Requests are fulfilled manually within 24–48 hours.
            </p>
          </section>

          {/* Card 5 */}
          <section
            style={{
              background: 'rgba(20, 27, 45, 0.55)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{ fontSize: '1.25rem' }}>💬</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                5. Contact Channels
              </h2>
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 16px' }}>
              For any questions regarding these practices, contact Jatin Jangid directly:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a
                href="https://wa.me/917340098982"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  background: '#25D366',
                  textDecoration: 'none',
                }}
              >
                WhatsApp (+91 7340098982)
              </a>
              <a
                href="mailto:jatinnjangid72973@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: '#F1F5F9',
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  textDecoration: 'none',
                }}
              >
                Email (jatinnjangid72973@gmail.com)
              </a>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer
          style={{
            marginTop: '60px',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            textAlign: 'center',
            color: '#64748B',
            fontSize: '0.85rem',
          }}
        >
          <p style={{ margin: '0 0 6px' }}>
            &copy; 2026 Jatin Jangid &middot; Full Stack Web Developer &middot; Jaipur, Rajasthan, India
          </p>
          <Link href="/" style={{ color: activeColor, textDecoration: 'none', fontSize: '0.85rem' }}>
            Return to Portfolio Homepage &rarr;
          </Link>
        </footer>
      </main>
    </div>
  );
}
