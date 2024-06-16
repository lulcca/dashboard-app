<template>
  <div>
    <h1>Hello!</h1>

    {{ organisations }}
  </div>
</template>

<script lang="ts" setup>
const { organisations } = useStore();
</script>
