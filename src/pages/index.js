import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">

              <img src="/img/ahm-home.jpg" alt="images" />

              <div style={{textAlign: 'center', margin: '2rem 0'}}>
                <Link className="button" to="/book-appointment">Book an Appointment</Link>
              </div>

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

