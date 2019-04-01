import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Post from '../Post'
import About from '../About'
import HomePage from '../HomePage'
import Projects from '../Projects'
import NotFound404 from '../NotFound404'


const Page = () => (
  <section className='col-11 col-lg-9 offset-lg-1 pt-5 mb-5'>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/page/about' component={About} />
      <Route path='/page/projects' component={Projects} />
      <Route exact path='/post/react' render={() => <Post postId='react' />} />
      <Route exact path='/post/redux' render={() => <Post postId='redux' />} />
      <Route exact path='/post/immutable' render={() => <Post postId='immutable' />} />
      <Route component={NotFound404} />
    </Switch>
  </section>
)


export default Page

// How to pass props
// <Route path="/posts" render={() => <Post title='hi' />}/>