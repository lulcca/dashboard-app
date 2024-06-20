<template>
  <section class="content-start gap-4 grid h-full p-6 lg:gap-8 lg:grid-rows-[auto_1fr]">
    <PageHeader
      title="Organisations"
      description="Welcome to our platform designed to empower financial insights and regulatory compliance. Explore comprehensive data on banking organisations across Brazil, aiding informed decisions and strategic planning."
    />

    <div class="gap-12 grid grid-cols-1 lg:grid-cols-[max-content_1fr] lg:grid-rows-[1fr_2fr]">
      <div>
        <RadioGroup
          id="doughnut-choice"
          legend="Select a doughnut chart of interest"
          :items="['Country', 'Size', 'Status']"
          @update="updateDoughnutFilter"
        />
      </div>

      <div class="min-h-[320px]">
        <ChartsGenericDoughnut
          :key="doughnutKey"
          :data="genericDoughnutData.data"
          :labels="genericDoughnutData.labels"
          data-cy="generic-doughnut-chart"
        />
      </div>

      <div>
        <CheckboxToggler
          label="Change axis"
          @update="updateAxis"
        />

        <RadioGroup
          id="bar-choice"
          legend="Select a bar chart of interest"
          :items="['City', 'CompanyRegister', 'ParentOrganisationReference']"
          @update="updateBarFilter"
        />
      </div>

      <div class="min-h-[320px]">
        <ChartsGenericBar
          :key="barKey"
          :axis
          :data="genericBarData.data"
          :label="axis"
          :labels="genericBarData.labels"
          data-cy="generic-bar-chart"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { IOrganisationFilterKeys } from '~/types';

const { organisations } = useStore();

const genericData = { data: [2, 3, 5, 1], labels: ['example', 'example', 'example', 'example'] };

const axis = ref<'x'|'y'>('x');

function updateAxis(value: boolean) {
  value ? axis.value = 'y' : axis.value = 'x';
  barKey.value++;
}

const barKey = ref(0);
const barFilter = ref<IOrganisationFilterKeys|null>(null);
const genericBarData = computed(() => {
  return barFilter.value
    ? useGenericFilter(organisations, barFilter.value)
    : genericData;
});

function updateBarFilter(value: IOrganisationFilterKeys) {
  barFilter.value = value;
  barKey.value++;
}

const doughnutKey = ref(0);
const doughnutFilter = ref<IOrganisationFilterKeys|null>(null);
const genericDoughnutData = computed(() => {
  return doughnutFilter.value
    ? useGenericFilter(organisations, doughnutFilter.value)
    : genericData;
});

function updateDoughnutFilter(value: IOrganisationFilterKeys) {
  doughnutFilter.value = value;
  doughnutKey.value++;
}
</script>
