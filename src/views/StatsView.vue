<template>
  <main>
    <section class="section">
      <h1 class="stats-section-title">
        {{ $t('pages.stats.stats_title') }}
      </h1>
      <p v-html="$t('pages.stats.stats_desc')" class="stats-desc"></p>
      <ol class="wrapper-stats">
        <Metrics
          v-for="metric in stats"
          :key="metric.number"
          :number="metric.number"
          :text="metric.text"
          :description="metric.description"
        />
      </ol>
      <div class="wrapper-charts">
        <h2 class="charts-subtitle">
          {{ $t('pages.stats.chart_line_picture_title') }}
        </h2>
        <div class="charts">
          <LineChart
            :labels="dataLabels"
            :datasets="[{ data: dataPictures }]"
          />
          <div class="wrapper-stat-desc">
            <StatsBlockDescription
              v-if="stats"
              :title="$t('pages.stats.chart_pictures_title')"
              :sub-title="$t('pages.stats.chart_desc')"
              :text-desc="
                $t('pages.stats.chart_line_picture_desc', {
                  number: stats[0].number
                })
              "
            />
          </div>
        </div>
      </div>
      <div class="wrapper-charts">
        <h2 class="charts-subtitle">
          {{ $t('pages.stats.chart_line_km_title') }}
        </h2>
        <div class="charts">
          <LineChart :labels="dataLabels" :datasets="[{ data: dataCovKm }]" />
          <div class="wrapper-stat-desc">
            <StatsBlockDescription
              v-if="stats"
              :title="$t('pages.stats.chart_km_title')"
              :sub-title="$t('pages.stats.chart_desc')"
              :text-desc="
                $t('pages.stats.chart_line_km_desc', {
                  number: stats[1].number
                })
              "
            />
          </div>
        </div>
      </div>
      <div class="wrapper-charts">
        <h2 class="charts-subtitle">
          {{ $t('pages.stats.chart_bar_contrib_title') }}
        </h2>
        <div class="charts">
          <div class="wrapper-bar-charts">
            <BarChart v-bind="barChartProps" />
          </div>
          <div class="wrapper-stat-desc">
            <StatsBlockDescription
              v-if="stats"
              :title="$t('pages.stats.chart_contrib_title')"
              :text-desc="
                $t('pages.stats.chart_bar_contrib_desc', {
                  number: stats[2].number
                })
              "
            />
          </div>
        </div>
      </div>
      <div class="wrapper-charts-doughnut">
        <div class="wrapper-doughnut-charts">
          <h3 class="doughnut-subtitle">
            {{ $t('pages.stats.doughnut_pictures_title') }}
          </h3>
          <DoughnutChart
            :labels="['IGN', 'OSM-FR']"
            :datasets="[
              {
                data: dataPicturesInstancesPercentage,
                backgroundColor: ['#71777A', '#76CC6C'],
                datalabels: {
                  formatter: function (value: any, context: any) {
                    return `${formatNumber(
                      dataPicturesInstances[context.dataIndex]
                    )} millions`
                  },
                  ...doughnutProperties
                }
              }
            ]"
          />
        </div>
        <div class="wrapper-doughnut-charts">
          <h3 class="doughnut-subtitle">
            {{ $t('pages.stats.doughnut_km_title') }}
          </h3>
          <DoughnutChart
            :labels="['IGN', 'OSM-FR']"
            :datasets="[
              {
                data: dataCovKmInstancesPercentage,
                backgroundColor: ['#71777A', '#76CC6C'],
                datalabels: {
                  formatter: function (value: any, context: any) {
                    return formatNumber(dataCovKmInstances[context.dataIndex])
                  },
                  ...doughnutProperties
                }
              }
            ]"
          />
        </div>
        <div class="wrapper-doughnut-charts">
          <h3 class="doughnut-subtitle">
            {{ $t('pages.stats.doughnut_contrib_title') }}
          </h3>
          <DoughnutChart
            :labels="['IGN', 'OSM-FR']"
            :datasets="[
              {
                data: dataContribInstancesPercentage,
                backgroundColor: ['#71777A', '#76CC6C'],
                datalabels: {
                  formatter: function (value: any, context: any) {
                    return formatNumber(dataContribInstances[context.dataIndex])
                  },
                  ...doughnutProperties
                }
              }
            ]"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { formatNumber } from '@/utils'
