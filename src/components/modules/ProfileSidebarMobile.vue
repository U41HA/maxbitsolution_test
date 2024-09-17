<script setup lang="ts">
import SidebarItemMobile from '../shared/SidebarItemMobile.vue';
import SettingsIcon from '~/assets/icons/settings.svg';
import WalletIcon from '~/assets/icons/wallet.svg';
import WidgetIcon from '~/assets/icons/widgets.svg';
import VideoIcon from '~/assets/icons/videos.svg';
import AnalyticIcon from '~/assets/icons/analytics.svg';

const { t } = useI18n();

const asideItems = computed(() => {
  return [
    {
      id: 1,
      title: t('layouts.profile.widgets'),
      icon: WidgetIcon,
      href: '/widgets',
    },
    {
      id: 2,
      title: t('layouts.profile.videoFiles'),
      icon: VideoIcon,
      href: '/videos',
    },
    {
      id: 3,
      title: t('layouts.profile.analytics'),
      icon: AnalyticIcon,
      href: '/profile/analytics',
    },
    {
      id: 4,
      title: t('layouts.profile.plans'),
      icon: WalletIcon,
      href: '/profile/plans',
    },
    {
      id: 5,
      title: t('layouts.profile.settings'),
      icon: SettingsIcon,
      href: '/profile/settings',
    },
  ];
});
</script>

<template>
  <aside class="py-2 w-full bg-white" :class="[$style.aside_mobile]">
    <ul class="flex justify-between h-full">
      <li
        v-for="item in asideItems"
        :key="item.id"
        :style="`flex-basis: ${100 / asideItems.length}%`"
      >
        <SidebarItemMobile :href="item.href">
          <template #before>
            <component :is="item.icon"></component>
          </template>
          {{ item.title }}
        </SidebarItemMobile>
      </li>
    </ul>
  </aside>
</template>

<style module>
.aside_mobile {
  height: 48px;
  z-index: 11;
  position: fixed;
  bottom: 0px;
  right: 0px;
  border-top: 1px solid rgb(var(--color-grey-divider));
}
</style>
