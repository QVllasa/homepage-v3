import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'profile';
    keywords?: string[];
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    noindex?: boolean;
    nofollow?: boolean;
    canonicalUrl?: string;
}

const SEOHead: React.FC<SEOProps> = ({
    title = "Qendrim Vllasa - Software Engineer & Cloud Expert",
    description = "Experienced Software Engineer specializing in cloud technologies, web development, and digital transformation. Proficient in React, Next.js, Python, and modern cloud architectures.",
    image = "/assets/website.png",
    url,
    type = "website",
    keywords = ["Software Engineer", "Cloud Expert", "Web Developer", "React", "Next.js", "Python", "TypeScript", "Cloud Architecture", "Digital Transformation"],
    author = "Qendrim Vllasa",
    publishedTime,
    modifiedTime,
    noindex = false,
    nofollow = false,
    canonicalUrl
}) => {
    const router = useRouter();
    const currentUrl = url || `https://qendrimvllasa.com${router.asPath}`;
    const siteTitle = "Qendrim Vllasa - Software Engineer & Cloud Expert";
    const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
    const fullImageUrl = image.startsWith('http') ? image : `https://qendrimvllasa.com${image}`;

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            
            {/* Robots */}
            <meta 
                name="robots" 
                content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} 
            />
            
            {/* Canonical URL */}
            <link rel="canonical" href={canonicalUrl || currentUrl} />
            
            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:image:alt" content={title} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:site_name" content="Qendrim Vllasa Portfolio" />
            <meta property="og:locale" content={router.locale === 'de' ? 'de_DE' : 'en_US'} />
            {router.locales?.filter(l => l !== router.locale).map(locale => (
                <meta 
                    key={locale} 
                    property="og:locale:alternate" 
                    content={locale === 'de' ? 'de_DE' : 'en_US'} 
                />
            ))}
            
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />
            <meta name="twitter:image:alt" content={title} />
            <meta name="twitter:creator" content="@qendrimvllasa" />
            <meta name="twitter:site" content="@qendrimvllasa" />
            
            {/* LinkedIn */}
            <meta property="article:author" content="https://linkedin.com/in/qendrimvllasa" />
            
            {/* Article specific */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            
            {/* Favicons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            
            {/* Theme Color */}
            <meta name="theme-color" content="#3B82F6" />
            <meta name="msapplication-TileColor" content="#3B82F6" />
            
            {/* Language alternatives */}
            {router.locales?.map(locale => (
                <link
                    key={locale}
                    rel="alternate"
                    hrefLang={locale}
                    href={`https://qendrimvllasa.com${locale === router.defaultLocale ? '' : `/${locale}`}${router.asPath}`}
                />
            ))}
            <link
                rel="alternate"
                hrefLang="x-default"
                href={`https://qendrimvllasa.com${router.asPath}`}
            />
            
            {/* Preconnect to external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://firebasestorage.googleapis.com" />
            
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": type === 'profile' ? "Person" : "WebPage",
                        name: type === 'profile' ? author : title,
                        description: description,
                        url: currentUrl,
                        image: fullImageUrl,
                        ...(type === 'profile' && {
                            jobTitle: "Software Engineer & Cloud Expert",
                            worksFor: {
                                "@type": "Organization",
                                name: "Technology Consultant"
                            },
                            sameAs: [
                                "https://linkedin.com/in/qendrimvllasa",
                                "https://github.com/qendrimvllasa"
                            ]
                        }),
                        ...(type === 'website' && {
                            publisher: {
                                "@type": "Person",
                                name: author
                            }
                        })
                    })
                }}
            />
        </Head>
    );
};

export default SEOHead;
