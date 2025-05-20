import { useTranslation } from 'react-i18next';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section className="relative h-screen flex items-center justify-center bg-gray-900 overflow-hidden pt-16">
            <div className="absolute inset-0">
                <img
                    src="/images/library-hero.jpg"
                    alt="Library background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/50"></div>
            </div>

            <div className="relative z-10 text-center px-5 w-full max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t('hero.title')}
                </h1>

                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    {t('hero.subtitle')}
                </p>

                <div className="relative max-w-2xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder={t('hero.search_placeholder')}
                            className="flex-grow py-4 px-6 focus:outline-none text-gray-800"
                        />
                        <button className="px-6 bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center">
                            <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                            {t('hero.search_button')}
                        </button>
                    </div>
                </div>

                <div className="mt-6 text-gray-300">
                    <span className="mr-3">{t('hero.popular_searches')}:</span>
                    {['Développement Web', 'Réseaux Informatiques', 'Comptabilité'].map((topic) => (
                        <a 
                            key={topic} 
                            href="#" 
                            className="inline-block mr-3 text-white hover:text-blue-300 transition-colors"
                        >
                            {topic}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}