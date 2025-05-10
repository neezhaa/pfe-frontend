import { Link } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <nav className="container mx-auto px-4 py-4 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link
                            to="/"
                            className="flex items-center text-blue-600 text-xl md:text-2xl font-bold"
                        >
                            <img
                                src={logo}
                                alt="Logo FreeCourses"
                                className="h-8 w-8 md:h-10 md:w-10 mr-2"
                            />
                            FreeCourses
                        </Link>
                    </div>

                    {/* Menu mobile button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 lg:hidden rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>

                    {/* Navigation */}
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 top-full w-full bg-white shadow-lg lg:shadow-none lg:static lg:flex lg:items-center lg:w-auto lg:bg-transparent`}
                    >
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between w-full">
                            {/* Liens de navigation */}
                            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:ml-6">
                                <li className="border-b border-gray-100 lg:border-none">
                                    <Link
                                        to="/about"
                                        className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
                                    >
                                        {t('navbar.about')}
                                    </Link>
                                </li>

                                <li className="border-b border-gray-100 lg:border-none relative">
                                    <button
                                        onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                                        className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0 lg:w-auto"
                                    >
                                        <span>{t('navbar.resources')}</span>
                                        <ChevronDownIcon
                                            className={`h-4 w-4 ml-1 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                    {isResourcesOpen && (
                                        <div className="lg:absolute lg:left-0 lg:mt-2 lg:w-48 lg:bg-white lg:rounded-lg lg:shadow-lg lg:border lg:border-gray-100">
                                            <Link
                                                to="/courses"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50"
                                            >
                                                {t('navbar.courses')}
                                            </Link>
                                            <Link
                                                to="/exams"
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-100"
                                            >
                                                {t('navbar.exams')}
                                            </Link>
                                        </div>
                                    )}
                                </li>

                                <li className="border-b border-gray-100 lg:border-none">
                                    <Link
                                        to="/contact"
                                        className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-gray-50 lg:hover:bg-transparent lg:p-0"
                                    >
                                        {t('navbar.contact')}
                                    </Link>
                                </li>
                            </ul>

                            {/* Boutons avec espacement */}
                            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 mt-4 lg:mt-0 p-4 lg:p-0 lg:ml-12 border-t border-gray-100 lg:border-none">
                                <Link
                                    to="/login"
                                    className="px-4 py-2 text-center text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                >
                                    {t('navbar.login')}
                                </Link>
                                <Link
                                    to="/signup"
                                    className="px-4 py-2 text-center text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition"
                                >
                                    {t('navbar.signup')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
