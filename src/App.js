import React from 'react'
import { AllLauches, Navi, AllShips, Rockets, Launchpads, Landpads, Crew, Company, HomePage } from './pages'
import { Footer} from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles.css'

const App = () => {

  return (
    <Router>
      <div className='gradientBG'>
      <Navi />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/all-launches">
          <AllLauches />
        </Route>
        <Route exact path="/ships">
          <AllShips />
        </Route>
        <Route exact path="/rockets">
          <Rockets />
        </Route>
        <Route exact path="/launchpads">
          <Launchpads />
        </Route>
        <Route exact path="/landpads">
          <Landpads />
        </Route>
        <Route exact path="/crew">
          <Crew />
        </Route>
        <Route exact path="/company-info">
          <Company />
        </Route>
      </Switch>
      <Footer />
      </div>
    </Router>
  )
}

export default App
