<template>
  <div class="grid grid-cols-[1fr] grid-rows-[min-content_1fr] h-screen place-content-start w-screen lg:grid-cols-[min-content_1fr] lg:grid-rows-[1fr]">
    <Menu />

    <main class="max-w-screen-2xl">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
await useStore().getOrganisations();
</script>
