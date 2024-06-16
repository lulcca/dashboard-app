<template>
  <div class="bg-primary text-white">
    <header
      class="grid w-screen lg:hidden"
      :class="{
        'grid-rows-[auto_0fr] h-auto': !isOpen,
        'grid-rows-[auto_1fr] h-screen': isOpen,
      }"
    >
      <div class="grid grid-cols-[auto_min-content] items-center justify-between p-4 w-full">
        <MenuLogo />

        <Icon
          class="cursor-pointer"
          size="40"
          :name="menuIcon"
          @click="toggleMenu"
        />
      </div>

      <MenuItems
        v-show="isOpen"
        class="px-4"
      />
    </header>

    <aside class="content-start gap-8 h-screen hidden justify-center p-6 w-64 lg:grid">
      <MenuLogo />

      <MenuItems />
    </aside>
  </div>
</template>

<script lang="ts" setup>
const isOpen = ref(false);
const menuIcon = computed(() => isOpen.value ? 'mdi:close' : 'mdi:hamburger-menu');
const bodyStyle = computed(() => isOpen.value ? 'fixed' : '');

function toggleMenu() {
  isOpen.value = !isOpen.value;
  const { body } = document;
  body.style.position = bodyStyle.value;
}
</script>
