<template>
  <fieldset class="gap-2 grid min-w-min p-4 rounded-xl shadow-lg">
    <p class="font-semibold text-xl">
      {{ props.legend }}
    </p>

    <label
      v-for="(item, index) in props.items"
      :key="index"
      class="cursor-pointer gap-2 grid grid-cols-[auto_1fr] items-center"
    >
      <input
        :id="`${props.id}-${index}`"
        :name="props.id"
        :value="item"
        class="h-4 w-4 text-accent bg-gray-100 border-gray-300 focus:ring-accent"
        type="radio"
        @change="handleChange"
      >

      <span
        class="text-base"
        :for="item"
      >
        {{ item }}
      </span>
    </label>
  </fieldset>
</template>

<script lang="ts" setup>
import type { IOrganisationFilterKeys } from '~/types';

const emit = defineEmits<{ (e: 'update', value: IOrganisationFilterKeys): void }>();

const props = defineProps<{
  id: string,
  legend: string,
  items: IOrganisationFilterKeys[],
}>();

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement;

  if (target?.value) emit('update', target.value as IOrganisationFilterKeys);
}
</script>
