<script lang="ts" setup="">

import SidebarBase from '@/components/modules/SidebarBase.vue';
import LoaderFullscreen from '@/components/shared/LoaderFullscreen.vue'
import { useLoaderStore } from '@/stores/loader'
import { storeToRefs } from 'pinia'

const loaderStore = useLoaderStore()
const { loader } = storeToRefs(loaderStore);

</script>

<template>
  <div :class="['flex min-h-full-screen relative', $style.wrapper]">
    <div class="bordered-1-divider" :class="[$style['left-col']]">
      <SidebarBase />
    </div>
    <div :class="[$style['right-col'], 'flex flex-auto flex-col relative bg-grey-light']">
      <LoaderFullscreen v-show="loader" />
      <Suspense>
        <RouterView v-show="!loader" />
      </Suspense>
    </div>
  </div>
</template>

<style module lang="scss">

.wrapper {
  @media screen and (max-width: 524px) {
    flex-direction: column;
  }
}
.left-col {
  width: 160px;
  flex-shrink: 0;

  @media screen and (max-width: 524px) {
    width: 100%;
  }
}

.right-col {
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  max-width: 1024px;
}
</style>
