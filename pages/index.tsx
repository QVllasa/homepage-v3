import Head from 'next/head'
import HeaderSection from "./Components/IndexSections/HeaderSection";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footers/Footer";
import ExperienceSection from "./Components/IndexSections/ExperienceSection";
import ServicesSection from "./Components/IndexSections/ServicesSection";
import AboutMeSection from "./Components/IndexSections/AboutMeSection";
import BlogSection from "./Components/IndexSections/BlogSection";
import CompanySection from "./Components/IndexSections/CompanySection";
import ContactSection from "./Components/IndexSections/ContactSection";


export default function Home() {
    return (
        <>
            <Head>
                <title>Qendrim Vllasa - Official Homepage</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className='relative'>
                <Navbar/>
                <HeaderSection/>
                <AboutMeSection/>
                <ExperienceSection/>
                <ServicesSection/>
                <BlogSection/>
                <CompanySection/>
                <ContactSection/>
                <Footer/>
            </main>
        </>
    )
}

