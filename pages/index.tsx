import HeaderSection from "../components/index/header/HeaderSection";
import ExperienceSection from "../components/index/experience/ExperienceSection";
import AboutMeSection from "../components/index/aboutme/AboutMeSection";
import ServicesSection from "../components/index/service/ServicesSection";
import ProjectSection from "../components/index/projects/ProjectSection";
import ProjectHighlightSection from "../components/index/projects/ProjectHighlightSection";
import CompanySection from "../components/index/company/CompanySection";
import SEOHead from "../components/seo/SEOHead";
import StructuredData from "../components/seo/StructuredData";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';
import {useGoogleAnalytics} from '../lib/analytics';
import {useEffect} from 'react';

export default function Home() {
    const {t} = useTranslation();
    
    // Initialize Google Analytics
    useGoogleAnalytics();

    return (
        <>
            <SEOHead
                title="Qendrim Vllasa - Software Engineer & Cloud Expert"
                description="Experienced Software Engineer specializing in cloud technologies, web development, and digital transformation. Expert in React, Next.js, Python, TypeScript, and modern cloud architectures."
                type="profile"
                keywords={[
                    "Software Engineer",
                    "Cloud Expert", 
                    "Web Developer",
                    "React Developer",
                    "Next.js Expert",
                    "Python Developer",
                    "TypeScript",
                    "Cloud Architecture",
                    "Digital Transformation",
                    "Full Stack Developer",
                    "DevOps",
                    "Microservices",
                    "AWS",
                    "Azure",
                    "Docker",
                    "Kubernetes"
                ]}
                image="/assets/website.png"
            />
            
            {/* Structured Data for Person and Website */}
            <StructuredData 
                type="Person" 
                data={{
                    "additionalName": "Software Engineer",
                    "nationality": "Albanian",
                    "homeLocation": {
                        "@type": "Place",
                        "name": "Germany"
                    }
                }} 
            />
            <StructuredData 
                type="WebSite" 
                data={{
                    "inLanguage": ["en", "de"],
                    "copyrightYear": new Date().getFullYear(),
                    "genre": "Portfolio"
                }} 
            />
            <main className='relative'>
                <HeaderSection/>
                <ProjectHighlightSection/>
                <ExperienceSection/>
                <AboutMeSection/>
                <ServicesSection/>
                <ProjectSection/>
                <CompanySection/>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || 'en', ['common'])),
        },
    };
};
