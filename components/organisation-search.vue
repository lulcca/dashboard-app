<template>
  <div class="max-w-2xl">
    <form
      class="flex items-center"
      @submit.prevent="selectOrganisation"
    >
      <div class="relative w-full">
        <div class="absolute flex inset-y-0 items-center pointer-events-none ps-3 start-0">
          <Icon
            color="#9ca3af"
            name="octicon:organization-16"
            size="20"
          />
        </div>

        <input
          id="simple-search"
          v-model="searchTerm"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
          list="org-names"
          placeholder="Search branch name..."
          required
          type="search"
        >

        <datalist id="org-names">
          <option v-for="(name, index) in organisationNames" :key="index" :value="name" />
        </datalist>
      </div>

      <button
        class="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border hover:bg-accent"
        type="submit"
      >
        <Icon
          name="mdi:search"
          size="20"
        />
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: 'nameSelected', searchTerm: string): void }>();

const organisationNames = useStore().getOrganisationNames();

const searchTerm = ref('');

function selectOrganisation() {
  if (searchTerm.value && !organisationNames.includes(searchTerm.value)) searchTerm.value = '';

  emit('nameSelected', searchTerm.value);
};
</script>
