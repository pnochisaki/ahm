import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Showdown from 'showdown'
const showdown = new Showdown.Converter();


export const AboutPageTemplate = ({ title, left, right, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="container">
        <div className='col-50'
                dangerouslySetInnerHTML={{__html: showdown.makeHtml(left)}}
        />
        <div className='col-50'
          dangerouslySetInnerHTML={{__html: showdown.makeHtml(right)}}
        />      
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        left={post.frontmatter.left}
        right={post.frontmatter.right}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
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
