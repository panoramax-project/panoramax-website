<template>
  <DoughnutChart v-bind="doughnutChartProps" :height="300" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { DoughnutChart, useDoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

const props = defineProps({
  labels: {
    type: Array,
    default: () => []
  },
  datasets: {
    type: Array,
    default: () => []
  }
})

const doughnutData = computed(() => ({
  labels: props.labels,
  datasets: props.datasets
}))

const { doughnutChartProps } = useDoughnutChart({
  chartData: doughnutData,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            return ` ${tooltipItem.formattedValue}%`
          }
        }
      }
    }
  }
})
</script>

<style scoped></style>
