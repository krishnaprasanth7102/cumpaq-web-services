'use client';

import { useState, useEffect } from 'react';

// Simple, modern CUMPAQ logo component
function Logo({ size = 'medium', showText = true }: { size?: 'small' | 'medium' | 'large'; showText?: boolean }) {
  const boxSize = size === 'small' ? 26 : size === 'large' ? 44 : 34;

  return (
    <div className={`brand-logo brand-logo-${size}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
      <svg width={boxSize} height={boxSize} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <rect width="36" height="36" rx="10" fill="url(#logo_gradient)" />
        <path d="M22 12C20.2 10.4 17.5 10 15 11.5C12.5 13 11.5 15.8 11.5 18C11.5 20.2 12.5 23 15 24.5C17.5 26 20.2 25.6 22 24" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" />
        <circle cx="23" cy="18" r="2.5" fill="#25D366" />
        <defs>
          <linearGradient id="logo_gradient" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--accent-light)" />
            <stop offset="1" stopColor="#1a2e3b" />
          </linearGradient>
        </defs>
      </svg>
      {showText && (
        <span className={`brand-logo-text brand-logo-text-${size}`}>
          CUMPAQ<span style={{ color: '#25D366' }}>.</span>
        </span>
      )}
    </div>
  );
}

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const t = localStorage.getItem('theme');
      if (t === 'dark' || t === 'light') return t;
    } catch (e) {
      // ignore
    }
    try {
      if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch (e) {
      // ignore
    }
    return 'light';
  });

  useEffect(() => {
    try {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } catch (e) {
      // ignore
    }
  }, [theme]);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const features = [
    {
      icon: '⚡',
      title: 'Fast Performance',
      description: 'Optimized websites that load quickly and provide smooth user experience.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Perfect display on all devices - desktop, tablet, and mobile.'
    },
    {
      icon: '🔒',
      title: 'Secure & Safe',
      description: 'Built with security best practices to protect your data and users.'
    },
    {
      icon: '🎯',
      title: 'SEO Friendly',
      description: 'Optimized structure and code to help you rank higher in search engines.'
    }
  ];

  const services = [
    {
      icon: '💻',
      title: 'Website Development',
      description: 'Custom websites built with modern technologies and clean code.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Easy to Update']
    },
    {
      icon: '🔧',
      title: 'Maintenance & Support',
      description: 'Regular updates, security patches, and technical support.',
      features: ['Regular Updates', 'Security Monitoring', 'Backup Services', 'Technical Support']
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to build a website?',
      answer: 'A standard business website typically takes 2-3 weeks. E-commerce sites may take 4-6 weeks depending on complexity.'
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer: 'Yes, we offer complete packages including domain registration, hosting, and SSL certificates.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We can redesign and modernize your current website while maintaining your brand identity.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer transparent pricing based on project requirements. Contact us for a detailed quote.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various support packages to meet your ongoing maintenance needs.'
    }
  ];

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <a href="#home" className="logo" aria-label="CUMPAQ Home">
              <Logo size="medium" />
            </a>
            <nav className={`nav-container ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <ul className="nav-links">
                <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
                <li><a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a></li>
                <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
                <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a></li>
                <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
              </ul>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                className="theme-toggle"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
              </button>
              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div style={{ marginBottom: '1.2rem', display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '50px',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              boxShadow: '0 2px 10px var(--card-shadow)'
            }}>
              <Logo size="small" showText={false} />
              <span style={{ fontWeight: '600', fontSize: '0.88rem', color: 'var(--text-heading)' }}>
                CUMPAQ Web Development
              </span>
            </div>
          </div>
          <h1>Web Development Services</h1>
          <p>We build stunning, high-performance websites that help your business grow and succeed in the digital world.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Get Started</a>
            <a href="#services" className="btn btn-secondary">Our Services</a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose CUMPAQ?</h2>
            <p>We deliver exceptional web solutions with focus on quality, performance, and user experience.</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive web solutions tailored to meet your business requirements.</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services and process.</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span>{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className={`faq-answer ${activeFaq === index ? 'open' : ''}`}>
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>If you want to know more, feel free to send us a message on WhatsApp!</p>
          </div>

          <div className="whatsapp-card-container">
            <div className="whatsapp-contact-card">
              <div className="whatsapp-badge" style={{ gap: '10px' }}>
                <Logo size="small" showText={false} />
                <span>WhatsApp Support</span>
              </div>
              <h3 className="whatsapp-card-title">Have Questions or Need a Custom Quote?</h3>
              <p className="whatsapp-card-text">
                If you want to know more, feel free to send a WhatsApp message on:
              </p>
              <div className="whatsapp-phone-number">
                +91 6282160755
              </div>
              <div className="contact-actions">
                <a 
                  href="https://wa.me/916282160755" 
                  className="btn btn-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  Send WhatsApp Message
                </a>
                <a href="mailto:cumpaqkrs@gmail.com" className="btn btn-secondary">
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Logo size="medium" />
            </div>
            <p>Web Development Services</p>
            <p>&copy; {new Date().getFullYear()} CUMPAQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}