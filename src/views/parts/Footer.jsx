import { useTranslation } from 'react-i18next';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <footer className="bg-blue-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
          </div>
          
          {/* Sélecteur de langue */}
          <div className="relative">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-400"
            >
              <span>{i18n.language === 'fr' ? 'Français' : 'العربية'}</span>
              <ChevronDownIcon className={`h-4 w-4 ml-2 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isLangOpen && (
              <div className="absolute right-0 bottom-full mb-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-50">
                <button
                  onClick={() => changeLanguage('fr')}
                  className={`block w-full text-left px-4 py-2 ${i18n.language === 'fr' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'} rounded-t-lg`}
                >
                  Français
                </button>
                <button
                  onClick={() => changeLanguage('ar')}
                  className={`block w-full text-right px-4 py-2 ${i18n.language === 'ar' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'} rounded-b-lg border-t border-gray-200`}
                >
                  العربية
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}