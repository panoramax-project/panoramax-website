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
  dataCovKmInstancesPercentage.value = [
    calcPercentageTwoNumber(
      jsonData.stats_by_instance.ign.approximated_coverage_km,
      jsonData.stats_by_instance['osm-fr'].approximated_coverage_km,
      jsonData.stats_by_instance.ign.approximated_coverage_km
    ),
    calcPercentageTwoNumber(
      jsonData.stats_by_instance.ign.approximated_coverage_km,
      jsonData.stats_by_instance['osm-fr'].approximated_coverage_km,
      jsonData.stats_by_instance['osm-fr'].approximated_coverage_km
    )
  ]
  dataCovKmInstances.value = [
    jsonData.stats_by_instance.ign.approximated_coverage_km,
    jsonData.stats_by_instance['osm-fr'].approximated_coverage_km
  ]
  dataPicturesInstancesPercentage.value = [
    calcPercentageTwoNumber(
      jsonData.stats_by_instance.ign.nb_pictures,
      jsonData.stats_by_instance['osm-fr'].nb_pictures,
      jsonData.stats_by_instance.ign.nb_pictures
    ),
    calcPercentageTwoNumber(
      jsonData.stats_by_instance.ign.nb_pictures,
      jsonData.stats_by_instance['osm-fr'].nb_pictures,
      jsonData.stats_by_instance['osm-fr'].nb_pictures
    )
  ]
  dataPicturesInstances.value = [
    jsonData.stats_by_instance.ign.nb_pictures,
    jsonData.stats_by_instance['osm-fr'].nb_pictures
  ]
  dataContribInstancesPercentage.value = [
    calcPercentageTwoNumber(
      jsonData.stats_by_instance.ign.nb_contributors,
      jsonData.stats_by_instance['osm-fr'].nb_contributors,
      jsonData.stats_by_instance.ign.nb_contributors
    ),
    calcPercentageTwoNumber(
      jsonData.stats_by_instance.ign.nb_contributors,
      jsonData.stats_by_instance['osm-fr'].nb_contributors,
      jsonData.stats_by_instance['osm-fr'].nb_contributors
    )
  ]
  dataContribInstances.value = [
    jsonData.stats_by_instance.ign.nb_contributors,
    jsonData.stats_by_instance['osm-fr'].nb_contributors
  ]

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
  Object.keys(jsonData.stats_by_upload_month).forEach(function (key) {
    const approximated_coverage_km =
      jsonData.stats_by_upload_month[key].ign.approximated_coverage_km +
      jsonData.stats_by_upload_month[key]['osm-fr'].approximated_coverage_km
    const collections_length_km =
      jsonData.stats_by_upload_month[key].ign.collections_length_km +
      jsonData.stats_by_upload_month[key]['osm-fr'].collections_length_km
    const nb_active_contributors =
      jsonData.stats_by_upload_month[key].ign.nb_active_contributors +
      jsonData.stats_by_upload_month[key]['osm-fr'].nb_active_contributors
    const nb_contributors =
      jsonData.stats_by_upload_month[key].ign.nb_contributors +
      jsonData.stats_by_upload_month[key]['osm-fr'].nb_contributors
    const nb_pictures =
      jsonData.stats_by_upload_month[key].ign.nb_pictures +
      jsonData.stats_by_upload_month[key]['osm-fr'].nb_pictures
    const pictures_original_size =
      jsonData.stats_by_upload_month[key].ign.pictures_original_size +
      jsonData.stats_by_upload_month[key]['osm-fr'].pictures_original_size
    let obj = {
      [key]: {
        approximated_coverage_km,
        collections_length_km,
        nb_active_contributors,
        nb_contributors,
        nb_pictures,
        pictures_original_size
      }
    }

    dataLabels.value = [...dataLabels.value, key]
    dataPictures.value = [...dataPictures.value, obj[key].nb_pictures]
    dataActiveContrib.value = [
      ...dataActiveContrib.value,
      obj[key].nb_active_contributors
    ]
    dataCovKm.value = [...dataCovKm.value, obj[key].approximated_coverage_km]
  })
  averagePictures.value = `${dataLabels.value.length + 1} ${t(
    'pages.stats.stats_month'
  )}`
  averageKm.value = `${dataLabels.value.length + 1} ${t(
    'pages.stats.stats_month'
  )}`
})
function calcPercentageTwoNumber(
  numberOne: number,
  numberTwo: number,
  numberToCalc: number
) {
  const total = numberOne + numberTwo
  return Math.round((numberToCalc / total) * 100)
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
