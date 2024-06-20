<template>
  <div class="gap-2 grid h-min min-w-32 w-auto">
    <label
      :for="`selector-${id}`"
      class="flex font-semibold gap-2 items-center text-sm"
    >
      {{ props.label }}
    </label>

    <div class="items-center flex relative w-full">
      <Icon
        :name="icon"
        class="absolute pl-2"
        color="#323638"
        size="28"
      />

      <select
        :id="`selector-${id}`"
        :data-cy="`filter-selector-${id}`"
        class="bg-slate-50 border-2 border-slate-200 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 focus:border-accent"
        @change="optionSelected"
      >
        <option
          v-if="props.placeholder"
          :disabled="!props.resetable"
          selected
          value=""
        >
          {{ props.placeholder }}
        </option>

        <option
          v-for="(name, index) in props.items"
          :key="index"
          :value="name"
        >
          {{ name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: 'update', value: string): void }>();

const props = defineProps<{
  id: string,
  icon: string,
  items: string[],
  label: string,
  placeholder?: string,
  resetable: boolean,
}>();

function optionSelected(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('update', target?.value);
}
</script>
