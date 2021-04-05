import React from 'react'
import { AllLauches, Navi } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles.css'

const App = () => {

  return (
    <Router>
      <div className='gradientBG'>
      <Navi />
      <Switch>
        <Route exact path="/all-launches">
          <AllLauches />
        </Route>
        <Route exact path="/rockets">
          <h2>All Rockets</h2>
        </Route>
      </Switch>
      </div>
    </Router>
  )
}

export default App
