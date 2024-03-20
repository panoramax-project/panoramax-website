<template>
  <DoughnutChart v-bind="doughnutChartProps" :height="300" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import type { ChartData } from 'chart.js'
Chart.register(...registerables)

const props = defineProps({
  labels: {
    type: Array,
    default: []
  },
  datasets: {
    type: Array,
    default: null
  }
})

const doughnutData = computed<ChartData<'doughnut'>>(() => ({
  labels: props.labels,
  datasets: props.datasets
}))

const { doughnutChartProps } = useDoughnutChart({
  chartData: doughnutData
})
</script>

<style scoped></style>
