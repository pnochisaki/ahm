import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Showdown from 'showdown'

const showdown = new Showdown.Converter();

export const ServicesPageTemplate = ({ title, services, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="container">
        {/*<PageContent className="content" content={services} />*/}
        {services.map((service, index) => (
          <div className='col-50'
            key={index}
            dangerouslySetInnerHTML={{__html: showdown.makeHtml(service.service)}}
          />
        ))}
      </div>
    </section>
  )
}

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  // content: PropTypes.string,
  services: PropTypes.array,
  contentComponent: PropTypes.func,
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        services={post.frontmatter.services}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        services {
          service
        }
      }
    }
  }
`
