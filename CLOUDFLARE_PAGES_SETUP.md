## Cloudflare Pages Setup

This site is configured for **Cloudflare Pages** as a static site.

### Use these exact settings in Cloudflare Pages
- **Framework preset:** None
- **Build command:** leave blank
- **Root directory:** frontend
- **Build output directory:** public

### Why this works
- The website files are inside `frontend/public`
- `_redirects` is included so routes like `/about`, `/services`, `/contact`, and `/book` all load correctly

### Deploy steps
1. Push this repo to GitHub
2. In Cloudflare, go to **Workers & Pages**
3. Click **Create application**
4. Click **Pages**
5. Click **Connect to Git**
6. Select this repo
7. Enter the settings above
8. Click **Save and Deploy**

### Custom domain
After deploy:
1. Open the Pages project
2. Go to **Custom domains**
3. Add your domain
4. Cloudflare will handle the DNS if your domain is already on Cloudflare

### Important note
Do **not** deploy the backend for Cloudflare Pages.
Only the static frontend is needed for this website.