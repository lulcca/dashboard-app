<template>
  <div class="content-start gap-8 grid">
    <div v-for="(item, i) in items" :key="i">
      <div class="gap-2 grid">
        <span>
          {{ item.title }}
        </span>

        <div
          v-for="(subitem, j) in item.subitems"
          :key="j"
        >
          <NuxtLink
            class="gap-2 grid grid-cols-[min-content_1fr] items-center justify-start px-4 py-2 rounded-lg w-full hover:bg-accent"
            :to="subitem.path"
          >
            <Icon
              size="20"
              :name="subitem.icon"
            />

            <span :data-cy="`menu-item-${subitem.name}`">
              {{ subitem.name }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const items = [
  {
    subitems: [
      {
        icon: 'mdi:home',
        name: 'home',
        path: '/',
      },
      {
        icon: 'mdi:chart-timeline-variant-shimmer',
        name: 'timeline',
        path: '/timeline',
      },
    ],
    title: 'Pages',
  },
  {
    subitems: [
      {
        icon: 'mdi:account-search',
        name: 'custom',
        path: '/authorisation-server',
      },
    ],
    title: 'Authorisation Server',
  },
];
</script>
