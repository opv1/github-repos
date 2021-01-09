import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Navbar } from './components/Navbar'
import { Alert } from './components/Alert'
import { GithubState } from './context/github/GithubState'
import { AlertState } from './context/alert/AlertState'

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className='container pt-4'>
            <Alert />
            <Switch>
              <Route path='/github-vm-react/' exact component={Home} />
              <Route path='/github-vm-react/about' component={About} />
              <Route
                path='/github-vm-react/profile/:name'
                component={Profile}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App
