import Head from 'next/head'
import HeaderSection from "../components/index/header/HeaderSection";
import ExperienceSection from "../components/index/experience/ExperienceSection";
import AboutMeSection from "../components/index/aboutme/AboutMeSection";
import ServicesSection from "../components/index/service/ServicesSection";
import ProjectSection from "../components/index/projects/ProjectSection";
import ProjectHighlightSection from "../components/index/projects/ProjectHighlightSection";
import CompanySection from "../components/index/company/CompanySection";
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {GetStaticProps} from 'next';
import {useTranslation} from 'next-i18next';

export default function Home() {
    const {t} = useTranslation();

    return (
        <>
            <Head>
                <title>Qendrim Vllasa</title>
                <meta
                    name="description"
                    content="Software Engineer and Tech Enthusiast"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta
                    property="og:description"
                    content="Software Engineer and Tech Enthusiast"
                />
                <meta
                    property="og:image"
                    content="/assets/website.png"
                />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
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
