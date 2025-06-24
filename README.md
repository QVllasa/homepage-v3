# Qendrim Vllasa Portfolio - SEO Optimized

This is a professional portfolio website built with [Next.js](https://nextjs.org/), fully optimized for SEO, performance, and accessibility.

## 🚀 Features

### SEO Optimization
- **Comprehensive Meta Tags**: Dynamic meta titles, descriptions, and Open Graph tags
- **Structured Data**: JSON-LD schema markup for Person, WebSite, Article, and Service types
- **Sitemap Generation**: Automatic XML sitemap generation for all pages
- **Robots.txt**: Proper search engine directives
- **Canonical URLs**: Prevent duplicate content issues
- **Multi-language Support**: SEO-optimized for English and German content
- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Performance Monitoring**: Core Web Vitals tracking

### Performance Features
- **Lazy Loading**: Images and components load when needed
- **Code Splitting**: Automatic route-based code splitting
- **Optimized Images**: Responsive images with blur placeholders
- **Preconnect**: DNS prefetching for external resources
- **Compression**: Gzip compression enabled
- **Caching**: Optimized cache headers

### Accessibility
- **ARIA Labels**: Proper semantic HTML and ARIA attributes
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Optimized for assistive technologies
- **Color Contrast**: WCAG 2.1 AA compliant colors

## 🛠️ Getting Started

### Prerequisites
- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/qendrimvllasa/portfolio-v3.git
cd portfolio-v3
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📊 SEO Scripts

### Available Commands
```bash
# SEO audit with Lighthouse
npm run seo:audit

# Generate sitemap
npm run sitemap:generate

# Build and analyze
npm run seo:analyze

# Test SEO components
npm run test:seo
```

## 🔧 SEO Configuration

### Environment Variables
Update `.env.local` with your configuration:

```bash
# SEO Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

### Customizing SEO
1. **Meta Tags**: Update `components/seo/SEOHead.tsx`
2. **Structured Data**: Modify `components/seo/StructuredData.tsx`
3. **Sitemap**: Configure `pages/sitemap.xml.tsx`

## 📈 Performance Optimization

### Image Optimization
- Uses Next.js Image component with automatic WebP/AVIF conversion
- Responsive images with proper sizing
- Lazy loading by default
- Blur placeholders for better UX

### Core Web Vitals
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## 🌐 Multi-language Support

The website supports both English and German with SEO optimization for each language:
- Language-specific meta tags
- Hreflang attributes
- Localized structured data
- Language-specific sitemaps

## 📱 Progressive Web App (PWA)

- Web App Manifest for installability
- Service Worker ready
- Offline-first approach
- App-like experience on mobile devices

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 📊 SEO Checklist

- ✅ Meta titles and descriptions
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Structured data (JSON-LD)
- ✅ XML sitemap
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Image alt texts
- ✅ Semantic HTML
- ✅ Mobile responsiveness
- ✅ Page speed optimization
- ✅ SSL certificate
- ✅ 404 error handling
- ✅ Breadcrumb navigation
- ✅ Internal linking

## 📞 Contact

Qendrim Vllasa - [LinkedIn](https://linkedin.com/in/qendrimvllasa) - [GitHub](https://github.com/qendrimvllasa)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
