import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import Home from './components/Home'
import Room from './components/Room'
import NewPost from './components/NewPost'

render(
  <Router history ={browserHistory}>
    <Route path ='/' component ={Layout}>
      <IndexRoute component={Home}/>
      {/* <Route path='/room/:id' component={Room}/> */}
      <Route path='/new' component={NewPost}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
