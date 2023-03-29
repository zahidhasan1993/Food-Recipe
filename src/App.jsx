import { useState } from 'react'

import './App.css'
import Header from './Component/Header/Header'
import Recipes from './Component/Recipes/Recipes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Recipes></Recipes>
    </div>
  )
}

export default App
