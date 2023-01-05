import Head from 'next/head'
import HeaderSection from "../components/index/header/HeaderSection";
import Navbar from "../components/navbar/Navbar";
import ExperienceSection from "../components/index/experience/ExperienceSection";
import ServicesSection from "../components/index/service/ServicesSection";
import AboutMeSection from "../components/index/aboutme/AboutMeSection";

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
                {/*<BlogSection/>*/}
                {/*<CompanySection/>*/}
                {/*<ContactSection/>*/}
                {/*<Footer/>*/}
            </main>
        </>
    )
}

