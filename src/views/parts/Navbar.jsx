import { Link } from 'react-router-dom';
import { 
  ChevronDownIcon, 
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import logo from '../../assets/logo.svg';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = i18n.language;
    }, [i18n.language]);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
        i18n.changeLanguage(newLang);
    };

    const textColorClass = isScrolled ? 'text-gray-700' : 'text-white';
    const hoverEffectClass = isScrolled ? 'hover:bg-gray-100/50' : 'hover:bg-white/10';

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className={`flex items-center text-xl font-bold hover:scale-105 transition-transform ${textColorClass}`}
                        >
                            <img
                                src={logo}
                                alt="Logo FreeCourses"
                                className="h-8 w-8 mr-2"
                            />
                            FreeCourses
                        </Link>
                    </div>

                    {/* Search bar - only visible when scrolled */}
                    {isScrolled && (
                        <div className="hidden md:flex flex-1 mx-8">
                            <div className="relative w-full max-w-md">
                                <input
                                    type="text"
                                    placeholder={t('navbar.search')}
                                    className="w-full py-2 px-4 pl-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                            </div>
                        </div>
                    )}

                    {/*  Navigation links */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div 
                            className="relative"
                            onMouseEnter={() => setIsExploreOpen(true)}
                            onMouseLeave={() => setIsExploreOpen(false)}
                        >
                            <div className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${hoverEffectClass} cursor-pointer`}>
                                <span className={`${textColorClass} font-medium ${isExploreOpen ? 'opacity-80' : ''} transition-opacity`}>
                                    {t('navbar.explore')}
                                </span>
                                <ChevronDownIcon
                                    className={`h-4 w-4 ml-1 transition-transform ${isExploreOpen ? 'rotate-180' : ''} ${textColorClass}`}
                                />
                            </div>
                            
                            {/* Invisible bridge */}
                            <div className="absolute left-0 right-0 h-2 bg-transparent" />
                            
                            {isExploreOpen && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 py-2">
                                    <Link
                                        to="/courses"
                                        className="block py-3 px-5 text-gray-700 hover:bg-gray-50 transition-all font-medium"
                                    >
                                        {t('navbar.courses')}
                                    </Link>
                                    <Link
                                        to="/exams"
                                        className="block py-3 px-5 text-gray-700 hover:bg-gray-50 transition-all font-medium border-t border-gray-100"
                                    >
                                        {t('navbar.exams')}
                                    </Link>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <Link 
                                to="#upload" 
                                className={`px-3 py-2 rounded-lg ${textColorClass} font-medium hover:opacity-80 transition-opacity ${hoverEffectClass}`}
                            >
                                {t('navbar.upload')}
                            </Link>
                        </div>

                        <div 
                            className="relative"
                            onMouseEnter={() => setIsMoreOpen(true)}
                            onMouseLeave={() => setIsMoreOpen(false)}
                        >
                            <button
                                className={`p-2 rounded-full ${textColorClass} hover:opacity-80 transition-opacity ${hoverEffectClass}`}
                                aria-label="More options"
                            >
                                <EllipsisHorizontalIcon className="h-5 w-5" />
                            </button>
                            
                            {/* Invisible bridge */}
                            <div className="absolute left-0 right-0 h-2 bg-transparent" />
                            
                            {isMoreOpen && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50 py-2">
                                    <Link 
                                        to="/login"
                                        className="block py-3 px-5 text-gray-700 hover:bg-gray-50 transition-all font-medium"
                                    >
                                        {t('navbar.login')}
                                    </Link>
                                    <Link
                                        to="/about"
                                        className="block py-3 px-5 text-gray-700 hover:bg-gray-50 transition-all font-medium border-t border-gray-100"
                                    >
                                        {t('navbar.about')}
                                    </Link>
                                    <button
                                        onClick={toggleLanguage}
                                        className="block w-full text-left py-3 px-5 text-gray-700 hover:bg-gray-50 transition-all font-medium border-t border-gray-100"
                                    >
                                        {t('navbar.changeLanguage')}
                                    </button>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/join"
                            className={`px-5 py-2.5 rounded-full transition-all ${isScrolled ? 'bg-black text-white hover:opacity-90' : 'bg-white text-black hover:opacity-90'} font-medium`}
                        >
                            {t('navbar.join')}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 lg:hidden rounded-md ${textColorClass} hover:bg-gray-100 focus:outline-none`}
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
                        <ul className="space-y-2">
                            <li>
                                <Link 
                                    to="/" 
                                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {t('navbar.home')}
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => setIsExploreOpen(!isExploreOpen)}
                                    className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    <span>{t('navbar.explore')}</span>
                                    <ChevronDownIcon
                                        className={`h-4 w-4 ml-1 transition-transform ${isExploreOpen ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {isExploreOpen && (
                                    <div className="ml-4 mt-2 space-y-2">
                                        <Link
                                            to="/courses"
                                            className="block py-2.5 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                        >
                                            {t('navbar.courses')}
                                        </Link>
                                        <Link
                                            to="/exams"
                                            className="block py-2.5 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                        >
                                            {t('navbar.exams')}
                                        </Link>
                                    </div>
                                )}
                            </li>
                            
                            <li>
                                <Link 
                                    to="#upload" 
                                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {t('navbar.upload')}
                                </Link>
                            </li>
                            
                            <li>
                                <Link 
                                    to="/join" 
                                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {t('navbar.join')}
                                </Link>
                            </li>
                            
                            <li>
                                <Link 
                                    to="/login" 
                                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {t('navbar.login')}
                                </Link>
                            </li>
                            
                            <li>
                                <Link 
                                    to="/about" 
                                    className="block py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {t('navbar.about')}
                                </Link>
                            </li>
                            
                            <li>
                                <button
                                    onClick={toggleLanguage}
                                    className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                                >
                                    {t('navbar.changeLanguage')}
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;