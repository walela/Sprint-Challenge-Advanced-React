import React from "react"
import { Doughnut } from "react-chartjs-2"
import { useLocalStorage } from "./useLocalStorage"

const DoughnutChart = props => {
  console.log(props)
  const [config] = useLocalStorage("config", props)
  const { labels, data, colors } = config

  const chartData = {
    labels: props.labels,
    datasets: [
      {
        borderWidth: "2.5",
        borderColor: "black",
        data: props.data,
        backgroundColor: props.colors
      }
    ]
  }

  const options = {
    legend: {
      position: "left"
    }
  }

  return <Doughnut data={chartData} options={options} />
}

export { DoughnutChart }
