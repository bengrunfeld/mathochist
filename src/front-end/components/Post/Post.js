import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import getPostContent from '../../services/getPostContent'

import './styles.css'


const Post = ({postId}) => {
  const [state, setState] = useState('')

  // The function in useState only fires on the initial render.
  useEffect(() => {

    // Anon func that runs immediately
    (async() => 
      setState(await getPostContent(postId, setState)))()

  }, [postId])

  return (
    <div className='post col-lg-10'>
      <ReactMarkdown source={state} />
    </div>
  )
}

Post.propTypes = {
  postId: PropTypes.string
}

export default Post
