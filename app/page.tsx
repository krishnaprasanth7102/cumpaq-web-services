'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
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
            <div className="logo">
              <div style={{ width: '120px', height: '30px', background: 'var(--accent-light)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', fontWeight: 'bold', letterSpacing: '1px' }}>
                CUMPAQ
              </div>
              <span></span>
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
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
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
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
            <p>Ready to start your project? Contact us today for a free consultation.</p>
          </div>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email Us</h3>
              <p>cumpaqkrs@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>WhatsApp</h3>
              <p>+91 6282160755</p>
              <a 
                href="https://wa.me/6282160755" 
                className="whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <div style={{ width: '24px', height: '24px', background: 'var(--accent-light)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', fontWeight: 'bold', fontSize: '14px' }}>
                C
              </div>
              <span>CUMPAQ</span>
            </div>
            <p>Web Development Services</p>
            <p>&copy; 2024 CUMPAQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}