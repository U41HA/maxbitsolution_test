<script setup lang="ts">
import CocktailIcon from '@/components/icons/CocktailIcon.vue'
import SidebarItemBase from '@/components/shared/SidebarItemBase.vue';
import { Cocktails } from '@/enums';
import { computed, shallowRef } from 'vue'

const sidebarItems = computed(() => {
  return [
    {
      id: 1,
      icon: CocktailIcon,
      title: `${Cocktails.MARGARITA}`,
      href: `/cocktails/${Cocktails.MARGARITA}`,
    },
    {
      id: 2,
      icon: CocktailIcon,
      title: `${Cocktails.MOJITO}`,
      href: `/cocktails/${Cocktails.MOJITO}`,
    },
    {
      id: 1,
      icon: CocktailIcon,
      title: `${Cocktails.A1}`,
      href: `/cocktails/${Cocktails.A1}`,
    },
    {
      id: 1,
      icon: CocktailIcon,
      title: `${Cocktails.KIR}`,
      href: `/cocktails/${Cocktails.KIR}`,
    },

  ];
});
</script>

<template>
  <aside :class="['p-12 h-full flex flex-col justify-between']">
    <div>
      <ul>
        <li v-for="item in sidebarItems" :key="item.id" :class="$style['sidebar-item']">
          <SidebarItemBase :href="item.href">
            <template v-if="item.icon" #before>
              <component :is="item.icon"></component>
            </template>
            {{ item.title }}
          </SidebarItemBase>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style module>
.sidebar-item:not(:last-child) {
  margin-bottom: 4px;
}
</style>
