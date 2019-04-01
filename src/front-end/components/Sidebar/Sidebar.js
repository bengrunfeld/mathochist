import React from 'react'
import PropTypes from 'prop-types'

import { Bar, LinkItem } from './styles'

// const sendRequest = async(postId, updateState) =>
//   await fetch(`/api/posts/${postId}`) // eslint-disable-line no-undef  
//     .then(resp => resp.json()) 
//     .then(data => updateState({postId, data: JSON.parse(data)}))

const goUpdateState = (updateState, postId) => updateState(postId)

const Sidebar = ({updateState}) => (
  <Bar className='col-lg-2 d-none d-lg-block'>
    <div className='d-flex flex-column'>
      <div className='ml-1 mt-5'>
        <LinkItem exact to='/'>Home</LinkItem>
        <LinkItem onClick={goUpdateState.bind(this, updateState, {postId: 'about'})} to='/about'>About</LinkItem>
        <LinkItem onClick={goUpdateState.bind(this, updateState, {postId: 'projects'})} to='/projects'>Projects</LinkItem>
        <LinkItem onClick={goUpdateState.bind(this, updateState, {postId: 'react'})} to='/posts/react'>React</LinkItem>
        <LinkItem onClick={goUpdateState.bind(this, updateState, {postId: 'redux'})} to='/posts/redux'>Redux</LinkItem>
        <LinkItem onClick={goUpdateState.bind(this, updateState, {postId: 'immutable'})} to='/posts/immutable'>Immutable</LinkItem>
      </div>
    </div>
  </Bar>
)

Sidebar.propTypes = {
  updateState: PropTypes.func
}

export default Sidebar
