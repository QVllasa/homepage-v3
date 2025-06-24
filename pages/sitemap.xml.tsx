import { GetServerSideProps } from 'next';
import { Projects } from '../data/projects';
import { Services } from '../data/services';

function generateSiteMap() {
    const baseUrl = 'https://qendrimvllasa.com';
    
    // Static pages
    const staticPages = [
        '',
        '/legal',
    ];

    // Dynamic project pages
    const projectPages = Projects.map(project => `/projects/${project.id}`);
    
    // Dynamic skill pages  
    const skillPages = Services.map(service => `/skills/${service.key}`);
    
    // Combine all pages
    const allPages = [...staticPages, ...projectPages, ...skillPages];
    
    return `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
            ${allPages
                .map((page) => {
                    const url = `${baseUrl}${page}`;
                    const lastMod = new Date().toISOString();
                    const priority = page === '' ? '1.0' : page.includes('/projects/') ? '0.8' : '0.6';
                    
                    return `
                        <url>
                            <loc>${url}</loc>
                            <lastmod>${lastMod}</lastmod>
                            <changefreq>weekly</changefreq>
                            <priority>${priority}</priority>
                            <xhtml:link rel="alternate" hreflang="en" href="${url}"/>
                            <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${page}"/>
                            <xhtml:link rel="alternate" hreflang="x-default" href="${url}"/>
                        </url>`;
                })
                .join('')}
        </urlset>`;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
    // Generate the XML sitemap
    const sitemap = generateSiteMap();

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default SiteMap;
