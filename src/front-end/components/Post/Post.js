import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { PostText } from './styles'
// import './postStyles.css'


const sendRequest = async(postId, updateState) => 
  await fetch(`/api/posts/${postId}`) // eslint-disable-line no-undef  
    .then(resp => resp.json())
    .then(data => updateState(data))
    // .then(data => console.log(data))

const Post = ({postId}) => {
  const [state, setState] = useState('')

  // The function in useState only fires on the initial render.
  useEffect(() => {
    sendRequest(postId, setState)
  }, [postId])

  return (
    <div className='post col-lg-10'>
      <PostText dangerouslySetInnerHTML={{__html: state}}></PostText>
    </div>
  )
}

Post.propTypes = {
  postId: PropTypes.string
}

export default Post
