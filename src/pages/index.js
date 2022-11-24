import * as React from 'react'
import Pokedex from '../components/Pokedex'

const IndexPage = () => {
  return (
    <div className="App">
      <Pokedex />
    </div>
  )
}

export const Head = () => <title>Pokedex App</title>

export default IndexPage