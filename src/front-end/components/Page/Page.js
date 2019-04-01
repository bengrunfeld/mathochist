import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Post from '../Post'


const Page = ({postId}) => (
  <section className='col-11 col-lg-9 offset-lg-1 pt-5 mb-5'>
    <Route exact path={`/posts/${postId}`} render={() => <Post postId={postId} />} />
    {/* <Route path='/about' component={About} /> */}
    {/* <Route path='/project' component={Project} /> */}
  </section>
)

Page.propTypes = { postId: PropTypes.string }

export default Page

// How to pass props
// <Route path="/posts" render={() => <Post title='hi' />}/>