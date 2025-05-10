import Navbar from "../parts/Navbar";
import HeroSection from "../parts/HeroSection";
import AboutUs from "../parts/AboutUs";
import CTASection from "../parts/CTASection";
import ContactUsSection from "../parts/ContactUsSection";
import Footer from "../parts/Footer";
import { useEffect, useState } from "react";

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
        <Navbar/>

        <HeroSection/>

        <AboutUs/>

        <CTASection/>

        <ContactUsSection/>

        <Footer/>

        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 h-10 w-10 rounded-full bg-blue-600 text-white shadow-md hover:bg-blue-800"
          >
              <span className="mt-1 h-3 w-3 rotate-45 border-l border-t border-white"></span>
          </button>
      )}

    </>
  )
}

export default Home