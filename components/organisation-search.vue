<template>
  <div class="max-w-2xl">
    <div class="relative w-full">
      <div class="absolute flex inset-y-0 items-center pointer-events-none ps-3 start-0">
        <Icon
          color="#9ca3af"
          name="octicon:organization-16"
          size="20"
        />
      </div>

      <select
        id="simple-search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
        data-cy="organisation-selector"
        @change="selectOrganisation"
      >
        <option disabled selected>Select an organisation...</option>

        <option
          v-for="(name, index) in organisationNames"
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
const emit = defineEmits<{ (e: 'nameSelected', searchTerm: string): void }>();

const organisationNames = useStore().getOrganisationNames();

function selectOrganisation(event: Event) {
  const target = event.target as HTMLInputElement;
  emit('nameSelected', target?.value);
};
</script>
