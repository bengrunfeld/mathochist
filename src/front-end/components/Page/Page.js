import React from 'react'
import { Route } from 'react-router-dom'
import Post from '../Post'
import About from '../About'


const Page = () => (
  <section className='col-11 col-lg-9 offset-lg-1 pt-5 mb-5'>
    <Route exact path='/page/about' component={About} />
    <Route exact path='/post/react' render={() => <Post postId='react' />} />
    <Route exact path='/post/redux' render={() => <Post postId='redux' />} />
    <Route exact path='/post/immutable' render={() => <Post postId='immutable' />} />
    {/* <Route path='/project' component={Project} /> */}
  </section>
)


export default Page

// How to pass props
// <Route path="/posts" render={() => <Post title='hi' />}/>