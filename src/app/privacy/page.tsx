"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  const [isLight, setIsLight] = useState(true);

  // Sync with body.light-theme / localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsLight(false);
      document.body.classList.remove('light-theme');
    } else {
      setIsLight(true);
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    if (next) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Color tokens based on theme
  const bg = isLight ? '#F8FAFC' : '#0B0F19';
  const cardBg = isLight ? '#FFFFFF' : 'rgba(20, 27, 45, 0.6)';
  const cardBorder = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';
  const cardShadow = isLight ? '0 4px 20px rgba(0, 0, 0, 0.03)' : 'none';
  const headingColor = isLight ? '#0F172A' : '#FFFFFF';
  const bodyColor = isLight ? '#334155' : '#CBD5E1';
  const mutedColor = isLight ? '#64748B' : '#94A3B8';
  const navBg = isLight ? 'rgba(248, 250, 252, 0.88)' : 'rgba(11, 15, 25, 0.88)';
  const navBorder = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)';
  const accent = isLight ? '#0284C7' : '#38BDF8';
  const badgeBg = isLight ? '#F0F9FF' : 'rgba(56, 189, 248, 0.1)';
  const badgeBorder = isLight ? '#BAE6FD' : 'rgba(56, 189, 248, 0.25)';
  const codeBg = isLight ? '#F1F5F9' : 'rgba(56, 189, 248, 0.08)';

  return (
    <div
      style={{
        minHeight: '100vh',
        background: bg,
        color: bodyColor,
        fontFamily: "var(--font-body, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)",
        position: 'relative',
        transition: 'background-color 0.25s ease, color 0.25s ease',
        overflowX: 'hidden',
      }}
    >
      {/* Soft Ambient Glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '-160px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '420px',
          background: isLight
            ? 'radial-gradient(circle, rgba(2, 132, 199, 0.08) 0%, rgba(99, 102, 241, 0.04) 50%, transparent 70%)'
            : 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(124, 58, 237, 0.05) 50%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Navigation Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          background: navBg,
          borderBottom: `1px solid ${navBorder}`,
          transition: 'background-color 0.25s ease, border-color 0.25s ease',
        }}
      >
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '14px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              color: headingColor,
            }}
          >
            <svg viewBox="0 0 100 100" fill="none" style={{ width: '28px', height: '28px' }}>
              <defs>
                <linearGradient id="priv-logo-grad" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} />
                  <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
              </defs>
              <path
                d="M 44 24 L 76 24 L 76 60 A 28 28 0 0 1 20 60"
                stroke="url(#priv-logo-grad)"
                strokeWidth="10"
              />
              <path
                d="M 44 42 L 60 42 L 60 60 A 12 12 0 0 1 36 60"
                stroke="url(#priv-logo-grad)"
                strokeWidth="10"
              />
            </svg>
            <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
              Jatin Jangid
            </span>
          </Link>

          {/* Right Actions: Theme Toggle + Back Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.06)',
                border: `1px solid ${navBorder}`,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: headingColor,
                transition: 'all 0.2s ease',
              }}
              title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
              {isLight ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41.39.39 1.03.39 1.41 0l1.06-1.06z" />
                </svg>
              )}
            </button>

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
                color: headingColor,
                background: isLight ? '#FFFFFF' : 'rgba(255, 255, 255, 0.05)',
                border: `1px solid ${navBorder}`,
                boxShadow: isLight ? '0 1px 3px rgba(0, 0, 0, 0.05)' : 'none',
                textDecoration: 'none',
              }}
            >
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          margin: '0 auto',
          padding: '48px 24px 80px',
          width: '100%',
        }}
      >
        {/* Title Block */}
        <div style={{ marginBottom: '36px' }}>
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
              color: accent,
              background: badgeBg,
              border: `1px solid ${badgeBorder}`,
              marginBottom: '14px',
            }}
          >
            <span>🛡️</span> Client Data Protection
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: headingColor,
              letterSpacing: '-0.03em',
              margin: '0 0 12px',
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: mutedColor, fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
            Last updated: October 2026 &middot; Transparent terms on how project inquiries, contact information, and uploaded files are handled.
          </p>
        </div>

        {/* Structured Sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Section 1 */}
          <section
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '16px',
              padding: '28px',
              boxShadow: cardShadow,
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.25rem' }}>📋</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                1. Information We Collect
              </h2>
            </div>
            <p style={{ color: bodyColor, fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 12px' }}>
              When submitting an inquiry via the portfolio contact form or project cost calculator, we collect only the details you voluntarily provide:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: mutedColor,
                fontSize: '0.9rem',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <li>
                <strong style={{ color: headingColor }}>Contact Details:</strong> Your name, work email address, and optional phone or WhatsApp number.
              </li>
              <li>
                <strong style={{ color: headingColor }}>Project Requirements:</strong> Company name, estimated budget, desired timeline, and project description.
              </li>
              <li>
                <strong style={{ color: headingColor }}>Uploaded Attachments:</strong> Any specification documents, wireframes, or reference files you choose to upload.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '16px',
              padding: '28px',
              boxShadow: cardShadow,
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.25rem' }}>🎯</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                2. How Your Information Is Used
              </h2>
            </div>
            <p style={{ color: bodyColor, fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 12px' }}>
              Your information is used strictly to scope, deliver, and coordinate freelance web development work:
            </p>
            <ul
              style={{
                margin: 0,
                paddingLeft: '20px',
                color: mutedColor,
                fontSize: '0.9rem',
                lineHeight: 1.8,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
            >
              <li>To evaluate requirements and provide an accurate engineering quote and timeline.</li>
              <li>To reply directly via email or WhatsApp regarding milestone discussions.</li>
              <li>To coordinate staging deployment reviews and final project deliverables.</li>
            </ul>
            <div
              style={{
                marginTop: '16px',
                padding: '12px 16px',
                borderRadius: '8px',
                background: isLight ? '#ECFDF5' : 'rgba(16, 185, 129, 0.08)',
                border: `1px solid ${isLight ? '#A7F3D0' : 'rgba(16, 185, 129, 0.25)'}`,
                color: isLight ? '#065F46' : '#34D399',
                fontSize: '0.85rem',
                fontWeight: 600,
              }}
            >
              ✓ Zero Spam &middot; Your data is never sold, rented, monetized, or shared with third-party advertisers.
            </div>
          </section>

          {/* Section 3 */}
          <section
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '16px',
              padding: '28px',
              boxShadow: cardShadow,
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.25rem' }}>🔐</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                3. Storage &amp; Data Security
              </h2>
            </div>
            <p style={{ color: bodyColor, fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>
              Inquiries are transmitted over encrypted TLS/HTTPS connections and stored in a secure Supabase database instance with Row-Level Security (RLS) policies. Sensitive credentials and client data are never bundled into public codebases or exposed client APIs.
            </p>
          </section>

          {/* Section 4 */}
          <section
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '16px',
              padding: '28px',
              boxShadow: cardShadow,
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.25rem' }}>🗑️</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                4. Your Rights &amp; Data Deletion
              </h2>
            </div>
            <p style={{ color: bodyColor, fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 12px' }}>
              You retain full ownership over your information. To request the permanent deletion of your inquiry records and contact details, simply email:
            </p>
            <a
              href="mailto:jatinnjangid72973@gmail.com?subject=Data%20Deletion%20Request"
              style={{
                display: 'inline-block',
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: '0.88rem',
                color: accent,
                background: codeBg,
                border: `1px solid ${badgeBorder}`,
                padding: '8px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              jatinnjangid72973@gmail.com &rarr;
            </a>
            <p style={{ color: mutedColor, fontSize: '0.8rem', margin: '8px 0 0' }}>
              All data deletion requests are completed within 24 business hours.
            </p>
          </section>

          {/* Section 5 */}
          <section
            style={{
              background: cardBg,
              border: `1px solid ${cardBorder}`,
              borderRadius: '16px',
              padding: '28px',
              boxShadow: cardShadow,
              transition: 'background-color 0.25s ease, border-color 0.25s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.25rem' }}>💬</span>
              <h2
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: headingColor,
                  margin: 0,
                  letterSpacing: '-0.01em',
                }}
              >
                5. Direct Contact Channels
              </h2>
            </div>
            <p style={{ color: bodyColor, fontSize: '0.92rem', lineHeight: 1.7, margin: '0 0 14px' }}>
              For any questions regarding your data privacy, reach out to Jatin Jangid directly:
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
                  boxShadow: '0 2px 8px rgba(37, 211, 102, 0.25)',
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
                  color: headingColor,
                  background: isLight ? '#F1F5F9' : 'rgba(255, 255, 255, 0.06)',
                  border: `1px solid ${navBorder}`,
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
            marginTop: '48px',
            paddingTop: '24px',
            borderTop: `1px solid ${navBorder}`,
            textAlign: 'center',
            color: mutedColor,
            fontSize: '0.85rem',
          }}
        >
          <p style={{ margin: '0 0 8px' }}>
            &copy; 2026 Jatin Jangid &middot; Full Stack Web Developer &middot; Jaipur, Rajasthan, India
          </p>
          <Link href="/" style={{ color: accent, textDecoration: 'none', fontWeight: 600 }}>
            Return to Portfolio Homepage &rarr;
          </Link>
        </footer>
      </main>
    </div>
  );
}
