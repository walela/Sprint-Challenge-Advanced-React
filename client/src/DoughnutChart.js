import React from "react"
import { Doughnut } from "react-chartjs-2"

const DoughnutChart = props => {
  const data = {
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

  return <Doughnut data={data} options={options} />
}

export { DoughnutChart }
