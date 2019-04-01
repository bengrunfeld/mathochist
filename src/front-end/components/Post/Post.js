import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import './styles.css'


const sendRequest = async(postId, updateState) => 
  await fetch(`/api/posts/${postId}`) // eslint-disable-line no-undef  
    .then(resp => resp.json())
    .then(data => updateState(data))

const Post = ({postId}) => {
  const [state, setState] = useState('')

  // The function in useState only fires on the initial render.
  useEffect(() => {
    sendRequest(postId, setState)
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
