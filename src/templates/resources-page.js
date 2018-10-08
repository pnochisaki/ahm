import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ResourcesPageTemplate = ({ title, content, contentComponent }) => {
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

ResourcesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ResourcesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResourcesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ResourcesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResourcesPage

export const ResourcesPageQuery = graphql`
  query ResourcesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
