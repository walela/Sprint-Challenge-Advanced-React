import React, { useState, Component } from "react"
import axios from "axios"

import { DoughnutChart } from "./DoughnutChart"
import { useDarkMode } from "./useDarkMode"

const API = `http://localhost:5000/api/players`

function ToggleButton() {
  const [darkMode, setDarkMode] = useDarkMode("darkMode", false)

  let toggleDarkMode = e => {
    e.preventDefault()
    setDarkMode(!darkMode)
  }

  return (
    <button className="toggle" onClick={toggleDarkMode}>
      Toggle Dark Mode
    </button>
  )
}

class App extends Component {
  state = { labels: [], data: [], colors: [] } // thanks class fields or something

  componentDidMount() {
    axios.get(API).then(response => {
      this.setState(
        {
          labels: [...new Set(response.data.map(item => item.country))]
        },
        () => {
          this.setState({
            data: this.state.labels.map(label => {
              const totalSearches = response.data
                .filter(item => item.country === label)
                .reduce((acc, cv) => acc + cv.searches, 0)

              return totalSearches
            }),
            colors: this.state.labels.map(() => this.generateRandomColor())
          })
        }
      )
    })
  }
  componentDidUpdate() {}

  generateRandomColor = () => {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <ToggleButton />
        <div className="charts">
          <DoughnutChart
            labels={this.state.labels}
            data={this.state.data}
            colors={this.state.colors}
          />
        </div>
      </div>
    )
  }
}

export default App
