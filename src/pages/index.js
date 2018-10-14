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

              <div className="homeshow clear">
                <div className="image1">
                  <img src="/img/home/1a.jpg" alt=""/>
                </div>
                <div className="image2">
                  <img src="/img/home/2a.jpg" alt=""/>
                </div>
                <div className="image3">
                  <img src="/img/home/3a.jpg" alt=""/>
                </div>
              </div>


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

