## Original Problem Statement
- Build a website for C&P Global Investors, a financial service/business consultant.
- Contact/domain info: info@cpglobalinvestors.capital
- Preferred colors: navy blue and grey background
- Address provided: 4120 N Valentine Ave Apt 142 Fresno, CA 93722

## Confirmed User Choices
- Pages: Home, Services, About, Contact, Book Consultation
- Contact display: show email and city/zip code only, not full street address
- Content focus: investment consulting plus financial services/business consulting
- Content style: general professional business content
- Branding: use uploaded logo throughout the site

## Architecture Decisions
- Frontend built as a lightweight multipage-style marketing website served by Express on port 3000.
- Backend kept minimal with FastAPI on port 8001 to provide simple company info and health endpoints.
- Client-side route rendering used for clean navigation across Home, Services, About, Contact, and Book Consultation.
- Styling split into smaller CSS files for maintainability while preserving the navy/grey brand direction.

## What’s Implemented
- Full branded website with sticky navigation, hero section, service overview, about content, contact details, and consultation page
- Repeated logo usage in header, hero, and footer using the uploaded asset
- Contact and book flows centered on email outreach to info@cpglobalinvestors.capital
- Location shown only as Fresno, CA 93722 per user request
- Responsive mobile navigation and polished visual design with subtle motion
- Backend endpoints: /api/health and /api/company-info
- Added phone number 805-253-2887, registration number 202204211064, a text-initial favicon, and wealth-management-focused brand wording in the header/footer/top bar
- Enlarged logo presentation across the site and refined the About, Contact, and Book Consultation copy based on user feedback

## Prioritized Backlog
### P0
- Add real consultation intake workflow if the business wants lead capture beyond email
- Add final legal/compliance copy if required by the business

### P1
- Add SEO metadata per page and social sharing preview tags
- Add client testimonials, trust indicators, or case-study style content

### P2
- Add analytics and conversion tracking
- Add downloadable brochure or capability statement

## Next Tasks
- Replace any placeholder business messaging with finalized company-approved copy
- Add domain-specific branding assets such as favicon and social preview image
- Decide whether to keep email-only inquiries or add a formal consultation form later
