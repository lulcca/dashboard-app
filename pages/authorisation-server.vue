<template>
  <section class="content-start gap-4 grid grid-rows-[auto_auto_1fr] h-full p-6 lg:gap-8 lg:grid-rows-[auto_auto_0.6fr]">
    <PageHeader
      title="Authorization Server Details"
      description="This tool enables you to explore specific data about listed financial organisations, facilitating detailed analysis and informed decision-making."
    />

    <FilterSelector
        id="organisation"
        icon="octicon:organization-16"
        label="Organisations"
        placeholder="Select an organisation..."
        :items="organisationNames"
        :resetable="false"
        @update="nameSelected"
      />

    <div v-if="organisationSelected">
      <h2
        v-if="organisationAuthorisationServer.length"
        class="font-semibold text-xl"
      >
        {{ `${organisationAuthorisationServer.length} ${organisationAuthorisationServer.length > 1 ? 'servers' : 'server'} found, showing data for: ${organisationSelected}` }}
      </h2>

      <div class="grid grid-cols-2 grid-rows-2 mt-10">
        <div>
          <h3 class="italic text-sm">
            Server names:
          </h3>

          <p v-for="(server, index) in namesArray" :key="index">
            {{ server }}
          </p>
        </div>

        <div v-if="data && data[0]">
          <p> Supports Ciba </p>
          <div>
            <ChartsGenericDoughnut
              :key="organisationSelected"
              :data="data[0]"
              :labels
              data-cy="ciba-chart"
            />
          </div>
        </div>

        <div v-if="data && data[1]">
          <p> Supports DCR </p>
          <div>
            <ChartsGenericDoughnut
              :key="organisationSelected"
              :data="data[1]"
              :labels
              data-cy="dcr-chart"
            />
          </div>
        </div>

        <div v-if="data && data[2]">
          <p> Supports Redirect </p>
          <div>
            <ChartsGenericDoughnut
              :key="organisationSelected"
              :data="data[2]"
              :labels
              data-cy="redirect-chart"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>
        Search for a valid organisation name to explore detailed information about its authorisation servers.
      </p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IAuthorisationServer } from '~/types';

const organisationSelected = ref<string>('');

const organisationNames = useStore().getOrganisationNames();
const organisationAuthorisationServer = ref<IAuthorisationServer[]>([]);

const namesArray = ref<string[]>();
const labels = ref();
const data = ref<number[][]>();

function nameSelected(name: string) {
  organisationSelected.value = name;

  organisationAuthorisationServer.value = useAuthorisationByName(name);
  const serverFiltered = useServersFilter(organisationAuthorisationServer.value);

  namesArray.value = serverFiltered.names;
  data.value = serverFiltered.data;
  labels.value = serverFiltered.labels;
}
</script>
