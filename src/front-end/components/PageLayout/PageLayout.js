import React, { useState } from 'react'

import Sidebar from '../Sidebar'
import Page from '../Page'

const PageLayout = () => {
  const [state, setState] = useState({postId: ''})

  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar updateState={setState} />
        <Page postId={state.postId} />
      </div>
    </div>
  )
}

export default PageLayout
