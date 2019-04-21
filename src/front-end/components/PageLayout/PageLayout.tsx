import React from 'react'

import Sidebar from '../Sidebar'
import Page from '../Page'

const PageLayout = () => (
  <div className='container-fluid'>
    <div className='row'>
      <Sidebar />
      <Page />
    </div>
  </div>
)

export default PageLayout