import { BarChart, useBarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { ChartData } from '@/interfaces/index'
Chart.register(...registerables, ChartDataLabels)
import Metrics from '@/components/Metrics.vue'
import LineChart from '@/components/LineChart.vue'
import DoughnutChart from '@/components/DoughnutChart.vue'
import StatsBlockDescription from '@/components/StatsBlockDescription.vue'

let stats = ref<MetricsData[]>()
const dataCovKm = ref<number[]>([])
const dataPictures = ref<number[]>([])
const dataCovKmInstances = ref<number[]>([])
const dataCovKmInstancesPercentage = ref<number[]>([])
const dataPicturesInstances = ref<number[]>([])
const dataPicturesInstancesPercentage = ref<number[]>([])
const dataContribInstances = ref<number[]>([])
const dataContribInstancesPercentage = ref<number[]>([])
const dataActiveContrib = ref<number[]>([])
const dataLabels = ref<string[]>([])
const averagePictures = ref<string>('')
const averageKm = ref<string>('')
interface MetricsData {
  number: string
  text: string
  description: string
}
const { t } = useI18n()

const doughnutProperties = {
  color: '#0A1F69',
  align: 'center',
  backgroundColor: 'white',
  borderStyle: 'solid',
  borderWidth: '1',
  borderColor: '#0A1F69',
  borderRadius: '5',
  font: {
    weight: 'bold'
  }
}
const activeContribData = computed<ChartData>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: dataActiveContrib.value,
      backgroundColor: ['#0A1F69'],
      borderRadius: 5,
      datalabels: {
        color: 'white'
      }
    }
  ]
}))

const { barChartProps } = useBarChart({
  chartData: activeContribData,
  options: {
    plugins: {
      legend: {
        display: false
      }
    }
  }
})

onMounted(async () => {
  const api = import.meta.env.VITE_API_URL
  const data = await fetch(`${api}stats/`)
  const jsonData = await data.json()
  let instancesList: string[] = []
  Object.keys(jsonData.stats_by_instance).forEach(function (key) {
    instancesList = [...instancesList, key]
  })
  let totalApproximatedCoverageKm = 0
  let totalNbPictures = 0
  let totalNbContrib = 0
  instancesList.map((e) => {
    totalApproximatedCoverageKm =
      totalApproximatedCoverageKm +
      jsonData.stats_by_instance[e].approximated_coverage_km
    totalNbPictures =
      totalNbPictures + jsonData.stats_by_instance[e].nb_pictures
    totalNbContrib =
      totalNbContrib + jsonData.stats_by_instance[e].nb_contributors
  })
  instancesList.map((e) => {
    dataCovKmInstancesPercentage.value = [
      ...dataCovKmInstancesPercentage.value,
      calcPercentageTwoNumber(
        totalApproximatedCoverageKm,
        jsonData.stats_by_instance[e].approximated_coverage_km
      )
    ]
    dataPicturesInstancesPercentage.value = [
      ...dataPicturesInstancesPercentage.value,
      calcPercentageTwoNumber(
        totalNbPictures,
        jsonData.stats_by_instance[e].nb_pictures
      )
    ]
    dataContribInstancesPercentage.value = [
      ...dataContribInstancesPercentage.value,
      calcPercentageTwoNumber(
        totalNbContrib,
        jsonData.stats_by_instance[e].nb_contributors
      )
    ]
    dataCovKmInstances.value = [
      ...dataCovKmInstances.value,
      jsonData.stats_by_instance[e].approximated_coverage_km
    ]
    dataPicturesInstances.value = [
      ...dataPicturesInstances.value,
      jsonData.stats_by_instance[e].nb_pictures
    ]
    dataContribInstances.value = [
      ...dataContribInstances.value,
      jsonData.stats_by_instance[e].nb_contributors
    ]
  })
  stats.value = [
    {
      number: formatNumber(jsonData.generic_stats.nb_pictures),
      text: t('pages.home.metrics_1.text'),
      description: t('pages.home.metrics_1.description')
    },
    {
      number: formatNumber(jsonData.generic_stats.collections_length_km),
      text: t('pages.home.metrics_2.text'),
      description: t('pages.home.metrics_2.description')
    },
    {
      number: jsonData.generic_stats.nb_contributors,
      text: t('pages.home.metrics_3.text'),
      description: t('pages.home.metrics_3.description')
    }
  ]
  const resultCalc = calculateMonthlySum(jsonData.stats_by_upload_month)
  dataLabels.value = resultCalc.months
  dataPictures.value = resultCalc.nb_pictures
  dataActiveContrib.value = resultCalc.nb_active_contributors
  dataCovKm.value = resultCalc.collections_length_km
  averagePictures.value = `${dataLabels.value.length + 1} ${t(
    'pages.stats.stats_month'
  )}`
  averageKm.value = `${dataLabels.value.length + 1} ${t(
    'pages.stats.stats_month'
  )}`
})
function calcPercentageTwoNumber(total: number, numberToCalc: number): number {
  return Math.round((numberToCalc / total) * 100)
}
function calculateMonthlySum(data: Record<string, any>): {
  months: string[]
  nb_pictures: number[]
  nb_active_contributors: number[]
  collections_length_km: number[]
  approximated_coverage_km: number[]
  nb_contributors: number[]
  pictures_original_size: number[]
} {
  const result: Record<string, number[]> = {}
  const months: string[] = []

  for (const month in data) {
    if (Object.prototype.hasOwnProperty.call(data, month)) {
      months.push(month)
      const monthData = data[month]

      for (const key in monthData) {
        if (Object.prototype.hasOwnProperty.call(monthData, key)) {
          const entry = monthData[key]

          for (const field in entry) {
            if (Object.prototype.hasOwnProperty.call(entry, field)) {
              if (!result[field]) {
                result[field] = []
              }
              const monthIndex = months.indexOf(month)

              if (!result[field][monthIndex]) {
                result[field][monthIndex] = 0
              }
              result[field][monthIndex] += entry[field]
            }
          }
        }
      }
    }
  }
  for (const field in result) {
    if (Object.prototype.hasOwnProperty.call(result, field)) {
      const values = []
      for (const value of result[field]) {
        values.push(value)
      }
      result[field] = values
    }
  }
  return {
    months,
    nb_pictures: result.nb_pictures,
    nb_active_contributors: result.nb_active_contributors,
    collections_length_km: result.collections_length_km,
    approximated_coverage_km: result.approximated_coverage_km,
    nb_contributors: result.nb_contributors,
    pictures_original_size: result.pictures_original_size
  }
}
</script>

