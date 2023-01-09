<template>
  <footer class="footer-wrapper">
    <div class="footer-block">
      <p class="block-title">{{ $t('general.footer.panoramax_title') }}</p>
      <ul class="footer-list">
        <li>
          <router-link to="/" class="footer-link">{{
            $t('general.footer.home_subtitle')
          }}</router-link>
        </li>
      </ul>
    </div>
    <div class="footer-block">
      <p class="block-title">{{ $t('general.footer.resources_title') }}</p>
      <ul class="footer-list">
        <li>
          <a
            href="https://forum.geocommuns.fr/c/panoramax/6"
            target="_blank"
            class="footer-link"
            >{{ $t('general.footer.forum_subtitle') }}</a
          >
        </li>
        <li>
          <a
            href="https://cryptpad.fr/calendar/#/2/calendar/view/WKKDBDTk8kWe5-lm+Z9jLksbn9hkKDRE2dVNj4AKEZk/"
            target="_blank"
            class="footer-link"
            >{{ $t('general.footer.agenda_subtitle') }}</a
          >
        </li>
      </ul>
    </div>
    <div class="footer-block">
      <p class="block-title">{{ $t('general.footer.follow_title') }}</p>
      <ul class="footer-list">
        <li>
          <a
            href="https://twitter.com/panoramax_"
            target="_blank"
            class="footer-link"
            >{{ $t('general.footer.twitter_subtitle') }}</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/groups/12741355/"
            target="_blank"
            class="footer-link"
            >{{ $t('general.footer.linkedin_subtitle') }}</a
          >
        </li>
      </ul>
    </div>
    <div class="footer-block">
      <p class="block-title">{{ $t('general.footer.credits_title') }}</p>
      <ul class="footer-list">
        <li>
          <a
            href="https://www.flaticon.com/fr/icones-gratuites/email"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="footer-link"
            >{{ $t('general.footer.credit_mail_subtitle') }}</a
          >
        </li>
        <li>
          <a
            href="https://www.flaticon.com/fr/icones-gratuites/decentralise"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="footer-link"
            >{{ $t('general.footer.credit_decentralize_subtitle') }}</a
          >
        </li>
        <li>
          <a
            href="https://www.flaticon.com/fr/icones-gratuites/participation"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="footer-link"
            >{{ $t('general.footer.credit_participative_subtitle') }}</a
          >
        </li>
        <li>
          <a
            href="https://www.flaticon.com/free-icons/product"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="footer-link"
            >{{ $t('general.footer.credit_common_subtitle') }}</a
          >
        </li>
        <li>
          <a
            href="https://www.flaticon.com/fr/auteurs/pixel-perfect"
            target="_blank"
            rel="nofollow noopener noreferrer"
            class="footer-link"
            >{{ $t('general.footer.credit_quatre_subtitle') }}</a
          >
        </li>
      </ul>
    </div>
  </footer>
</template>
<script lang="ts" setup></script>

<style scoped>
.footer-wrapper {
  display: flex;
  justify-content: center;
  border-top: 0.1rem solid rgba(29, 27, 132, 0.3);
}
.footer-block {
  margin: 4rem;
}
.block-title {
  font-family: SourceSansPro-SemiBold;
  font-size: 18px;
}
.footer-list {
  padding-top: 1rem;
  font-size: 16px;
}
.footer-link {
  text-decoration: none;
  color: var(--violet-dark);
  font-size: 1.8rem;
}
.footer-link:hover {
  background-color: transparent;
  text-decoration: underline;
}
@media (max-width: 768px) {
  .footer-wrapper {
    flex-wrap: wrap;
    justify-content: initial;
    padding-bottom: 4rem;
  }
  .footer-block {
    margin: 2rem 2rem 0 0;
  }
}
</style>
