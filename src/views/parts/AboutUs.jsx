import { useTranslation } from 'react-i18next';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/images/img1.PNG"
              alt="Partage entre stagiaires"
              className="object-cover w-full h-full max-h-[500px] transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
            {t('about.title')}
          </h2>

          <p className="text-gray-700 text-lg mb-5 leading-relaxed">
            {t('about.paragraph1')}
          </p>
          <p className="text-gray-700 text-lg mb-5 leading-relaxed">
            {t('about.paragraph2')}
          </p>

          <div className="mt-8 border-l-4 border-blue-600 pl-4 italic text-blue-800">
            “{t('about.quote')}”
          </div>
        </div>
      </div>
    </section>
  );
}
