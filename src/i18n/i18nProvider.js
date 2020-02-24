import polyglotI18nProvider from 'ra-i18n-polyglot';
import defaultEnglishMessages from 'ra-language-english';
import defaultFrenchMessages from 'ra-language-french';

const englishMessages = {
    resources: {
        home: {
            name: 'Home |||| Home'
        },
        trains: {
            name: 'Vehicle |||| Vehicles',
            fields: {
                uuid: 'ID',
                createdAt: 'Creation date',
                updatedAt: 'Last updated'
            }
        }
    },
};
const frenchMessages = {
    resources: {
        home: {
            name: 'Accueil |||| Accueil'
        },
        trains: {
            name: 'Machine |||| Machines',
            fields: {
                uuid: 'ID',
                createdAt: 'Cr',
                updatedAt: 'Mise jour'
            }
        }
    },
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