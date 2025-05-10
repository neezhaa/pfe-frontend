import { useEffect, useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Navbar from '../parts/Navbar';
import HeroSection from '../parts/HeroSection';
import AboutUs from '../parts/AboutUs';
import CTASection from '../parts/CTASection';
import ContactUsSection from '../parts/ContactUsSection';
import Footer from '../parts/Footer';

function Home() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutUs />
            <CTASection />
            <ContactUsSection />
            <Footer />

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl"
                    aria-label="Remonter en haut"
                >
                    <ArrowUpIcon className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" />
                </button>
            )}
        </>
    );
}

export default Home;
