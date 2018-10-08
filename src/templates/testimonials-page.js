import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const TestimonialsPageTemplate = ({ title, content, contentComponent }) => {
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

TestimonialsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TestimonialsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TestimonialsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

TestimonialsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestimonialsPage

export const TestimonialsPageQuery = graphql`
  query TestimonialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
