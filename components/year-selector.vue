<template>
  <div class="gap-2 grid [grid-area:filter] h-min w-max">
    <label
      class="flex font-semibold gap-2 items-center text-xl uppercase"
      for="years"
    >
      <Icon
        name="mdi:filter"
        size="18"
      />

      {{ props.label }}
    </label>

    <select
      class="block border border-gray-500 p-2 rounded-lg text-sm"
      data-cy="year-selector"
      name="years"
      @change="updateYear"
    >
      <option value=""> -- </option>

      <option
        v-for="item in props.items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: 'update', value: string|''): void }>();

const props = defineProps<{
  label: string,
  items: string[],
}>();

function updateYear(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update', target?.value);
}
</script>
