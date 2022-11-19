import React from 'react'

// Styles
import './App.css'

// Components
import { Navigation, PDF, WORD } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={PDF} />
          <Route path="/convert/word-pdf" component={WORD} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
