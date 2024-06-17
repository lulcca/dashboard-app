<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      class="sr-only peer"
      type="checkbox"
      :selected="isToggled"
      :value="isToggled"
      @click="toggle"
    >

    <div class="bg-gray-200 h-6 peer relative w-11 rounded-full after:absolute after:bg-white after:border after:border-gray-300 after:content-[''] after:h-5 after:rounded-full after:start-[2px] after:top-[2px] after:transition-all after:w-5 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-primary rtl:peer-checked:after:-translate-x-full" />

    <span class="ms-3 text-sm font-medium"> {{ props.label }} </span>
  </label>
</template>

<script lang="ts" setup>
const isToggled = ref(false);
const emit = defineEmits<{ (e: 'update', axis: boolean): void }>();
const props = defineProps<{ label: string }>();

function toggle() {
  isToggled.value = !isToggled.value;
  emit('update', isToggled.value);
}
</script>
