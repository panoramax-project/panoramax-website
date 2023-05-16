<template>
  <header class="header">
    <nav class="nav">
      <router-link to="/" class="header-link logo-link"
        ><img src="@/assets/images/logo.jpg" alt="" class="logo"
      /></router-link>
      <ul class="header-list">
        <li>
          <a
            href="https://panoramax.ign.fr/"
            target="_blank"
            class="header-link"
            >{{ $t('general.nav.panoramax_instance') }}</a
          >
        </li>
        <li>
          <router-link to="/foire-aux-questions" class="header-link"
            >{{ $t('general.nav.faq') }}
          </router-link>
        </li>
        <li class="header-logo first-logo">
          <a href="https://mapstodon.space/@panoramax" target="_blank"
            ><img
              src="@/assets/images/mastodon-logo.png"
              :alt="$t('general.nav.alt_mastodon')"
              class="header-img"
          /></a>
        </li>
        <li class="header-logo">
          <a href="https://www.linkedin.com/groups/12741355/" target="_blank"
            ><img
              src="@/assets/images/linkedin-logo.png"
              :alt="$t('general.nav.alt_linkedin')"
              class="header-img"
          /></a>
        </li>
        <li class="header-logo">
          <a href="https://twitter.com/panoramax_" target="_blank"
            ><img
              src="@/assets/images/twitter-logo.png"
              :alt="$t('general.nav.alt_twitter')"
              class="header-img"
          /></a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  padding: 1rem 15rem;
  border-bottom: 0.1rem solid var(--violet);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  background: var(--violet);
  padding: 0.5rem;
  border-radius: 1rem;
  height: 5rem;
}
.header-list {
  display: flex;
  align-items: center;
}
.header-link {
  text-decoration: none;
  color: var(--violet);
  margin-left: 2rem;
  font-size: 1.8rem;
}
.logo-link {
  margin-left: 0;
}
.header-link:hover {
  background-color: transparent;
  text-decoration: underline;
}
.header-img {
  height: 2rem;
  margin-left: 1rem;
  margin-top: 0.3rem;
}
.first-logo {
  margin-left: 4rem;
}
.header-logo a:hover {
  opacity: 0.7;
  background: transparent;
}
.router-link-active {
  text-decoration: underline;
}
@media (max-width: 1324px) {
  .header {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}
@media (max-width: 500px) {
  .header {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .header-link {
    margin-left: 1rem;
    font-size: 1.6rem;
  }
  .first-logo {
    margin-left: 0rem;
  }
  .logo-link {
    margin-left: 0rem;
  }
}
</style>
