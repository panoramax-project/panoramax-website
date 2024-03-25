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
        <div class="charts-line">
          <LineChart
            :labels="dataLabels"
            :datasets="[{ data: dataPictures }]"
          />
          <div class="wrapper-stat-desc">
            <StatsBlockDescription
              v-if="stats"
              :number="averagePictures"
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
        <div class="charts-line">
          <LineChart :labels="dataLabels" :datasets="[{ data: dataCovKm }]" />
          <div class="wrapper-stat-desc">
            <StatsBlockDescription
              v-if="stats"
              :number="averageKm"
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
        <BarChart v-bind="barChartProps" />
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
                data: dataPicturesInstances,
                backgroundColor: ['#71777A', '#76CC6C']
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
                label: 'Nombre de km couverts par instance',
                data: dataCovKmInstances,
                backgroundColor: ['#71777A', '#76CC6C']
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
                label: 'Nombre de contributeurs par instance',
                data: dataContribInstances,
                backgroundColor: ['#71777A', '#76CC6C']
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
import { formatMillions } from '@/utils'
import { BarChart, useBarChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'
import type { ChartData } from '@/interfaces/index'
Chart.register(...registerables)
import Metrics from '@/components/Metrics.vue'
import LineChart from '@/components/LineChart.vue'
import DoughnutChart from '@/components/DoughnutChart.vue'
import StatsBlockDescription from '@/components/StatsBlockDescription.vue'

let stats = ref<MetricsData[]>()
const dataCovKm = ref<number[]>([])
const dataPictures = ref<number[]>([])
const dataCovKmInstances = ref<number[]>([])
const dataPicturesInstances = ref<number[]>([])
const dataContribInstances = ref<number[]>([])
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
const activeContribData = computed<ChartData>(() => ({
  labels: dataLabels.value,
  datasets: [
    {
      data: dataActiveContrib.value,
      backgroundColor: ['#0A1F69'],
      borderRadius: 5
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
  dataCovKmInstances.value = [
    jsonData.stats_by_instance.ign.approximated_coverage_km,
    jsonData.stats_by_instance['osm-fr'].approximated_coverage_km
  ]
  dataPicturesInstances.value = [
    jsonData.stats_by_instance.ign.nb_pictures,
    jsonData.stats_by_instance['osm-fr'].nb_pictures
  ]
  dataContribInstances.value = [
    jsonData.stats_by_instance.ign.nb_contributors,
    jsonData.stats_by_instance['osm-fr'].nb_contributors
  ]
  stats.value = [
    {
      number: formatMillions(jsonData.generic_stats.nb_pictures),
      text: t('pages.home.metrics_1.text'),
      description: t('pages.home.metrics_1.description')
    },
    {
      number: jsonData.generic_stats.collections_length_km.toString(),
      text: t('pages.home.metrics_2.text'),
      description: t('pages.home.metrics_2.description')
    },
    {
      number: jsonData.generic_stats.nb_contributors.toString(),
      text: t('pages.home.metrics_3.text'),
      description: t('pages.home.metrics_3.description')
    }
  ]
  let percentagePictures: number[] = []
  let percentageKm: number[] = []
  Object.keys(jsonData.stats_by_upload_month).forEach(function (key, index) {
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
    if (index === 0) return
    percentagePictures.push(calcAverage(dataPictures.value, nb_pictures, index))
    percentageKm.push(
      calcAverage(dataCovKm.value, collections_length_km, index)
    )
  })
  averagePictures.value = `+${calcPercentage(percentagePictures)}%`
  averageKm.value = `+${calcPercentage(percentageKm)}%`
})
function calcAverage(nbArray: number[], nb: number, index: number): number {
  const prevValPictures = nbArray[index - 1]
  return Math.round(((nb - prevValPictures) / prevValPictures) * 100)
}
function calcPercentage(percentage: number[]): number {
  const totalPercent = percentage.reduce((partialSum, a) => partialSum + a, 0)
  return Math.round(totalPercent / percentage.length)
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
.charts-line {
  display: flex;
  width: 100%;
}
.wrapper-charts:nth-child(odd) .charts-line {
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
  .charts-line,
  .wrapper-charts:nth-child(odd) .charts-line {
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
