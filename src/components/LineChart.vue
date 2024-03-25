<template>
  <div class="wrapper-line-charts">
    <LineChart v-bind="lineChartProps" :height="300" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LineChart, useLineChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
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

const lineData = computed(() => ({
  labels: props.labels,
  datasets: [
    {
      ...(props.datasets[0] as object),
      borderColor: '#2954E9',
      tension: 0.3,
      backgroundColor: '#f6fafe',
      pointRadius: 5
    }
  ]
}))

const { lineChartProps } = useLineChart({
  chartData: lineData,
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
})
</script>

<style scoped>
.wrapper-line-charts {
  width: 100%;
}
</style>
