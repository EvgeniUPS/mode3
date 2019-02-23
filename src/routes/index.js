import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../components/App'
import { Header } from '../components/organisms/Header'

export default () => (
  <>
  <Header/>
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={() => <h1>About</h1>} />
  </Switch>
  </>
)
