import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BookingPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="container">
        <PageContent className="content" content={content} />
        <iframe title="booking" src="https://app.acuityscheduling.com/schedule.php?owner=11983703" width="100%" height="800" frameBorder="0"></iframe>
      </div>
    </section>
  )
}

BookingPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const BookingPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BookingPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

BookingPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BookingPage

export const bookingPageQuery = graphql`
  query BookingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
