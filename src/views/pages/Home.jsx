import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpIcon } from '@heroicons/react/24/solid';
import Navbar from '../parts/Navbar';
import HeroSection from '../parts/HeroSection';
import AboutUs from '../parts/AboutUs';
import UploadSection from '../parts/UploadSection';
import DownloadSection from '../parts/DownloadSection';
import Footer from '../parts/Footer';

function Home() {
    const [showButton, setShowButton] = useState(false);
    const { i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

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
            <DownloadSection/>
            <AboutUs />
            <UploadSection />
            <Footer />

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className={`fixed bottom-8 z-50 h-12 w-12 rounded-full bg-amber-500 text-white flex items-center justify-center transition-all duration-300 hover:bg-amber-600 hover:scale-105 shadow-lg hover:shadow-xl ${
                        isRTL ? 'left-8' : 'right-8'
                    }`}
                    aria-label={i18n.language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
                >
                    <ArrowUpIcon className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" />
                </button>
            )}
        </>
    );
}

export default Home;