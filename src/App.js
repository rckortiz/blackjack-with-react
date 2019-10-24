import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import CreateDeck from './components/CreateDeck'

class App extends Component {
  render() {
    return (
      <main>
        <HelloWorld />
        <CreateDeck />
      </main>
    )
  }
}

export default App
