import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import Home from './component/Home'

function App () {
  return (
        <Router>
            <Switch>
                <Home/>
            </Switch>
        </Router>

  )
}

export default App
