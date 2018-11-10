import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ContactPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section>
      <h1>
        {title}
      </h1>
      <div className="container">
        <div className="col-50">
          <PageContent className="content" content={content} />
        </div>
        <div className="col-50">
        <h2>Contact</h2>
        <p>Please use the form below to send a message</p>

        <form action="https://formspree.io/mwbyngvx" method="POST"><input style={{display: 'none'}} name="_gotcha" type="text" /><input name="your-name" required size={40} type="text" placeholder="Your name here" aria-required="true" aria-invalid="false" /><p />
            <p><input name="your-email" required size={40} type="email" placeholder="Your email address here" aria-required="true" aria-invalid="false" /></p>
            <p><textarea cols={40} name="your-message" rows={10} placeholder="Your message here" aria-invalid="false" defaultValue={""} /></p>
            <p><input type="hidden" name="_next" defaultValue="https://www.abundanthealthmassage.com/thanks" /></p>
            <p><button type="submit">Send</button></p>
          </form>        
        </div>        
      </div>
    </section>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ContactPage

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
