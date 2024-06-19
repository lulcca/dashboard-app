import { defineStore } from 'pinia';
import type { IOrganisation } from '~/types';

export const useStore = defineStore('organisation', () => {
  const { api } = useRuntimeConfig().public;

  const organisations = ref<IOrganisation[]>([]);

  async function getOrganisations() {
    const { data, error } = await useFetch<IOrganisation[]>(api);

    if (error.value) console.log('Failed to fetch data', error.value);

    if (data.value) organisations.value = data.value;
  }

  function getOrganisationNames() {
    return organisations.value.map(org => org.OrganisationName);
  }

  return {
    getOrganisationNames,
    getOrganisations,
    organisations,
  };
});
