<script lang="ts" setup="">

interface Props {
  href: string;
  isActive?: boolean;
}
const props = defineProps<Props>();
</script>

<template>
  <router-link
    :to="href"
    :class="[
      $style.item,
    ]"
    class="flex items-center p-12 rounded-10 cursor-pointer"
  >
    <span
      v-if="$slots.before"
      class="pr-10 flex items-center justify-center"
      :class="[$style.icon]"
    >
      <slot name="before" />
    </span>
    <span :class="['text', $style.text]">
      <slot />
    </span>
  </router-link>
</template>

<style module lang="scss">
.item {
  width: 100%;
  padding-right: 0px;
}

.item:global(.router-link-exact-active) {
  color: rgb(var(--color-blue));
  background-color: rgb(var(--color-blue-hover-light));
}

.item:hover {
  background-color: rgb(var(--color-blue-light));
}

.item:active,
.active {
  color: rgb(var(--color-blue));
  background-color: rgb(var(--color-blue-hover-light));
}

.text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
