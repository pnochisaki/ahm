import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import '../css/all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Abundant Health Massage" />
    <Helmet>
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png?v=bOMmgJEWw7"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png?v=bOMmgJEWw7"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png?v=bOMmgJEWw7"/>
      <link rel="manifest" href="/icons/site.webmanifest?v=bOMmgJEWw7"/>
      <link rel="mask-icon" href="/icons/safari-pinned-tab.svg?v=bOMmgJEWw7" color="#333333"/>
      <link rel="shortcut icon" href="/icons/favicon.ico?v=bOMmgJEWw7"/>
      <meta name="msapplication-TileColor" content="#ffc40d" />
      <meta name="msapplication-config" content="/icons/browserconfig.xml?v=bOMmgJEWw7" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
