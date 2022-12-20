import Head from 'next/head'
import Header from "./Components/IndexSections/Header";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/IndexSections/AboutMe";
import Footer from "./Components/Footers/Footer";
import Experience from "./Components/IndexSections/Experience";
import Stack from "./Components/IndexSections/Stack";


export default function Home() {
  return (
    <>
      <Head>
        <title>Qendrim Vllasa - Official Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='relative'>
          <Navbar/>
          <Header/>
          <AboutMe/>
          <Experience/>
          <Stack/>
          <Footer/>
      </main>
    </>
  )
}

