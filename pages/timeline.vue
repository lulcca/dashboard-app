<template>
  <section class="content-start gap-4 grid grid-rows-[auto_1fr_auto] h-full p-6 lg:gap-8 lg:grid-rows-[auto_0.6fr_auto]">
    <PageHeader
      title="Organisations Timeline"
      description="Explore below the chronological evolution of registered organisations, from their establishment to the present day."
    />

    <div class="gap-4 grid [grid-template-areas:'filter'_'table'] lg:grid-cols-[auto_min-content] lg:[grid-template-areas:'table_filter']">
      <div class="[grid-area:table] max-w-5xl min-h-80">
        <ChartsTimeline
          :key="yearFilter"
          :data
          :labels
          data-cy="timeline-chart"
        />
      </div>

      <FilterSelector
        id="year"
        class="[grid-area:filter]"
        icon="mdi:filter"
        label="Years"
        placeholder="--"
        :items="generalData.labels"
        :resetable="true"
        @update="updateYear"
      />
    </div>

    <p class="font-normal text-sm">
      {{ `This timeline spans from ${generalData.labels[0]} to ${generalData.labels[generalData.labels.length-1]}, capturing the dynamic evolution of organisations during this period. Each entry provides insights into the establishment, growth, and current status of these entities, offering a comprehensive view of their journey within the specified timeframe.` }}
    </p>
  </section>
</template>

<script lang="ts" setup>
const { organisations } = useStore();

const yearFilter = ref<string|''>('');
const generalData = useYearFilter(organisations);

const filteredData = computed(() => useMonthFilter(organisations, yearFilter.value));
const data = computed(() => yearFilter.value ? filteredData.value.data : generalData.data);
const labels = computed(() => yearFilter.value ? filteredData.value.labels : generalData.labels);

function updateYear(year: string|'') {
  yearFilter.value = year;
}
</script>
