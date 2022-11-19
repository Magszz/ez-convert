import React from 'react'

// Styles
import './App.css'

// Components
import { Navigation, PDF, WORD } from './components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/convert/pdf-word" />
          </Route>
          <Route path="/convert/pdf-word" component={PDF} />
          <Route path="/convert/word-pdf" component={WORD} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
