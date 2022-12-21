import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'

import './assets/main.css'

const messages = {
  fr: {
    general: {
      nav: {
        home: 'Accueil',
        about: 'À propos'
      },
      footer: {
        panoramax_title: 'Panoramax',
        resources_title: 'Ressources',
        follow_title: 'Suivez-nous',
        credits_title: 'Crédits images Flaticon',
        home_subtitle: 'Accueil',
        about_subtitle: 'À propos',
        forum_subtitle: 'Forum',
        agenda_subtitle: 'Agenda',
        twitter_subtitle: 'Twitter',
        linkedin_subtitle: 'LinkedIn',
        credit_mail_subtitle: 'Email icône créée par Those Icons',
        credit_decentralize_subtitle: 'Décentralisé icône créée par Freepik',
        credit_participative_subtitle: 'Participation icône créée par itim2101',
        credit_common_subtitle: 'Product icône créée par Uniconlabs'
      }
    },
    pages: {
      home: {
        title: 'Panoramax',
        titleSecondPart: 'Partager des images pour cartographier le monde',
        subtitleImage: 'Des images de vue immersives',
        illustrationAlt: 'Illustration cartographique',
        discoverProject: 'DÉCOUVRIR LE PROJET',
        howItWorksTitle: 'Comment ça marche ?',
        howItWorksDescription:
          "Panoramax fédère les initiatives (des collectivités, des contributeurs OSM, de l’IGN...) pour favoriser l'émergence d'un géocommun de bases de vues immersives.",
        howItWorks_1: {
          title: 'Un geocommun',
          description_1: 'Des photos de rue (360° ou non) accessibles à tous',
          description_2:
            'Des standards et les règles d’utilisation et de contribution',
          description_3: 'Des outils pour favoriser les usages',
          image: {
            url: new URL(`@/assets/images/common-icon.png`, import.meta.url)
              .href,
            alt: 'Image de mise en commun'
          }
        },
        howItWorks_2: {
          title: 'Un hébergement flexible',
          description_1:
            'Des solutions adaptées aux usages de chacun : instance commune ou auto-hébergée',
          description_2: 'Un principe commun d’ouverture des données ',
          description_3:
            'Des licences d’utilisation libre propres aux instances ',
          image: {
            url: new URL(`@/assets/images/usecases-icon.png`, import.meta.url)
              .href,
            alt: "Image d'usages"
          }
        },
        howItWorks_3: {
          title: 'Une gouvernance commune',
          description_1: 'Des processus collectifs de décisions',
          description_2:
            'Des moments d’échanges ouverts à tous les membres de la communauté',
          description_3:
            'Une multiplicité d’acteurs pour assurer la pérennité du projet',
          image: {
            url: new URL(
              `@/assets/images/participative-icon.png`,
              import.meta.url
            ).href,
            alt: 'Image de gestion participative'
          }
        },
        joinUsTitle: 'Rejoignez-nous !',
        joinUsDescription:
          "Vous souhaitez vous tenir infromé ou participer au projet Panoramax ? C'est par ici",
        joinUsLink: {
          title: 'Une question, une remarque ?\n Contactez-nous'
        },
        joinUsButton_1: {
          title: 'Participez à la communauté',
          text: 'Accéder au forum',
          url: 'https://forum.geocommuns.fr/c/panoramax/6'
        },
        joinUsButton_2: {
          title: 'Prochain évènement Panoramax',
          text: "Voir l'agenda complet",
          event_text_1: 'Comité mensuel',
          event_text_2: ': 02/01/22 - 16h',
          event_link_text: 'en visio',
          event_link_url: 'https://meet.jit.si/panoramax',
          url: 'https://cryptpad.fr/calendar/#/2/calendar/view/WKKDBDTk8kWe5-lm+Z9jLksbn9hkKDRE2dVNj4AKEZk/'
        },
        iconMailAlt: "Icon d'email",
        communityTitle: 'La communauté Panoramax',
        communityLogo_1: {
          url: new URL(`@/assets/images/beta-gouv-logo.png`, import.meta.url)
            .href,
          alt: 'Logo de beta.gouv'
        },
        communityLogo_2: {
          url: new URL(`@/assets/images/ign-logo.png`, import.meta.url).href,
          alt: "Logo de l'IGN"
        },
        communityLogo_3: {
          url: new URL(`@/assets/images/fabrique-logo.jpg`, import.meta.url)
            .href,
          alt: 'Logo de la Fabrique des communs'
        }
      },
      about: {
        title: 'À propos de Panoramax',
        introduction:
          'Coucou super intro blablabla a parisps À propos de Panoramax À propos de Panoramax.',
        subtitle_1: 'Description du projet',
        text_1:
          'Description du projet Description du projet Description du projet Description du projetDescription du projet Description du projet Description du projetDescription du projetDescription du projet Description du projet Description du projet Description du projet Description du projet Description du projet  Description du projet',
        subtitle_2: 'Description du projet',
        text_2:
          'Description du projet Description du projet Description du projet Description du projetDescription du projet Description du projet Description du projetDescription du projetDescription du projet Description du projet Description du projet Description du projet Description du projet Description du projet  Description du projet'
      }
    }
  }
}

const i18n = createI18n({
  locale: 'fr',
  legacy: false,
  messages
})
const app = createApp(App)

app.use(i18n)
app.use(router)

app.mount('#app')
