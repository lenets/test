<template>
  <div>
    <label
      v-for="item in items"
      class="inline-block hover:cursor-pointer"
      :key="item"
    >
      <input
        class="hidden input"
        :checked="isChecked(item)"
        :type="getType"
        :name="name"
        @change="$emit('change', getEmitedValue(item))"
      />
      <span
        class="checked-fill inline-block rounded-full py-12 px-18 my-4 mr-12 text-primary leading-4 text-16 bg-white ring-inset ring-1 ring-primary"
      >
        {{ item }}
      </span>
    </label>
    <div v-if="errors" class="error-message">{{ errors }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export interface Props {
  items: Array<string>;
  name: string;
  mode: 'single' | 'multi';
  value?: string | string[];
  errors?: string; 
}
const props = defineProps<Props>();
const getType = computed(() =>
  props.mode === 'single' ? 'radio' : 'checkbox'
);

function getEmitedValue(item: string) {
  if (props.mode === 'multi') {
    if ((props.value as string[]).includes(item)) {
      return (props.value as string[]).filter((x) => x != item);
    }
    return [...(props.value as string[]), item];
  }
  return item;
}

function isChecked(item: string) {
  if (props.mode === 'multi') {
    return props.value?.includes(item);
  }
  return props.value === item;
}

defineEmits(['change']);
</script>

<style scoped>
.input:checked + .checked-fill {
  @apply text-white bg-primary;
}

.input:hover + .checked-fill {
  @apply ring-2;
}
</style>
