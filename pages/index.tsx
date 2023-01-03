import Head from 'next/head'
import HeaderSection from "./index/header/HeaderSection";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footers/Footer";
import ExperienceSection from "./index/experience/ExperienceSection";
import ServicesSection from "./index/service/ServicesSection";
import AboutMeSection from "./index/aboutme/AboutMeSection";
import BlogSection from "./index/blog/BlogSection";
import CompanySection from "./index/company/CompanySection";
import ContactSection from "./index/contact/ContactSection";


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
                {/*<AboutMeSection/>*/}
                {/*<ExperienceSection/>*/}
                {/*<ServicesSection/>*/}
                {/*<BlogSection/>*/}
                {/*<CompanySection/>*/}
                {/*<ContactSection/>*/}
                {/*<Footer/>*/}
            </main>
        </>
    )
}

