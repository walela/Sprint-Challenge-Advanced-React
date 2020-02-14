import React, { Component } from "react"
import axios from "axios"

const API = `http://localhost:5000/api/players`
class App extends Component {
  state = { players: [] } // thanks class fields or something

  componentDidMount() {
    axios
      .get(API)
      .then(res => {
        this.setState({ players: res.data })
        console.log(`Data fetch successful. State:`)
        console.log(this.state)
      })
      .catch(err => console.error(err))
  }
  render() {
    return (
      <div className="App">
        <h1>Heading</h1>
      </div>
    )
  }
}

export default App
