<template>
  <footer class="footer">
    <div class="footer-wrapper">
      <div class="footer-block">
        <p class="block-title">{{ $t('general.panoramax_title') }}</p>
        <ul class="footer-list">
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.faq_subtitle')"
              url="/foire-aux-questions"
              look="link--white"
            />
          </li>
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.photos_subtitle')"
              url="/photos"
              look="link--white"
            />
          </li>
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.ign_subtitle')"
              url="https://panoramax.ign.fr/"
              type="external"
              target="_blank"
              look="link--white"
            />
          </li>
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.osm_subtitle')"
              url="https://panoramax.openstreetmap.fr/"
              type="external"
              target="_blank"
              look="link--white"
            />
          </li>
        </ul>
      </div>
      <div class="footer-block">
        <p class="block-title">{{ $t('general.footer.resources_title') }}</p>
        <ul class="footer-list">
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.forum_subtitle')"
              url="https://forum.geocommuns.fr/c/panoramax/6"
              type="external"
              target="_blank"
              look="link--white"
            />
          </li>
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.agenda_subtitle')"
              url="https://cryptpad.fr/calendar/#/2/calendar/view/WKKDBDTk8kWe5-lm+Z9jLksbn9hkKDRE2dVNj4AKEZk/"
              type="external"
              target="_blank"
              look="link--white"
            />
          </li>
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.github_subtitle')"
              url="https://github.com/panoramax-project/panoramax-website"
              type="external"
              target="_blank"
              look="link--white"
            />
          </li>
        </ul>
      </div>
      <div class="footer-block">
        <p class="block-title">{{ $t('general.footer.follow_title') }}</p>
        <ul class="footer-list rs-list">
          <li class="footer-list-item">
            <Link
              url="https://twitter.com/panoramax_"
              type="external"
              target="_blank"
              look="link--white"
            >
              <template v-slot:image>
                <img
                  src="@/assets/images/x-logo.svg"
                  loading="lazy"
                  alt=""
                  class="logo"
                />
              </template>
            </Link>
          </li>
          <li class="footer-list-item">
            <Link
              url="https://mapstodon.space/@panoramax"
              type="external"
              target="_blank"
              look="link--white"
            >
              <template v-slot:image>
                <img
                  src="@/assets/images/mastodon-logo.svg"
                  loading="lazy"
                  alt=""
                  class="logo"
                />
              </template>
            </Link>
          </li>
          <li class="footer-list-item">
            <Link
              url="https://www.linkedin.com/groups/12741355/"
              type="external"
              target="_blank"
              look="link--white"
            >
              <template v-slot:image>
                <img
                  src="@/assets/images/linkedin-logo.svg"
                  loading="lazy"
                  alt=""
                  class="logo"
                />
              </template>
            </Link>
          </li>
        </ul>
      </div>
      <div class="footer-block">
        <ul class="footer-list">
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.credits_title')"
              url="https://www.flaticon.com/fr/"
              type="external"
              target="_blank"
              look="link--white"
            />
          </li>
          <li class="footer-list-item">
            <Link
              :text="$t('general.footer.ay11')"
              url="/accessibilite"
              look="link--white"
            />
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<script lang="ts" setup>
import Link from '@/components/Link.vue'
</script>

<style scoped>
.footer {
  padding: 3rem 12rem;
  background-color: var(--blue-dark);
  color: var(--white);
  font-size: 1.6rem;
  height: 17.8rem;
}
.footer-wrapper {
  display: flex;
}
.footer-block {
  width: 25%;
}
.footer-list-item {
  width: fit-content;
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
}
.rs-list {
  display: flex;
}
.block-title {
  font-family: SFPro-SemiBold;
  margin-bottom: 2rem;
}
.logo {
  height: 2rem;
}
.rs-list .logo {
  margin-right: 2rem;
}
@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 2rem 0;
    height: initial;
  }
  .footer-wrapper {
    flex-wrap: wrap;
  }
  .footer-block {
    width: 50%;
    margin-bottom: 2rem;
  }
}
</style>
