# 🚀 AI-Bility Networks Website - Setup Guide

Complete setup and deployment instructions for the AI-Bility Networks website project.

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Project Installation](#project-installation)
4. [Running the Project](#running-the-project)
5. [Environment Configuration](#environment-configuration)
6. [Deployment Options](#deployment-options)
7. [Troubleshooting](#troubleshooting)
8. [Maintenance Guidelines](#maintenance-guidelines)
9. [Security Best Practices](#security-best-practices)

---

## Prerequisites

### Required Software

Before you begin, ensure you have the following installed:

| Software | Version | Purpose |
|----------|---------|---------|
| **Web Browser** | Latest version | Testing and preview |
| **Code Editor** | VS Code recommended | Development |
| **Git** | Latest version | Version control |

### Optional Software

| Software | Purpose |
|----------|---------|
| **Node.js** | Advanced build processes |
| **Python** | Local development server |
| **Image Optimizer** | Image compression |

---

## Local Development Setup

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Website

# Verify the structure
ls -la
```

### Step 2: Verify Project Structure

After cloning, your directory should look like this:

```
Website/
├── index.html
├── pages/
│   ├── about.html
│   ├── contact.html
│   ├── seo.html
│   ├── sem.html
│   ├── content.html
│   └── social.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
├── favicon_io/
└── README.md
```

### Step 3: Install Dependencies (Optional)

The project uses CDN-hosted libraries, so no npm install is required. However, for development enhancements:

```bash
# Initialize npm (optional)
npm init -y

# Install development tools (optional)
npm install --save-dev html-minifier clean-css-cli
```

---

## Project Installation

### Option 1: Direct File Editing

1. **Open the project folder in your code editor**
   ```bash
   # Using VS Code
   code .

   # Using Sublime Text
   subl .

   # Using Atom
   atom .
   ```

2. **Start editing files:**
   - `index.html` - Homepage content
   - `css/style.css` - Styling
   - `js/script.js` - JavaScript functionality

### Option 2: Local Development Server

#### Using Python (Recommended)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Access at: `http://localhost:8000`

#### Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Start the server
http-server -p 8000
```

Access at: `http://localhost:8080`

#### Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Using PHP

```bash
# Start PHP built-in server
php -S localhost:8000
```

---

## Running the Project

### Development Mode

1. **Start your local server** (choose one method above)
2. **Open in browser:** `http://localhost:8000` (or your assigned port)
3. **Make changes:** Edit files and refresh to see updates
4. **Test responsiveness:** Use browser dev tools device toolbar

### Testing Checklist

Before deployment, verify:

- [ ] **All pages load correctly**
- [ ] **Navigation works between pages**
- [ ] **Forms display and validate**
- [ ] **Images load properly**
- [ ] **Animations function smoothly**
- [ ] **Mobile responsive design**
- [ ] **Cross-browser compatibility**

### Browser Testing

Test on these browsers:

| Browser | Version | Notes |
|---------|---------|-------|
| Chrome | Latest | Primary testing browser |
| Firefox | Latest | CSS compatibility |
| Safari | Latest | Mac/iOS testing |
| Edge | Latest | Chromium-based |
| Mobile Safari | Latest | iOS devices |
| Chrome Mobile | Latest | Android devices |

---

## Environment Configuration

### Form Configuration

The contact form uses Web3Forms. To configure:

1. **Open `pages/contact.html`**
2. **Find the form element:**
   ```html
   <form action="https://api.web3forms.com/submit" method="POST">
   ```
3. **Update access key:**
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY">
   ```

4. **Get your access key:**
   - Visit [web3forms.com](https://web3forms.com)
   - Register for free account
   - Create a new form
   - Copy your access key

### Analytics Configuration

Google Analytics is configured with ID `G-2GJCYEW8PN`. To use your own:

1. **Open any HTML file**
2. **Find the Google tag:**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-2GJCYEW8PN"></script>
   ```
3. **Replace with your GA4 ID:**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXX"></script>
   ```
4. **Update the config:**
   ```javascript
   gtag('config', 'G-XXXXXXXX');
   ```

### SEO Meta Tags

Update meta tags in each HTML file:

```html
<meta name="description" content="Your unique description here">
<meta name="keywords" content="keyword1, keyword2, keyword3">
```

### Favicon Configuration

Current favicon files are in `favicon_io/` directory. To customize:

1. **Generate new favicons** using [favicon.io](https://favicon.io)
2. **Replace files** in `favicon_io/` directory
3. **Update references** in HTML head section

---

## Deployment Options

### Option 1: Netlify (Recommended for Clean URLs)

Netlify is an excellent choice for static websites and provides **built-in support for clean URLs** through the `_redirects` file.

#### Step 1: Create _redirects File

We've already created the `_redirects` file in the project root. This file maps clean URLs to their actual HTML file locations:

```apache
# Netlify Redirect Configuration
/aboutus                   /pages/about.html          200
/contactus                 /pages/contact.html        200
/contentmanagement         /pages/content.html        200
/searchenginemarketing     /pages/sem.html            200
/searchengineoptimisation  /pages/seo.html            200
/socialmediamanagement     /pages/social.html         200
```

**What this does:**
- When someone visits `/aboutus`, Netlify serves `/pages/about.html`
- The browser URL stays clean: `yoursite.com/aboutus`
- No JavaScript required - server-side routing

#### Step 2: Deploy to Netlify

**Option A: Drag and Drop (Quickest)**

1. Go to [Netlify](https://netlify.com) and sign up/login
2. Drag the entire `Website` folder to the drop zone
3. Netlify will automatically detect the `_redirects` file
4. Your site is live with clean URLs!

**Option B: Connect to GitHub (Recommended)**

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Add Netlify _redirects for clean URLs"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. In Netlify dashboard:
   - Click "Add new site" → "Import an existing project"
   - Select your GitHub repository
   - Configure settings:
     - **Build command:** (leave empty - no build needed)
     - **Publish directory:** `.`
   - Click "Deploy site"

3. **Critical: Add redirect rules**
   - Go to Site Settings → Build & deploy
   - Scroll to "Post processing"
   - Netlify should auto-detect the `_redirects` file

#### Step 3: Configure Custom Domain (Optional)

1. Go to "Domain Management" in Netlify
2. Click "Add custom domain"
3. Enter your domain (e.g., `aibility-networks.com`)
4. Update DNS settings as instructed

#### Step 4: SSL Certificate

Netlify automatically provides free SSL certificates via Let's Encrypt.

**To enable HTTPS:**
- Go to Domain Management
- Click "Enable HTTPS" next to your custom domain
- Certificate will be provisioned automatically

#### Step 5: Netlify Specific Features

**Pretty URLs (Clean URLs)**

The `_redirects` file with `200` status codes ensures:
- `/aboutus` serves `/pages/about.html`
- URL stays clean in browser
- SEO-friendly (no duplicate content)

**Form Handling**

Netlify also offers form handling:
- Add `netlify` attribute to forms:
  ```html
  <form name="contact" netlify>
  ```
- Netlify will automatically capture submissions
- View submissions in Netlify dashboard

### Option 2: Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

**Or via GitHub:**
1. Import project in Vercel
2. Configure settings (Framework Preset: Other)
3. Deploy

### Option 3: GitHub Pages

1. **Create GitHub repository**
2. **Push code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```
3. **Enable GitHub Pages:**
   - Go to Repository Settings
   - Navigate to Pages
   - Select source branch (main)
   - Save

4. **Access at:** `https://yourusername.github.io/repository-name/`

### Option 4: AWS S3

1. **Create S3 bucket** with public access
2. **Configure bucket:**
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `404.html`

3. **Upload files:**
   ```bash
   # Using AWS CLI
   aws s3 sync . s3://your-bucket-name --acl public-read
   ```

4. **Configure CloudFront** (optional) for CDN

### Option 5: Traditional Hosting (cPanel, etc.)

1. **Upload files** via FTP/SFTP to public_html or www directory
2. **Ensure `index.html` is in root**
3. **Configure .htaccess** for URL rewriting (optional)
4. **Test all pages** after upload

### Option 6: Firebase Hosting

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize:**
   ```bash
   firebase login
   firebase init
   ```

3. **Configure firebase.json:**
   ```json
   {
     "hosting": {
       "public": ".",
       "ignore": ["firebase.json"]
     }
   }
   ```

4. **Deploy:**
   ```bash
   firebase deploy
   ```

---

## Troubleshooting

### Common Issues

#### 1. Images Not Loading

**Problem:** Images show broken icons

**Solution:**
```bash
# Check file paths in HTML
# Correct: <img src="/assets/image.jpg">
# Wrong: <img src="assets/image.jpg">

# Verify case sensitivity
# Linux servers are case-sensitive
```

#### 2. CSS Not Applying

**Problem:** Styles don't appear

**Solutions:**
- Check CSS file is linked correctly
- Clear browser cache (Ctrl+F5)
- Verify CSS syntax
- Check for 404 errors in browser console

#### 3. JavaScript Errors

**Problem:** Interactive features don't work

**Solution:**
- Open browser developer tools (F12)
- Check Console tab for errors
- Verify CDN links are working
- Check JavaScript syntax

#### 4. Form Not Submitting

**Problem:** Contact form doesn't work

**Solutions:**
- Verify Web3Forms access key
- Check form validation attributes
- Test in different browsers
- Check network tab for submission errors

#### 5. Mobile Menu Not Working

**Problem:** Hamburger menu doesn't open on mobile

**Solutions:**
- Check JavaScript is loaded
- Verify hamburger element exists
- Check CSS for display:none issues
- Test touch events

#### 6. Animations Not Working

**Problem:** Scroll reveal animations don't appear

**Solutions:**
- Verify ScrollReveal CDN is loading
- Check element classes match script selectors
- Test with scroll position
- Verify no CSS conflicts

### Browser Developer Tools

Use these shortcuts to diagnose issues:

| Browser | Open DevTools |
|---------|---------------|
| Chrome | F12 or Ctrl+Shift+I |
| Firefox | F12 or Ctrl+Shift+I |
| Safari | Option+Command+C |
| Edge | F12 |

**Key Tabs:**
- **Console** - JavaScript errors
- **Network** - Failed requests
- **Elements** - HTML/CSS inspection
- **Sources** - Debug JavaScript

---

## Maintenance Guidelines

### Regular Tasks

#### Weekly
- [ ] Check form submissions
- [ ] Review analytics data
- [ ] Test contact functionality

#### Monthly
- [ ] Update external libraries
- [ ] Check for broken links
- [ ] Review SEO rankings
- [ ] Test forms and CTAs
- [ ] Check mobile responsiveness

#### Quarterly
- [ ] Full performance audit
- [ ] Security review
- [ ] Content updates
- [ ] Accessibility audit
- [ ] Backup verification

### Content Updates

#### Adding a New Page

1. **Copy existing page** as template:
   ```bash
   cp pages/service-template.html pages/new-service.html
   ```

2. **Update page content:**
   - Change page title
   - Update meta description
   - Modify page content
   - Add to navigation (in all HTML files)

3. **Add to sitemap.xml**

#### Updating Services

1. **Edit appropriate page** (`seo.html`, `sem.html`, etc.)
2. **Update text and images**
3. **Test all links**
4. **Submit updated sitemap to search engines**

#### Managing Images

1. **Add images** to `assets/` subdirectories
2. **Optimize** before uploading (compress, resize)
3. **Use descriptive filenames** (e.g., `seo-service-diagram.jpg`)
4. **Add alt text** for accessibility

### Performance Monitoring

#### Tools to Use

| Tool | Purpose |
|------|---------|
| Google PageSpeed Insights | Performance scoring |
| GTmetrix | Detailed performance report |
| Google Lighthouse | Comprehensive audit |
| WAVE | Accessibility testing |

#### Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.8s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.8s |
| Cumulative Layout Shift | < 0.1 |

---

## Security Best Practices

### General Security

1. **Keep software updated** - Regular updates prevent vulnerabilities
2. **Use HTTPS** - Always serve over SSL/TLS
3. **Backup regularly** - Maintain recent backups
4. **Monitor access logs** - Watch for suspicious activity

### Form Security

1. **Web3Forms** handles spam filtering
2. **Add CAPTCHA** if needed (consider Web3Forms captcha)
3. **Validate all inputs** on server-side if using backend
4. **Limit submission rate** to prevent spam

### File Security

1. **Restrict file uploads** if adding user upload features
2. **Validate file types** for any future upload features
3. **Use proper permissions** on server (644 for files, 755 for directories)

### Server Security

1. **Configure CORS** if adding API calls
2. **Set security headers** in .htaccess:
   ```apache
   Header set X-Content-Type-Options "nosniff"
   Header set X-Frame-Options "SAMEORIGIN"
   Header set X-XSS-Protection "1; mode=block"
   ```
3. **Remove server info** from headers

### Backup Strategy

#### Automated Backups

**Option 1: Manual Backup**
```bash
# Create backup
zip -r backup-$(date +%Y%m%d).zip Website/
```

**Option 2: Git Version Control**
```bash
# Commit changes
git add .
git commit -m "Update description"
git push origin main
```

**Option 3: Hosting Provider Backups**
- Enable automatic backups in hosting dashboard
- Configure retention policy
- Test restoration process

#### Backup Checklist

- [ ] Complete website files
- [ ] Database (if any)
- [ ] Configuration files
- [ ] Custom scripts
- [ ] SSL certificates
- [ ] DNS settings documented

---

## Quick Reference

### Common Commands

```bash
# Start local server (Python)
python -m http.server 8000

# Start local server (Node.js)
npx http-server -p 8080

# Check for broken links
linkchecker http://localhost:8000

# Minify CSS (with Node.js)
cleancss -o style.min.css css/style.css

# Create backup
zip -r backup.zip Website/

# Git commit
git add . && git commit -m "Update" && git push
```

### File Paths Reference

| Page | URL Path | File Location |
|------|----------|---------------|
| Home | `/` | `index.html` |
| About | `/aboutus` | `pages/about.html` |
| Contact | `/contactus` | `pages/contact.html` |
| SEO | `/searchengineoptimisation` | `pages/seo.html` |
| SEM | `/searchenginemarketing` | `pages/sem.html` |
| Content | `/contentmanagement` | `pages/content.html` |
| Social | `/socialmediamanagement` | `pages/social.html` |

### Important URLs

| Resource | URL |
|----------|-----|
| Live Website | https://www.aibility-networks.com |
| Web3Forms | https://web3forms.com |
| ScrollReveal | https://scrollreveal.org |
| Typed.js | https://mattboldt.com/demos/typed-js |
| Google Analytics | https://analytics.google.com |

---

## 📞 Support

If you encounter issues not covered in this guide:

1. **Check documentation** in README.md and PROJECT.md
2. **Review troubleshooting** section above
3. **Check browser console** for error messages
4. **Search online** for specific error messages
5. **Contact development team** with detailed description

---

**Document Version:** 1.0  
**Last Updated:** 2025  
**Maintained by:** AI-Bility Networks

---

*Thank you for using the AI-Bility Networks Website setup guide!*
