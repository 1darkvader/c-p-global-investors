const logoUrl = 'https://customer-assets.emergentagent.com/job_c81f854f-32b3-4bf5-a5c5-fafd32079d9a/artifacts/cygg35bf_cp-logo.jpg';
const heroImage = 'https://images.pexels.com/photos/12306417/pexels-photo-12306417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200';
const aboutImage = 'https://images.pexels.com/photos/34746047/pexels-photo-34746047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200';
const consultingImage = 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200';
const consultationMailto = 'mailto:info@cpglobalinvestors.capital?subject=Book%20a%20Consultation';
const phoneDisplay = '805-253-2887';
const phoneHref = 'tel:+18052532887';

const sitePages = {
  '/': {
    title: 'Premier Investment Consulting',
    description: 'C&P Global Investors helps clients move with clarity across investment decisions, financial strategy, and business planning.',
    content: `
      <section class="hero">
        <div class="container">
          <div class="hero-grid">
            <div class="hero-copy reveal" data-testid="home-hero-copy">
              <div class="hero-badge" data-testid="home-hero-badge">
                <img src="${logoUrl}" alt="C&P Global Investors logo" data-testid="home-hero-logo" />
                <span data-testid="home-hero-badge-text">Wealth management and capital advisory</span>
              </div>
              <div class="eyebrow" data-testid="home-hero-eyebrow">Trusted guidance</div>
              <h1 data-testid="home-hero-heading">A dedicated financial consulting firm specializing in strategic planning, risk management, &amp; financial restructuring.</h1>
              <p data-testid="home-hero-description">Our mission is to provide comprehensive advisory services that help our clients navigate complex financial landscapes and achieve sustainable growth. We support investors, Individuals, business owners, Corporate entities with measured, professional consulting designed to sharpen direction, strengthen planning, and support long-term value creation.</p>
              <div class="hero-actions">
                <a class="button" href="/book" data-testid="home-hero-book-button">Book Consultation</a>
                <a class="button-outline" href="/services" data-testid="home-hero-services-button">Explore Services</a>
              </div>
            </div>
            <div class="hero-image reveal" data-testid="home-hero-image-panel">
              <img src="${heroImage}" alt="Elegant blue abstract background" data-testid="home-hero-image" />
            </div>
          </div>
          <div class="stats-row reveal" data-testid="home-stats-row">
            <article class="stat-card panel" data-testid="home-stat-capital">
              <strong data-testid="home-stat-capital-title">Capital Clarity</strong>
              <span data-testid="home-stat-capital-text">Consulting centered on disciplined planning and opportunity review.</span>
            </article>
            <article class="stat-card panel" data-testid="home-stat-advisory">
              <strong data-testid="home-stat-advisory-title">Business Perspective</strong>
              <span data-testid="home-stat-advisory-text">Financial insight that supports leadership, structure, and decision-making.</span>
            </article>
            <article class="stat-card panel" data-testid="home-stat-approach">
              <strong data-testid="home-stat-approach-title">Long-Term View</strong>
              <span data-testid="home-stat-approach-text">A measured approach that values trust, preparation, and consistent direction.</span>
            </article>
          </div>
        </div>
      </section>

      <section class="section section-muted">
        <div class="container">
          <div class="section-heading reveal" data-testid="home-services-heading-block">
            <div class="eyebrow" data-testid="home-services-eyebrow">What we do</div>
            <h2 data-testid="home-services-heading">Professional guidance across investment and business priorities.</h2>
            <p data-testid="home-services-description">Our work is designed for clients who want practical advisory support, sharp market awareness, and an organized approach to financial and operational decisions.</p>
          </div>
          <div class="services-grid reveal" data-testid="home-services-grid">
            <article class="service-card" data-testid="home-service-card-investment">
              <span class="card-label" data-testid="home-service-card-investment-label">01</span>
              <h3 data-testid="home-service-card-investment-title">Investment Consulting</h3>
              <p data-testid="home-service-card-investment-text">Evaluate growth opportunities, align decision-making with your objectives, and approach capital planning with structure.</p>
            </article>
            <article class="service-card" data-testid="home-service-card-financial">
              <span class="card-label" data-testid="home-service-card-financial-label">02</span>
              <h3 data-testid="home-service-card-financial-title">Financial Strategy</h3>
              <p data-testid="home-service-card-financial-text">Build stronger financial direction through practical planning, visibility, and organized advisory thinking.</p>
            </article>
            <article class="service-card" data-testid="home-service-card-business">
              <span class="card-label" data-testid="home-service-card-business-label">03</span>
              <h3 data-testid="home-service-card-business-title">Business Consulting</h3>
              <p data-testid="home-service-card-business-text">Support business leadership with objective insight around growth, positioning, and strategic priorities.</p>
            </article>
            <article class="service-card" data-testid="home-service-card-risk">
              <span class="card-label" data-testid="home-service-card-risk-label">04</span>
              <h3 data-testid="home-service-card-risk-title">Risk Review</h3>
              <p data-testid="home-service-card-risk-text">Approach decisions with greater confidence by understanding potential exposure, timing, and planning discipline.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container story-grid">
          <div class="story-image reveal" data-testid="home-about-image-panel">
            <img src="${aboutImage}" alt="Modern corporate architecture" data-testid="home-about-image" />
          </div>
          <article class="story-card reveal" data-testid="home-about-card">
            <div class="eyebrow" data-testid="home-about-eyebrow">Why C&amp;P Global Investors</div>
            <h2 data-testid="home-about-heading">A polished, dependable voice for clients seeking informed direction.</h2>
            <p data-testid="home-about-text-1">C&amp;P Global Investors is positioned as a reliable consulting partner for clients seeking clarity in investment planning and business strategy. Our presentation is professional, direct, and built around confidence.</p>
            <p data-testid="home-about-text-2">We focus on communicating insight with discretion, helping clients move from uncertainty toward an organized path forward.</p>
            <div class="detail-actions">
              <a class="button-outline" href="/about" data-testid="home-about-button">Learn More</a>
            </div>
          </article>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="cta-banner reveal" data-testid="home-cta-banner">
            <div class="eyebrow" data-testid="home-cta-eyebrow">Next step</div>
            <h2 data-testid="home-cta-heading">Start a focused conversation about your investment and business priorities.</h2>
            <p data-testid="home-cta-text">If you are ready to discuss your goals, our consultation pathway is designed to begin with clarity and professionalism.</p>
            <div class="cta-actions">
              <a class="button" href="${consultationMailto}" data-testid="home-cta-email-button">Email Us</a>
              <a class="button-outline" href="/book" data-testid="home-cta-book-button">View Consultation Page</a>
            </div>
          </div>
        </div>
      </section>
    `,
  },
  '/services': {
    title: 'Services',
    description: 'Explore investment consulting, financial strategy, and business advisory services built around practical, informed guidance.',
    content: `
      <section class="page-header">
        <div class="container story-grid">
          <div class="page-layout-gap reveal" data-testid="services-header-block">
            <div class="eyebrow" data-testid="services-header-eyebrow">Services</div>
            <h1 data-testid="services-header-heading">Consulting built around disciplined thinking and business clarity.</h1>
            <p data-testid="services-header-description">Our service offering is designed to help clients evaluate opportunities, organize financial priorities, and move forward with sharper strategic alignment.</p>
          </div>
          <div class="page-art reveal" data-testid="services-header-image-panel">
            <img src="${consultingImage}" alt="Professionals discussing business strategy" data-testid="services-header-image" />
          </div>
        </div>
      </section>

      <section class="section section-muted">
        <div class="container">
          <div class="services-grid reveal" data-testid="services-grid">
            <article class="service-card" data-testid="services-card-investment">
              <span class="card-label" data-testid="services-card-investment-label">01</span>
              <h3 data-testid="services-card-investment-title">Investment Consulting</h3>
              <p data-testid="services-card-investment-text">A professional sounding board for evaluating investment priorities, growth opportunities, and overall direction.</p>
            </article>
            <article class="service-card" data-testid="services-card-capital">
              <span class="card-label" data-testid="services-card-capital-label">02</span>
              <h3 data-testid="services-card-capital-title">Capital Planning</h3>
              <p data-testid="services-card-capital-text">Structured guidance to think through financial readiness, timing, resource alignment, and next-step planning.</p>
            </article>
            <article class="service-card" data-testid="services-card-advisory">
              <span class="card-label" data-testid="services-card-advisory-label">03</span>
              <h3 data-testid="services-card-advisory-title">Financial Advisory Support</h3>
              <p data-testid="services-card-advisory-text">Practical perspective around financial decision-making, communication, and broader strategic priorities.</p>
            </article>
            <article class="service-card" data-testid="services-card-business">
              <span class="card-label" data-testid="services-card-business-label">04</span>
              <h3 data-testid="services-card-business-title">Business Consulting</h3>
              <p data-testid="services-card-business-text">Insight for owners and leaders looking to refine growth strategy, business positioning, and execution planning.</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-heading reveal" data-testid="services-process-heading-block">
            <div class="eyebrow" data-testid="services-process-eyebrow">How we work</div>
            <h2 data-testid="services-process-heading">A straightforward process designed to bring structure to your next move.</h2>
          </div>
          <div class="process-grid reveal" data-testid="services-process-grid">
            <article class="detail-card" data-testid="services-process-step-discovery">
              <span class="small-label" data-testid="services-process-step-discovery-label">Step 01</span>
              <h3 data-testid="services-process-step-discovery-title">Discovery</h3>
              <p data-testid="services-process-step-discovery-text">We begin by understanding your priorities, timing, and decision context.</p>
            </article>
            <article class="detail-card" data-testid="services-process-step-analysis">
              <span class="small-label" data-testid="services-process-step-analysis-label">Step 02</span>
              <h3 data-testid="services-process-step-analysis-title">Analysis</h3>
              <p data-testid="services-process-step-analysis-text">We organize the situation into clear themes, opportunities, and considerations.</p>
            </article>
            <article class="detail-card" data-testid="services-process-step-guidance">
              <span class="small-label" data-testid="services-process-step-guidance-label">Step 03</span>
              <h3 data-testid="services-process-step-guidance-title">Guidance</h3>
              <p data-testid="services-process-step-guidance-text">You receive practical recommendations framed in a professional and balanced way.</p>
            </article>
            <article class="detail-card" data-testid="services-process-step-next-actions">
              <span class="small-label" data-testid="services-process-step-next-actions-label">Step 04</span>
              <h3 data-testid="services-process-step-next-actions-title">Next Actions</h3>
              <p data-testid="services-process-step-next-actions-text">We help shape the immediate next steps so momentum is clear and purposeful.</p>
            </article>
          </div>
        </div>
      </section>
    `,
  },
  '/about': {
    title: 'About',
    description: 'Learn about the values and positioning behind C&P Global Investors.',
    content: `
      <section class="page-header">
        <div class="container story-grid">
          <div class="page-layout-gap reveal" data-testid="about-header-block">
            <div class="eyebrow" data-testid="about-header-eyebrow">About</div>
            <h1 data-testid="about-header-heading">Professional by design. Strategic by focus.</h1>
            <p data-testid="about-header-description">C&amp;P Global Investors serves clients seeking steady, professional perspective in wealth management, capital planning, and long-term financial priorities.</p>
          </div>
          <div class="page-art reveal" data-testid="about-header-image-panel">
            <img src="${aboutImage}" alt="Modern glass building" data-testid="about-header-image" />
          </div>
        </div>
      </section>

      <section class="section section-muted">
        <div class="container story-grid">
          <article class="story-card reveal" data-testid="about-story-card">
            <div class="eyebrow" data-testid="about-story-eyebrow">Our perspective</div>
            <h2 data-testid="about-story-heading">Wealth management with discretion, structure, and long-term perspective.</h2>
            <p data-testid="about-story-text-1">C&amp;P is positioned to serve clients who value a disciplined approach to wealth management, portfolio oversight, and capital planning. Its presentation is measured, polished, and designed to reflect confidence in long-range financial stewardship.</p>
            <p data-testid="about-story-text-2">The experience is built to support credibility with a more private-wealth tone, helping prospective clients understand C&amp;P’s focus on thoughtful planning, professional guidance, and enduring client relationships.</p>
          </article>
          <div class="story-image reveal" data-testid="about-story-image-panel">
            <img src="${consultingImage}" alt="Consulting meeting" data-testid="about-story-image" />
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="section-heading reveal" data-testid="about-values-heading-block">
            <div class="eyebrow" data-testid="about-values-eyebrow">Core principles</div>
            <h2 data-testid="about-values-heading">A consulting presence rooted in professional standards.</h2>
          </div>
          <div class="values-grid reveal" data-testid="about-values-grid">
            <article class="value-card" data-testid="about-value-card-clarity">
              <span class="value-number" data-testid="about-value-card-clarity-number">01</span>
              <h3 data-testid="about-value-card-clarity-title">Clarity</h3>
              <p data-testid="about-value-card-clarity-text">Clear, composed communication that helps simplify complex financial and strategic discussions.</p>
            </article>
            <article class="value-card" data-testid="about-value-card-discipline">
              <span class="value-number" data-testid="about-value-card-discipline-number">02</span>
              <h3 data-testid="about-value-card-discipline-title">Discipline</h3>
              <p data-testid="about-value-card-discipline-text">A steady, organized approach that values preparation, thoughtful review, and measured decision-making.</p>
            </article>
            <article class="value-card" data-testid="about-value-card-professionalism">
              <span class="value-number" data-testid="about-value-card-professionalism-number">03</span>
              <h3 data-testid="about-value-card-professionalism-title">Professionalism</h3>
              <p data-testid="about-value-card-professionalism-text">A polished client-facing presence suitable for financial services and business consulting conversations.</p>
            </article>
            <article class="value-card" data-testid="about-value-card-trust">
              <span class="value-number" data-testid="about-value-card-trust-number">04</span>
              <h3 data-testid="about-value-card-trust-title">Trust</h3>
              <p data-testid="about-value-card-trust-text">Built to foster confidence through consistency, straightforward messaging, and a calm advisory tone.</p>
            </article>
          </div>
        </div>
      </section>
    `,
  },
  '/contact': {
    title: 'Contact',
    description: 'Reach C&P Global Investors by email and location details in Fresno, California.',
    content: `
      <section class="page-header">
        <div class="container page-layout-gap reveal" data-testid="contact-header-block">
          <div class="eyebrow" data-testid="contact-header-eyebrow">Contact</div>
          <h1 data-testid="contact-header-heading">Connect with C&amp;P Global Investors.</h1>
          <p data-testid="contact-header-description">If you would like to discuss wealth management, capital advisory, or long-term financial planning, we invite you to reach out directly.</p>
        </div>
      </section>

      <section class="section section-muted">
        <div class="container contact-grid">
          <article class="contact-card reveal" data-testid="contact-details-card">
            <div class="eyebrow" data-testid="contact-details-eyebrow">Direct contact</div>
            <h3 data-testid="contact-details-heading">Business information</h3>
            <ul data-testid="contact-details-list">
              <li data-testid="contact-email-item"><strong>Email:</strong> <a href="mailto:info@cpglobalinvestors.capital" data-testid="contact-email-link">info@cpglobalinvestors.capital</a></li>
              <li data-testid="contact-phone-item"><strong>Phone:</strong> <a href="${phoneHref}" data-testid="contact-phone-link">${phoneDisplay}</a></li>
              <li data-testid="contact-location-item"><strong>Location:</strong> <span data-testid="contact-location-text">Fresno, CA 93722</span></li>
              <li data-testid="contact-registration-item"><strong>Reg. No:</strong> <span data-testid="contact-registration-text">202204211064</span></li>
            </ul>
            <div class="detail-actions">
              <a class="button" href="mailto:info@cpglobalinvestors.capital?subject=General%20Inquiry" data-testid="contact-email-button">Send an Email</a>
              <a class="button-outline" href="${phoneHref}" data-testid="contact-phone-button">Call Us</a>
            </div>
          </article>
          <article class="contact-card reveal" data-testid="contact-availability-card">
            <div class="eyebrow" data-testid="contact-availability-eyebrow">Working style</div>
            <h3 data-testid="contact-availability-heading">How to start the conversation</h3>
            <p data-testid="contact-availability-text">Share a short introduction, your area of interest, and the type of guidance you are seeking. We will use that context to guide the next conversation.</p>
            <ul data-testid="contact-availability-list">
              <li data-testid="contact-availability-list-item-1">Include your preferred consultation topic.</li>
              <li data-testid="contact-availability-list-item-2">Mention any time-sensitive goals or planning needs.</li>
              <li data-testid="contact-availability-list-item-3">Use the booking page for consultation-focused requests.</li>
            </ul>
            <div class="detail-actions">
              <a class="button-outline" href="/book" data-testid="contact-book-link">Go to Book Consultation</a>
            </div>
          </article>
        </div>
      </section>
    `,
  },
  '/book': {
    title: 'Book Consultation',
    description: 'Start a consultation request with C&P Global Investors.',
    content: `
      <section class="page-header">
        <div class="container book-grid">
          <article class="book-card reveal" data-testid="book-header-card">
            <div class="eyebrow" data-testid="book-header-eyebrow">Book consultation</div>
            <h1 data-testid="book-header-heading">A clear starting point for your next financial or business conversation.</h1>
            <p data-testid="book-header-description">This page is designed to help prospective clients understand how to begin a consultation with C&amp;P Global Investors in a simple, professional way.</p>
            <div class="hero-actions">
              <a class="button" href="${consultationMailto}" data-testid="book-header-email-button">Request by Email</a>
              <a class="button-outline" href="/contact" data-testid="book-header-contact-button">View Contact Details</a>
            </div>
          </article>
          <div class="page-art reveal" data-testid="book-header-image-panel">
            <img src="${heroImage}" alt="Blue professional abstract background" data-testid="book-header-image" />
          </div>
        </div>
      </section>

      <section class="section section-muted">
        <div class="container">
          <div class="detail-grid reveal" data-testid="book-details-grid">
            <article class="detail-card" data-testid="book-detail-topic-card">
              <span class="small-label" data-testid="book-detail-topic-label">Preparation</span>
              <h3 data-testid="book-detail-topic-heading">What to include</h3>
              <p data-testid="book-detail-topic-text">A short note about your goals, the type of advisory support you need, and what outcome you would like to discuss.</p>
            </article>
            <article class="detail-card" data-testid="book-detail-services-card">
              <span class="small-label" data-testid="book-detail-services-label">Topics</span>
              <h3 data-testid="book-detail-services-heading">Consultation areas</h3>
              <p data-testid="book-detail-services-text">Investment consulting, financial strategy, business consulting, and planning-focused discussions.</p>
            </article>
            <article class="detail-card" data-testid="book-detail-response-card">
              <span class="small-label" data-testid="book-detail-response-label">Format</span>
              <h3 data-testid="book-detail-response-heading">Professional outreach</h3>
              <p data-testid="book-detail-response-text">We recommend using a direct, concise email with enough context to shape a productive first conversation.</p>
            </article>
            <article class="detail-card" data-testid="book-detail-registration-card">
              <span class="small-label" data-testid="book-detail-registration-label">Registration</span>
              <h3 data-testid="book-detail-registration-heading">Registered business profile</h3>
              <p data-testid="book-detail-registration-text">Reg. No: 202204211064</p>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="cta-banner reveal" data-testid="book-cta-banner">
            <div class="eyebrow" data-testid="book-cta-eyebrow">Consultation request</div>
            <h2 data-testid="book-cta-heading">Ready to begin? Send your consultation request by email.</h2>
            <p data-testid="book-cta-text">Contact C&amp;P to arrange a private consultation around wealth management, portfolio guidance, or long-term financial planning.</p>
            <div class="cta-actions">
              <a class="button" href="${consultationMailto}" data-testid="book-cta-email-button">Email info@cpglobalinvestors.capital</a>
              <a class="button-outline" href="${phoneHref}" data-testid="book-cta-phone-button">Call ${phoneDisplay}</a>
            </div>
          </div>
        </div>
      </section>
    `,
  },
};

