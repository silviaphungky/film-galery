import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './pages/home'
import { FilterProvider } from 'context/filter-provider'

function App() {
  return (
    <FilterProvider>
      <Router>
        <Switch>
          <Route 
            exact
            path='/'
            component={ HomePage }
          />
        </Switch>
      </Router>
    </FilterProvider>
  )
}

export default App
