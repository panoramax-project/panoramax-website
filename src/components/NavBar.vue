<template>
  <header class="header">
    <nav class="nav">
      <img src="@/assets/images/logo.jpg" alt="" class="logo" />
      <ul class="header-list">
        <li>
          <router-link to="/" class="header-link">{{
            $t('general.nav.home')
          }}</router-link>
        </li>
        <li>
          <router-link to="a-propos" class="header-link">{{
            $t('general.nav.about')
          }}</router-link>
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
}
.header-link {
  text-decoration: none;
  color: var(--violet);
  margin-left: 2rem;
  font-size: 1.8rem;
}
.header-link:hover {
  background-color: transparent;
  text-decoration: underline;
}
@media (max-width: 1324px) {
  .header {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}
@media (max-width: 768px) {
  .header {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}
</style>