<style scoped>
.section {
  padding: 3rem 15% 6rem;
}
.stats-section-title {
  font-family: SFPro-Bold;
  font-size: 2.8rem;
  color: var(--blue-dark);
  margin-bottom: 4rem;
}
.wrapper-stats {
  display: flex;
  justify-content: center;
  margin-top: 3rem;
}
.wrapper-charts {
  margin-top: 10rem;
}
.charts-subtitle {
  margin-bottom: 2rem;
}
.doughnut-subtitle {
  margin-bottom: 2rem;
  text-align: center;
}
.charts {
  display: flex;
  width: 100%;
}
.wrapper-bar-charts {
  width: 100%;
}
.wrapper-charts:nth-child(odd) .charts {
  flex-direction: row-reverse;
}
.wrapper-charts:nth-child(odd) .wrapper-stat-desc {
  margin-right: 2rem;
  margin-left: 0;
}
.wrapper-stat-desc {
  width: 40%;
  background-color: var(--blue-ligth);
  border-radius: 2rem;
  padding: 2rem;
  margin-left: 2rem;
}
.wrapper-charts-doughnut {
  display: flex;
  margin-top: 10rem;
}
.wrapper-doughnut-charts {
  width: 33%;
}
.stats-desc {
  white-space: pre-wrap;
}
@media (max-width: 1324px) {
  .section {
    padding: 3rem 10%;
  }
}
@media (max-width: 1024px) {
  .wrapper-stats {
    flex-direction: column;
  }
}
@media (max-width: 768px) {
  .section {
    padding: 2rem;
  }
  .wrapper-charts-doughnut {
    flex-direction: column;
  }
  .wrapper-doughnut-charts {
    width: 100%;
    margin-bottom: 2rem;
  }
  .charts,
  .wrapper-charts:nth-child(odd) .charts {
    flex-direction: column;
  }
  .wrapper-stat-desc {
    margin-left: 0;
    margin-right: 0;
    margin-top: 3rem;
    width: 100%;
  }
}
</style>
