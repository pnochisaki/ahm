import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AutoInjuryPageTemplate = ({ title, content, contentComponent }) => {
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

AutoInjuryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AutoInjuryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AutoInjuryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AutoInjuryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AutoInjuryPage

export const AutoInjuryPageQuery = graphql`
  query AutoInjuryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
