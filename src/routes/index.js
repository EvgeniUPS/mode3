import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import { Header } from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'

export default () => (
  <>
  <Header/>
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
  </Switch>
  <Footer />
  </>
)
