<template>
  <div class="flex items-center">
    <button
      type="button"
      class="carousel-button mr-12"
      @click="slide(prevShift)"
    >
      <DropdownArrowIconVue class="rotate-90" />
    </button>
    <ul class="carousel" ref="carouselContainer">
      <slot></slot>
    </ul>
    <button
      type="button"
      class="carousel-button ml-12"
      @click="slide(nextShift)"
    >
      <DropdownArrowIconVue class="-rotate-90" />
    </button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import DropdownArrowIconVue from './icons/DropdownArrowIcon.vue';

export interface Props {
  scrollValue?: number;
}

const props = withDefaults(defineProps<Props>(), {
  scrollValue: 320,
});

const prevShift = props.scrollValue * -1;
const nextShift = props.scrollValue;

const carouselContainer = ref<HTMLElement | null>(null);

function slide(shift: number) {
  if (carouselContainer.value) {
    carouselContainer.value.scrollBy({ left: shift, behavior: 'smooth' });
  }
}
</script>
<style scoped>
.carousel {
  @apply flex flex-row m-0 overflow-x-auto md:overflow-x-hidden snap-x w-full px-4 pb-8 md:justify-between;
}
.carousel-button {
  @apply hidden px-4 border border-primary rounded-full w-32 h-32 md:flex items-center justify-center;
}
</style>
