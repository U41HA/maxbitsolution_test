<script setup lang="ts">
import LoaderBase from '@/components/shared/LoaderBase.vue'
import { useStore } from '@/stores'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useLazyload } from 'vue3-lazyload'

const store = useStore();

const route = useRoute();

const currentCocktail = computed(() => route.path.split('/').at(-1))

const currentCocktailInfo = computed(() => store.cocktailsInfo && store.cocktailsInfo[currentCocktail.value])

const currentCocktailIngredients = computed(() => {
  const keys = Object.keys(currentCocktailInfo.value).filter(key => key.includes('Ingredient'));
  const ingredients = {};
  return keys.reduce((acc, key) => {
    if (currentCocktailInfo.value[key]) {
      acc.push(currentCocktailInfo.value[key])
    }
    return acc
  }, [])
})

if(!store.cocktailsInfo || !store.cocktailsInfo[currentCocktail.value]) {
  await store.fetchCocktailInfo(currentCocktail.value);
}

const isImageLoading = ref(false);
const src = ref(currentCocktailInfo.value.strDrinkThumb)
const lazyRef = useLazyload(src, {
  lifecycle: {
    loading: () => {
      isImageLoading.value = true;
      console.log('loading')
    },
    error: () => {
      console.log('error')
    },
    loaded: () => {
      isImageLoading.value = false;
      console.log('loaded')
    }
  }
})

</script>

<template>
  <div class="h-full w-full p-24">
    <div :class="['flex h-full justify-between', $style.wrapper]">
      <div :class="[$style['cocktail-info'], 'flex flex-col items-start justify-center']">
        <div :class="['flex flex-col', $style['cocktail-info-description']]">
         <h1 class="text-bold-2xl">
           Name: {{ currentCocktailInfo.strDrink }}
         </h1>
         <p class="text-xl">
           Alcohol: {{ currentCocktailInfo.strAlcoholic }}
         </p>
         <p class="text-lg">
           Glass: {{ currentCocktailInfo.strGlass }}
         </p>
       </div>
        <div :class="['flex flex-col', $style['cocktail-info-description']]">
          <h1 class="text-bold-2xl">
            Instruction:
          </h1>
          <p class="text-base">
            {{ currentCocktailInfo.strInstructions }}
          </p>
        </div>
        <div :class="['flex flex-col', $style['cocktail-info-description']]">
          <h1 class="text-bold-2xl">
            List of ingredients:
          </h1>
          <div :class="['grid', $style['cocktail-info-ingredients']]">
            <div v-for="ingredient in currentCocktailIngredients" :key="ingredient" class="text-base">
              {{ ingredient }}
            </div>
          </div>
        </div>
     </div>
      <div class="flex items-center justify-center relative">
        <img
ref="lazyRef" :class="['block w-full image',
        $style['cocktail-info-image'],
        {
          'opacity-0': isImageLoading
        }]">
        <LoaderBase
:class="[
          $style['cocktail-info-loader'],
          {
            'opacity-0': !isImageLoading
          }]"
        />
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.wrapper {
  overflow: auto;

  & > * {
    flex-basis: 48%;
  }

  @media screen and (max-width: 768px) {
    align-items: start;
    flex-direction: column-reverse;
  }
}

.cocktail {

  &-info {
    @media screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }

  &-info > *:not(:last-child) {
    margin-bottom: 16px;
  }

  &-info-description > *:not(:last-child) {
    margin-bottom: 16px;
  }

  &-info-ingredients {
    grid-template-columns: repeat(2, 1fr);
  }

  &-info-image {
    aspect-ratio: 1 / 1;
    max-width: 600px;
  }

  &-info-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(var(--color-blue));
  }
}

</style>
