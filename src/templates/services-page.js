import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServicesPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="container">
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

ServicesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ServicesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ServicesPage

export const ServicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
