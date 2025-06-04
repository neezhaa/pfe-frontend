import { useTranslation } from 'react-i18next';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function ScribdStyleFooter() {
  const { t, i18n } = useTranslation();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const currentLang = i18n.language;

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'ar', label: 'العربية' }
          ];

  const footerLinks = [
    {
      title: t('footer.about'),
      links: [
        { text: t('footer.careers'), url: '#' },
        { text: t('footer.blog'), url: '#' },
        { text: t('footer.about_us'), url: '#about' },
        { text: t('footer.press'), url: '#' }
      ]
    },
    {
      title: t('footer.legal'),
      links: [
        { text: t('footer.terms'), url: '#' },
        { text: t('footer.privacy'), url: '#' },
        { text: t('footer.copyright'), url: '#' },
        { text: t('footer.cookies'), url: '#' }
      ]
    },
    {
      title: t('footer.support'),
      links: [
        { text: t('footer.help'), url: '#' },
        { text: t('footer.contact'), url: '/contact-us' },
        { text: t('footer.faq'), url: '#' }
      ]
    }
  ];

  const socialIcons = [
    { name: 'facebook', icon: 'Facebook', url: '#' },
    { name: 'twitter', icon: 'Twitter', url: '#' },
    { name: 'instagram', icon: 'Instagram', url: '#' },
    { name: 'linkedin', icon: 'LinkedIn', url: '#' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  };

  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo/App download */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">FreeCourses</h3>
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center">
                <span className="mr-2">App Store</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </button>
              <button className="w-full bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center">
                <span className="mr-2">Google Play</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.59.68.59 1.19s-.25.92-.59 1.19l-2.75 1.51-2.89-2.88 2.75-1.51c.35-.19.74-.19 1.09 0l2.8 1.5zm-15.4-7.41l8.49 8.49-2.27 2.27L1.39 3.27l2.27 2.27L4.76 6l1.19-1.19z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.url} className="text-gray-600 hover:text-gray-900 text-sm">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social media */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              {t('footer.follow_us')}
            </h4>
            <div className="flex space-x-4">
              {socialIcons.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  className="text-gray-500 hover:text-gray-900"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0 flex-wrap justify-center md:justify-start">
                <span className="text-sm">© {new Date().getFullYear()} FreeCourses</span>
                <a href="#" className="text-sm hover:underline">{t('footer.terms')}</a>
                <a href="#" className="text-sm hover:underline">{t('footer.privacy')}</a>
                
                {/* Language selector - now inline with other links */}
                <div className="relative inline-block">
                <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center space-x-2 text-sm hover:underline"
                >
                    <GlobeAltIcon className="w-4 h-4 mr-1" />
                    <span>{languages.find(l => l.code === currentLang)?.label}</span>
                </button>

                {showLangMenu && (
                    <div className="absolute bottom-full left-0 mb-2 w-32 bg-white rounded-md shadow-lg py-1 z-50">
                    {languages.map((lang) => (
                        <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`block w-full text-left px-4 py-2 text-sm ${currentLang === lang.code ? 'bg-gray-100' : 'hover:bg-gray-50'}`}
                        dir={lang.code === 'ar' ? 'rtl' : 'ltr'}
                        >
                        {lang.label}
                        </button>
                    ))}
                    </div>
                )}
                </div>
            </div>
            </div>
        </div>
    </footer>
  );
}