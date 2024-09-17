import { defineStore } from 'pinia';
import { ref } from 'vue'

export const useLoaderStore = defineStore('loader', () => {
  const loader = ref(true);

  function setLoaderToTrue() {
    loader.value = true;
  }
  function setLoaderToFalse() {
    loader.value = false;
  }

  return {
    loader,
    setLoaderToTrue,
    setLoaderToFalse,
  };
});
