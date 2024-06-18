<template>
  <div class="content-start gap-4 grid grid-rows-[auto_auto_auto] lg:gap-8">
    <h1 class="font-bold text-3xl">
      {{ props.title }}
    </h1>

    <p class="font-normal text-lg">
      {{ props.description }}
    </p>

    <hr>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string,
  description: string,
}>();
</script>
