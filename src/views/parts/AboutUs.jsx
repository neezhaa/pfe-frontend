import { useTranslation } from 'react-i18next';

function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="bg-blue-50 py-16 lg:py-24 overflow-hidden" id="about">
            <div className="container mx-auto px-4 max-w-3xl relative">
                <div className="text-center">
                    <div className="relative inline-block">
                        <h1 className="text-4xl font-light tracking-wide text-blue-800 sm:text-5xl">
                            {t('about.title')}
                        </h1>
                        <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-100/50"></div>
                    </div>

                    <div className="mt-8 px-6 py-4 relative">
                        <p className="text-lg text-blue-900/90 leading-relaxed">
                            {t('about.description')}
                        </p>
                        <div className="absolute inset-0 border-l-2 border-blue-200 rounded-sm pointer-events-none"></div>
                    </div>

                    <div className="mt-10 flex justify-center">
                        <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                    </div>
                </div>

                <div className="hidden lg:block">
                    <div className="absolute top-1/4 left-0 w-8 h-8 rounded-full bg-blue-100/30"></div>
                    <div className="absolute bottom-1/3 right-0 w-6 h-6 rounded-full bg-blue-200/40"></div>
                    <div className="absolute top-10 right-10 w-3 h-3 rounded-full bg-blue-300/50"></div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
