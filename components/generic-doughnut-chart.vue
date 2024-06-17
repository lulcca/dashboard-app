<template>
  <Doughnut
    :data
    :options="chartOptions"
  />
</template>

<script lang="ts" setup>
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
import { chartOptions } from '~/assets/ts/constants';

ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps<{
  data: number[],
  labels: string[],
}>();

const data = {
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: props.data,
    },
  ],
  labels: props.labels,
};
</script>
