import { useRouter } from 'next/router';

interface StructuredDataProps {
    type: 'Person' | 'WebSite' | 'Organization' | 'WebPage' | 'Article' | 'BreadcrumbList' | 'Service';
    data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    const router = useRouter();
    
    const generateStructuredData = () => {
        const baseUrl = 'https://qendrimvllasa.com';
        
        switch (type) {
            case 'Person':
                return {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Qendrim Vllasa",
                    "jobTitle": "Software Engineer & Cloud Expert",
                    "description": "Experienced Software Engineer specializing in cloud technologies, web development, and digital transformation",
                    "url": baseUrl,
                    "image": `${baseUrl}/assets/qendrim.png`,
                    "sameAs": [
                        "https://linkedin.com/in/qendrimvllasa",
                        "https://github.com/qendrimvllasa"
                    ],
                    "knowsAbout": [
                        "Software Engineering",
                        "Cloud Computing",
                        "Web Development",
                        "React",
                        "Next.js",
                        "Python",
                        "TypeScript",
                        "DevOps",
                        "Microservices",
                        "AWS",
                        "Azure"
                    ],
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Technology Consultant"
                    },
                    "alumniOf": {
                        "@type": "EducationalOrganization",
                        "name": "Computer Science Education"
                    },
                    ...data
                };
                
            case 'WebSite':
                return {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Qendrim Vllasa Portfolio",
                    "description": "Portfolio and professional website of Qendrim Vllasa, Software Engineer & Cloud Expert",
                    "url": baseUrl,
                    "author": {
                        "@type": "Person",
                        "name": "Qendrim Vllasa"
                    },
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": {
                            "@type": "EntryPoint",
                            "urlTemplate": `${baseUrl}/search?q={search_term_string}`
                        },
                        "query-input": "required name=search_term_string"
                    },
                    ...data
                };
                
            case 'Article':
                return {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": data.title,
                    "description": data.description,
                    "image": data.image ? `${baseUrl}${data.image}` : `${baseUrl}/assets/website.png`,
                    "datePublished": data.publishedTime,
                    "dateModified": data.modifiedTime || data.publishedTime,
                    "author": {
                        "@type": "Person",
                        "name": "Qendrim Vllasa",
                        "url": baseUrl
                    },
                    "publisher": {
                        "@type": "Person",
                        "name": "Qendrim Vllasa",
                        "logo": {
                            "@type": "ImageObject",
                            "url": `${baseUrl}/assets/qendrim.png`
                        }
                    },
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": `${baseUrl}${router.asPath}`
                    },
                    ...data
                };
                
            case 'Service':
                return {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": data.name,
                    "description": data.description,
                    "provider": {
                        "@type": "Person",
                        "name": "Qendrim Vllasa",
                        "url": baseUrl
                    },
                    "areaServed": {
                        "@type": "Place",
                        "name": "Worldwide"
                    },
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "Software Development Services",
                        "itemListElement": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Web Development"
                                }
                            },
                            {
                                "@type": "Offer", 
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Cloud Architecture"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service", 
                                    "name": "IT Consulting"
                                }
                            }
                        ]
                    },
                    ...data
                };
                
            case 'BreadcrumbList':
                return {
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": data.items?.map((item: any, index: number) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": item.name,
                        "item": `${baseUrl}${item.url}`
                    })) || []
                };
                
            default:
                return {
                    "@context": "https://schema.org",
                    "@type": type,
                    ...data
                };
        }
    };

    const structuredData = generateStructuredData();

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData, null, 2)
            }}
        />
    );
};

export default StructuredData;
