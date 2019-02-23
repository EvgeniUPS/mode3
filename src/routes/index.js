import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import About from '../pages/About'
import InfoPost from '../pages/InfoPost'
import Header  from '../components/organisms/Header'
import { Footer } from '../components/organisms/Footer'

export default () => (
  <>
  <Header/>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/info" component={InfoPost} />
  </Switch>
  <Footer />
  </>
)
