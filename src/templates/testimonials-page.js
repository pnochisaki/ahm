import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import Showdown from 'showdown'
const showdown = new Showdown.Converter();

export const TestimonialsPageTemplate = ({ title, testimonials, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="container">
        <PageContent className="content" content={content} />
        <div>
        {testimonials.map((testimonial, index) => (
          <div className="col-50">
            <div>{ testimonial.title }</div>
            <div key={index} dangerouslySetInnerHTML={{__html: showdown.makeHtml(testimonial.testimonial)}} /> 
          </div>
        ))}
        </div>
      </div>    
    </section>
  )
}

TestimonialsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  testimonials: PropTypes.string,
  contentComponent: PropTypes.func,
}

const TestimonialsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <TestimonialsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        testimonials={post.frontmatter.testimonials}
      />
    </Layout>
  )
}

TestimonialsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TestimonialsPage

export const testimonialsPageQuery = graphql`
  query TestimonialsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        testimonials {
          testimonial {
            quote
            author  
          }
        }
      }
    }
  }
`
