<template>
  <fieldset>
    <legend> {{ props.legend }} </legend>

    <div
      v-for="(item, index) in props.items"
      :key="index"
    >
      <input
        :id="`${props.id}-${index}`"
        :name="props.id"
        :value="item"
        type="radio"
        @change="handleChange"
      >

      <label :for="item"> {{ item }} </label>
    </div>
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
