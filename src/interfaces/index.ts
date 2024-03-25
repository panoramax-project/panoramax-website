export interface Image {
  url: string
  alt: string
  link?: string
}

export interface ChartData {
  labels: string[]
  datasets: [
    {
      label?: string
      data: number[]
      backgroundColor: string[]
      borderRadius?: number
    }
  ]
}
