import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Profile from './components/Profile'
import Register from './components/Register'

export default (
  <Switch>
    <Route component={Landing} exact path='/' />
    <Route component={Dashboard} path='/dash' />
    <Route component={Profile} path='/profile' />
    <Route component={Register} path='/register' />
  </Switch>
)