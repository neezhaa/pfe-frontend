import { useTranslation } from 'react-i18next';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

const ContactUsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-gray-50 py-12 lg:py-20" id="contact">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="md:flex">
                        {/* Form */}
                        <div className="p-8 md:p-10 w-full md:w-2/3">
                            <h3 className="text-3xl font-bold text-gray-800 mb-6">
                                {t('contact.title')}
                            </h3>

                            <form className="space-y-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        {t('contact.name')}
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        {t('contact.email')}
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                        {t('contact.message')}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {t('contact.submit')}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right side */}
                        <div className="hidden md:block w-1/3 bg-blue-600 relative">
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <div className="text-white text-center">
                                    <ChatBubbleOvalLeftEllipsisIcon className="h-16 w-16 mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold mb-2">
                                        {t('contact.helpTitle')}
                                    </h4>
                                    <p className="text-blue-100">{t('contact.helpText')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
