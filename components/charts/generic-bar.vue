<template>
  <Bar
    :data
    :options="chartOptions"
  />
</template>

<script lang="ts" setup>
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { Bar } from 'vue-chartjs';
import { chartOptions } from '~/assets/ts/constants';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const props = withDefaults(defineProps<
  {
    axis: 'x'|'y',
    data: number[],
    label: string,
    labels: string[],
  }>(),
  { axis: 'x' },
);

const data = {
  datasets: [
    {
      backgroundColor: '#f87979',
      barPercentage: 0.25,
      data: props.data,
      indexAxis: props.axis,
      label: props.label,
    },
  ],
  labels: props.labels,
};
</script>
