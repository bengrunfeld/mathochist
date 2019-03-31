import React from 'react'

import Sidebar from '../Sidebar'
import Post from '../Post'

const MainContent = () => (
  <div className='container-fluid'>
    <div className='row'>
      <Sidebar />
      <Post />
    </div>
  </div>
)


export default MainContent
