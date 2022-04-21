import Head from 'next/head'
import Image from 'next/image'
import globalStyles from '../components/style'
import Script from "next/script"
import TopBar from "../components/topbar"
import Header from "../components/header"
import Hero from "../components/hero"
import { unstable_useWebVitalsReport } from 'next/streaming'
import FService from '../components/featured_services'
import About from '../components/about'
import Service from '../components/service'
import Team from '../components/team'

export default function Home() {
    unstable_useWebVitalsReport((data) => {
        console.log(data)
    });
    return (
        <>
            <Head>
                <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
                <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
                <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
            </Head>

            <style jsx>
                {globalStyles}
            </style>

            <TopBar />
            <Header />
            <Hero />

            <main>
                <FService />
                <About />
                <Service />
                <Team />
            </main>
            <div id="preloader"></div>
            <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
            <Script src="assets/vendor/purecounter/purecounter.js" strategy="beforeInteractive"/>
            <Script src="assets/vendor/aos/aos.js" strategy="beforeInteractive" />
            <Script src="assets/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive" />
            <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive" />
            <Script src="assets/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive"/>
            <Script src="assets/vendor/waypoints/noframework.waypoints.js" strategy="beforeInteractive"/>
            <Script src="assets/vendor/php-email-form/validate.js" strategy="beforeInteractive"/>
            <Script src="assets/js/main.js" />
        </>
    );
}
