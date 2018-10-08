import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">

              <iframe src="https://app.acuityscheduling.com/schedule.php?owner=11983703" width="100%" height="800" frameborder="0"></iframe>

            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

