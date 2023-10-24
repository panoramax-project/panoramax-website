<template>
  <header class="header">
    <nav class="nav">
      <div>
        <Link
          :text="$t('general.panoramax_title')"
          url="/"
          look="link--blue"
          class="instance-logo"
        >
          <template v-slot:image>
            <img src="@/assets/images/logo.jpg" alt="" class="logo" />
          </template>
        </Link>
      </div>
      <ul :class="['header-list', { displayed }]">
        <li class="list-item instance-item">
          <span class="desktop">{{
            $t('general.nav.panoramax_instance')
          }}</span>
          <img src="@/assets/images/chevron.svg" class="image-chevron" />
          <div class="instances-block">
            <div class="instance-item-link">
              <Link
                :text="$t('general.nav.instance_ign')"
                url="https://panoramax.ign.fr/"
                type="external"
                target="_blank"
                look="link--blue"
              >
                <template v-slot:image>
                  <img
                    src="@/assets/images/ign-logo.png"
                    class="image-instance-link"
                  />
                </template>
              </Link>
            </div>
            <div class="instance-item-link">
              <Link
                :text="$t('general.nav.instance_osm')"
                url="https://panoramax.openstreetmap.fr/"
                type="external"
                target="_blank"
                look="link--blue"
              >
                <template v-slot:image>
                  <img
                    src="@/assets/images/osm-logo.png"
                    class="image-instance-link"
                  />
                </template>
              </Link>
            </div>
          </div>
        </li>
        <li class="list-item">
          <Link
            :text="$t('general.nav.faq')"
            url="foire-aux-questions"
            look="link--blue"
          />
        </li>
        <li class="list-item">
          <Link
            :text="$t('general.nav.contact')"
            url="mailto:panoramax@panoramax.fr"
            type="external"
            look="link--blue"
          />
        </li>
      </ul>
      <button type="button" @click="displayed = !displayed" class="burger">
        <img src="@/assets/images/burger-icon.svg" />
      </button>
    </nav>
  </header>
</template>
<script lang="ts" setup scoped>
import { ref } from 'vue'
import Link from '@/components/Link.vue'
const displayed = ref<boolean>(true)
</script>
<style scoped>
.header {
  padding-right: 8%;
  padding-left: 8%;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.burger {
  display: none;
}
.instance-logo {
  font-weight: 800;
  font-size: 1.8rem;
}
.logo {
  background: var(--violet);
  padding: 0.5rem;
  border-radius: 0.5rem;
  height: 3.5rem;
  margin-right: 1rem;
}
.header-list {
  display: flex;
  align-items: center;
}
.instances-block {
  display: none;
  position: absolute;
  top: 5.9rem;
  z-index: 2;
  width: 20rem;
  background-color: var(--white);
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
}
.instances-block div:first-child {
  margin-bottom: 2rem;
}
.image-instance-link {
  height: 2rem;
  margin-right: 1rem;
}
.instance-item {
  position: relative;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  cursor: pointer;
  color: var(--blue-dark);
}
.image-chevron {
  margin-left: 0.5rem;
}
.list-item {
  font-size: 1.6rem;
  margin-right: 2rem;
}
.list-item:last-child {
  margin-right: 0;
}
.instance-item:hover > .instances-block {
  display: block;
}
.instance-item:hover > .image-chevron {
  transform: rotate(180deg);
}
@media (max-width: 768px) {
  .header {
    padding: 0;
  }
  .nav {
    position: relative;
    padding: 1.5rem 2rem;
  }
  .burger {
    display: block;
    background-color: transparent;
    border: none;
  }
  .header-list {
    position: absolute;
    right: 0;
    left: 0;
    top: 5.5rem;
    width: 100%;
    background-color: var(--white);
    z-index: 2;
    flex-direction: column;
    display: none;
  }
  .displayed {
    display: flex;
    padding: 2rem;
  }
  .instances-block {
    display: block;
    position: initial;
    padding: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
    justify-content: initial;
    align-items: initial;
    width: initial;
  }
  .instance-item-link,
  .list-item {
    padding: 1rem;
  }
  .instances-block div:first-child {
    margin-bottom: 0;
  }
  .instance-item {
    width: 100%;
    border-bottom: 0.1rem solid var(--grey);
    padding: 0 0 1rem;
    margin: 0 0 1rem;
  }
  .image-chevron {
    display: none;
  }
  .desktop {
    display: none;
  }
}
</style>
