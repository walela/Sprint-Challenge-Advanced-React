import React, { Component } from "react"
import axios from "axios"
import uuid from "uuid"

import { DoughnutChart } from "./DoughnutChart"

const API = `http://localhost:5000/api/players`

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

  generateRandomColor = () => {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
  }
  handleClick = e => {
    const country = e.target.innerText
    const players = this.state.players.filter(
      player => player.country === country
    )
    this.setState({
      labels: [players.map(player => player.name)],
      data: [players.map(player => player.searches)],
      colors: this.state.labels.map(() => this.generateRandomColor())
    })
  }

  render() {
    console.log(this.state.data)
    console.log(this.state.labels)
    return (
      <div className="App">
        <h1>Women's World Cup</h1>
        <div className="charts">
          <DoughnutChart
            data={this.state.data}
            labels={this.state.labels}
            colors={this.state.colors}
          />
        </div>
      </div>
    )
  }
}

export default App
