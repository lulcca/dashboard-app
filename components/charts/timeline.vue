<template>
  <Line
    :data
    :options="chartOptions"
  />
</template>

<script lang="ts" setup>
import { CategoryScale, Chart as ChartJS, Legend, LineElement, LinearScale, PointElement, Title, Tooltip } from 'chart.js';
import { Line } from 'vue-chartjs';
import { chartOptions } from '~/assets/ts/constants';

ChartJS.register(CategoryScale, Legend, LineElement, LinearScale, PointElement, Title, Tooltip);

const props = defineProps<{
  data: number[],
  labels: string[],
}>();

const data = {
  datasets: [
    {
      backgroundColor: '#A0C5CF',
      borderColor: '#A0C5CF',
      data: props.data,
      label: 'Organisations Created',
    },
  ],
  labels: props.labels,
};
</script>
