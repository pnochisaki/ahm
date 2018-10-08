import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../css/all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Abundant Health Massage" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
