import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Showdown from 'showdown'
const showdown = new Showdown.Converter();

export const ResourcesPageTemplate = ({ title, left, right, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="container">
      <div className="col-50">{left}</div>
      <div className="col-50">{right}</div>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

ResourcesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ResourcesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResourcesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        left={post.frontmatter.left}
        right={post.frontmatter.right}
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
        left
        right
      }
    }
  }
`
