import Head from 'next/head'
import HeaderSection from "../components/index/header/HeaderSection";
import ExperienceSection from "../components/index/experience/ExperienceSection";
import ServicesSection from "../components/index/service/ServicesSection";
import AboutMeSection from "../components/index/aboutme/AboutMeSection";
import ProjectSection from "../components/index/projects/ProjectSection";
import CompanySection from "../components/index/company/CompanySection";
import ContactSection from "../components/index/contact/ContactSection";
import Footer from "../components/footers/Footer";

export default function Home() {

    return (
        <>
            <Head>
                <title>Qendrim Vllasa - Official Homepage</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className='relative'>
                <HeaderSection/>
                <AboutMeSection/>
                <ExperienceSection/>
                <ServicesSection/>
                <ProjectSection/>
                <CompanySection/>
                <ContactSection/>
                <Footer/>
            </main>
        </>
    )
}

