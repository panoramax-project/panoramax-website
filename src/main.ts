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
          "Panoramax mobilise les énergies des différentes communautés (Collectivités, OSM, IGN...) pour favoriser l'émergence d'un géocommun de bases de vues immersives.",
        howItWorks_1: {
          title: 'Mettre en commun',
          description:
            '👉 Les savoirs-faire et les expériences sur le terrain\n' +
            '👉 Les standards et les règles d’utilisation et de contribution\n' +
            "👉 Les modes d'hébergement des données (base gérée par la communauté ou propre)",
          image: {
            url: new URL(`@/assets/images/common-icon.png`, import.meta.url)
              .href,
            alt: 'Image de mise en commun'
          }
        },
        howItWorks_2: {
          title: 'Favoriser les usages',
          description:
            '👉 Cartographier\n' +
            '👉 Inventorier le mobilier urbain\n' +
            '👉 Détecter les problèmes de voirie\n' +
            '👉 Et construire ensemble les usages de demain',
          image: {
            url: new URL(`@/assets/images/usecases-icon.png`, import.meta.url)
              .href,
            alt: "Image d'usages"
          }
        },
        howItWorks_3: {
          title: 'Soutenir la gestion participative',
          description:
            '👉 Instaurer une gouvernance commune\n' +
            '👉 Assurer la souveraineté et la pérennité des instances\n',
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
          title: "Contactez nous par mail à l'adresse suivant",
          text: 'hello@panoramax.fr',
          url: 'hello@panoramax.fr'
        },
        joinUsButton_1: {
          title: 'Accéder au forum de Panoramax',
          text: 'Voir le forum',
          url: 'https://forum.geocommuns.fr/c/panoramax/6'
        },
        joinUsButton_2: {
          title: "L'agenda des évènements de Panoramax",
          text: 'Voir les évènements',
          url: 'https://forum.geocommuns.fr/c/panoramax/6'
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
