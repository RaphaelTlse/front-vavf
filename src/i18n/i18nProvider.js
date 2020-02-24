import polyglotI18nProvider from 'ra-i18n-polyglot';
import defaultEnglishMessages from 'ra-language-english';
import defaultFrenchMessages from 'ra-language-french';

const englishMessages = {
    train: 'Vehicle',
    trains: 'Vehicles'
};
const frenchMessages = {
    train: 'Machine',
    trains: 'Machines'
};

const messages = {
    fr: { ...defaultFrenchMessages, ...frenchMessages },
    en: { ...defaultEnglishMessages, ...englishMessages },
};
const i18nProvider = polyglotI18nProvider(locale =>
        locale === 'fr' ? messages.fr : messages.en,
    'en' // Default locale
);

export default i18nProvider;