const renderLayout = (path) => {
  const page = sitePages[path] || sitePages['/'];
  document.title = `C&P Global Investors | ${page.title}`;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="page-shell">
      <div class="topline" data-testid="site-topline">
        <div class="container">
          <span data-testid="topline-message">C&amp;P Global Investors — wealth management and capital advisory</span>
          <span class="signature-text" data-testid="topline-contact">info@cpglobalinvestors.capital · ${phoneDisplay} · Fresno, CA 93722</span>
        </div>
      </div>

      <header class="site-header" data-testid="site-header">
        <div class="header-inner">
          <a class="brand" href="/" data-testid="header-brand-link">
            <div class="brand-mark" data-testid="header-brand-mark">
              <img src="${logoUrl}" alt="C&P Global Investors logo" data-testid="header-logo-image" />
            </div>
            <div class="brand-copy" data-testid="header-brand-copy">
              <strong data-testid="header-brand-name">C&amp;P Global Investors</strong>
            </div>
          </a>

          <nav class="desktop-nav" data-testid="desktop-navigation">
            ${['/', '/services', '/about', '/contact', '/book']
              .map((route) => {
                const label = route === '/' ? 'Home' : route.replace('/', '').replace(/^[a-z]/, (char) => char.toUpperCase()).replace('Book', 'Book Consultation');
                return `<a class="nav-link ${path === route ? 'active' : ''}" href="${route}" data-testid="nav-link-${label.toLowerCase().replace(/\s+/g, '-')}">${label}</a>`;
              })
              .join('')}
          </nav>

          <div class="header-actions" data-testid="header-actions">
            <a class="button" href="/book" data-testid="header-book-button">Book Consultation</a>
            <button class="menu-toggle" type="button" id="menu-toggle" aria-label="Toggle menu" data-testid="mobile-menu-button">
              <span></span>
            </button>
          </div>
        </div>
        <nav class="mobile-nav" id="mobile-nav" data-testid="mobile-navigation">
          <a class="nav-link ${path === '/' ? 'active' : ''}" href="/" data-testid="mobile-nav-link-home">Home</a>
          <a class="nav-link ${path === '/services' ? 'active' : ''}" href="/services" data-testid="mobile-nav-link-services">Services</a>
          <a class="nav-link ${path === '/about' ? 'active' : ''}" href="/about" data-testid="mobile-nav-link-about">About</a>
          <a class="nav-link ${path === '/contact' ? 'active' : ''}" href="/contact" data-testid="mobile-nav-link-contact">Contact</a>
          <a class="nav-link ${path === '/book' ? 'active' : ''}" href="/book" data-testid="mobile-nav-link-book">Book Consultation</a>
        </nav>
      </header>

      <main data-testid="page-main-content">${page.content}</main>

      <footer class="site-footer" data-testid="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand" data-testid="footer-brand-block">
              <img src="${logoUrl}" alt="C&P Global Investors logo" data-testid="footer-logo-image" />
              <div>
                <strong data-testid="footer-brand-name">C&amp;P Global Investors</strong>
                <span data-testid="footer-brand-description">Wealth management, portfolio guidance, and long-term financial planning.</span>
              </div>
            </div>
            <div class="footer-links" data-testid="footer-navigation-links">
              <a href="/services" data-testid="footer-services-link">Services</a>
              <a href="/about" data-testid="footer-about-link">About</a>
              <a href="/contact" data-testid="footer-contact-link">Contact</a>
              <a href="/book" data-testid="footer-book-link">Book Consultation</a>
            </div>
            <div class="footer-contact" data-testid="footer-contact-block">
              <a href="mailto:info@cpglobalinvestors.capital" data-testid="footer-email-link">info@cpglobalinvestors.capital</a>
              <a href="${phoneHref}" data-testid="footer-phone-link">${phoneDisplay}</a>
              <span data-testid="footer-location-text">Fresno, CA 93722</span>
              <span data-testid="footer-registration-text">Reg. No: 202204211064</span>
            </div>
          </div>
          <div class="footer-meta">
            <span data-testid="footer-copyright">© <span id="year"></span> C&amp;P Global Investors. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  `;

  document.getElementById('year').textContent = new Date().getFullYear();
  bindNavigation();
  bindMenu();
  bindReveal();
};

const bindNavigation = () => {
  document.querySelectorAll('a[href^="/"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href) return;
      event.preventDefault();
      history.pushState({}, '', href);
      renderLayout(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
};

const bindMenu = () => {
  const button = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!button || !mobileNav) return;
  button.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
};

const bindReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
};

window.addEventListener('popstate', () => renderLayout(window.location.pathname));

renderLayout(window.location.pathname);