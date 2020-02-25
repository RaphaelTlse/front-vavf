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
        },
        Logs: {
            name: 'Logs |||| Logs',
            fields: {}
        },
        Carte: {
            name: 'Map |||| Map'
        },
        Statistiques: {
            name: 'Statistic |||| Statistics'
        },
        'Page Admin': {
            name: 'Admin panel |||| Admin panel'
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
                createdAt: 'Créé le',
                updatedAt: 'Dernière mise à jour'
            }
        },
        Logs: {
            name: 'Historique |||| Historique',
            fields: {}
        },
        Carte: {
            name: 'Carte |||| Carte'
        },
        Statistiques: {
            name: 'Statistique |||| Statistiques'
        },
        'Page Admin': {
            name: 'Espace administrateur |||| Espace administrateur'
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