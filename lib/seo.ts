import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface SEOHookReturn {
    title: string;
    description: string;
    url: string;
    image: string;
    keywords: string[];
    canonicalUrl: string;
    alternateUrls: { [key: string]: string };
}

export const useSEO = (
    pageTitle?: string,
    pageDescription?: string,
    pageImage?: string,
    pageKeywords?: string[]
): SEOHookReturn => {
    const router = useRouter();
    const { t } = useTranslation();
    
    const baseUrl = 'https://qendrimvllasa.com';
    const defaultTitle = 'Qendrim Vllasa - Software Engineer & Cloud Expert';
    const defaultDescription = 'Experienced Software Engineer specializing in cloud technologies, web development, and digital transformation. Expert in React, Next.js, Python, TypeScript, and modern cloud architectures.';
    const defaultImage = '/assets/website.png';
    const defaultKeywords = [
        'Software Engineer',
        'Cloud Expert',
        'Web Developer',
        'React Developer',
        'Next.js Expert',
        'Python Developer',
        'TypeScript',
        'Cloud Architecture',
        'Digital Transformation'
    ];

    // Build title with site name
    const title = pageTitle 
        ? `${pageTitle} | ${defaultTitle}`
        : defaultTitle;

    // Use provided description or default
    const description = pageDescription || defaultDescription;

    // Build full URL
    const url = `${baseUrl}${router.asPath}`;

    // Build full image URL
    const image = pageImage 
        ? (pageImage.startsWith('http') ? pageImage : `${baseUrl}${pageImage}`)
        : `${baseUrl}${defaultImage}`;

    // Combine keywords
    const keywords = pageKeywords 
        ? [...defaultKeywords, ...pageKeywords]
        : defaultKeywords;

    // Build canonical URL (without query params)
    const canonicalUrl = `${baseUrl}${router.asPath.split('?')[0]}`;

    // Build alternate URLs for different languages
    const alternateUrls: { [key: string]: string } = {};
    if (router.locales) {
        router.locales.forEach(locale => {
            const path = router.asPath.split('?')[0];
            alternateUrls[locale] = locale === router.defaultLocale 
                ? `${baseUrl}${path}`
                : `${baseUrl}/${locale}${path}`;
        });
    }

    return {
        title,
        description,
        url,
        image,
        keywords,
        canonicalUrl,
        alternateUrls
    };
};

// SEO utility functions
export const generatePageTitle = (pageTitle: string, includeBase = true): string => {
    const baseTitle = 'Qendrim Vllasa - Software Engineer & Cloud Expert';
    return includeBase ? `${pageTitle} | ${baseTitle}` : pageTitle;
};

export const truncateDescription = (description: string, maxLength = 160): string => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength - 3).trim() + '...';
};

export const generateKeywords = (baseKeywords: string[], additionalKeywords: string[] = []): string[] => {
    const defaultKeywords = [
        'Software Engineer',
        'Cloud Expert', 
        'Web Developer',
        'React',
        'Next.js',
        'Python',
        'TypeScript'
    ];
    
    const allKeywords = [...defaultKeywords, ...baseKeywords, ...additionalKeywords];
    return Array.from(new Set(allKeywords));
};

export const generateBreadcrumbs = (router: any) => {
    const pathSegments = router.asPath.split('/').filter((segment: string) => segment);
    const breadcrumbs = [
        { name: 'Home', url: '/' }
    ];

    let currentPath = '';
    pathSegments.forEach((segment: string, index: number) => {
        currentPath += `/${segment}`;
        
        // Clean up segment name
        const name = segment
            .replace(/-/g, ' ')
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .split(' ')
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
            
        breadcrumbs.push({
            name,
            url: currentPath
        });
    });

    return breadcrumbs;
};
