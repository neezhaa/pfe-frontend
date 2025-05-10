import { useTranslation } from 'react-i18next';
import { ChevronRightIcon, ArrowPathIcon, AcademicCapIcon, SparklesIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-100/20 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-100/20 blur-[100px]"></div>
      
      {/* Spiral Arrow */}
      <div className="absolute left-10 top-1/4 opacity-20 text-blue-300">
        <ArrowPathIcon className="h-24 w-24 animate-spin-slow" />
      </div>

      <div className="mx-auto max-w-7xl px-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="relative inline-block">
                {t('hero.title1')}
                <span className="absolute bottom-1 left-0 h-3 w-full bg-yellow-200/60 -rotate-1 -z-10"></span>
              </span>
              <br />
              <span className="text-blue-600">{t('hero.title2')}</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              {t('hero.description')}
            </p>

            <div className="mt-8 flex flex-wrap gap-8 items-center">
            <Link
                to="/signup"
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:-translate-y-1 shadow-lg hover:shadow-blue-200"
              >
                {t('hero.cta_primary')}
              </Link>
              
              <Link
                to="/resources"
                className="group border-b py-3 px-3 border-blue-600 flex items-center gap-1 text-blue-600 font-medium"
              >
                <span>{t('hero.cta_secondary')}</span>
                <ChevronRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

          {/* Image with Floating Elements */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white rotate-1">
                <img
                  src="/images/heroImg.jpg"
                  alt={t('hero.image_alt')}
                  className="w-full h-auto object-cover aspect-video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 animate-float">
                <div className="flex items-center gap-2">
                  <DocumentTextIcon className="h-6 w-6 text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{t('hero.floating_card1')}</span>
                </div>
                <div className="absolute -bottom-2 -right-2 text-blue-400">
                  <ArrowPathIcon className="h-5 w-5" />
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-6 right-20 bg-indigo-600 text-white p-4 rounded-xl shadow-lg animate-float-delay">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-1 rounded-lg">
                    <AcademicCapIcon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{t('hero.floating_card2')}</span>
                </div>
                <div className="absolute -bottom-8 -left-6 text-yellow-400">
                  <SparklesIcon className="h-14 w-14" />
                </div>
              </div>

              {/* Decorative Dots */}
              <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-yellow-100/80 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-blue-100/80 -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Circles */}
      <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full border-4 border-blue-200/50 animate-pulse"></div>
      <div className="absolute top-32 right-1/4 w-12 h-12 rounded-full border-4 border-indigo-200/50 animate-pulse delay-1000"></div>
    </section>
  );
}

