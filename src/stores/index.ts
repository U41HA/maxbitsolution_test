import type { Cocktails } from '@/enums'
import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('index', () => {
  const cocktailsInfo = ref<Record < keyof Cocktails, any>>({});
  const API_URL = import.meta.env.VITE_API_URL;

  async function fetchCocktailInfo(cocktailName: string) {
    const { data } = await axios.get(`${API_URL}/json/v1/1/search.php?s=${cocktailName}`);
    cocktailsInfo.value[cocktailName] = data.drinks[0];
    console.log(data.drinks)
  }

  return {
    cocktailsInfo,
    fetchCocktailInfo
  }
})
